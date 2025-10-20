import simpleCode from '@/code/simple';
import Mapper from '@/components/Mapper';
import TopComponent from '@/components/TopComponent';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Examples/Simple',
  component: Mapper,
  tags: ['autodocs'],
} as Meta<typeof Mapper>;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: () => (
    <Mapper
      TopComponent={() =>
        TopComponent(
          'Simple Example',
          <p>Basic example showcasing the default setup and essential required properties.</p>,
        )
      }
    />
  ),
  parameters: {
    code: simpleCode,
  },
};

export default meta;
