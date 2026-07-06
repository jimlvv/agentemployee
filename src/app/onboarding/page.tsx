'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@astryxdesign/core/Button';
import { Card } from '@astryxdesign/core/Card';
import { Grid } from '@astryxdesign/core/Grid';
import { Text, Heading } from '@astryxdesign/core/Text';
import { Badge } from '@astryxdesign/core/Badge';
import { TextInput } from '@astryxdesign/core/TextInput';
import { ProgressBar } from '@astryxdesign/core/ProgressBar';
import { Divider } from '@astryxdesign/core/Divider';
import {
  VStack,
  HStack,
} from '@astryxdesign/core/Layout';

import {
  RocketLaunchIcon,
  CurrencyDollarIcon,
  MegaphoneIcon,
  WrenchScrewdriverIcon,
  CpuChipIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';

interface AgentOption {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  trialAccess: boolean;
}

const agentOptions: AgentOption[] = [
  {
    id: 'ceo',
    label: 'CEO',
    icon: RocketLaunchIcon,
    description: 'Strategic leader — manages high-level strategy, partnerships, and delegation.',
    trialAccess: true,
  },
  {
    id: 'cfo',
    label: 'CFO',
    icon: CurrencyDollarIcon,
    description: 'Financial guardian — tracks spend, manages budgets, forecasts.',
    trialAccess: false,
  },
  {
    id: 'cmo',
    label: 'CMO',
    icon: MegaphoneIcon,
    description: 'Growth engine — marketing campaigns, content, brand strategy.',
    trialAccess: false,
  },
  {
    id: 'coo',
    label: 'COO',
    icon: WrenchScrewdriverIcon,
    description: 'Operations backbone — workflows, vendors, daily execution.',
    trialAccess: false,
  },
  {
    id: 'cto',
    label: 'CTO',
    icon: CpuChipIcon,
    description: 'Technical authority — tech stack, system monitoring, tools.',
    trialAccess: false,
  },
];

const steps = ['Select Agents', 'Connect Tools', 'Review & Finish'];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [selectedAgents, setSelectedAgents] = useState<string[]>(['ceo']);
  const [error, setError] = useState('');

  const toggleAgent = (id: string) => {
    if (agentOptions.find((a) => a.id === id)?.trialAccess === false) {
      return;
    }
    setSelectedAgents((prev) =>
      prev.includes(id)
        ? prev.filter((a) => a !== id)
        : [...prev, id],
    );
  };

  const handleNext = () => {
    if (step === 0 && selectedAgents.length === 0) {
      setError('Select at least one agent');
      return;
    }
    setError('');
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg-primary)] px-4 py-12">
      <VStack gap={8} className="mx-auto w-full" style={{maxWidth:"640px"}}>
        {/* Header */}
        <VStack gap={2} hAlign="center" className="text-center">
          <RocketLaunchIcon className="h-8 w-8 text-[var(--color-brand-primary)]" />
          <Heading level={2}>Set up your AI team</Heading>
          <Text color="secondary">
            Step {step + 1} of {steps.length}: {steps[step]}
          </Text>
          <ProgressBar
            value={((step + 1) / steps.length) * 100}
            max={100}
            label={`Step ${step + 1} of ${steps.length}`}
            className="w-full max-w-sm"
          />
        </VStack>

        {/* Step 0: Select Agents */}
        {step === 0 && (
          <VStack gap={4}>
            <Text weight="medium">Choose your agents</Text>
            <Text type="supporting" color="secondary">
              Trial includes <strong>CEO</strong> agent. Unlock more roles by
              upgrading.
            </Text>
            <Grid columns={{ minWidth: 280, repeat: 'fit' }} gap={3}>
              {agentOptions.map((agent) => {
                const selected = selectedAgents.includes(agent.id);
                const locked = !agent.trialAccess;
                return (
                  <Card
                    key={agent.id}
                    padding={4}
                    className={`cursor-pointer transition-all ${
                      selected
                        ? 'ring-2 ring-[var(--color-brand-primary)]'
                        : ''
                    } ${locked && !selected ? 'opacity-50' : ''}`}
                    onClick={() => toggleAgent(agent.id)}
                  >
                    <VStack gap={2}>
                      <HStack vAlign="center" gap={2}>
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-bg-secondary)]">
                          <agent.icon className="h-4 w-4 text-[var(--color-brand-primary)]" />
                        </div>
                        <HStack gap={2} vAlign="center">
                          <Text weight="medium">{agent.label}</Text>
                          {locked && (
                            <Badge variant="neutral" label="Upgrade" />
                          )}
                        </HStack>
                        {selected && (
                          <div className="ml-auto">
                            <CheckIcon className="h-5 w-5 text-[var(--color-brand-primary)]" />
                          </div>
                        )}
                      </HStack>
                      <Text type="supporting" color="secondary">
                        {agent.description}
                      </Text>
                    </VStack>
                  </Card>
                );
              })}
            </Grid>
            {error && (
              <Text type="body" style={{color:"var(--color-error-text)"}}>
                {error}
              </Text>
            )}
          </VStack>
        )}

        {/* Step 1: Connect Tools */}
        {step === 1 && (
          <VStack gap={4}>
            <Text weight="medium">Connect your tools</Text>
            <Text type="supporting" color="secondary">
              Your agents work best when they can access your data and execute
              actions.
            </Text>

            <Card padding={4}>
              <VStack gap={4}>
                <HStack vAlign="center" hAlign="between">
                  <HStack gap={3} vAlign="center">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4.06 13.94A2 2 0 012 12V4a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H4z"
                        fill="#4285F4"
                      />
                      <path
                        d="M11 3v7H4V3h7z"
                        fill="white"
                      />
                    </svg>
                    <VStack gap={0}>
                      <Text weight="medium">Google Drive</Text>
                      <Text type="supporting" color="secondary">
                        Read your documents and knowledge base
                      </Text>
                    </VStack>
                  </HStack>
                  <Button label="Connect" variant="secondary" size="sm" />
                </HStack>

                <Divider />

                <HStack vAlign="center" hAlign="between">
                  <HStack gap={3} vAlign="center">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#5C6AC4"/>
                      <path d="M12 6l6 3.5v7L12 20l-6-3.5v-7L12 6z" fill="white" opacity="0.8"/>
                      <path d="M12 10l6 3.5-6 3.5-6-3.5L12 10z" fill="white"/>
                    </svg>
                    <VStack gap={0}>
                      <Text weight="medium">Shopify</Text>
                      <Text type="supporting" color="secondary">
                        Access product listings and orders
                      </Text>
                    </VStack>
                  </HStack>
                  <Button label="Connect" variant="secondary" size="sm" />
                </HStack>
              </VStack>
            </Card>

            <Text type="supporting" color="secondary">
              You can skip this step and connect tools later.
            </Text>
          </VStack>
        )}

        {/* Step 2: Review */}
        {step === 2 && (
          <VStack gap={4}>
            <Text weight="medium">Review your setup</Text>
            <Card padding={4}>
              <VStack gap={4}>
                <VStack gap={1}>
                  <Text type="supporting" color="secondary">
                    Selected Agents
                  </Text>
                  <HStack gap={2}>
                    {selectedAgents.map((id) => (
                      <Badge
                        key={id}
                        variant="blue"
                        label={agentOptions.find((a) => a.id === id)?.label ?? ''}
                      />
                    ))}
                  </HStack>
                </VStack>

                <Divider />

                <VStack gap={1}>
                  <Text type="supporting" color="secondary">
                    Plan
                  </Text>
                  <Text weight="medium">
                    Starter ($39/mo) — 14-day free trial
                  </Text>
                </VStack>

                <Divider />

                <VStack gap={1}>
                  <Text type="supporting" color="secondary">
                    Tools
                  </Text>
                  <Text weight="medium">Google Drive, Shopify</Text>
                  <Text type="supporting" color="secondary">
                    Connect later from Settings
                  </Text>
                </VStack>
              </VStack>
            </Card>
          </VStack>
        )}

        {/* Navigation buttons */}
        <HStack hAlign="between" gap={3}>
          <Button
            label={step === 0 ? 'Cancel' : 'Back'}
            variant="ghost"
            size="md"
            onClick={() =>
              step === 0 ? router.push('/') : setStep(step - 1)
            }
          />
          <Button
            label={step === steps.length - 1 ? 'Go to Dashboard' : 'Continue'}
            variant="primary"
            size="md"
            onClick={handleNext}
          />
        </HStack>
      </VStack>
    </div>
  );
}
