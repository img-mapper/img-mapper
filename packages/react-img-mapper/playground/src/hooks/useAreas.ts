import { useEffect, useState } from 'react';

import type { MapArea } from 'react-img-mapper';

interface AreasHookOutput {
  areas: MapArea[];
}

type AreasHook = () => AreasHookOutput;

const areasUrl = 'https://img-mapper-examples.nishargshah.dev/assets/areas.json';

export const useAreas: AreasHook = () => {
  const [areas, setAreas] = useState<AreasHookOutput['areas']>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(areasUrl);
      const json = await res.json();

      setAreas(json);
    })();
  }, []);

  return { areas };
};
