'use client';

import { Card } from '@astryxdesign/core/Card';
import { Grid } from '@astryxdesign/core/Grid';
import { Text, Heading } from '@astryxdesign/core/Text';
import { Button } from '@astryxdesign/core/Button';
import { Badge } from '@astryxdesign/core/Badge';
import { Divider } from '@astryxdesign/core/Divider';
import { Link } from '@astryxdesign/core/Link';
import {
  VStack,
  HStack,
  Layout,
  LayoutContent,
} from '@astryxdesign/core/Layout';

import {
  UserGroupIcon,
  PlusIcon,
  SparklesIcon,
  CurrencyDollarIcon,
  MegaphoneIcon,
  WrenchScrewdriverIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

interface AgentRole {
  role: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  status: 'active' | 'locked' | 'upgrade';
  trialAccess?: boolean;
}

const agents: AgentRole[] = [
  {
    role: 'CEO',
    icon: RocketLaunchIcon,
    description:
      'Strategic leader. Manages high-level strategy, partnerships, and delegation.',
    status: 'active',
    trialAccess: true,
  },
  {
    role: 'CFO',
    icon: CurrencyDollarIcon,
    description:
      'Financial guardian. Tracks spend, manages budgets, and forecasts cash flow.',
    status: 'upgrade',
  },
  {
    role: 'CMO',
    icon: MegaphoneIcon,
    description:
      'Growth engine. Drives marketing campaigns, content, and brand strategy.',
    status: 'upgrade',
  },
  {
    role: 'COO',
    icon: WrenchScrewdriverIcon,
    description:
      'Operations backbone. Manages workflows, vendors, and daily execution.',
    status: 'upgrade',
  },
  {
    role: 'CTO',
    icon: CpuChipIcon,
    description:
      'Technical authority. Owns tech stack, monitors systems, evaluates tools.',
    status: 'upgrade',
  },
];

export default function AgentsPage() {
  return (
    <Layout
      height="auto"
      content={
        <LayoutContent>
          <VStack gap={8}>
            {/* Header */}
            <HStack hAlign="between" vAlign="center">
              <VStack gap={1}>
                <Heading level={2}>Agents</Heading>
                <Text color="secondary">
                  Your AI team members. Each role has a distinct personality and
                  focus area.
                </Text>
              </VStack>
            </HStack>

            {/* Active agent */}
            <VStack gap={3}>
              <Heading level={4}>Active</Heading>
              <Grid columns={{ minWidth: 320, repeat: 'fit' }} gap={4}>
                {agents
                  .filter((a) => a.status === 'active')
                  .map((agent) => (
                    <AgentCard key={agent.role} agent={agent} />
                  ))}
              </Grid>
            </VStack>

            <Divider />

            {/* Locked agents */}
            <VStack gap={3}>
              <Heading level={4}>Available on Upgrade</Heading>
              <Grid columns={{ minWidth: 320, repeat: 'fit' }} gap={4}>
                {agents
                  .filter((a) => a.status !== 'active')
                  .map((agent) => (
                    <AgentCard key={agent.role} agent={agent} />
                  ))}
              </Grid>
            </VStack>
          </VStack>
        </LayoutContent>
      }
    />
  );
}

function AgentCard({ agent }: { agent: AgentRole }) {
  const locked = agent.status !== 'active';

  return (
    <Card
      padding={5}
      className={`relative ${locked ? 'opacity-60' : ''}`}
    >
      <VStack gap={4}>
        <HStack vAlign="center" gap={3}>
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg ${
              locked
                ? 'bg-[var(--color-bg-secondary)]'
                : 'bg-[var(--color-brand-primary)]/10'
            }`}
          >
            {locked ? (
              <LockClosedIcon className="h-5 w-5 text-[var(--color-text-tertiary)]" />
            ) : (
              <agent.icon className="h-5 w-5 text-[var(--color-brand-primary)]" />
            )}
          </div>
          <VStack gap={0}>
            <Heading level={3}>{agent.role}</Heading>
            {locked && (
              <Badge variant="neutral" label={agent.status === 'upgrade' ? 'Upgrade to unlock' : 'Coming soon'} />
            )}
            {!locked && (
              <Badge variant="success" label="Active" />
            )}
          </VStack>
        </HStack>

        <Text type="body" color="secondary">
          {agent.description}
        </Text>

        {locked && (
          <Button
            label="Upgrade Plan"
            variant="secondary" style={{width:"100%"}}
            size="sm"
            icon={<SparklesIcon className="h-4 w-4" />}
          />
        )}

        {!locked && (
          <HStack gap={2}>
            <Button
              label="Configure"
              variant="secondary" style={{width:"100%"}}
              size="sm"
            />
            <Button
              label="View Activity"
              variant="ghost"
              size="sm"
            />
          </HStack>
        )}
      </VStack>
    </Card>
  );
}
