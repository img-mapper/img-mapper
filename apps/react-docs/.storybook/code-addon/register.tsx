/* eslint-disable import-x/no-extraneous-dependencies */
// DON'T REMOVE REACT FROM HERE
import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { AddonPanel } from 'storybook/internal/components';
import { addons, types, useParameter } from 'storybook/manager-api';

const Content = () => {
  const code = useParameter('code', 'No Code Available');

  return (
    <SyntaxHighlighter showLineNumbers language="jsx" style={atomOneDark}>
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
