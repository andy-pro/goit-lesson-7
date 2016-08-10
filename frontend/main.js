'use strict';

/* data area */

let nav_items = [
  {href:"#home", text: "Home"},
  {href:"#about", text: "About"},
  {href:"#blog", text: "Blog"},
  {href:"#products", text: "Products"},
  {href:"#lorem", text: "Lorem Ipsum"},
  {href:"#dolor", text: "Dolor Sit Amet"}
];
let lorem =   'Nunc turpis neque, feugiat eget eleifend et, lacinia non neque. Praesent rhoncus ultrices posuere. Pellentesque vel lacus eget nisi convallis auctor. Nam vitae lectus eu libero pellentesque pulvinar. Quisque urna risus, mattis pulvinar bibendum in, venenatis quis neque. Mauris nec metus ultricies erat consequat dignissim non eu nisl. Quisque libero tellus, pharetra et eleifend id, interdum elementum arcu. Suspendisse quis mauris non ligula rutrum faucibus eu quis odio. Phasellus eu lobortis odio. In hac habitasse platea dictumst. Proin vestibulum turpis at mauris aliquam non euismod lorem euismod. Aenean dapibus ultricies enim, eget vulputate leo feugiat non.';
let jabber = '"Nunc turpis neque, feugiat eget eleifend et, lacinia non neque. Praesent rhoncus ultrices posuere. Pellentesque vel lacus eget nisi convallis auctor. Nam vitae lectus eu libero pellentesque pulvinar urna risus, mattis pulvinar bibendum in, venenatis quis neque. Mauris nec metus ultricies erat consequat dignissim non eu nisl."';

/* component area */

// import './initial.css';
import './reset.styl';
import './main.styl';
import './icons/styles.styl';
import template from './main.jade';

import Menu from './menu';
import Slider from './slider';
import Header from './header';
import About from './about';
import Quote from './quote';
import Recent from './recent';
import Categories from './categories';
import Footer from './footer';

import './media.styl';

let menu_header = new Menu({nav_items, className: ['menu--header', 'menu--h']});
let menu_footer = new Menu({nav_items, className: ['menu--footer']});
let slider = new Slider();
let components = {
  header: new Header({menu: menu_header.html, slider: slider.html}),
  about: new About({lorem}),
  quote: new Quote({jabber}),
  recent: new Recent(),
  categories: new Categories({lorem}),
  footer: new Footer({menu: menu_footer.html}),
  menu_header,
  lorem
};

/* service area */

let keys = Object.keys(components);
let htmls = {};
for (const key of keys) {
  let content = components[key].html;
  htmls[key] = content ? content : components[key];
}
document.body.insertAdjacentHTML(
  'beforeend',
  template(htmls)
);
for (const key of keys) {
  let setup = components[key].componentMount;
  if (typeof setup == 'function') {
    setup();
  }
}
