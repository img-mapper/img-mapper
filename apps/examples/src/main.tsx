import React from 'react';

import { createRoot } from 'react-dom/client';

import Playground from '@/playground/Playground';

createRoot(document.querySelector('#root') as Element).render(<Playground />);
