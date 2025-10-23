import type { Meta, StoryObj } from '@storybook/react';
import TableCell from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Components/Table/TableCell',
  component: TableCell,
  argTypes: {
    align: { control: 'select', options: ['left', 'center', 'right'] },
  },
};

export default meta;
type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  args: {
    align: 'left',
    children: 'Cell Content',
  },
};
