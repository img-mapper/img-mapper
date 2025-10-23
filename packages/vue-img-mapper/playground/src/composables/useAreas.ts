import { onMounted, ref } from 'vue';

import type { Ref } from 'vue';

import type { MapArea } from '@/@types';

interface AreasHookProps {
  areas: MapArea[];
}

interface AreasHookOutput {
  areas: Ref<AreasHookProps['areas']>;
}

type AreasHook = () => AreasHookOutput;

const areasUrl = 'https://img-mapper-examples.nishargshah.dev/assets/areas.json';

export const useAreas: AreasHook = () => {
  const areas = ref<AreasHookProps['areas']>([]);

  onMounted(async () => {
    const res = await fetch(areasUrl);
    const json = await res.json();

    areas.value = json;
  });

  return { areas };
};
