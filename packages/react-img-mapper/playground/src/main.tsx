import { createRoot } from 'react-dom/client';

import ReactPlayground from '@playground/ReactPlayground';

createRoot(document.querySelector('#root') as Element).render(<ReactPlayground />);
