import type { CSSProperties } from 'react';

export interface StylesProps {
  container: CSSProperties;
  canvas: CSSProperties;
  img: (responsive: boolean) => CSSProperties;
  map: (onClick: boolean) => CSSProperties | undefined;
}
