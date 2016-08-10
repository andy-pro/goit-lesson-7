'use strict';

import './styles.styl';
import template from './template.jade';

export default class Header {
  constructor(data) {
    this.html = template({
      logo_img: 'img/header/logo.png',
      logo_href: '#home',
      menu: data.menu,
      slider: data.slider
    });
  }
}
