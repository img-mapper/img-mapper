import {
  clearSelectedHighlightedAreaCode,
  disabledAreaCode,
  inArrayDisabledAreaCode,
  inArrayShowHighlightedAreaCode,
  showHighlightedAreaCode,
  stayMultipleSelectedHighlightedAreaCode,
  staySelectedHighlightedAreaCode,
  toggleStayHighlightedAreaCode,
  zoomInZoomOutAreaCode,
} from '@/code/areas';
import Mapper from '@/components/Mapper';
import TopComponent from '@/components/TopComponent';
import ZoomInZoomOutAreaComp from '@/components/ZoomInZoomOutAreaComp';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Examples/Area',
  component: Mapper,
  tags: ['autodocs'],
} as Meta<typeof Mapper>;

type Story = StoryObj<typeof meta>;

export const ShowHighlightedArea: Story = {
  render: (args) => {
    const { active } = args;

    return (
      <Mapper
        active={active}
        TopComponent={() =>
          TopComponent(
            'Show Highlighted Area Example',
            <p>
              In this example, you have access to the storybook{' '}
              <span className="tag">control tab</span> to dynamically choose if you wish to{' '}
              <span className="tag">hide/see</span> the highlight area according to your preference
              with the help of <span className="tag">active</span> toggle button.
            </p>,
          )
        }
      />
    );
  },
  parameters: {
    code: showHighlightedAreaCode,
  },
  args: {
    active: true,
  },
  argTypes: {
    active: {
      control: 'boolean',
    },
  },
};

export const InArrayShowHighlightedArea: Story = {
  render: () => (
    <Mapper
      customJSON={2}
      customType="active"
      TopComponent={() =>
        TopComponent(
          'Show Highlighted Area Example Based on Area JSON',
          <p>
            in case, if we want to <span className="tag">hide/see</span> an{' '}
            <span className="tag">active</span> area of an image from the{' '}
            <span className="tag">whole</span> image. For example, here we have excluded the{' '}
            <span className="tag">window</span> and <span className="tag">refrigerator</span>{' '}
            <span className="tag">areas</span>
            <br />
            <br />
            <span className="block">
              Note: default is <span className="tag">true</span> for{' '}
              <span className="tag">active</span> property for the remaining area
            </span>
          </p>,
        )
      }
    />
  ),
  parameters: {
    code: inArrayShowHighlightedAreaCode,
  },
};

export const DisabledArea: Story = {
  render: (args) => {
    const { disabled } = args;

    return (
      <Mapper
        disabled={disabled}
        TopComponent={() =>
          TopComponent(
            'Disabled Area Example',
            <p>
              In this example, you have access to the storybook{' '}
              <span className="tag">control tab</span> to dynamically choose if you wish to{' '}
              <span className="tag">disable/enable</span> the listeners and highlight area according
              to your preference with the help of <span className="tag">disabled</span> toggle
              button.
            </p>,
          )
        }
      />
    );
  },
  parameters: {
    code: disabledAreaCode,
  },
  args: {
    disabled: true,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};

export const InArrayDisabledArea: Story = {
  render: () => (
    <Mapper
      customJSON={2}
      customType="disabled"
      TopComponent={() =>
        TopComponent(
          'Disabled Area Example Based on Area JSON',
          <p>
            in case, if we want to <span className="tag">disable/enable</span> an area of an image
            from the <span className="tag">whole</span> image. For example, here we have excluded
            the <span className="tag">window</span> and <span className="tag">refrigerator</span>{' '}
            <span className="tag">areas</span>
            <br />
            <br />
            <span className="block">
              Note: default is <span className="tag">false</span> for{' '}
              <span className="tag">disabled</span> property for the remaining area
            </span>
          </p>,
        )
      }
    />
  ),
  parameters: {
    code: inArrayDisabledAreaCode,
  },
};

export const StaySelectedHighlightedArea: Story = {
  render: () => (
    <Mapper
      isOnChangeNeeded
      isMulti={false}
      TopComponent={() =>
        TopComponent(
          'Stay Selected Highlighted Area Example',
          <p>
            In this example, you can <span className="tag">freeze</span> the{' '}
            <span className="tag">area</span> you want to keep
            <span className="tag">highlighted</span>, just by clicking and you can still be able to
            highlight the <span className="tag">remaining</span> area on hover.
          </p>,
        )
      }
    />
  ),
  parameters: {
    code: staySelectedHighlightedAreaCode,
  },
};

export const StayMultipleSelectedHighlightedArea: Story = {
  render: () => (
    <Mapper
      isMulti
      isOnChangeNeeded
      TopComponent={() =>
        TopComponent(
          'Stay Multiple Selected Highlighted Area Example',
          <p>
            This example is similar to <span className="tag">Stay Selected Highlighted Area</span>{' '}
            section, the only additional feature is you can freeze{' '}
            <span className="tag">multiple</span> highlighted areas.
          </p>,
        )
      }
    />
  ),
  parameters: {
    code: stayMultipleSelectedHighlightedAreaCode,
  },
};

export const ClearSelectedHighlightedArea: Story = {
  render: () => (
    <Mapper
      isMulti
      isOnChangeNeeded
      TopComponent={({ resetAreas }) =>
        TopComponent(
          'Clear Selected Highlighted Area Example',
          <p>
            You can clear the <span className="tag">single/multiple</span> selected highlighted area
            by resetting your state to initial, you can press the below button to see the{' '}
            <span className="tag">live</span> results in image mapper
            <br />
            <br />
            <button onClick={resetAreas} type="button">
              Clear
            </button>
          </p>,
        )
      }
    />
  ),
  parameters: {
    code: clearSelectedHighlightedAreaCode,
  },
};

export const ToggleStayHighlightedArea: Story = {
  render: (args) => {
    const { isMulti, toggle } = args;

    return (
      <Mapper
        isOnChangeNeeded
        isMulti={isMulti}
        toggle={toggle}
        TopComponent={() =>
          TopComponent(
            'Toggle Stay Highlighted Area Example',
            <p>
              In this example, a new feature of <span className="tag">toggle</span> property is
              added which will be used to <span className="tag">toggle</span> freezed highlighted
              area.
              <br />
            </p>,
          )
        }
      />
    );
  },
  parameters: {
    code: toggleStayHighlightedAreaCode,
  },
  args: {
    isMulti: true,
    toggle: true,
  },
  argTypes: {
    isMulti: {
      control: 'boolean',
    },
    toggle: {
      control: 'boolean',
    },
  },
};

export const ZoomInZoomOutArea: Story = {
  render: ({ parentWidth }) => <ZoomInZoomOutAreaComp parentWidth={parentWidth} />,
  parameters: {
    code: zoomInZoomOutAreaCode,
  },
  args: {
    parentWidth: 100,
  },
  argTypes: {
    parentWidth: {
      control: 'number',
    },
  },
};

export default meta;
