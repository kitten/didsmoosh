import React from 'react';

import Template from './src/template';
import Root from './src/root';

export const wrapPageElement = ({ element, props }) => (
  <Template {...props}>{element}</Template>
);

export const wrapRootElement = ({ element }) => (
  <Root>{element}</Root>
);
