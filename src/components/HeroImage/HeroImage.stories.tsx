import type { Meta, StoryObj } from '@storybook/react';
import HeroImage from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'UI/HeroImage',
  component: HeroImage,
  argTypes: {
    image: { control: 'text' },
    height: { control: 'text' },
    overlayColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    image: 'https://via.placeholder.com/800x300',
    height: '300px',
    overlayColor: 'rgba(0,0,0,0.4)',
  },
};
