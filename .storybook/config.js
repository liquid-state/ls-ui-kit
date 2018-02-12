import { configure } from '@storybook/react';
import '../css/style.css';
import '../css/icons.css';

function loadStories() {
  require('../stories/AntDefault');
  require('../stories/LSMobile');
}

configure(loadStories, module);