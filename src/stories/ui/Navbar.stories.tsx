import type { Meta, StoryObj } from '@storybook/react';

import Navbar from '@/app/components/ui/Navbar';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
  render: () => <Navbar/>,
};