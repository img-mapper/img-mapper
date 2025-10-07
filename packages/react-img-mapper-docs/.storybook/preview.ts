import '../src/styles/stories.css';
import type { Preview } from '@storybook/react-vite';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    options: {
      storySort: {
        order: [
          'Examples',
          ['Simple', 'Colors', 'Area', 'Responsive Map', 'Dynamic All Properties'],
        ],
      },
    },
  },
} satisfies Preview;

export default preview;
