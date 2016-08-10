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
      console.log('prishlo');
      // let root = document.getElementById('header');
      // let menuElement = root.querySelector('.menu');
      // let menuElement = document.querySelector('#header .menu');
      let menuElement = document.getElementsByClassName('menu--header')[0];
      console.log(menuElement);
      let classList = menuElement.classList;
      let ruler = document.getElementById("media-width-detection-element");
      // console.log(ruler);
      menuElement.onclick = () => {
        // console.log(ruler.offsetWidth);
        if (ruler.offsetWidth < 768) {
            classList.toggle('menu--v');
            classList.toggle('menu--h');
            console.log('urrrrra!');
        }
      }
      // titleElem.onmousedown = () => false;
    }
  }
}
