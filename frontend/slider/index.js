'use strict';

import './styles.styl';
import template from './template.jade';

export default class Slider {
  constructor(options) {
    this.html = template({
      header: 'Lorem Ipsum Dolor',
      description: 'IT WILL MAKE ALL OF YOUR DREAMS COME TRUE',
      text: 'Semper sollicitudin gravida eget, vestibulum sit amet sapien. Nunc dignissim tincidunt est, et auctor turpis ornare a. Nam venenatis hendrerit est at volutpat. Morbi elementum euismod lacus id semper. In odio nunc, imperdiet eget aliquam quis, euismod id lectus. Nulla interdum arcu et felis aliquam a tempus lectus lobortis.'
    });
  }
}
