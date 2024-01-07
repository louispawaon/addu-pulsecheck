import type { Meta, StoryObj } from '@storybook/react';

import StatusBadge from '@/app/components/ui/StatusBadge';

const meta: Meta<typeof StatusBadge> = {
  component: StatusBadge,
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const Primary: Story = {
  render: () => <StatusBadge status='meh'/>,
};