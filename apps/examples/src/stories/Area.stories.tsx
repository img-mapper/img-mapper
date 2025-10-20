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
              In this example, you can use the Storybook <span className="tag">Controls</span> tab
              to dynamically choose whether to <span className="tag">show or hide</span> the
              highlighted areas using the
              <span className="tag">active</span> toggle button, based on your preference.
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
          'Show Highlighted Area from Area JSON Example',
          <p>
            This example demonstrates how to selectively <span className="tag">show or hide</span>
            <span className="tag">active</span> areas of an image. Here, the{' '}
            <span className="tag">window</span>
            and <span className="tag">refrigerator</span> <span className="tag">areas</span> are
            excluded from visibility.
            <br />
            <br />
            <span className="block note">
              <strong>Note:</strong> By default, the <span className="tag">active</span> property is
              set to
              <span className="tag">true</span> for the remaining areas.
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
              In this example, you can use the Storybook <span className="tag">Controls</span> tab
              to dynamically
              <span className="tag">enable or disable</span> event listeners and highlighted areas
              using the
              <span className="tag">disabled</span> toggle button, according to your preference.
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
          'Disabled Area from Area JSON Example',
          <p>
            This example demonstrates how to selectively{' '}
            <span className="tag">enable or disable</span>
            specific areas of an image. Here, the <span className="tag">window</span> and
            <span className="tag">refrigerator</span> <span className="tag">areas</span> are
            excluded from interaction.
            <br />
            <br />
            <span className="block note">
              <strong>Note:</strong> By default, the <span className="tag">disabled</span> property
              is set to
              <span className="tag">false</span> for the remaining areas.
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
            In this example, you can <span className="tag">freeze</span> specific{' '}
            <span className="tag">areas</span>
            to keep them <span className="tag">highlighted</span> by clicking, while still being
            able to highlight the <span className="tag">remaining</span> areas on hover.
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
            This example is similar to the{' '}
            <span className="tag">Stay Selected Highlighted Area</span> section, with the added
            feature of allowing you to freeze <span className="tag">multiple</span> highlighted
            areas simultaneously.
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
            You can clear the <span className="tag">single or multiple</span> selected highlighted
            areas by resetting the state to its initial value. Click the button below to see the
            changes
            <span className="tag">live</span> in the image mapper:
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
              This example introduces the <span className="tag">toggle</span> property, which allows
              you to
              <span className="tag">toggle</span> previously frozen highlighted areas on and off.
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
