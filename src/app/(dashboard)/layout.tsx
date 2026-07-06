'use client';

import { usePathname, useRouter } from 'next/navigation';
import {
  AppShell,
} from '@astryxdesign/core/AppShell';
import { SideNav, SideNavItem, SideNavHeading } from '@astryxdesign/core/SideNav';
import { TopNav } from '@astryxdesign/core/TopNav';
import { Text } from '@astryxdesign/core/Text';
import { Avatar } from '@astryxdesign/core/Avatar';
import { Icon } from '@astryxdesign/core/Icon';
import { HStack } from '@astryxdesign/core/HStack';

import {
  HomeIcon,
  UserGroupIcon,
  FolderIcon,
  Cog6ToothIcon,
  RocketLaunchIcon,
  BellIcon,
} from '@heroicons/react/24/outline';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: HomeIcon },
  { href: '/dashboard/agents', label: 'Agents', icon: UserGroupIcon },
  { href: '/dashboard/projects', label: 'Projects', icon: FolderIcon },
  { href: '/dashboard/settings', label: 'Settings', icon: Cog6ToothIcon },
];

function SideNavContent() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <SideNav
      header={<SideNavHeading heading="Navigation" />}
      className="h-full"
    >
      {navItems.map((item) => (
        <SideNavItem
          key={item.href}
          label={item.label}
          isSelected={pathname === item.href}
          icon={<Icon icon={item.icon} size="sm" />}
          onClick={() => router.push(item.href)}
        />
      ))}
    </SideNav>
  );
}

function TopNavContent() {
  const router = useRouter();

  return (
    <TopNav
      heading={
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={() => router.push('/dashboard')}
        >
          <RocketLaunchIcon className="h-5 w-5 text-[var(--color-brand-primary)]" />
          <Text weight="semibold">AgentEmployee</Text>
        </div>
      }
      endContent={
        <HStack gap={2} vAlign="center">
          <Icon icon={BellIcon} size="sm" className="cursor-pointer" />
          <Avatar name="User" size="small" className="cursor-pointer" />
        </HStack>
      }
    />
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell
      topNav={<TopNavContent />}
      sideNav={<SideNavContent />}
      contentPadding={6}
      height="fill"
    >
      {children}
    </AppShell>
  );
}
