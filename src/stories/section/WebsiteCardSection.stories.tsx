import type { Meta, StoryObj } from '@storybook/react';
import WebsiteCardSection from '@/app/components/section/WebsiteCardSection';

const meta: Meta<typeof WebsiteCardSection> = {
    component: WebsiteCardSection,
  };
  
  export default meta;
  type Story = StoryObj<typeof WebsiteCardSection>;

export const Primary = () => {

  return <WebsiteCardSection/>;
};
