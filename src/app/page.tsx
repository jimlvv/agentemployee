'use client';

import { Button } from '@astryxdesign/core/Button';
import { Card } from '@astryxdesign/core/Card';
import { Grid } from '@astryxdesign/core/Grid';
import { Text, Heading } from '@astryxdesign/core/Text';
import { Badge } from '@astryxdesign/core/Badge';
import { TextInput } from '@astryxdesign/core/TextInput';
import { Divider } from '@astryxdesign/core/Divider';
import { Link } from '@astryxdesign/core/Link';
import { Icon } from '@astryxdesign/core/Icon';
import { Banner } from '@astryxdesign/core/Banner';
import {
  VStack,
  HStack,
  Layout,
  LayoutContent,
} from '@astryxdesign/core/Layout';

import {
  SparklesIcon,
  ShieldCheckIcon,
  CubeIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  CheckIcon,
  XMarkIcon,
  ChevronDownIcon,
  ArrowRightIcon,
  Bars3Icon,
  XCircleIcon,
  CloudIcon,
  UserGroupIcon,
  BanknotesIcon,
  BoltIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

// ─────────────────────── Types ───────────────────────

interface FAQItem {
  q: string;
  a: string;
}

interface Plan {
  name: string;
  price: string;
  badge: string;
  popular: boolean;
  features: string[];
  cta: string;
}

// ─────────────────────── Data ───────────────────────

const features = [
  {
    icon: SparklesIcon,
    title: 'Always-On AI Employee',
    desc: 'Proactive agents that work 24/7 via heartbeat — no prompt needed. They check in, report, and execute autonomously.',
  },
  {
    icon: CubeIcon,
    title: 'Project Isolation',
    desc: 'Each project gets its own vault. Clean separation, no context bleed, independent memory per workspace.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Human-in-the-Loop',
    desc: 'All write actions require your approval. Full audit trail so you never lose control.',
  },
  {
    icon: ClockIcon,
    title: 'Long-Term Memory',
    desc: 'Obsidian-style vault persists everything — decisions, learnings, context. Your AI employee remembers what you forgot.',
  },
  {
    icon: CloudIcon,
    title: 'Tool Ecosystem',
    desc: 'Connect email, Drive, GitHub, Slack, Shopify. Agents use your tools through the MCP protocol.',
  },
  {
    icon: UserGroupIcon,
    title: 'Multi-Role Team',
    desc: 'CEO, CFO, CMO, COO, CTO — each with a specialized personality and focus. Scale from 1 to 5 agents.',
  },
];

const comparisonRows = [
  {
    feature: 'Always-on AI Employee',
    ae: true,
    chatgpt: false,
    zapier: false,
    va: false,
  },
  {
    feature: 'Long-term Memory',
    ae: true,
    chatgpt: false,
    zapier: false,
    va: 'partial',
  },
  {
    feature: 'Task Execution',
    ae: true,
    chatgpt: false,
    zapier: true,
    va: true,
  },
  {
    feature: 'Per-Project Isolation',
    ae: true,
    chatgpt: false,
    zapier: true,
    va: 'partial',
  },
  {
    feature: 'Setup Time',
    ae: '<10 min',
    chatgpt: '<1 min',
    zapier: 'Hours-days',
    va: 'Days-weeks',
  },
  {
    feature: 'Cost',
    ae: '$39/mo',
    chatgpt: '$20-200/mo',
    zapier: '$30-600/mo',
    va: '$500-3,000/mo',
  },
];

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '$39',
    badge: '1 agent',
    popular: false,
    features: [
      '1 AI agent (CEO)',
      'Obsidian vault memory',
      '14-day free trial',
      'Heartbeat scheduling',
      'Email + Drive connectors',
      'Human-in-the-loop approvals',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Growth',
    price: '$99',
    badge: 'up to 3 agents',
    popular: true,
    features: [
      'Up to 3 AI agents',
      'Obsidian vault per agent',
      '14-day free trial',
      'Priority support',
      'All connectors',
      'Custom heartbeat schedules',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Scale',
    price: '$299',
    badge: 'up to 5 agents',
    popular: false,
    features: [
      'Up to 5 AI agents',
      'Full C-suite team',
      '14-day free trial',
      'Dedicated support',
      'Custom tool integrations',
      'Advanced model routing',
    ],
    cta: 'Start Free Trial',
  },
];

const faqs: FAQItem[] = [
  {
    q: 'How is AgentEmployee different from ChatGPT?',
    a: 'ChatGPT is reactive — you type, it responds. AgentEmployee is proactive — your agent checks in daily via heartbeat, remembers everything in its vault, and executes real tasks with your tools. It\'s an employee, not a chatbot.',
  },
  {
    q: 'Can I use my own tools?',
    a: 'Yes. We connect through MCP (Model Context Protocol), an open standard. We ship with Google Drive and Shopify connectors at launch, and you can add custom integrations through the MCP protocol.',
  },
  {
    q: 'What about data privacy?',
    a: 'Every tenant gets an isolated vault — your data, your memory, your agents. We never train on your data. Human-in-the-loop means nothing gets executed without your approval.',
  },
  {
    q: 'How does memory work?',
    a: 'Your agent maintains an Obsidian-style markdown vault as its long-term memory. Every decision, task result, and lesson learned gets written to a structured file. It\'s like having perfectly organized meeting notes that your agent actually reads.',
  },
  {
    q: 'Can I upgrade or downgrade plans?',
    a: 'Yes. You can switch plans anytime. Upgrades unlock immediately; downgrades apply at the next billing cycle. All your agents, vaults, and settings are preserved.',
  },
  {
    q: 'What happens after my trial?',
    a: 'You get 14 days to explore with a full CEO agent. After the trial, you\'ll need to enter payment to continue. All your data and agent state are preserved — nothing is lost.',
  },
];

// ─────────────────────── Components ───────────────────────

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg-primary)]/80 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <HStack gap={3} vAlign="center">
          <RocketLaunchIcon className="h-5 w-5 text-[var(--color-brand-primary)]" />
          <Text weight="semibold" size="lg">
            AgentEmployee
          </Text>
        </HStack>
        <HStack gap={2} vAlign="center">
          <Button
            label="Sign In"
            variant="ghost"
            size="sm"
            onClick={() => (window.location.href = '/login')}
          />
          <Button
            label="Start Free Trial"
            variant="primary"
            size="sm"
            onClick={() => {
              document
                .getElementById('pricing')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </HStack>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20 text-center">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-brand-primary)_0%,_transparent_60%)] opacity-[0.08]" />

      <VStack gap={6} hAlign="center" className="mx-auto" style={{maxWidth:"800px"}}>
        <Badge variant="blue" label="The first AI employee that actually works for you" />

        <Heading level={1}>
          Your First{' '}
          <span className="text-[var(--color-brand-primary)]">
            AI Employee
          </span>
        </Heading>

        <Text size="lg" color="secondary" style={{maxWidth:"600px"}}>
          Hire AI agents — CEO, CFO, CMO, COO, CTO — that work proactively,
          remember everything, and execute with your tools. No prompting.
          No babysitting.
        </Text>

        <HStack gap={3} vAlign="center" wrap="wrap" hAlign="center">
          <Button
            label="Start Free Trial — No Credit Card"
            variant="primary"
            size="lg"
            icon={<Icon icon={ArrowRightIcon} size="sm" />}
            onClick={() => {
              document
                .getElementById('pricing')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
          <Button
            label="See How It Works"
            variant="secondary"
            size="lg"
            onClick={() => {
              document
                .getElementById('features')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </HStack>

        {/* Trust markers */}
        <HStack gap={6} wrap="wrap" hAlign="center" className="pt-4">
          {['No credit card required', '14-day free trial', 'Cancel anytime'].map(
            (text) => (
              <HStack key={text} gap={2} vAlign="center">
                <CheckIcon className="h-4 w-4 text-[var(--color-success-icon)]" />
                <Text type="supporting" color="secondary">
                  {text}
                </Text>
              </HStack>
            ),
          )}
        </HStack>
      </VStack>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section
      id="features"
      className="border-t border-[var(--color-border)] px-6 py-20"
    >
      <VStack gap={10} className="mx-auto max-w-7xl">
        <VStack gap={3} hAlign="center" className="text-center">
          <Heading level={2}>Everything you need to run your business</Heading>
          <Text size="lg" color="secondary" style={{maxWidth:"600px"}}>
            One AI employee replaces entire toolchains. Proactive, persistent,
            and always learning.
          </Text>
        </VStack>

        <Grid columns={{ minWidth: 320, repeat: 'fit' }} gap={4}>
          {features.map((f) => (
            <Card key={f.title} padding={5}>
              <VStack gap={3}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-bg-secondary)]">
                  <f.icon className="h-5 w-5 text-[var(--color-brand-primary)]" />
                </div>
                <Heading level={4}>{f.title}</Heading>
                <Text type="body" color="secondary">
                  {f.desc}
                </Text>
              </VStack>
            </Card>
          ))}
        </Grid>
      </VStack>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="border-t border-[var(--color-border)] px-6 py-20">
      <VStack gap={8} className="mx-auto max-w-5xl">
        <VStack gap={3} hAlign="center" className="text-center">
          <Heading level={2}>AgentEmployee vs. The Alternatives</Heading>
          <Text size="lg" color="secondary" style={{maxWidth:"500px"}}>
            Why pay for ChatGPT, Zapier, AND a VA when one AI employee does it
            all?
          </Text>
        </VStack>

        <div className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
                <th className="px-5 py-3 text-left text-sm font-semibold">
                  Feature
                </th>
                <th className="px-5 py-3 text-left text-sm font-semibold text-[var(--color-brand-primary)]">
                  AgentEmployee
                </th>
                <th className="px-5 py-3 text-left text-sm font-semibold">
                  ChatGPT / Claude
                </th>
                <th className="px-5 py-3 text-left text-sm font-semibold">
                  Zapier / Make
                </th>
                <th className="px-5 py-3 text-left text-sm font-semibold">
                  VA Service
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-[var(--color-border)] ${
                    i % 2 === 0 ? 'bg-[var(--color-bg-primary)]' : ''
                  }`}
                >
                  <td className="px-5 py-4 text-sm font-medium">
                    {row.feature}
                  </td>
                  <td className="px-5 py-4">
                    <CellIcon value={row.ae} />
                  </td>
                  <td className="px-5 py-4">
                    <CellIcon value={row.chatgpt} />
                  </td>
                  <td className="px-5 py-4">
                    <CellIcon value={row.zapier} />
                  </td>
                  <td className="px-5 py-4">
                    <CellIcon value={row.va} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </VStack>
    </section>
  );
}

function CellIcon({
  value,
}: {
  value: boolean | 'partial' | string;
}) {
  if (value === true) {
    return <CheckIcon className="h-5 w-5 text-[var(--color-success-icon)]" />;
  }
  if (value === 'partial') {
    return (
      <span className="text-sm font-medium text-[var(--color-text-secondary)]">
        🟡 Limited
      </span>
    );
  }
  if (value === false) {
    return <XMarkIcon className="h-5 w-5 text-[var(--color-error-icon)]" />;
  }
  return (
    <span className="text-sm font-medium text-[var(--color-text-primary)]">
      {value}
    </span>
  );
}

function PricingSection() {
  return (
    <section
      id="pricing"
      className="border-t border-[var(--color-border)] px-6 py-20"
    >
      <VStack gap={10} className="mx-auto max-w-7xl">
        <VStack gap={3} hAlign="center" className="text-center">
          <Badge variant="blue" label="14-Day Free Trial — No Credit Card" />
          <Heading level={2}>Simple, transparent pricing</Heading>
          <Text size="lg" color="secondary" style={{maxWidth:"500px"}}>
            Start with a single AI employee. Scale to a full C-suite as you
            grow.
          </Text>
        </VStack>

        <Grid
          columns={{ minWidth: 320, repeat: 'fit' }}
          gap={4}
          className="mx-auto max-w-5xl"
        >
          {plans.map((plan) => (
            <Card
              key={plan.name}
              padding={6}
              className={`relative ${
                plan.popular
                  ? 'ring-2 ring-[var(--color-brand-primary)]'
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="blue" label="Most Popular" />
                </div>
              )}
              <VStack gap={5}>
                <VStack gap={1}>
                  <Heading level={3}>{plan.name}</Heading>
                  <HStack gap={2} vAlign="center">
                    <Text size="4xl" weight="bold">
                      {plan.price}
                    </Text>
                    <Text size="lg" color="secondary">
                      /mo
                    </Text>
                  </HStack>
                  <Text type="supporting" color="secondary">
                    {plan.badge}
                  </Text>
                </VStack>

                <div className="flex-1">
                  <VStack gap={3}>
                    {plan.features.map((f) => (
                      <HStack key={f} gap={2} vAlign="center">
                        <CheckIcon className="h-4 w-4 shrink-0 text-[var(--color-success-icon)]" />
                        <Text type="body" color="secondary">
                          {f}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </div>

                <Button
                  label={plan.cta}
                  variant={plan.popular ? 'primary' : 'secondary'}
                  size="lg"
                  onClick={() =>
                    (window.location.href = '/signup?plan=' + plan.name.toLowerCase())
                  }
                />
              </VStack>
            </Card>
          ))}
        </Grid>
      </VStack>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="border-t border-[var(--color-border)] px-6 py-20">
      <VStack gap={8} className="mx-auto max-w-3xl">
        <VStack gap={3} hAlign="center" className="text-center">
          <Heading level={2}>Frequently Asked Questions</Heading>
        </VStack>

        <VStack gap={3}>
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group cursor-pointer rounded-xl border border-[var(--color-border)] transition-colors hover:bg-[var(--color-bg-secondary)]"
            >
              <summary className="flex items-center justify-between px-5 py-4">
                <Text weight="medium">{faq.q}</Text>
                <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="border-t border-[var(--color-border)] px-5 py-4">
                <Text color="secondary">{faq.a}</Text>
              </div>
            </details>
          ))}
        </VStack>
      </VStack>
    </section>
  );
}

function SignupSection() {
  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-6 py-20">
      <VStack gap={8} className="mx-auto max-w-lg" hAlign="center">
        <VStack gap={3} hAlign="center" className="text-center">
          <Heading level={2}>Ready to hire your first AI employee?</Heading>
          <Text size="lg" color="secondary">
            No credit card. No commitment. 14 days to explore.
          </Text>
        </VStack>

        <div className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-primary)] p-6">
          <VStack gap={4}>
            <TextInput
              label="Email address"
              placeholder="you@company.com"
              value=""
            />
            <TextInput label="Password" type="password" value="" />
            <Button
              label="Create Your Account"
              variant="primary"
              size="lg"
              onClick={() => {
                window.location.href = '/onboarding';
              }}
            />
            <Text type="supporting" color="secondary" className="text-center">
              By signing up, you agree to our{' '}
              <Link href="#">Terms of Service</Link> and{' '}
              <Link href="#">Privacy Policy</Link>.
            </Text>
          </VStack>
        </div>
      </VStack>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <HStack gap={3} vAlign="center">
            <RocketLaunchIcon className="h-5 w-5 text-[var(--color-brand-primary)]" />
            <Text weight="semibold">AgentEmployee</Text>
          </HStack>

          <HStack gap={6}>
            <Link href="#">Docs</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Changelog</Link>
            <Link href="#">Contact</Link>
          </HStack>

          <Text type="supporting" color="secondary">
            &copy; {new Date().getFullYear()} AgentEmployee. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────── Page ───────────────────────

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <ComparisonSection />
      <PricingSection />
      <FAQSection />
      <SignupSection />
      <FooterSection />
    </div>
  );
}
