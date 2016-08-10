'use strict';

import './styles.styl';
import template from './template.jade';

export default class Categories {
  constructor(data) {
    this.html = template({
      lorem: data.lorem
    });
  }
}
