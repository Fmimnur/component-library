import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  argTypes: {
    background: { control: 'color' },
    padding: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    background: '#fff',
    padding: '20px',
    children: 'This is inside a card.',
  },
};
