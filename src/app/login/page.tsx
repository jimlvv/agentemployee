'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@astryxdesign/core/Button';
import { Card } from '@astryxdesign/core/Card';
import { Text, Heading } from '@astryxdesign/core/Text';
import { TextInput } from '@astryxdesign/core/TextInput';
import { Link } from '@astryxdesign/core/Link';
import {
  VStack,
  HStack,
} from '@astryxdesign/core/Layout';

import { RocketLaunchIcon } from '@heroicons/react/24/outline';

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg-primary)] px-4 py-12">
      <VStack gap={8} className="mx-auto w-full" style={{maxWidth:"440px"}}>
        <VStack hAlign="center" gap={2}>
          <div
            className="flex cursor-pointer items-center gap-2"
            onClick={() => router.push('/')}
          >
            <RocketLaunchIcon className="h-6 w-6 text-[var(--color-brand-primary)]" />
            <Text weight="semibold" size="lg">
              AgentEmployee
            </Text>
          </div>
        </VStack>

        <Card padding={6}>
          <VStack gap={5}>
            <Heading level={2}>Sign in</Heading>

            <VStack gap={4}>
              <TextInput label="Email address" value="" />
              <TextInput label="Password" type="password" value="" />
              <Button
                label="Sign in"
                variant="primary" style={{width:"100%"}}
                size="lg"
                onClick={() => router.push('/dashboard')}
              />
            </VStack>

            <HStack hAlign="center" gap={1}>
              <Text type="body" color="secondary">
                Don't have an account?
              </Text>
              <Link href="/signup">Start free trial</Link>
            </HStack>
          </VStack>
        </Card>
      </VStack>
    </div>
  );
}
