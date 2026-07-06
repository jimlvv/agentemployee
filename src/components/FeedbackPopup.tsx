'use client';

import { useState } from 'react';
import { Button } from '@astryxdesign/core/Button';
import { Text, Heading } from '@astryxdesign/core/Text';
import { TextInput } from '@astryxdesign/core/TextInput';
import {
  VStack,
  HStack,
} from '@astryxdesign/core/Layout';

import { SparklesIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface FeedbackPopupProps {
  isOpen: boolean;
  onDismiss: () => void;
  daysLeft: number;
}

const categories = [
  { label: 'Product Feature Request', value: 'feature' },
  { label: 'Bug Report', value: 'bug' },
  { label: 'UX / Design Feedback', value: 'ux' },
  { label: 'Pricing / Plan Question', value: 'pricing' },
  { label: 'General Suggestion', value: 'general' },
];

export default function FeedbackPopup({
  isOpen,
  onDismiss,
  daysLeft,
}: FeedbackPopupProps) {
  const [feedback, setFeedback] = useState('');
  const [category, setCategory] = useState('general');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = () => {
    // In production: POST to Supabase/API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="mx-4 w-full max-w-md rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-primary)] p-8 shadow-2xl">
          <VStack gap={4} hAlign="center" className="text-center">
            <SparklesIcon className="h-10 w-10 text-[var(--color-success-icon)]" />
            <Heading level={3}>Thank you!</Heading>
            <Text color="secondary">
              Your feedback has been sent. Thinh will review it and may extend
              your trial.
            </Text>
            <Button
              label="Back to Dashboard"
              variant="primary"
              size="lg"
              onClick={onDismiss}
            />
          </VStack>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="mx-4 w-full max-w-md rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-primary)] p-6 shadow-2xl">
        <VStack gap={5}>
          {/* Header */}
          <HStack hAlign="between" vAlign="center">
            <HStack gap={2} vAlign="center">
              <span className="text-2xl">👋</span>
              <VStack gap={0}>
                <Heading level={4}>How&apos;s it going?</Heading>
                <Text type="supporting" color="secondary">
                  Your trial ends in {daysLeft} days. Tell us what you think and
                  we may extend it!
                </Text>
              </VStack>
            </HStack>
            <button
              onClick={onDismiss}
              className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-[var(--color-bg-secondary)]"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
          </HStack>

          {/* Category selector */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-3 py-2 text-sm"
          >
            {categories.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>

          {/* Textarea */}
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="What do you think so far? Any features you'd love to see?"
            maxLength={500}
            rows={4}
            className="w-full resize-none rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-3 py-2 text-sm placeholder-[var(--color-text-tertiary)] focus:border-[var(--color-brand-primary)] focus:outline-none"
          />
          <Text type="supporting" color="secondary" className="self-end">
            {feedback.length}/500
          </Text>

          {/* Actions */}
          <VStack gap={2}>
            <Button
              label="Send &amp; Keep My Trial"
              variant="primary"
              size="lg"
              isDisabled={!feedback.trim()}
              onClick={handleSubmit}
            />
            <Button
              label="No thanks, I&apos;ll decide later"
              variant="ghost"
              size="sm"
              onClick={onDismiss}
            />
          </VStack>
        </VStack>
      </div>
    </div>
  );
}
