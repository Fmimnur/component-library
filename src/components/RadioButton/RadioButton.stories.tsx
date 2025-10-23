import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'UI/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    checked: false,
  },
};
