import type { Meta, StoryObj } from '@storybook/react';
import Img from './Img';

const meta: Meta<typeof Img> = {
  title: 'UI/Img',
  component: Img,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    rounded: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'Sample image',
    width: '150px',
    height: '150px',
    rounded: false,
  },
};
