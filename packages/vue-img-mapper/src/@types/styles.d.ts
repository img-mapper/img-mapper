import type { CSSProperties } from 'vue';

export interface StylesProps {
  container: CSSProperties;
  canvas: CSSProperties;
  img: (responsive: boolean) => CSSProperties;
  map: (onClick: boolean) => CSSProperties | undefined;
}
