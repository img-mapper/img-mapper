import type { HTMLAttributes, Ref } from 'vue';

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

export type ContainerProps = Omit<HTMLAttributes, 'id'> | null;
export type ImgProps = Omit<HTMLAttributes, 'src' | 'useMap'> | null;
export type CanvasProps = HTMLAttributes | null;
export type MapProps = Omit<HTMLAttributes, 'name'> | null;
export type AreaProps = Omit<HTMLAttributes, 'key' | 'coords'> | null;

export type AreaTouchEvent = TouchEvent;
export type AreaMouseEvent = MouseEvent;
export type ImageMouseEvent = MouseEvent;

export type ChangeEventHandler = [selectedArea: MapArea, areas: MapArea[]] | null;
export type ImageEventHandler = [event: ImageMouseEvent] | null;
export type EventHandler<T = AreaMouseEvent> = [area: MapArea, index: number, e: T] | null;
export type LoadEventHandler = [event: HTMLImageElement, dimensions: WidthHeight] | null;

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

export interface ImageMapperListeners {
  change: ChangeEventHandler;
  imageclick: ImageEventHandler;
  imagemousemove: ImageEventHandler;
  click: EventHandler;
  mousedown: EventHandler;
  mouseup: EventHandler;
  touchstart: EventHandler<AreaTouchEvent>;
  touchend: EventHandler<AreaTouchEvent>;
  mousemove: EventHandler;
  mouseenter: EventHandler;
  mouseleave: EventHandler;
  load: LoadEventHandler;
}

export type ImageMapperProps = ImageMapperProperties & ImageMapperElementProps;

export interface ImageMapperPropsWithRef extends ImageMapperProps {
  ref?: Ref<RefProperties>;
}
