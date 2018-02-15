import { configure } from '@storybook/react';
import '../stories/css/style.css';
import '../stories/css/icons.css';

function loadStories() {
  require('../stories/AntDefault');
  require('../stories/LSMobile');
}

configure(loadStories, module);