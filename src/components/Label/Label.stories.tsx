import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const labelMeta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
  },
};

export default labelMeta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: { text: 'Username:', color: '#111' },
};
