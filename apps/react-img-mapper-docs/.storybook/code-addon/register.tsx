import { AddonPanel } from 'storybook/internal/components';
import { addons, types } from 'storybook/manager-api';

// DON'T REMOVE REACT FROM HERE
import React from 'react';
import { useParameter } from 'storybook/manager-api';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Content = () => {
  const code = useParameter('code', 'No Code Available');

  return (
    <SyntaxHighlighter language="jsx" style={atomOneDark} showLineNumbers>
      {code}
    </SyntaxHighlighter>
  );
};

addons.register('my/code-addon', () => {
  addons.add('code-addon/panel', {
    title: 'Code',
    type: types.PANEL,
    render: ({ active }) => (
      <AddonPanel active={active ?? false}>
        <Content />
      </AddonPanel>
    ),
  });
});
