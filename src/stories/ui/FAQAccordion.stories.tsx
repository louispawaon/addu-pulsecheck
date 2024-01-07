import type { Meta, StoryObj } from '@storybook/react';

import FAQAccordion from '@/app/components/ui/FAQAccordion';

const meta: Meta<typeof FAQAccordion> = {
  component: FAQAccordion,
};

export default meta;
type Story = StoryObj<typeof FAQAccordion>;

export const Primary: Story = {
  render: () => <FAQAccordion question='lorem ipsum' answer='loremlorem' value='item-1'/>,
};