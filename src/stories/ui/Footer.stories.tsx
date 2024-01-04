import type { Meta, StoryObj } from '@storybook/react';

import Footer from '@/app/components/ui/Footer';

const meta: Meta<typeof Footer> = {
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  render: () => <Footer/>,
};