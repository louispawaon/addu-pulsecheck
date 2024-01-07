import type { Meta, StoryObj } from '@storybook/react';
import FAQAccordionSection from '@/app/components/section/FAQAccordionSection';

const meta: Meta<typeof FAQAccordionSection> = {
    component: FAQAccordionSection,
  };
  
  export default meta;
  type Story = StoryObj<typeof FAQAccordionSection>;

export const Primary = () => {

  return <FAQAccordionSection/>;
};
