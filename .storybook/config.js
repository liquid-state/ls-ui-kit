import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import '../stories/css/style.css';
import '../stories/css/icons.css';

addDecorator((story) => (
  <div style={{padding: 20}}>
    {story()}
  </div>
));

function loadStories() {
  require('../stories/index');
}

configure(loadStories, module);
