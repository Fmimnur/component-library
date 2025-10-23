import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';

const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
  argTypes: {
    striped: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    headers: ['Name', 'Age', 'Country'],
    data: [
      ['Alice', 25, 'Canada'],
      ['Bob', 30, 'USA'],
      ['Charlie', 22, 'UK'],
    ],
    striped: true,
  },
};
