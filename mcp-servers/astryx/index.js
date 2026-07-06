#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { execSync } from "child_process";

const CLI_PATH = new URL(
  "../../node_modules/@astryxdesign/cli/bin/astryx.mjs",
  import.meta.url
).pathname;

const server = new Server(
  {
    name: "astryx",
    version: "0.1.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

function runAstryx(args) {
  const cmd = `${process.execPath} ${CLI_PATH} ${args.join(" ")} --json`;
  try {
    const output = execSync(cmd, {
      encoding: "utf-8",
      cwd: new URL("../../", import.meta.url).pathname,
      timeout: 15000,
    });
    return JSON.parse(output);
  } catch (err) {
    if (err.stdout) {
      try {
        return JSON.parse(err.stdout);
      } catch (_) {}
    }
    return { error: err.message, code: "ERR_UNKNOWN" };
  }
}

function formatResult(data) {
  return {
    content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
  };
}

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "astryx_search",
      description:
        "Search Astryx components, hooks, docs, and templates in one ranked result set. Use when you don't know which component or template you need.",
      inputSchema: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: "Search query (e.g. 'button', 'form', 'modal', 'table')",
          },
          type: {
            type: "string",
            enum: ["component", "hook", "template", "docs"],
            description: "Optional: restrict to a single domain",
          },
          limit: {
            type: "number",
            default: 20,
            description: "Max results (default 20)",
          },
          detail: {
            type: "boolean",
            default: false,
            description: "Include import path and match score",
          },
        },
        required: ["query"],
      },
    },
    {
      name: "astryx_component",
      description:
        "Get full documentation for an Astryx component: props, types, usage, best practices, import path.",
      inputSchema: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "Component name (e.g. Button, Dialog, Table, SideNav)",
          },
        },
        required: ["name"],
      },
    },
    {
      name: "astryx_template",
      description:
        "Get a full page or block template. Use for dashboards, settings pages, forms, detail pages, etc.",
      inputSchema: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description:
              "Template name. Use --list to browse available templates, or provide a specific name (e.g. dashboard, settings, billing, not-found).",
          },
          skeleton: {
            type: "boolean",
            default: false,
            description: "Output layout skeleton with spatial annotations instead of full page source",
          },
        },
      },
    },
    {
      name: "astryx_docs",
      description:
        "Print Astryx reference documentation. Topics: tokens, theme, color, typography, spacing, migration, principles, theming.",
      inputSchema: {
        type: "object",
        properties: {
          topic: {
            type: "string",
            description:
              "Documentation topic (e.g. tokens, theme, color, typography, spacing, migration, principles, theming). Omit for full reference index.",
          },
          section: {
            type: "string",
            description: "Optional sub-section within the topic",
          },
        },
      },
    },
    {
      name: "astryx_hook",
      description:
        "List Astryx hooks or get documentation for a specific hook.",
      inputSchema: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description:
              "Hook name. Omit to list all available hooks.",
          },
        },
      },
    },
    {
      name: "astryx_list_components",
      description:
        "List all available Astryx components with brief descriptions.",
      inputSchema: {
        type: "object",
        properties: {
          detail: {
            type: "boolean",
            default: false,
            description: "Show full component details including categories",
          },
        },
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case "astryx_search": {
      let cliArgs = ["search", `'${args.query}'`];
      if (args.type) cliArgs.push("--type", args.type);
      if (args.limit) cliArgs.push("--limit", String(args.limit));
      if (args.detail) cliArgs.push("--detail");
      const result = runAstryx(cliArgs);
      return formatResult(result);
    }

    case "astryx_component": {
      const result = runAstryx(["component", args.name]);
      return formatResult(result);
    }

    case "astryx_template": {
      let cliArgs = ["template"];
      if (args.name === "--list" || !args.name) {
        cliArgs.push("--list");
      } else {
        cliArgs.push(args.name);
        if (args.skeleton) cliArgs.push("--skeleton");
      }
      const result = runAstryx(cliArgs);
      return formatResult(result);
    }

    case "astryx_docs": {
      let cliArgs = ["docs"];
      if (args.topic) cliArgs.push(args.topic);
      if (args.section) cliArgs.push(args.section);
      const result = runAstryx(cliArgs);
      return formatResult(result);
    }

    case "astryx_hook": {
      let cliArgs = ["hook"];
      if (args.name) cliArgs.push(args.name);
      const result = runAstryx(cliArgs);
      return formatResult(result);
    }

    case "astryx_list_components": {
      let cliArgs = ["component", "--list"];
      if (args.detail) cliArgs.push("--detail");
      const result = runAstryx(cliArgs);
      return formatResult(result);
    }

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Astryx MCP server running on stdio");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
