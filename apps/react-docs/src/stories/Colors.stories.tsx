import {
  dynamicFillColorCode,
  dynamicMixArrayFillColorCode,
  dynamicMixArrayStrokeColorCode,
  dynamicStrokeColorCode,
  fillColorCode,
  inArrayFillColorCode,
  inArrayStrokeColorCode,
  strokeColorCode,
} from '@/code/colors';
import Mapper from '@/components/Mapper';
import TopComponent from '@/components/TopComponent';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Examples/Colors',
  component: Mapper,
  tags: ['autodocs'],
} as Meta<typeof Mapper>;

type Story = StoryObj<typeof meta>;

export const FillColor: Story = {
  render: () => (
    <Mapper
      customJSON={0}
      customType="fill"
      TopComponent={() =>
        TopComponent(
          'Default Fill Color Example',
          <p>
            In this example, the <span className="tag">fillColor</span> property is not available in{' '}
            <span className="tag">areas</span> JSON, that&apos;s why it&apos;s giving the default
            behavior of mapper by applying default <span className="tag">fillColor</span>.
          </p>,
        )
      }
    />
  ),
  parameters: {
    code: fillColorCode,
  },
};

export const InArrayFillColor: Story = {
  render: () => (
    <Mapper
      customType="fill"
      TopComponent={() =>
        TopComponent(
          'Fill Color based on Area JSON Example',
          <p>
            In this example, the <span className="tag">fillColor</span> property is available in{' '}
            <span className="tag">areas</span> JSON, that&apos;s why it&apos;s applying{' '}
            <span className="tag">fillColor</span> from JSON and we can see different{' '}
            <span className="tag">fillColor</span> for different <span className="tag">areas</span>.
          </p>,
        )
      }
    />
  ),
  parameters: {
    code: inArrayFillColorCode,
  },
};

export const DynamicFillColor: Story = {
  render: (args) => {
    const { fillColor } = args;

    return (
      <Mapper
        customJSON={0}
        customType="fill"
        fillColor={fillColor}
        TopComponent={() =>
          TopComponent(
            'Dynamic Fill Color Example',
            <p>
              In this example, you can access the storybook <span className="tag">control tab</span>{' '}
              to dynamically select <span className="tag">fillColor</span> property and change it
              according to your preference.
              <br />
              <br />
              <span className="block">
                Note: For better results you can decrease the opacity of the fillColor.
              </span>
            </p>,
          )
        }
      />
    );
  },
  parameters: {
    code: dynamicFillColorCode,
  },
  args: {
    fillColor: 'rgba(255, 255, 255, 0.5)',
  },
  argTypes: {
    fillColor: {
      control: 'color',
    },
  },
};

export const DynamicMixArrayFillColor: Story = {
  render: (args) => {
    const { fillColor } = args;

    return (
      <Mapper
        customJSON={1}
        customType="fill"
        fillColor={fillColor}
        TopComponent={() =>
          TopComponent(
            'Dynamic Mix Array Fill Color Example',
            <p>
              in case, if we want to <span className="tag">exclude</span> an area of an image from
              the <span className="tag">whole</span> image. For example, here we have excluded the{' '}
              <span className="tag">wall area</span>
              and any changes to the <span className="tag">fillcolor</span> property from the{' '}
              <span className="tag">control tab</span> would be only applied to the{' '}
              <span className="tag">wall area</span>.
              <br />
              <br />
              <span className="block">
                Note: <span className="tag">fillColor</span> property for the remaining area is
                already available in the JSON area
              </span>
            </p>,
          )
        }
      />
    );
  },
  parameters: {
    code: dynamicMixArrayFillColorCode,
  },
  args: {
    fillColor: 'rgba(255, 255, 255, 0.5)',
  },
  argTypes: {
    fillColor: {
      control: 'color',
    },
  },
};

export const StrokeColor: Story = {
  render: () => (
    <Mapper
      customJSON={0}
      customType="stroke"
      lineWidth={2}
      TopComponent={() =>
        TopComponent(
          'Default Stroke Color Example',
          <p>
            In this example, the <span className="tag">strokeColor</span> property is not available
            in <span className="tag">areas</span> JSON, that&apos;s why it&apos;s giving the default
            behavior of mapper by applying default <span className="tag">strokeColor</span>.
          </p>,
        )
      }
    />
  ),
  parameters: {
    code: strokeColorCode,
  },
};

export const InArrayStrokeColor: Story = {
  render: () => (
    <Mapper
      customType="stroke"
      lineWidth={2}
      TopComponent={() =>
        TopComponent(
          'Stroke Color based on Area JSON Example',
          <p>
            In this example, the <span className="tag">strokeColor</span> property is available in{' '}
            <span className="tag">areas</span> JSON, that&apos;s why it&apos;s applying{' '}
            <span className="tag">strokeColor</span> from JSON.
          </p>,
        )
      }
    />
  ),
  parameters: {
    code: inArrayStrokeColorCode,
  },
};

export const DynamicStrokeColor: Story = {
  render: (args) => {
    const { strokeColor, lineWidth } = args;

    return (
      <Mapper
        customJSON={0}
        customType="stroke"
        lineWidth={lineWidth}
        strokeColor={strokeColor}
        TopComponent={() =>
          TopComponent(
            'Dynamic Stroke Color Example',
            <p>
              In this example, you can access the storybook <span className="tag">control tab</span>{' '}
              to dynamically select <span className="tag">strokeColor</span>,{' '}
              <span className="tag">lineWidth</span> properties and change it according to your
              preference.
            </p>,
          )
        }
      />
    );
  },
  parameters: {
    code: dynamicStrokeColorCode,
  },
  args: {
    strokeColor: 'rgba(0, 0, 0, 0.5)',
    lineWidth: 1,
  },
  argTypes: {
    strokeColor: {
      control: 'color',
    },
    lineWidth: {
      control: 'number',
    },
  },
};

export const DynamicMixArrayStrokeColor: Story = {
  render: (args) => {
    const { strokeColor, lineWidth } = args;

    return (
      <Mapper
        customJSON={1}
        customType="stroke"
        lineWidth={lineWidth}
        strokeColor={strokeColor}
        TopComponent={() =>
          TopComponent(
            'Dynamic Mix Array Stroke Color Example',
            <p>
              in case, if we want to <span className="tag">exclude</span> an area of an image from
              the <span className="tag">whole</span> image. For example, here we have excluded the{' '}
              <span className="tag">wall area</span>
              and any changes to the <span className="tag">strokeColor</span> property from the{' '}
              <span className="tag">control tab</span> would be only applied to the{' '}
              <span className="tag">wall area</span>. Here, if you did any changes to the{' '}
              <span className="tag">lineWidth</span> property from the{' '}
              <span className="tag">control tab</span> would be applied to every area.
              <br />
              <br />
              <span className="block">
                Note: <span className="tag">strokeColor</span> property for the remaining area is
                already available in the JSON area
              </span>
            </p>,
          )
        }
      />
    );
  },
  parameters: {
    code: dynamicMixArrayStrokeColorCode,
  },
  args: {
    strokeColor: 'rgba(0, 0, 0, 0.5)',
    lineWidth: 1,
  },
  argTypes: {
    strokeColor: {
      control: 'color',
    },
    lineWidth: {
      control: 'number',
    },
  },
};

export default meta;
