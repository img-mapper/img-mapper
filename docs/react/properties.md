# Properties {#properties}

Together, below sections let you fully control the component, customize its behavior and appearance, handle user interactions, configure individual areas, and access internal function references via React refs.

## Component Properties {#component-properties}

Configure the main behavior, appearance, and responsiveness of the component.

| Prop             | Type                       | Description                                                | Default                    |
| ---------------- | -------------------------- | ---------------------------------------------------------- | -------------------------- |
| `src`            | string                     | Image URL to display                                       | **required**               |
| `name`           | string                     | Unique map name associated with the image                  | **required**               |
| `areas`          | array                      | Array of area objects (see **Area Properties**)            | **required**               |
| `areaKeyName`    | string                     | Key used to uniquely identify areas                        | `id`                       |
| `isMulti`        | bool                       | Allows multiple areas to be selected                       | `true`                     |
| `toggle`         | bool                       | Enables toggling selection on click                        | `false`                    |
| `active`         | bool                       | Enables area listeners and highlighting                    | `true`                     |
| `disabled`       | bool                       | Disables highlighting and interactions                     | `false`                    |
| `fillColor`      | string                     | Highlight fill color                                       | `rgba(255, 255, 255, 0.5)` |
| `strokeColor`    | string                     | Highlight border color                                     | `rgba(0, 0, 0, 0.5)`       |
| `lineWidth`      | number                     | Border thickness of highlighted zones                      | `1`                        |
| `imgWidth`       | number                     | Original width of the image                                | `0`                        |
| `width`          | number \| (func => number) | Image width (can be use as a function for dynamic sizing)  | `0`                        |
| `height`         | number \| (func => number) | Image height (can be use as a function for dynamic sizing) | `0`                        |
| `natural`        | bool                       | Use the image's original dimensions                        | `false`                    |
| `responsive`     | bool                       | Enable responsive scaling (requires `parentWidth`)         | `false`                    |
| `parentWidth`    | number                     | Max width of parent container                              | `0`                        |
| `containerProps` | object                     | Props for the wrapping `<div>`                             | `null`                     |
| `imgProps`       | object                     | Props for the `<img>` element                              | `null`                     |
| `canvasProps`    | object                     | Props for the `<canvas>` element                           | `null`                     |
| `mapProps`       | object                     | Props for the `<map>` element                              | `null`                     |
| `areaProps`      | object \| array            | Props for `<area>` elements                                | `null`                     |

## Callbacks {#callbacks}

Handle user interactions, such as clicks, hovers, and touch events on the mapped areas or image.

| Callback           | Trigger                           | Signature                       |
| ------------------ | --------------------------------- | ------------------------------- |
| `onChange`         | Click on an area                  | `(selectedArea, areas) => void` |
| `onImageClick`     | Click outside mapped areas        | `(event) => void`               |
| `onImageMouseMove` | Mouse move over the image         | `(event) => void`               |
| `onClick`          | Click on a mapped area            | `(area, index, event) => void`  |
| `onMouseDown`      | Mouse down on area                | `(area, index, event) => void`  |
| `onMouseUp`        | Mouse up on area                  | `(area, index, event) => void`  |
| `onTouchStart`     | Touch start on area               | `(area, index, event) => void`  |
| `onTouchEnd`       | Touch end on area                 | `(area, index, event) => void`  |
| `onMouseMove`      | Mouse move over area              | `(area, index, event) => void`  |
| `onMouseEnter`     | Hover over area                   | `(area, index, event) => void`  |
| `onMouseLeave`     | Leave area                        | `(area, index, event) => void`  |
| `onLoad`           | Image loaded & canvas initialized | `(event, dimensions) => void`   |

## Methods {#methods}

Retrieve internal function references through React refs for advanced control.

| Method    | Description                                                |
| --------- | ---------------------------------------------------------- |
| `getRefs` | Returns refs for the container, canvas, and image elements |

---

## Area Properties {#area-properties}

Define individual area shapes, coordinates, styling, and interaction behavior within the image map.

| Property       | Type     | Description                                                                                                                                                                                                                                      | Default                    |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| `id`           | string   | Unique identifier; defaults to index if not provided. This can be customized using the `areaKeyName` property.                                                                                                                                   | based on `areaKeyName`     |
| `shape`        | string   | Shape: `rect`, `circle`, `poly`                                                                                                                                                                                                                  | **required**               |
| `coords`       | string[] | Coordinates for the area: <ul><li>**rect**: `top-left-X, top-left-Y, bottom-right-X, bottom-right-Y`</li><li>**circle**: `center-X, center-Y, radius`</li><li>**poly**: List of points defining the polygon as `point-X, point-Y, ...`</li></ul> | **required**               |
| `active`       | bool     | Enables area listeners and highlighting                                                                                                                                                                                                          | `true`                     |
| `disabled`     | bool     | Disables highlighting and interactions                                                                                                                                                                                                           | `false`                    |
| `href`         | string   | Target link for area clicks, ignored if `onClick` exists                                                                                                                                                                                         | `undefined`                |
| `fillColor`    | string   | Highlight fill color                                                                                                                                                                                                                             | `rgba(255, 255, 255, 0.5)` |
| `strokeColor`  | string   | Highlight border color                                                                                                                                                                                                                           | `rgba(0, 0, 0, 0.5)`       |
| `lineWidth`    | number   | Border thickness of highlighted zones                                                                                                                                                                                                            | `1`                        |
| `preFillColor` | string   | Pre-filled highlight color                                                                                                                                                                                                                       | `undefined`                |

Additional properties available when triggered via an event:

| Property       | Type     | Description                                |
| -------------- | -------- | ------------------------------------------ |
| `scaledCoords` | number[] | Coordinates adjusted to current image size |
| `center`       | number[] | Centroid coordinates `[X, Y]` of the area  |
