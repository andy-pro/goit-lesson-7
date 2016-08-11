'use strict';

import './styles.styl';
import template from './template.jade';

export default class Brands {
  constructor(items) {
    this.html = template({items});
  }
}
