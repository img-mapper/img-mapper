import React from 'react';

import { createRoot } from 'react-dom/client';

import App from '@playground/App';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.querySelector('#root')!).render(<App />);
