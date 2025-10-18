## 2.0.1 (2025-10-18)

### 🚨 Breaking Change

- Monorepo introduced

### 🚀 Features

- **react-docs:** Upgrade storybook to latest and improve the code.

### 🩹 Fixes

- **react-img-mapper:** Fixed #96 issue 

### ❤️ Thank You

@sheepysheepy

## 2.0.0 (2025-01-26)

### 🚨 Breaking Change

- **react-img-mapper:** Wrote a library from scratch.
- **react-img-mapper:** `map.name` prop changed to `name`.
- **react-img-mapper:** `map.areas` prop changed to `areas`.
- **react-img-mapper:** `containerRef` prop removed, you can directly use `ref` instead.
- **react-img-mapper:** `stayHighlighted` prop changed to `isMulti: false`.
- **react-img-mapper:** `stayMultiHighlighted` prop changed to `isMulti: true`.
- **react-img-mapper:** `toggleHighlighted` prop changed to `toggle: true`.
- **react-img-mapper:** `rerenderProps` prop removed.
- **react-img-mapper:** `clearHighlightedArea` method removed.
- **react-img-mapper:** Typescript types are changed
  - `MapAreas` changed to `MapArea`
  - `CustomArea` changed to `Area`

### 🚀 Features

- **react-img-mapper:** React 19 upgrade added.
- **react-img-mapper:** Converted non-controllable manner functionality to a controllable manner.
- **react-img-mapper:** Typescript Reformatted.
- **react-img-mapper:** New Utilities files added.
- **react-img-mapper:** Removed `yarn` and added `pnpm`.

### 🩹 Fixes

- **react-img-mapper:** Fixed #66 issue 
- **react-img-mapper:** Fixed #76 issue
- **react-img-mapper:** Fixed #83 issue

### ❤️ Thank You

- Ethan Carlson @ethan-carlson
- Melih Çoban @melihcoban
- @sheepysheepy

## 1.5.0 (2023-02-14)

### 🚨 Breaking Change

- **react-img-mapper:** Fully Compatible with Next.js.

### 🚀 Features

- **react-img-mapper:** Added different classnames for highlighted areas.
  - The highlighted area will have `img-mapper-area-highlighted` classname in their area tag.
- **react-img-mapper:** Upgrade to React V18 Peer Dep.

### 🩹 Fixes

- **react-img-mapper:** Removed the previously highlighted area when you click on the new highlighted area when stayHighlighted is applied (https://github.com/img-mapper/react-img-mapper/issues/53).
- **react-img-mapper:** Area JSON preFillColor will not remove when the toggleHighlighted property is applied.
- **react-img-mapper:** Fixed infinity coords issue (https://github.com/img-mapper/react-img-mapper/issues/42).
- **react-img-mapper:** Fixed canvas height and width issue (https://github.com/img-mapper/react-img-mapper/issues/43).

### ❤️ Thank You

- Anders Weinstein @andersweinstein
- Alba Mateos @albmat
- GAURAV YADAV @DVGY

## 1.4.0 (2022-03-06)

### 🩹 Fixes

- **react-img-mapper:** Resolved `onLoad` issue for Next.js.

## 1.3.0

### ⚠️ Deprecated

## 1.2.0 (2021-07-12)

### 🚀 Features

- **react-img-mapper:** Compatible with CommonJS.

## 1.1.0 (2021-03-29)

### 🚀 Features

- **react-img-mapper:** Added Disabled Property in Area.
- **react-img-mapper:** Added Disabled and Active Properties In JSON example.

## 1.0.0 (2021-03-21)

### 🚨 Breaking Change

- **react-img-mapper:** Built in TypeScript.

## 0.5.0 (2021-02-13)

### 🚨 Breaking Change

- Shifted to new organization `img-mapper`.

### 🚀 Features

- **react-docs:** Added every property & method example with the code in documentation.
- **react-img-mapper:** Removed Documentation from the package and shifted to another repo.

## 0.4.0 (2021-01-23)

### 🚀 Features

- **react-docs:** Storybook documentation added.

### 🩹 Fixes

- **react-img-mapper:** Internal bugs fixed.

## 0.3.0 (2021-01-22)

### 🚀 Features

- **react-img-mapper:** Added highlighted map after clicking on the image.
- **react-img-mapper:** Added a responsive image mapper.
- **react-img-mapper:** Added Image Reference in Width, Height, and onLoad function to access image properties.
- **react-img-mapper:** Added rerenderProps prop.

## 0.2.0 (2021-01-10)

### 🚀 Features

- **react-img-mapper:** Added Natural Dimensions options ( For Network Image ).
- **react-img-mapper:** Added Babel & ESLint in the example folder, for better formatting and creating compiled files.

## 0.1.0 (2021-01-10)

### 🚀 Features

- **react-img-mapper:** Decreased size of bundled.
- **react-img-mapper:** Compatible for NPM.
