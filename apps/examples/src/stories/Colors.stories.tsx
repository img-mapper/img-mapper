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
          'Fill Color Example',
          <p>
            In this example, the <span className="tag">fillColor</span> property is not defined in
            the
            <span className="tag">areas</span> JSON. As a result, the mapper uses its default
            <span className="tag">fillColor</span> behavior.
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
          'Fill Color from Area JSON Example',
          <p>
            In this example, the <span className="tag">fillColor</span> property is defined in the
            <span className="tag">areas</span> JSON. Therefore, the mapper applies the
            <span className="tag">fillColor</span> values from the JSON, resulting in different
            <span className="tag">fillColor</span> for each <span className="tag">area</span>.
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
              In this example, you can use the Storybook <span className="tag">Controls</span> tab
              to dynamically modify the <span className="tag">fillColor</span> property according to
              your preference.
              <br />
              <br />
              <span className="block note">
                <strong>Note:</strong> For better visual results, try reducing the opacity of the
                <span className="tag">fillColor</span>.
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
              In this example, we demonstrate how to <span className="tag">exclude</span> a specific
              area of an image from the <span className="tag">whole</span> mapping. Here, the{' '}
              <span className="tag">wall area</span>
              is excluded, any changes made to the <span className="tag">fillColor</span> property
              from the
              <span className="tag">Controls</span> tab will only apply to the{' '}
              <span className="tag">wall area</span>.
              <br />
              <br />
              <span className="block note">
                <strong>Note:</strong> The <span className="tag">fillColor</span> property for the
                remaining areas is already defined in the JSON data.
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
          'Stroke Color Example',
          <p>
            In this example, the <span className="tag">strokeColor</span> property is not defined in
            the
            <span className="tag">areas</span> JSON. Therefore, the mapper applies its default
            <span className="tag">strokeColor</span> behavior.
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
          'Stroke Color from Area JSON Example',
          <p>
            In this example, the <span className="tag">strokeColor</span> property is defined in the
            <span className="tag">areas</span> JSON. Hence, the mapper applies the
            <span className="tag">strokeColor</span> values directly from the JSON.
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
              In this example, you can use the Storybook <span className="tag">Controls</span> tab
              to dynamically adjust the <span className="tag">strokeColor</span> and{' '}
              <span className="tag">lineWidth</span> properties according to your preference.
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
              This example demonstrates how to <span className="tag">exclude</span> a specific area
              of an image from the <span className="tag">whole</span> mapping. Here, the{' '}
              <span className="tag">wall area</span>
              is excluded, so any changes to the <span className="tag">strokeColor</span> property
              from the
              <span className="tag">Controls</span> tab will only apply to the{' '}
              <span className="tag">wall area</span>. Changes to the{' '}
              <span className="tag">lineWidth</span> property, however, will be applied to all
              areas.
              <br />
              <br />
              <span className="block note">
                <strong>Note:</strong> The <span className="tag">strokeColor</span> for the
                remaining areas is already defined in the JSON data.
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
