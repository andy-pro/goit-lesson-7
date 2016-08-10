'use strict';

import './styles.styl';
import template from './template.jade';

export default class Footer {
  constructor(data) {
    this.html = template({
      menu: data.menu
    });
  }
}
