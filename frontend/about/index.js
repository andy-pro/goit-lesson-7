'use strict';

import './styles.styl';
import template from './template.jade';

export default class About {
  constructor(data) {
    let about = 'ABOUT OUR COMPANY';
    this.html = template({
      items: [
        {
          title: about,
          text: data.lorem,
          icon: 'icon-settings'
        },
        {
          title: about,
          text: data.lorem,
          icon: 'icon-comment'
        },
        {
          title: about,
          text: data.lorem,
          icon: 'icon-music'
        }
      ]
    });
  }
}
