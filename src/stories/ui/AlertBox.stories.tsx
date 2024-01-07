import type { Meta, StoryObj } from '@storybook/react';

import AlertBox from '@/app/components/ui/AlertBox';

const meta: Meta<typeof AlertBox> = {
  component: AlertBox,
};

export default meta;
type Story = StoryObj<typeof AlertBox>;

export const Primary: Story = {
  render: () => <AlertBox status='Checking'/>,
};