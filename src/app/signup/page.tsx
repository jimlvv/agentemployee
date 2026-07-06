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

export default function SignupPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg-primary)] px-4 py-12">
      <VStack gap={8} className="mx-auto w-full" style={{maxWidth:"440px"}}>
        {/* Logo */}
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
            <VStack gap={1}>
              <Heading level={2}>Create your account</Heading>
              <Text color="secondary">
                Start your 14-day free trial. No credit card required.
              </Text>
            </VStack>

            <VStack gap={4}>
              <TextInput label="Full name" placeholder="Your name" value="" />
              <TextInput
                label="Email address"
                placeholder="you@company.com"
                value=""
              />
              <TextInput
                label="Password"
                type="password"
                placeholder="Min. 8 characters"
                value=""
              />
              <Button
                label="Create Account & Start Trial"
                variant="primary" style={{width:"100%"}}
                size="lg"
                onClick={() => router.push('/onboarding')}
              />
            </VStack>

            <Text type="supporting" color="secondary" className="text-center">
              By signing up, you agree to our{' '}
              <Link href="#">Terms of Service</Link> and{' '}
              <Link href="#">Privacy Policy</Link>.
            </Text>

            <HStack hAlign="center" gap={1}>
              <Text type="body" color="secondary">
                Already have an account?
              </Text>
              <Link href="/login">Sign in</Link>
            </HStack>
          </VStack>
        </Card>
      </VStack>
    </div>
  );
}
