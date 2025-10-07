import DynamicMapper from '@/components/DynamicMapper';
import { dynamicAllPropertiesCode } from '@/code/dynamic';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Examples/Dynamic All Properties',
  component: DynamicMapper,
  tags: ['autodocs'],
} satisfies Meta<typeof DynamicMapper>;

type Story = StoryObj<typeof meta>;

export const DynamicAllProperties: Story = {
  render: (args) => <DynamicMapper {...args} />,
  parameters: {
    code: dynamicAllPropertiesCode,
  },
  args: {
    isMulti: true,
    toggle: false,
    active: true,
    disabled: false,
    fillColor: 'rgba(255, 255, 255, 0.5)',
    strokeColor: 'rgba(0, 0, 0, 0.5)',
    lineWidth: 1,
    imgWidth: 0,
    width: 0,
    height: 0,
    natural: false,
    responsive: false,
    parentWidth: 0,
  },
  argTypes: {
    isMulti: {
      control: 'boolean',
    },
    toggle: {
      control: 'boolean',
    },
    active: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    fillColor: {
      control: 'color',
    },
    strokeColor: {
      control: 'color',
    },
    lineWidth: {
      control: 'number',
    },
    imgWidth: {
      control: 'number',
    },
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
    natural: {
      control: 'boolean',
    },
    responsive: {
      control: 'boolean',
    },
    parentWidth: {
      control: 'number',
    },
  },
};

export default meta;
