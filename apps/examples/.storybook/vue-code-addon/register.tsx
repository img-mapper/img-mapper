/* eslint-disable import-x/no-extraneous-dependencies */
// DON'T REMOVE REACT FROM HERE
import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { AddonPanel } from 'storybook/internal/components';
import { addons, types, useParameter } from 'storybook/manager-api';

const VueContent = () => {
  const vueCode = useParameter('vueCode', 'No Code Available');

  return (
    <SyntaxHighlighter showLineNumbers language="javascript" style={atomOneDark}>
      {vueCode}
    </SyntaxHighlighter>
  );
};

addons.register('my/vue-code-addon', () => {
  addons.add('vue-code-addon/panel', {
    title: 'Vue',
    type: types.PANEL,
    render: ({ active }) => (
      <AddonPanel active={active ?? false}>
        <VueContent />
      </AddonPanel>
    ),
  });
});
