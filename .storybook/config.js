import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/component.story.js');
}

configure(loadStories, module);
