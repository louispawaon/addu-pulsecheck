import type { Meta, StoryObj } from '@storybook/react';

import WebsiteCard from '@/app/components/ui/WebsiteCard';

const meta: Meta<typeof WebsiteCard> = {
  component: WebsiteCard,
};

export default meta;
type Story = StoryObj<typeof WebsiteCard>;

export const Primary: Story = {
  render: () => <WebsiteCard proxyUrl='lorem ipsum' websiteDescription='lorem lorem' websiteName='lorem loren' websiteUrl='lorem@lorem' status='lorem'/>,
};