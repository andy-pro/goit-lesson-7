'use strict';

import './styles.styl';
import template from './template.jade';

export default class Quote {
  constructor(data) {
    this.html = template({
      author_img: "img/quote/author.png",
      title: 'PINGBULLER ',
      href: '#author-quote',
      href_text: 'STARTS HERE',
      text: data.jabber
    });
  }
}
