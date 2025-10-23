import type { HTMLProps, MouseEvent, Ref, TouchEvent } from 'react';

import type { ConditionalKeys, NoUndefinedField } from '@/@types/lib';

export interface Refs {
  containerRef: HTMLDivElement | null;
  imgRef: HTMLImageElement | null;
  canvasRef: HTMLCanvasElement | null;
}

export interface RefProperties {
  getRefs: () => Refs;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface OverrideMapArea {}

export interface MapArea extends OverrideMapArea {
  id: string;
  shape: string;
  coords: number[];
  active?: boolean;
  disabled?: boolean;
  href?: string;
  fillColor?: string;
  strokeColor?: string;
  lineWidth?: number;
  preFillColor?: string;
}

type RequiredMapArea = 'active' | 'fillColor' | 'lineWidth' | 'strokeColor';
type RequiredArea<T extends MapArea = MapArea, R extends keyof T = RequiredMapArea> = Omit<T, R> &
  Pick<NoUndefinedField<T>, R>;

export interface Area extends RequiredArea {
  scaledCoords: number[];
  center: [number, number];
}

export interface WidthHeight {
  width: number;
  height: number;
}

export type Dimension = number | ((event: HTMLImageElement) => number);

export type ContainerProps = Omit<HTMLProps<HTMLDivElement>, 'ref' | 'id'> | null;
export type ImgProps = Omit<
  HTMLProps<HTMLImageElement>,
  'ref' | 'src' | 'useMap' | 'onClick' | 'onMouseMove'
> | null;
export type CanvasProps = Omit<HTMLProps<HTMLCanvasElement>, 'ref'> | null;
export type MapProps = Omit<HTMLProps<HTMLMapElement>, 'name'> | null;
export type AreaProps = Omit<
  HTMLProps<HTMLAreaElement>,
  | 'key'
  | 'coords'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'onMouseMove'
  | 'onMouseDown'
  | 'onMouseUp'
  | 'onTouchStart'
  | 'onTouchEnd'
  | 'onClick'
> | null;

export type AreaTouchEvent = TouchEvent<HTMLAreaElement>;
export type AreaMouseEvent = MouseEvent<HTMLAreaElement>;
export type ImageMouseEvent = MouseEvent<HTMLImageElement>;

export type ChangeEventHandler = ((selectedArea: MapArea, areas: MapArea[]) => void) | null;
export type ImageEventHandler = ((event: ImageMouseEvent) => void) | null;
export type EventHandler<T = AreaMouseEvent> =
  | ((area: MapArea, index: number, e: T) => void)
  | null;
export type LoadEventHandler = ((event: HTMLImageElement, dimensions: WidthHeight) => void) | null;

interface ImageMapperProperties {
  src: string;
  name: string;
  areas: MapArea[];
  areaKeyName?: ConditionalKeys<MapArea, string>;
  isMulti?: boolean;
  toggle?: boolean;
  active?: boolean;
  disabled?: boolean;
  fillColor?: string;
  strokeColor?: string;
  lineWidth?: number;
  imgWidth?: number;
  width?: Dimension;
  height?: Dimension;
  natural?: boolean;
  responsive?: boolean;
  parentWidth?: number;
}

interface ImageMapperElementProps {
  containerProps?: ContainerProps;
  imgProps?: ImgProps;
  canvasProps?: CanvasProps;
  mapProps?: MapProps;
  areaProps?: AreaProps | AreaProps[];
}

interface ImageMapperListeners {
  onChange?: ChangeEventHandler;
  onImageClick?: ImageEventHandler;
  onImageMouseMove?: ImageEventHandler;
  onClick?: EventHandler;
  onMouseDown?: EventHandler;
  onMouseUp?: EventHandler;
  onTouchStart?: EventHandler<AreaTouchEvent>;
  onTouchEnd?: EventHandler<AreaTouchEvent>;
  onMouseMove?: EventHandler;
  onMouseEnter?: EventHandler;
  onMouseLeave?: EventHandler;
  onLoad?: LoadEventHandler;
}

export type ImageMapperProps = ImageMapperProperties &
  ImageMapperElementProps &
  ImageMapperListeners;

export interface ImageMapperPropsWithRef extends ImageMapperProps {
  ref?: Ref<RefProperties>;
}
