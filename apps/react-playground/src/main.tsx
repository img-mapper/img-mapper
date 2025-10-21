import React from 'react';

import { createRoot } from 'react-dom/client';

import ReactPlayground from '@/ReactPlayground';

createRoot(document.querySelector('#root') as Element).render(<ReactPlayground />);
