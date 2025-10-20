import {
  allDimensionsCode,
  nonResponsiveDimensionsCode,
  responsiveDimensionsCode,
} from '@/code/map';
import Mapper from '@/components/Mapper';
import TopComponent from '@/components/TopComponent';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Examples/Responsive Map',
  component: Mapper,
  tags: ['autodocs'],
} as Meta<typeof Mapper>;

type Story = StoryObj<typeof meta>;

export const NonResponsiveDimensions: Story = {
  render: (args) => {
    const { width, height, imgWidth, natural } = args;

    return (
      <Mapper
        height={height}
        imgWidth={imgWidth}
        natural={natural}
        width={width}
        TopComponent={() =>
          TopComponent(
            'Non Responsive Dimensions Example',
            <p>
              In this example, the <span className="tag">width</span>,{' '}
              <span className="tag">height</span>,<span className="tag">imgWidth</span>, and{' '}
              <span className="tag">natural</span> properties are available in the Storybook{' '}
              <span className="tag">Controls</span> tab. You can adjust them to see the{' '}
              <span className="tag">live</span> results in the image mapper.
              <br />
              <br />
              Experimenting with different values in these fields highlights that making the image
              mapper fully <span className="tag">responsive</span> can be challenging.
              <br />
              <br />
              <span className="block note">
                Note: Full descriptions and explanations of all properties are available in the
                GitHub repository.
              </span>
            </p>,
          )
        }
      />
    );
  },
  parameters: {
    reactCode: nonResponsiveDimensionsCode,
  },
  args: {
    width: 640,
    height: 480,
    imgWidth: 0,
    natural: false,
  },
  argTypes: {
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
    imgWidth: {
      control: 'number',
    },
    natural: {
      control: 'boolean',
    },
  },
};

export const ResponsiveDimensions: Story = {
  render: (args) => {
    const { parentWidth } = args;

    return (
      <Mapper
        responsive
        parentWidth={parentWidth}
        TopComponent={() =>
          TopComponent(
            'Responsive Dimensions Example',
            <p>
              In this example, the <span className="tag">responsive</span> and{' '}
              <span className="tag">parentWidth</span>
              properties are available in the Storybook <span className="tag">Controls</span> tab.
              You can adjust them to see the <span className="tag">live</span> results in the image
              mapper.
              <br />
              <br />
              By experimenting with different values for <span className="tag">parentWidth</span>,
              you&apos;ll notice that the mapper becomes responsive. Try copying the code and see
              the results, kudos!
              <br />
              <br />
              <span className="block note">
                Note: Full descriptions and explanations of all properties are available in the
                GitHub repository.
              </span>
            </p>,
          )
        }
      />
    );
  },
  parameters: {
    reactCode: responsiveDimensionsCode,
  },
  args: {
    parentWidth: 640,
  },
  argTypes: {
    parentWidth: {
      control: 'number',
    },
  },
};

export const AllDimensions: Story = {
  render: (args) => {
    const { width, height, imgWidth, natural, responsive, parentWidth } = args;

    return (
      <Mapper
        height={height}
        imgWidth={imgWidth}
        natural={natural}
        parentWidth={parentWidth}
        responsive={responsive}
        width={width}
        TopComponent={() =>
          TopComponent(
            'All Dimensions Example',
            <p>
              In this example, the <span className="tag">width</span>,{' '}
              <span className="tag">height</span>,<span className="tag">imgWidth</span>,{' '}
              <span className="tag">natural</span>,<span className="tag">responsive</span>, and{' '}
              <span className="tag">parentWidth</span> fields are available in the Storybook{' '}
              <span className="tag">Controls</span> tab. You can modify them to see the{' '}
              <span className="tag">live</span> results in the image mapper.
              <br />
              <br />
              This example combines all responsive and non-responsive properties, have fun
              experimenting!
              <br />
              <br />
              <span className="block note">
                Note: Full descriptions and explanations of all properties are available in the
                GitHub repository.
              </span>
            </p>,
          )
        }
      />
    );
  },
  parameters: {
    reactCode: allDimensionsCode,
  },
  args: {
    width: 640,
    height: 480,
    imgWidth: 0,
    natural: false,
    responsive: false,
    parentWidth: 640,
  },
  argTypes: {
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
    imgWidth: {
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
