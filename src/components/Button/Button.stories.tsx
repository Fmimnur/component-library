import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const buttonMeta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
    bgColor: { control: 'color' },
    isDisabled: { control: 'boolean' },
  },
};

export default buttonMeta;

type ButtonStory = StoryObj<typeof Button>;

export const Primary: ButtonStory = {
  args: {
    text: 'Press Me',
    bgColor: '#007bff',
    isDisabled: false,
  },
};

export const Inactive: ButtonStory = {
  args: {
    text: 'Unavailable',
    bgColor: '#007bff',
    isDisabled: true,
  },
};
