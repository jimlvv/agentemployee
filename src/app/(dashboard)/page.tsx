'use client';

import { Card } from '@astryxdesign/core/Card';
import { Grid } from '@astryxdesign/core/Grid';
import { Text, Heading } from '@astryxdesign/core/Text';
import { Button } from '@astryxdesign/core/Button';
import { Badge } from '@astryxdesign/core/Badge';
import { Divider } from '@astryxdesign/core/Divider';
import {
  VStack,
  HStack,
  Layout,
  LayoutContent,
} from '@astryxdesign/core/Layout';

import {
  UserGroupIcon,
  FolderIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
  BoltIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export default function DashboardHome() {
  return (
    <Layout
      height="auto"
      content={
        <LayoutContent>
          <VStack gap={8}>
            {/* Welcome */}
            <VStack gap={1}>
              <Heading level={2}>Welcome back</Heading>
              <Text color="secondary">
                Here's what's happening with your agents today.
              </Text>
            </VStack>

            {/* Quick stats */}
            <Grid columns={{ minWidth: 200, repeat: 'fit' }} gap={4}>
              <Card padding={4}>
                <VStack gap={2}>
                  <HStack vAlign="center" gap={2}>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-bg-secondary)]">
                      <UserGroupIcon className="h-4 w-4 text-[var(--color-brand-primary)]" />
                    </div>
                    <Text type="supporting" color="secondary">
                      Active Agents
                    </Text>
                  </HStack>
                  <Heading level={1}>1</Heading>
                  <Text type="supporting" color="secondary">
                    CEO agent — Trial
                  </Text>
                </VStack>
              </Card>

              <Card padding={4}>
                <VStack gap={2}>
                  <HStack vAlign="center" gap={2}>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-bg-secondary)]">
                      <FolderIcon className="h-4 w-4 text-[var(--color-brand-primary)]" />
                    </div>
                    <Text type="supporting" color="secondary">
                      Projects
                    </Text>
                  </HStack>
                  <Heading level={1}>0</Heading>
                  <Text type="supporting" color="secondary">
                    Create your first project
                  </Text>
                </VStack>
              </Card>

              <Card padding={4}>
                <VStack gap={2}>
                  <HStack vAlign="center" gap={2}>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-bg-secondary)]">
                      <ArrowTrendingUpIcon className="h-4 w-4 text-[var(--color-brand-primary)]" />
                    </div>
                    <Text type="supporting" color="secondary">
                      Trial Status
                    </Text>
                  </HStack>
                  <VStack gap={1}>
                    <Badge variant="blue" label="14 days remaining" />
                    <Text type="supporting" color="secondary">
                      Day 0 of 14
                    </Text>
                  </VStack>
                </VStack>
              </Card>

              <Card padding={4}>
                <VStack gap={2}>
                  <HStack vAlign="center" gap={2}>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-bg-secondary)]">
                      <SparklesIcon className="h-4 w-4 text-[var(--color-brand-primary)]" />
                    </div>
                    <Text type="supporting" color="secondary">
                      Agent Actions
                    </Text>
                  </HStack>
                  <Heading level={1}>0</Heading>
                  <Text type="supporting" color="secondary">
                    Today
                  </Text>
                </VStack>
              </Card>
            </Grid>

            <Divider />

            {/* Quick actions */}
            <VStack gap={4}>
              <Heading level={3}>Quick Actions</Heading>
              <Grid columns={{ minWidth: 280, repeat: 'fit' }} gap={4}>
                <Card padding={5} className="cursor-pointer transition-shadow hover:shadow-md">
                  <VStack gap={3}>
                    <BoltIcon className="h-6 w-6 text-[var(--color-brand-primary)]" />
                    <Heading level={4}>Create a Project</Heading>
                    <Text type="body" color="secondary">
                      Set up a dedicated workspace with its own vault and agents.
                    </Text>
                    <Button
                      label="New Project"
                      variant="secondary"
                      size="sm"
                      icon={<ArrowRightIcon className="h-4 w-4" />}
                    />
                  </VStack>
                </Card>

                <Card padding={5} className="cursor-pointer transition-shadow hover:shadow-md">
                  <VStack gap={3}>
                    <UserGroupIcon className="h-6 w-6 text-[var(--color-brand-primary)]" />
                    <Heading level={4}>Configure Your CEO Agent</Heading>
                    <Text type="body" color="secondary">
                      Set up tools, schedule, and preferences for your AI agent.
                    </Text>
                    <Button
                      label="Configure"
                      variant="secondary"
                      size="sm"
                      icon={<ArrowRightIcon className="h-4 w-4" />}
                    />
                  </VStack>
                </Card>

                <Card padding={5} className="cursor-pointer transition-shadow hover:shadow-md">
                  <VStack gap={3}>
                    <SparklesIcon className="h-6 w-6 text-[var(--color-brand-primary)]" />
                    <Heading level={4}>Upgrade Your Plan</Heading>
                    <Text type="body" color="secondary">
                      Unlock more agents with Growth or Scale plans.
                    </Text>
                    <Button
                      label="View Plans"
                      variant="secondary"
                      size="sm"
                      icon={<ArrowRightIcon className="h-4 w-4" />}
                    />
                  </VStack>
                </Card>
              </Grid>
            </VStack>

            <Divider />

            {/* Recent activity */}
            <VStack gap={4}>
              <Heading level={3}>Recent Activity</Heading>
              <Card padding={5}>
                <VStack gap={3} hAlign="center" className="py-8">
                  <SparklesIcon className="h-8 w-8 text-[var(--color-text-tertiary)]" />
                  <VStack gap={1} hAlign="center">
                    <Text weight="medium">No activity yet</Text>
                    <Text type="body" color="secondary">
                      Your agent will appear here once it starts working.
                    </Text>
                  </VStack>
                  <Button label="Run First Check-in" variant="primary" size="sm" />
                </VStack>
              </Card>
            </VStack>
          </VStack>
        </LayoutContent>
      }
    />
  );
}
