import { getPropDimension } from '@/helpers/dimensions';

import type { ComputeCenter, GetExtendedArea, ScaleCoords } from '@/@types/area';

export const scaleCoords: ScaleCoords = (
  coords,
  { width, height, img, responsive, parentWidth, imgWidth },
) =>
  coords.map((coord) => {
    if (responsive && parentWidth && img.current) {
      return coord / (img.current.naturalWidth / parentWidth);
    }

    const { width: imageWidth } = getPropDimension({ width, height, img });
    const scale = imageWidth && imgWidth > 0 ? imageWidth / imgWidth : 1;
    return coord * scale;
  });

export const computeCenter: ComputeCenter = (shape, scaledCoords) => {
  switch (shape) {
    case 'circle': {
      return [scaledCoords[0], scaledCoords[1]];
    }

    default: {
      const n = scaledCoords.length / 2;
      const { y: scaleY, x: scaleX } = scaledCoords.reduce(
        ({ y, x }, val, idx) => (idx % 2 ? { y: y + val / n, x } : { y, x: x + val / n }),
        { y: 0, x: 0 },
      );

      return [scaleX, scaleY];
    }
  }
};

export const getExtendedArea: GetExtendedArea = (
  area,
  scaleCoordsParams,
  { fillColor, lineWidth, strokeColor },
) => {
  const scaledCoords = scaleCoords(area.coords, scaleCoordsParams);
  const center = computeCenter(area.shape, scaledCoords);

  return {
    ...area,
    scaledCoords,
    center,
    active: area.active ?? true,
    fillColor: area.fillColor ?? fillColor,
    lineWidth: area.lineWidth ?? lineWidth,
    strokeColor: area.strokeColor ?? strokeColor,
  };
};
