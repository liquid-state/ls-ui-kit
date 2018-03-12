import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import chaptersAddon from 'react-storybook-addon-chapters';
import '../stories/css/style.css';
import '../stories/css/icons.css';

addDecorator((story) => (
  <div style={{padding: 20}}>
    {story()}
  </div>
));

setAddon(chaptersAddon);

function loadStories() {
  require('../stories/AntDefault');
  require('../stories/LSMobile');
}

configure(loadStories, module);