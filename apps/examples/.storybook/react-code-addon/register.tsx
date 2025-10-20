/* eslint-disable import-x/no-extraneous-dependencies */
// DON'T REMOVE REACT FROM HERE
import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { AddonPanel } from 'storybook/internal/components';
import { addons, types, useParameter } from 'storybook/manager-api';

const ReactContent = () => {
  const reactCode = useParameter('reactCode', 'No Code Available');

  return (
    <SyntaxHighlighter showLineNumbers wrapLongLines language="jsx" style={atomOneDark}>
      {reactCode}
    </SyntaxHighlighter>
  );
};

addons.register('my/react-code-addon', () => {
  addons.add('react-code-addon/panel', {
    title: 'React',
    type: types.PANEL,
    render: ({ active }) => (
      <AddonPanel active={active ?? false}>
        <ReactContent />
      </AddonPanel>
    ),
  });
});
