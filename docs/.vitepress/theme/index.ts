import { inject } from '@vercel/analytics';
// eslint-disable-next-line import-x/no-unresolved
import 'virtual:group-icons.css';
import Theme from 'vitepress/theme';

import './style.css';

export default {
  extends: Theme,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  enhanceApp() {
    if (globalThis.window !== undefined) {
      inject();
    }
  },
};
