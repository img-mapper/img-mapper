import Mapper from '@/components/Mapper';
import TopComponent from '@/components/TopComponent';
import {
  nonResponsiveDimensionsCode,
  responsiveDimensionsCode,
  allDimensionsCode,
} from '@/code/map';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Examples/Responsive Map',
  component: Mapper,
  tags: ['autodocs'],
} satisfies Meta<typeof Mapper>;

type Story = StoryObj<typeof meta>;

export const NonResponsiveDimensions: Story = {
  render: (args) => {
    const { width, height, imgWidth, natural } = args;

    return (
      <Mapper
        width={width}
        height={height}
        imgWidth={imgWidth}
        natural={natural}
        TopComponent={() =>
          TopComponent(
            'Non Responsive Dimensions Example',
            <p>
              In this example, <span className="tag">width</span>,{' '}
              <span className="tag">height</span>, <span className="tag">imgWidth</span>, and{' '}
              <span className="tag">natural</span> properties are available in the storybook{' '}
              <span className="tag">controls tab</span>, you can change it and see the{' '}
              <span className="tag">live</span> results in the image mapper.
              <br />
              <br />
              By applying different values in different fields, you will notice that making the img
              mapper <span className="tag">responsive</span> is difficult.
              <br />
              <br />
              <span className="block">
                Note: All the properties description and what it does it's available in{' '}
                <span className="tag">react img mapper</span> Github repo.
              </span>
            </p>,
          )
        }
      />
    );
  },
  parameters: {
    code: nonResponsiveDimensionsCode,
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
              In this example, <span className="tag">responsive</span> and{' '}
              <span className="tag">parentWidth</span>
              property is available in the storybook <span className="tag">controls tab</span>, you
              can change it and see the <span className="tag">live</span> results in the image
              mapper
              <br />
              <br />
              By applying different values in <span className="tag">parentWidth</span> field, you
              will think, it's already responsive, lets copy the code and see the results, kudos!!
              <br />
              <br />
              <span className="block">
                Note: All the properties description and what it does it's available in{' '}
                <span className="tag">react img mapper</span> Github repo.
              </span>
            </p>,
          )
        }
      />
    );
  },
  parameters: {
    code: responsiveDimensionsCode,
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
        width={width}
        height={height}
        imgWidth={imgWidth}
        natural={natural}
        responsive={responsive}
        parentWidth={parentWidth}
        TopComponent={() =>
          TopComponent(
            'All Dimensions Example',
            <p>
              All the fields description and what they do it's available in the{' '}
              <span className="tag">react img mapper</span> GitHub repository.
              <br />
              <br />
              In this example, <span className="tag">width</span>,{' '}
              <span className="tag">height</span>, <span className="tag">imgWidth</span>,{' '}
              <span className="tag">natural</span>, <span className="tag">responsive</span>, and{' '}
              <span className="tag">parentWidth</span>
              field is available in the storybook <span className="tag">controls tab</span>, you can
              change it and see the <span className="tag">live</span> results in the image mapper
              <br />
              <br />
              It's is a mixture of all responsive & non-responsive properties, have fun.
            </p>,
          )
        }
      />
    );
  },
  parameters: {
    code: allDimensionsCode,
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
