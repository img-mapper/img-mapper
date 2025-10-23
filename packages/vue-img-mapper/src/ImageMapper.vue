<script setup lang="ts">
import type { ImageMapperListeners, ImageMapperProps, MapArea, Refs } from '@/@types';
import { CTX } from '@/@types/draw';
import { generateProps } from '@/helpers/constants';
import styles from '@/helpers/styles';

import { computed, getCurrentInstance, ref } from 'vue';

const emit = defineEmits<ImageMapperListeners>();
const props = defineProps<ImageMapperProps>();
const {
  src,
  name,
  areas,
  areaKeyName,
  isMulti,
  toggle,
  active,
  disabled,
  fillColor,
  strokeColor,
  lineWidth,
  imgWidth,
  width,
  height,
  natural,
  responsive,
  parentWidth,
  containerProps,
  imgProps,
  canvasProps,
  mapProps,
  areaProps,
} = generateProps(props);

const instance = getCurrentInstance();
const hasClickListener = computed(() => !!instance?.vnode?.props?.onClick);

const isRendered = ref<boolean>(false);
const areasRef = ref<MapArea[]>(areas);
const containerRef = ref<Refs['containerRef']>(null);
const img = ref<Refs['imgRef']>(null);
const canvasRef = ref<Refs['canvasRef']>(null);
const ctx = ref<CTX<null>['value']>(null);
const interval = ref<number>(0);
// const prevState = 0;

// // Computed
// const containerStyle = computed(() => ({
//   position: 'relative' as const,
//   display: 'inline-block' as const,
// }));

// const imgClasses = computed(() => {
//   const classes = ['img-mapper-img'];
//   if (props.imgProps?.className) classes.push(props.imgProps.className);
//   return classes.join(' ');
// });

// const imgStyle = computed(() => ({
//   ...props.imgProps?.style,
//   display: props.responsive ? 'block' : 'inline-block',
//   width: props.responsive ? '100%' : 'auto',
//   height: 'auto',
//   ...(isRendered.value ? {} : { display: 'none' }),
// }));

// const canvasClasses = computed(() => {
//   const classes = ['img-mapper-canvas'];
//   if (props.canvasProps?.className) classes.push(props.canvasProps.className);
//   return classes.join(' ');
// });

// const canvasStyle = computed(() => ({
//   position: 'absolute' as const,
//   top: 0,
//   left: 0,
//   pointerEvents: 'none' as const,
// }));

// const mapClasses = computed(() => {
//   const classes = ['img-mapper-map'];
//   if (props.mapProps?.className) classes.push(props.mapProps.className);
//   return classes.join(' ');
// });

// const mapStyle = computed(() => ({
//   cursor: props.onClick ? 'pointer' : 'default',
// }));

// const filteredAreas = computed(() => props.areas.filter(area => !area.disabled));

// // Helper functions
// const getDimensions = () => {
//   if (!img.value) return { width: 0, height: 0 };

//   if (props.natural) {
//     return {
//       width: img.value.naturalWidth,
//       height: img.value.naturalHeight,
//     };
//   }

//   if (props.width && props.height) {
//     return {
//       width: typeof props.width === 'number' ? props.width : img.value.clientWidth,
//       height: typeof props.height === 'number' ? props.height : img.value.clientHeight,
//     };
//   }

//   if (props.responsive && props.parentWidth) {
//     const ratio = img.value.naturalHeight / img.value.naturalWidth;
//     return {
//       width: props.parentWidth,
//       height: props.parentWidth * ratio,
//     };
//   }

//   return {
//     width: img.value.clientWidth || img.value.naturalWidth,
//     height: img.value.clientHeight || img.value.naturalHeight,
//   };
// };

// const getExtendedArea = (area: MapArea) => {
//   const dimensions = getDimensions();
//   const imgWidth = props.imgWidth || img.value?.naturalWidth || dimensions.width;

//   const scaleX = dimensions.width / imgWidth;
//   const scaleY = dimensions.height / (img.value?.naturalHeight || dimensions.height);

//   const scaledCoords = area.coords.map((coord: number, i: number) =>
//     i % 2 === 0 ? coord * scaleX : coord * scaleY
//   );

//   return {
//     ...area,
//     scaledCoords,
//     fillColor: area.fillColor || props.fillColor,
//     strokeColor: area.strokeColor || props.strokeColor,
//     lineWidth: area.lineWidth || props.lineWidth,
//     active: area.active !== undefined ? area.active : props.active,
//   };
// };

// const getScaledCoords = (area: MapArea) => {
//   return getExtendedArea(area).scaledCoords;
// };

// const drawShape = (area: any) => {
//   if (!ctx.value) return false;

//   const { scaledCoords, shape, fillColor, strokeColor, lineWidth } = area;

//   ctx.value.beginPath();

//   if (shape === 'circle') {
//     const [x, y, radius] = scaledCoords;
//     ctx.value.arc(x, y, radius, 0, 2 * Math.PI);
//   } else if (shape === 'rect') {
//     const [x, y, width, height] = scaledCoords;
//     ctx.value.rect(x, y, width, height);
//   } else if (shape === 'poly') {
//     ctx.value.moveTo(scaledCoords[0], scaledCoords[1]);
//     for (let i = 2; i < scaledCoords.length; i += 2) {
//       ctx.value.lineTo(scaledCoords[i], scaledCoords[i + 1]);
//     }
//     ctx.value.closePath();
//   }

//   if (fillColor) {
//     ctx.value.fillStyle = fillColor;
//     ctx.value.fill();
//   }

//   if (strokeColor) {
//     ctx.value.strokeStyle = strokeColor;
//     ctx.value.lineWidth = lineWidth || 1;
//     ctx.value.stroke();
//   }

//   return true;
// };

// const clearCanvas = () => {
//   if (!ctx.value || !canvasRef.value) return;
//   ctx.value.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);
// };

// const renderPrefilledAreas = () => {
//   props.areas.forEach(area => {
//     const extendedArea = getExtendedArea(area);
//     if (extendedArea.preFillColor) {
//       drawShape({ ...extendedArea, fillColor: extendedArea.preFillColor });
//     }
//   });
// };

// const resetCanvasAndPrefillArea = () => {
//   clearCanvas();
//   renderPrefilledAreas();
// };

// const highlightArea = (area: MapArea) => {
//   const extendedArea = getExtendedArea(area);
//   if (!extendedArea.active) return false;
//   return drawShape(extendedArea);
// };

// const onHighlightArea = (area: MapArea) => {
//   const chosenArea = props.isMulti
//     ? area
//     : areasRef.value.find(c => c[props.areaKeyName] === area[props.areaKeyName]);

//   if (!chosenArea) return;

//   const extendedArea = getExtendedArea(chosenArea);
//   if (!(props.active && extendedArea.active)) return;

//   const newArea = { ...chosenArea };

//   const isCurrentAreaSelected = props.toggle &&
//     (props.isMulti ? newArea.preFillColor : !!area.preFillColor);

//   if (isCurrentAreaSelected) {
//     const isPreFillColorFromJSON = props.areas.find(
//       c => c[props.areaKeyName] === area[props.areaKeyName]
//     );
//     if (isPreFillColorFromJSON?.preFillColor) {
//       delete newArea.preFillColor;
//     }
//   } else {
//     newArea.preFillColor = extendedArea.fillColor;
//   }

//   const chosenAreas = props.isMulti ? props.areas : areasRef.value;
//   const updatedAreas = chosenAreas.map(cur =>
//     cur[props.areaKeyName] === area[props.areaKeyName] ? newArea : cur
//   );

//   if (props.onChange) {
//     props.onChange(newArea, updatedAreas);
//   }

//   areasRef.value = updatedAreas;
// };

// const initCanvas = (isFirstTime = true, triggerOnLoad = false) => {
//   const dimensions = getDimensions();

//   if (!img.value || !canvasRef.value || !containerRef.value || !ctx.value) return;

//   containerRef.value.style.width = `${dimensions.width}px`;
//   containerRef.value.style.height = `${dimensions.height}px`;

//   if (isFirstTime) {
//     nextTick(() => initCanvas(false, true));
//   } else {
//     img.value.width = dimensions.width;
//     img.value.height = dimensions.height;

//     canvasRef.value.width = dimensions.width;
//     canvasRef.value.height = dimensions.height;

//     renderPrefilledAreas();
//   }

//   if (props.onLoad && triggerOnLoad && img.value) {
//     props.onLoad(img.value, dimensions);
//   }
// };

// const init = () => {
//   if (img.value?.complete && canvasRef.value && containerRef.value) {
//     ctx.value = canvasRef.value.getContext('2d');
//     isRendered.value = true;
//   }
// };

// // Event handlers
// const handleImageClick = (e: MouseEvent) => {
//   if (props.onImageClick) props.onImageClick(e);
// };

// const handleImageMouseMove = (e: MouseEvent) => {
//   if (props.onImageMouseMove) props.onImageMouseMove(e);
// };

// const handleAreaClick = (area: MapArea, index: number, e: MouseEvent) => {
//   if (props.onClick) props.onClick(area, index, e);
//   onHighlightArea(area);
// };

// const handleAreaMouseDown = (area: MapArea, index: number, e: MouseEvent) => {
//   if (props.onMouseDown) props.onMouseDown(area, index, e);
// };

// const handleAreaMouseEnter = (area: MapArea, index: number, e: MouseEvent) => {
//   if (props.onMouseEnter) props.onMouseEnter(area, index, e);
//   if (props.active) highlightArea(area);
// };

// const handleAreaMouseLeave = (area: MapArea, index: number, e: MouseEvent) => {
//   if (props.onMouseLeave) props.onMouseLeave(area, index, e);
//   if (props.active) resetCanvasAndPrefillArea();
// };

// const handleAreaMouseMove = (area: MapArea, index: number, e: MouseEvent) => {
//   if (props.onMouseMove) props.onMouseMove(area, index, e);
// };

// const handleAreaMouseUp = (area: MapArea, index: number, e: MouseEvent) => {
//   if (props.onMouseUp) props.onMouseUp(area, index, e);
// };

// const handleAreaTouchStart = (area: MapArea, index: number, e: TouchEvent) => {
//   if (props.onTouchStart) props.onTouchStart(area, index, e);
// };

// const handleAreaTouchEnd = (area: MapArea, index: number, e: TouchEvent) => {
//   if (props.onTouchEnd) props.onTouchEnd(area, index, e);
// };

// const getAreaProps = (area: MapArea, index: number) => {
//   if (Array.isArray(props.areaProps)) {
//     if (props.areaKeyName) {
//       return props.areaProps.find(
//         cur => cur && cur[props.areaKeyName] === area[props.areaKeyName]
//       );
//     }
//     return props.areaProps[index];
//   }
//   return props.areaProps;
// };

// const getAreaClasses = (area: MapArea, index: number) => {
//   const classes = ['img-mapper-area'];
//   if (area.preFillColor) classes.push('img-mapper-area-highlighted');
//   const areaProps = getAreaProps(area, index);
//   if (areaProps?.className) classes.push(areaProps.className);
//   return classes.join(' ');
// };

// // Watchers
// watch(() => props.areas, () => {
//   areasRef.value = [...props.areas];
//   resetCanvasAndPrefillArea();
// }, { deep: true });

// watch(isRendered, (newVal) => {
//   if (newVal) {
//     if (interval.value) {
//       clearInterval(interval.value);
//       interval.value = null;
//     }
//     initCanvas();
//   }
// });

// watch([() => props.width, () => props.height, () => props.parentWidth], () => {
//   if (isRendered.value) {
//     initCanvas();
//   }
// });

// // Lifecycle
// onMounted(() => {
//   interval.value = window.setInterval(init, 500);
// });

// onUnmounted(() => {
//   if (interval.value) {
//     clearInterval(interval.value);
//   }
// });

defineExpose({
  getRefs: () => ({
    containerRef: containerRef.value,
    img: img.value,
    canvasRef: canvasRef.value,
  }),
});
</script>

<template>
  <div
    v-bind="containerProps"
    ref="containerRef"
    id="img-mapper"
    :style="[containerProps?.style, styles.container]"
  >
    <img
      alt="map"
      role="presentation"
      v-bind="imgProps"
      ref="img"
      @click="handleImageClick"
      @mousemove="handleImageMouseMove"
      :src="src"
      :useMap="`#${name}`"
      class="img-mapper-img"
      :style="[styles.img(responsive), isRendered ? null : { display: 'none' }]"
    />
    <canvas v-bind="canvasProps" ref="canvasRef" class="img-mapper-canvas" :style="styles.canvas" />
    <map
      v-bind="mapProps"
      :name="name"
      class="img-mapper-map"
      :style="styles.map(!!hasClickListener)"
    >
      <!-- <template v-if="isRendered && !disabled">
        <area
          v-for="(area, index) in filteredAreas"
          :key="area[areaKeyName] ?? index.toString()"
          alt="map"
          v-bind="getAreaProps(area, index)"
          :coords="getScaledCoords(area).join(',')"
          :href="area.href ?? getAreaProps(area, index)?.href"
          :shape="area.shape ?? getAreaProps(area, index)?.shape"
          :class="getAreaClasses(area, index)"
          @click="handleAreaClick(area, index, $event)"
          @mousedown="handleAreaMouseDown(area, index, $event)"
          @mouseenter="handleAreaMouseEnter(area, index, $event)"
          @mouseleave="handleAreaMouseLeave(area, index, $event)"
          @mousemove="handleAreaMouseMove(area, index, $event)"
          @mouseup="handleAreaMouseUp(area, index, $event)"
          @touchstart="handleAreaTouchStart(area, index, $event)"
          @touchend="handleAreaTouchEnd(area, index, $event)"
        />
      </template> -->
    </map>
  </div>
</template>
