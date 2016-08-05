'use strict';

// import './reset.styl';
let lorem =  'Nunc turpis neque, feugiat eget eleifend et, lacinia non neque. Praesent rhoncus ultrices posuere. Pellentesque vel lacus eget nisi convallis auctor. Nam vitae lectus eu libero pellentesque pulvinar. Quisque urna risus, mattis pulvinar bibendum in, venenatis quis neque. Mauris nec metus ultricies erat consequat dignissim non eu nisl. Quisque libero tellus, pharetra et eleifend id, interdum elementum arcu. Suspendisse quis mauris non ligula rutrum faucibus eu quis odio. Phasellus eu lobortis odio. In hac habitasse platea dictumst. Proin vestibulum turpis at mauris aliquam non euismod lorem euismod. Aenean dapibus ultricies enim, eget vulputate leo feugiat non.';
let quote = '"Nunc turpis neque, feugiat eget eleifend et, lacinia non neque. Praesent rhoncus ultrices posuere. Pellentesque vel lacus eget nisi convallis auctor. Nam vitae lectus eu libero pellentesque pulvinar urna risus, mattis pulvinar bibendum in, venenatis quis neque. Mauris nec metus ultricies erat consequat dignissim non eu nisl."';

import './main.styl';
import './icons/styles.styl';
import template from './main.jade';

import Header from './header';
import Menu from './menu';
import Slider from './slider';
import About from './about';
import Quote from './quote';
import Recent from './recent';
import Footer from './footer';

let menu_inline = new Menu({className: 'menu--inline'}).html;
let menu_dropdown = new Menu({className: 'menu--dropdown'}).html;
let slider = new Slider().html;

document.body.innerHTML = template({
  header: new Header({menu_inline, menu_dropdown, slider}).html,
  about: new About({lorem}).html,
  quote: new Quote({quote}).html,
  recent: new Recent().html,
  footer: new Footer({menu_inline}).html,
  lorem: lorem
});

import './media.styl';
