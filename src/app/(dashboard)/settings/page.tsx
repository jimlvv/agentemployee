'use client';

import { Card } from '@astryxdesign/core/Card';
import { Text, Heading } from '@astryxdesign/core/Text';
import { Button } from '@astryxdesign/core/Button';
import { TextInput } from '@astryxdesign/core/TextInput';
import { Divider } from '@astryxdesign/core/Divider';
import {
  VStack,
  HStack,
  Layout,
  LayoutContent,
} from '@astryxdesign/core/Layout';

import { BellIcon, ShieldCheckIcon, KeyIcon } from '@heroicons/react/24/outline';

export default function SettingsPage() {
  return (
    <Layout
      height="auto"
      content={
        <LayoutContent>
          <VStack gap={8} style={{maxWidth:"640px"}}>
            <VStack gap={1}>
              <Heading level={2}>Settings</Heading>
              <Text color="secondary">
                Manage your account and preferences.
              </Text>
            </VStack>

            {/* Profile */}
            <Card padding={5}>
              <VStack gap={4}>
                <Heading level={4}>Profile</Heading>
                <div className="grid gap-4 sm:grid-cols-2">
                  <TextInput label="Full name" value="User" />
                  <TextInput label="Email" value="user@company.com" />
                </div>
                <Button label="Save Changes" variant="primary" size="sm" />
              </VStack>
            </Card>

            {/* Plan */}
            <Card padding={5}>
              <VStack gap={4}>
                <Heading level={4}>Plan & Billing</Heading>
                <HStack hAlign="between" vAlign="center">
                  <VStack gap={0}>
                    <Text weight="medium">Starter Plan</Text>
                    <Text type="supporting" color="secondary">
                      $39/mo — 1 agent, 14-day trial
                    </Text>
                  </VStack>
                  <Button label="Upgrade" variant="primary" size="sm" />
                </HStack>
              </VStack>
            </Card>

            {/* Notifications */}
            <Card padding={5}>
              <VStack gap={4}>
                <Heading level={4}>Notifications</Heading>
                <Text type="supporting" color="secondary">
                  Configure how your agent notifies you.
                </Text>
                <Button
                  label="Configure Notifications"
                  variant="secondary"
                  size="sm"
                  icon={<BellIcon className="h-4 w-4" />}
                />
              </VStack>
            </Card>

            {/* Danger zone */}
            <Card padding={5} className="border-[var(--color-error-border)]">
              <VStack gap={4}>
                <Heading level={4} style={{ color: 'var(--color-error-text)' }}>
                  Danger Zone
                </Heading>
                <div className="flex items-center justify-between">
                  <VStack gap={0}>
                    <Text weight="medium">Delete account</Text>
                    <Text type="supporting" color="secondary">
                      Permanently delete your account and all data.
                    </Text>
                  </VStack>
                  <Button
                    label="Delete"
                    variant="secondary"
                    size="sm"
                    style={{ color: 'var(--color-error-text)', borderColor: 'var(--color-error-border)' }}
                  />
                </div>
              </VStack>
            </Card>
          </VStack>
        </LayoutContent>
      }
    />
  );
}
