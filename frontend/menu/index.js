'use strict';

import './styles.styl';
import template from './template.jade';

export default class Menu {
  constructor(data) {
    this.html = template({
      className: data.className,
      items: data.nav_items
    });
    this.componentMount = () => {
      // let menuElement = document.querySelectorAll('.menu--header')[0];
      let menuElement = document.getElementsByClassName('menu--header')[0];
      let classList = menuElement.classList;
      let ruler = document.getElementById("media-width-detection-element");
      menuElement.onclick = () => {
        if (ruler.offsetWidth < 768) {
            classList.toggle('menu--v');
            classList.toggle('menu--h');
        }
      }
    }
  }
}
