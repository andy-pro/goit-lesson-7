'use strict';

import './styles.styl';
import template from './template.jade';

export default class Recent {
  constructor(options) {
    let item_title = 'Nunc turpis neque feugiat eget';
    this.html = template({
      header: 'RECENT UPDATES',
      href: '#recent',
      href_text: 'READ MORE HERE',
      items: [
        {
          title: item_title,
          href: '#post-1',
          text: 'Posted by Admin on March 13 2012 in Recent News',
          img: 'img/recent/random-1.png'
        },
        {
          title: item_title,
          href: '#post-2',
          text: 'Posted by Admin on March 13 2012 in Category',
          img: 'img/recent/random-2.png'
        },
        {
          title: item_title,
          href: '#post-3',
          text: 'Posted by Admin on March 13 2012 in Category',
          img: 'img/recent/random-3.png'
        }
      ]
    });
  }
}
