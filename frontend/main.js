'use strict';

/* data area */

let lorem =   'Nunc turpis neque, feugiat eget eleifend et, lacinia non neque. Praesent rhoncus ultrices posuere. Pellentesque vel lacus eget nisi convallis auctor. Nam vitae lectus eu libero pellentesque pulvinar. Quisque urna risus, mattis pulvinar bibendum in, venenatis quis neque. Mauris nec metus ultricies erat consequat dignissim non eu nisl. Quisque libero tellus, pharetra et eleifend id, interdum elementum arcu. Suspendisse quis mauris non ligula rutrum faucibus eu quis odio. Phasellus eu lobortis odio. In hac habitasse platea dictumst. Proin vestibulum turpis at mauris aliquam non euismod lorem euismod. Aenean dapibus ultricies enim, eget vulputate leo feugiat non.';
let jabber = '"Nunc turpis neque, feugiat eget eleifend et, lacinia non neque. Praesent rhoncus ultrices posuere. Pellentesque vel lacus eget nisi convallis auctor. Nam vitae lectus eu libero pellentesque pulvinar urna risus, mattis pulvinar bibendum in, venenatis quis neque. Mauris nec metus ultricies erat consequat dignissim non eu nisl."';

let nav_items = [
  {href:"#home", text: "Home"},
  {href:"#about", text: "About"},
  {href:"#blog", text: "Blog"},
  {href:"#products", text: "Products"},
  {href:"#lorem", text: "Lorem Ipsum"},
  {href:"#dolor", text: "Dolor Sit Amet"}
];

let about_title = 'ABOUT OUR COMPANY';

let about_items = [
  {
    title: about_title,
    text: lorem,
    icon: 'icon-settings'
  }, {
    title: about_title,
    text: lorem,
    icon: 'icon-comment'
  }, {
    title: about_title,
    text: lorem,
    icon: 'icon-music'
  }
]

let brand_items = [
  {href:"#brand1", src:"img/brands/brand-1.png", alt:"brand-1"},
  {href:"#brand2", src:"img/brands/brand-2.png", alt:"brand-2"},
  {href:"#brand3", src:"img/brands/brand-3.png", alt:"brand-3"},
  {href:"#brand4", src:"img/brands/brand-4.png", alt:"brand-4"},
  {href:"#brand5", src:"img/brands/brand-5.png", alt:"brand-5"},
  {href:"#brand6", src:"img/brands/brand-6.png", alt:"brand-6"}
];

/* component area */

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
import Brands from './brands';
import Categories from './categories';
import Footer from './footer';

import './media.styl';

let menu_header = new Menu({nav_items, className: ['menu--header', 'menu--h']});
let menu_footer = new Menu({nav_items, className: 'menu--footer'});
let slider = new Slider();
let components = {
  header: new Header({menu: menu_header.html, slider: slider.html}),
  about: new About(about_items),
  quote: new Quote({jabber}),
  recent: new Recent(),
  brands: new Brands(brand_items),
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
