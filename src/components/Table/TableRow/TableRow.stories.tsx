import type { Meta, StoryObj } from '@storybook/react';
import TableRow from './TableRow';

const meta: Meta<typeof TableRow> = {
  title: 'Components/Table/TableRow',
  component: TableRow,
  argTypes: {
    hoverable: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: {
    hoverable: true,
    children: <td>Sample Cell</td>,
  },
};
