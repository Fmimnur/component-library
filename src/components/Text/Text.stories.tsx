import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const textMeta: Meta<typeof Text> = {
  title: 'UI/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    size: { control: 'text' },
    color: { control: 'color' },
  },
};

export default textMeta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { content: 'This is sample text', size: '1rem', color: '#000' },
};

