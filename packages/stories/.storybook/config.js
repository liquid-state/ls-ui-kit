import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import '@storybook/addon-actions/register';

addDecorator((story) => (
  <div style={{padding: 20}}>
    {story()}
  </div>
));

function loadStories() {
  require('../src/index');
}

configure(loadStories, module);
