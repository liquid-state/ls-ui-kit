import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import '../css/style.css';
import '../css/icons.css';

addDecorator((story) => (
  <div style={{padding: 20}}>
    {story()}
  </div>
));

function loadStories() {
  require('../src/index');
}

configure(loadStories, module);
