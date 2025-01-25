import React, { useState, useRef } from 'react';
import Mapper from './components/Mapper';
import { TopComponent } from './codes/common';
import {
  showHighlightedArea,
  inArrayShowHighlightedArea,
  disabledArea,
  inArrayDisabledArea,
  staySelectedHighlightedArea,
  stayMultipleSelectedHighlightedArea,
  clearSelectedHighlightedArea,
  toggleStayHighlightedArea,
  zoomInZoomOutArea,
} from './codes/areas';

const Area = {
  title: 'Examples/Area',
  component: Mapper,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

// 1 => ShowHighlightedArea
export const ShowHighlightedArea = args => (
  <Mapper
    active={args.active}
    TopComponent={() =>
      TopComponent(
        'Show Highlighted Area Example',
        <p>
          In this example, you have access to the storybook <span className="tag">control tab</span>{' '}
          to dynamically choose if you wish to <span className="tag">hide/see</span> the highlight
          area according to your preference with the help of <span className="tag">active</span>{' '}
          toggle button.
        </p>
      )
    }
  />
);

ShowHighlightedArea.parameters = {
  code: showHighlightedArea,
};

ShowHighlightedArea.args = {
  active: true,
};

ShowHighlightedArea.argTypes = {
  active: { control: 'boolean' },
};

// 2 => InArrayShowHighlightedArea
export const InArrayShowHighlightedArea = () => (
  <Mapper
    customType="active"
    customJSON={2}
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
        </p>
      )
    }
  />
);

InArrayShowHighlightedArea.parameters = {
  code: inArrayShowHighlightedArea,
};

// 3 => DisabledArea
export const DisabledArea = args => (
  <Mapper
    disabled={args.disabled}
    TopComponent={() =>
      TopComponent(
        'Disabled Area Example',
        <p>
          In this example, you have access to the storybook <span className="tag">control tab</span>{' '}
          to dynamically choose if you wish to <span className="tag">disable/enable</span> the
          listeners and highlight area according to your preference with the help of{' '}
          <span className="tag">disabled</span> toggle button.
        </p>
      )
    }
  />
);

DisabledArea.parameters = {
  code: disabledArea,
};

DisabledArea.args = {
  disabled: false,
};

DisabledArea.argTypes = {
  disabled: { control: 'boolean' },
};

// 4 => InArrayDisabledArea
export const InArrayDisabledArea = () => (
  <Mapper
    customType="disabled"
    customJSON={2}
    TopComponent={() =>
      TopComponent(
        'Disabled Area Example Based on Area JSON',
        <p>
          in case, if we want to <span className="tag">disable/enable</span> an area of an image
          from the <span className="tag">whole</span> image. For example, here we have excluded the{' '}
          <span className="tag">window</span> and <span className="tag">refrigerator</span>{' '}
          <span className="tag">areas</span>
          <br />
          <br />
          <span className="block">
            Note: default is <span className="tag">false</span> for{' '}
            <span className="tag">disabled</span> property for the remaining area
          </span>
        </p>
      )
    }
  />
);

InArrayDisabledArea.parameters = {
  code: inArrayDisabledArea,
};

// 5 => StaySelectedHighlightedArea
export const StaySelectedHighlightedArea = args => (
  <Mapper
    stayHighlighted={args.stayHighlighted}
    TopComponent={() =>
      TopComponent(
        'Stay Selected Highlighted Area Example',
        <p>
          In this example, if you set the storybook <span className="tag">control tabs</span> -{' '}
          <span className="tag">stayHighlighted</span> to true, you can{' '}
          <span className="tag">freeze</span> the <span className="tag">area</span> you want to keep
          <span className="tag">highlighted</span>, just by clicking and you can still be able to
          highlight the <span className="tag">remaining</span> area on hover.
        </p>
      )
    }
  />
);

StaySelectedHighlightedArea.parameters = {
  code: staySelectedHighlightedArea,
};

StaySelectedHighlightedArea.args = {
  stayHighlighted: true,
};

StaySelectedHighlightedArea.argTypes = {
  stayHighlighted: { control: 'boolean' },
};

// 6 => StayMultipleSelectedHighlightedArea
export const StayMultipleSelectedHighlightedArea = args => (
  <Mapper
    stayMultiHighlighted={args.stayMultiHighlighted}
    TopComponent={() =>
      TopComponent(
        'Stay Multiple Selected Highlighted Area Example',
        <p>
          This example is similar to <span className="tag">stayHighlighted</span> property, the only
          additional feature is you can freeze <span className="tag">multiple</span> highlighted
          areas.
        </p>
      )
    }
  />
);

StayMultipleSelectedHighlightedArea.parameters = {
  code: stayMultipleSelectedHighlightedArea,
};

StayMultipleSelectedHighlightedArea.args = {
  stayMultiHighlighted: true,
};

StayMultipleSelectedHighlightedArea.argTypes = {
  stayMultiHighlighted: { control: 'boolean' },
};

// 7 => ClearMultipleSelectedHighlightedArea
export const ClearSelectedHighlightedArea = args => {
  const myRef = useRef(null);

  const callingMe = () => {
    myRef.current.clearHighlightedArea();
  };

  return (
    <Mapper
      containerRef={myRef}
      stayMultiHighlighted
      TopComponent={() =>
        TopComponent(
          'Stay Selected Highlighted Area Example',
          <p>
            You can clear the <span className="tag">single/multiple</span> selected highlighted area
            by calling <span className="tag">myRef.current.clearHighlightedArea()</span>, you can
            press the below button to see the <span className="tag">live</span> results in image
            mapper
            <br />
            <br />
            <button type="button" onClick={callingMe}>
              Clear
            </button>
          </p>
        )
      }
    />
  );
};

ClearSelectedHighlightedArea.parameters = {
  code: clearSelectedHighlightedArea,
};

// 8 => ToggleStayHighlightedArea
export const ToggleStayHighlightedArea = args => (
  <Mapper
    stayHighlighted={args.stayHighlighted}
    stayMultiHighlighted={args.stayMultiHighlighted}
    toggleHighlighted={args.toggleHighlighted}
    TopComponent={() =>
      TopComponent(
        'Toggle Stay Highlighted Area Example',
        <p>
          In this example, a new feature of <span className="tag">toggleHighlighted</span> property
          is added which will be used to <span className="tag">toggle</span> freezed highlighted
          area.
          <br />
          <br />
          <span className="block">
            Note: <span className="tag">toggleHighlighted</span> property will work only if one of
            the <span className="tag">stayHighlighted</span> or{' '}
            <span className="tag">stayMultiHighlighted</span> is true.
          </span>
        </p>
      )
    }
  />
);

ToggleStayHighlightedArea.parameters = {
  code: toggleStayHighlightedArea,
};

ToggleStayHighlightedArea.args = {
  stayHighlighted: true,
  stayMultiHighlighted: false,
  toggleHighlighted: true,
};

ToggleStayHighlightedArea.argTypes = {
  stayHighlighted: { control: 'boolean' },
  stayMultiHighlighted: { control: 'boolean' },
  toggleHighlighted: { control: 'boolean' },
};

// 9 => ZoomInZoomOutArea
export const ZoomInZoomOutArea = args => {
  const minWidth = 400;
  const [zoom, setZoom] = useState(640);

  const handleZoom = type => {
    setZoom(prev => {
      if (prev <= minWidth && type === 'out') return prev;
      return type === 'in' ? prev + args.zoomWidth : prev - args.zoomWidth;
    });
  };

  return (
    <Mapper
      responsive
      parentWidth={zoom}
      TopComponent={() =>
        TopComponent(
          'Zoom In & Zoom Out Area',
          <p>
            In this example, Zoom is based on the <span className="tag">zoomWidth</span> that you
            can change by the <span className="tag">control tab</span>, you can press the below
            buttons to see the <span className="tag">live</span> results in image mapper
            <br />
            <br />
            <button style={{ marginRight: 8 }} type="button" onClick={() => handleZoom('in')}>
              Zoom In
            </button>
            <button type="button" onClick={() => handleZoom('out')}>
              Zoom Out
            </button>
          </p>
        )
      }
    />
  );
};

ZoomInZoomOutArea.parameters = {
  code: zoomInZoomOutArea,
};

ZoomInZoomOutArea.args = {
  zoomWidth: 100,
};

ZoomInZoomOutArea.argTypes = {
  zoomWidth: { control: 'number' },
};

export default Area;
