import type { Meta, StoryObj } from '@storybook/react';

import FooterIcons from '@/app/components/ui/FooterIcons';

const meta: Meta<typeof FooterIcons> = {
  component: FooterIcons,
};

export default meta;
type Story = StoryObj<typeof FooterIcons>;

export const Primary: Story = {
  render: () => <FooterIcons/>,
};