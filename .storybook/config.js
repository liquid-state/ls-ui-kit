import { configure } from '@storybook/react';
import '../stories/css/style.css';
import '../stories/css/icons.css';

function loadStories() {
  require('../stories/General/');
  require('../stories/Navigation/');
  require('../stories/Data Entry/');
  require('../stories/Data Display/');
  require('../stories/Feedback/');
  require('../stories/Other/');
}

configure(loadStories, module);