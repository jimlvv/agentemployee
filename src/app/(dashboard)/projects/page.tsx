'use client';

import { Card } from '@astryxdesign/core/Card';
import { Grid } from '@astryxdesign/core/Grid';
import { Text, Heading } from '@astryxdesign/core/Text';
import { Button } from '@astryxdesign/core/Button';
import { Badge } from '@astryxdesign/core/Badge';
import { Icon } from '@astryxdesign/core/Icon';
import {
  VStack,
  HStack,
  Layout,
  LayoutContent,
} from '@astryxdesign/core/Layout';

import {
  FolderPlusIcon,
  FolderIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

export default function ProjectsPage() {
  return (
    <Layout
      height="auto"
      content={
        <LayoutContent>
          <VStack gap={8}>
            {/* Header */}
            <HStack hAlign="between" vAlign="center">
              <VStack gap={1}>
                <Heading level={2}>Projects</Heading>
                <Text color="secondary">
                  Each project gets its own vault and agent workspace.
                </Text>
              </VStack>
              <Button
                label="New Project"
                variant="primary"
                size="md"
                icon={<Icon icon={FolderPlusIcon} size="sm" />}
              />
            </HStack>

            {/* Empty state */}
            <Card padding={8}>
              <VStack gap={4} hAlign="center" className="py-12">
                <FolderIcon className="h-12 w-12 text-[var(--color-text-tertiary)]" />
                <VStack gap={1} hAlign="center" className="text-center">
                  <Heading level={3}>No projects yet</Heading>
                  <Text color="secondary" style={{maxWidth:"400px"}}>
                    Create your first project to give your AI agent a dedicated
                    workspace with its own memory vault.
                  </Text>
                </VStack>
                <Button
                  label="Create Your First Project"
                  variant="primary"
                  size="lg"
                  icon={<SparklesIcon className="h-4 w-4" />}
                />
              </VStack>
            </Card>
          </VStack>
        </LayoutContent>
      }
    />
  );
}
