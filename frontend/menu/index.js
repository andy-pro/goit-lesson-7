'use strict';

import './styles.styl';
import template from './template.jade';

export default class Menu {
  constructor(data) {
    this.html = template({
      items: [
        {href:"#home", text: "Home"},
        {href:"#about", text: "About"},
        {href:"#blog", text: "Blog"},
        {href:"#products", text: "Products"},
        {href:"#lorem", text: "Lorem Ipsum"},
        {href:"#dolor", text: "Dolor Sit Amet"}
      ],
      className: data.className
    });
  }
}
