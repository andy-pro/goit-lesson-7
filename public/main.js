/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/* data area */

	__webpack_require__(1);

	__webpack_require__(11);

	__webpack_require__(13);

	var _main = __webpack_require__(16);

	var _main2 = _interopRequireDefault(_main);

	var _menu = __webpack_require__(19);

	var _menu2 = _interopRequireDefault(_menu);

	var _slider = __webpack_require__(23);

	var _slider2 = _interopRequireDefault(_slider);

	var _header = __webpack_require__(27);

	var _header2 = _interopRequireDefault(_header);

	var _about = __webpack_require__(32);

	var _about2 = _interopRequireDefault(_about);

	var _quote = __webpack_require__(36);

	var _quote2 = _interopRequireDefault(_quote);

	var _recent = __webpack_require__(40);

	var _recent2 = _interopRequireDefault(_recent);

	var _brands = __webpack_require__(44);

	var _brands2 = _interopRequireDefault(_brands);

	var _categories = __webpack_require__(48);

	var _categories2 = _interopRequireDefault(_categories);

	var _footer = __webpack_require__(52);

	var _footer2 = _interopRequireDefault(_footer);

	__webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var lorem = 'Nunc turpis neque, feugiat eget eleifend et, lacinia non neque. Praesent rhoncus ultrices posuere. Pellentesque vel lacus eget nisi convallis auctor. Nam vitae lectus eu libero pellentesque pulvinar. Quisque urna risus, mattis pulvinar bibendum in, venenatis quis neque. Mauris nec metus ultricies erat consequat dignissim non eu nisl. Quisque libero tellus, pharetra et eleifend id, interdum elementum arcu. Suspendisse quis mauris non ligula rutrum faucibus eu quis odio. Phasellus eu lobortis odio. In hac habitasse platea dictumst. Proin vestibulum turpis at mauris aliquam non euismod lorem euismod. Aenean dapibus ultricies enim, eget vulputate leo feugiat non.';
	var jabber = '"Nunc turpis neque, feugiat eget eleifend et, lacinia non neque. Praesent rhoncus ultrices posuere. Pellentesque vel lacus eget nisi convallis auctor. Nam vitae lectus eu libero pellentesque pulvinar urna risus, mattis pulvinar bibendum in, venenatis quis neque. Mauris nec metus ultricies erat consequat dignissim non eu nisl."';

	var nav_items = [{ href: "#home", text: "Home" }, { href: "#about", text: "About" }, { href: "#blog", text: "Blog" }, { href: "#products", text: "Products" }, { href: "#lorem", text: "Lorem Ipsum" }, { href: "#dolor", text: "Dolor Sit Amet" }];

	var about_title = 'ABOUT OUR COMPANY';

	var about_items = [{
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
	}];

	var brand_items = [{ href: "#brand1", src: "img/brands/brand-1.png", alt: "brand-1" }, { href: "#brand2", src: "img/brands/brand-2.png", alt: "brand-2" }, { href: "#brand3", src: "img/brands/brand-3.png", alt: "brand-3" }, { href: "#brand4", src: "img/brands/brand-4.png", alt: "brand-4" }, { href: "#brand5", src: "img/brands/brand-5.png", alt: "brand-5" }, { href: "#brand6", src: "img/brands/brand-6.png", alt: "brand-6" }];

	/* component area */

	var menu_header = new _menu2.default({ nav_items: nav_items, className: ['menu--header', 'menu--h'] });
	var menu_footer = new _menu2.default({ nav_items: nav_items, className: 'menu--footer' });
	var slider = new _slider2.default();
	var components = {
	  header: new _header2.default({ menu: menu_header.html, slider: slider.html }),
	  about: new _about2.default(about_items),
	  quote: new _quote2.default({ jabber: jabber }),
	  recent: new _recent2.default(),
	  brands: new _brands2.default(brand_items),
	  categories: new _categories2.default({ lorem: lorem }),
	  footer: new _footer2.default({ menu: menu_footer.html }),
	  menu_header: menu_header,
	  lorem: lorem
	};

	/* service area */

	var keys = Object.keys(components);
	var htmls = {};
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
	  for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	    var key = _step.value;

	    var content = components[key].html;
	    htmls[key] = content ? content : components[key];
	  }
	} catch (err) {
	  _didIteratorError = true;
	  _iteratorError = err;
	} finally {
	  try {
	    if (!_iteratorNormalCompletion && _iterator.return) {
	      _iterator.return();
	    }
	  } finally {
	    if (_didIteratorError) {
	      throw _iteratorError;
	    }
	  }
	}

	document.body.insertAdjacentHTML('beforeend', (0, _main2.default)(htmls));
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
	  for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	    var _key = _step2.value;

	    var setup = components[_key].componentMount;
	    if (typeof setup == 'function') {
	      setup();
	    }
	  }
	} catch (err) {
	  _didIteratorError2 = true;
	  _iteratorError2 = err;
	} finally {
	  try {
	    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	      _iterator2.return();
	    }
	  } finally {
	    if (_didIteratorError2) {
	      throw _iteratorError2;
	    }
	  }
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(17);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (about, brands, categories, footer, header, quote, recent) {
	buf.push("\n" + (((jade_interp = header) == null ? '' : jade_interp)) + "<main>" + (((jade_interp = about) == null ? '' : jade_interp)) + "<div class=\"content-section\"><div class=\"container\"><div class=\"content-wrapper\">" + (null == (jade_interp = quote) ? "" : jade_interp) + "</div><div class=\"content-wrapper\">" + (null == (jade_interp = recent) ? "" : jade_interp) + "</div></div></div></main>" + (((jade_interp = brands) == null ? '' : jade_interp)) + "\n" + (((jade_interp = categories) == null ? '' : jade_interp)) + "\n" + (((jade_interp = footer) == null ? '' : jade_interp)) + "<div id=\"media-width-detection-element\"></div>");}.call(this,"about" in locals_for_with?locals_for_with.about:typeof about!=="undefined"?about:undefined,"brands" in locals_for_with?locals_for_with.brands:typeof brands!=="undefined"?brands:undefined,"categories" in locals_for_with?locals_for_with.categories:typeof categories!=="undefined"?categories:undefined,"footer" in locals_for_with?locals_for_with.footer:typeof footer!=="undefined"?footer:undefined,"header" in locals_for_with?locals_for_with.header:typeof header!=="undefined"?header:undefined,"quote" in locals_for_with?locals_for_with.quote:typeof quote!=="undefined"?quote:undefined,"recent" in locals_for_with?locals_for_with.recent:typeof recent!=="undefined"?recent:undefined));;return buf.join("");
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */

	exports.merge = function merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = merge(attrs, a[i]);
	    }
	    return attrs;
	  }
	  var ac = a['class'];
	  var bc = b['class'];

	  if (ac || bc) {
	    ac = ac || [];
	    bc = bc || [];
	    if (!Array.isArray(ac)) ac = [ac];
	    if (!Array.isArray(bc)) bc = [bc];
	    a['class'] = ac.concat(bc).filter(nulls);
	  }

	  for (var key in b) {
	    if (key != 'class') {
	      a[key] = b[key];
	    }
	  }

	  return a;
	};

	/**
	 * Filter null `val`s.
	 *
	 * @param {*} val
	 * @return {Boolean}
	 * @api private
	 */

	function nulls(val) {
	  return val != null && val !== '';
	}

	/**
	 * join array as classes.
	 *
	 * @param {*} val
	 * @return {String}
	 */
	exports.joinClasses = joinClasses;
	function joinClasses(val) {
	  return (Array.isArray(val) ? val.map(joinClasses) :
	    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
	    [val]).filter(nulls).join(' ');
	}

	/**
	 * Render the given classes.
	 *
	 * @param {Array} classes
	 * @param {Array.<Boolean>} escaped
	 * @return {String}
	 */
	exports.cls = function cls(classes, escaped) {
	  var buf = [];
	  for (var i = 0; i < classes.length; i++) {
	    if (escaped && escaped[i]) {
	      buf.push(exports.escape(joinClasses([classes[i]])));
	    } else {
	      buf.push(joinClasses(classes[i]));
	    }
	  }
	  var text = joinClasses(buf);
	  if (text.length) {
	    return ' class="' + text + '"';
	  } else {
	    return '';
	  }
	};


	exports.style = function (val) {
	  if (val && typeof val === 'object') {
	    return Object.keys(val).map(function (style) {
	      return style + ':' + val[style];
	    }).join(';');
	  } else {
	    return val;
	  }
	};
	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = function attr(key, val, escaped, terse) {
	  if (key === 'style') {
	    val = exports.style(val);
	  }
	  if ('boolean' == typeof val || null == val) {
	    if (val) {
	      return ' ' + (terse ? key : key + '="' + key + '"');
	    } else {
	      return '';
	    }
	  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
	    if (JSON.stringify(val).indexOf('&') !== -1) {
	      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
	                   'will be escaped to `&amp;`');
	    };
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will eliminate the double quotes around dates in ' +
	                   'ISO form after 2.0.0');
	    }
	    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
	  } else if (escaped) {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + exports.escape(val) + '"';
	  } else {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + val + '"';
	  }
	};

	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} escaped
	 * @return {String}
	 */
	exports.attrs = function attrs(obj, terse){
	  var buf = [];

	  var keys = Object.keys(obj);

	  if (keys.length) {
	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i]
	        , val = obj[key];

	      if ('class' == key) {
	        if (val = joinClasses(val)) {
	          buf.push(' ' + key + '="' + val + '"');
	        }
	      } else {
	        buf.push(exports.attr(key, val, false, terse));
	      }
	    }
	  }

	  return buf.join('');
	};

	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */

	var jade_encode_html_rules = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;'
	};
	var jade_match_html = /[&<>"]/g;

	function jade_encode_char(c) {
	  return jade_encode_html_rules[c] || c;
	}

	exports.escape = jade_escape;
	function jade_escape(html){
	  var result = String(html).replace(jade_match_html, jade_encode_char);
	  if (result === '' + html) return html;
	  else return result;
	};

	/**
	 * Re-throw the given `err` in context to the
	 * the jade in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @api private
	 */

	exports.rethrow = function rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(18).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);

	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Jade') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};

	exports.DebugItem = function DebugItem(lineno, filename) {
	  this.lineno = lineno;
	  this.filename = filename;
	}


/***/ },
/* 18 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(20);

	var _template = __webpack_require__(22);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Menu = function Menu(data) {
	  _classCallCheck(this, Menu);

	  this.html = (0, _template2.default)({
	    className: data.className,
	    items: data.nav_items
	  });
	  this.componentMount = function () {
	    // let menuElement = document.querySelectorAll('.menu--header')[0];
	    var menuElement = document.getElementsByClassName('menu--header')[0];
	    var classList = menuElement.classList;
	    var ruler = document.getElementById("media-width-detection-element");
	    menuElement.onclick = function () {
	      if (ruler.offsetWidth < 768) {
	        classList.toggle('menu--v');
	        classList.toggle('menu--h');
	      }
	    };
	  };
	};

		exports.default = Menu;

/***/ },
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(17);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (className, items, undefined) {
	buf.push("<ul" + (jade.cls(['menu',className], [null,true])) + ">");
	// iterate items
	;(function(){
	  var $$obj = items;
	  if ('number' == typeof $$obj.length) {

	    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
	      var item = $$obj[$index];

	buf.push("<li class=\"menu__item\"><a" + (jade.attr("href", item.href, true, true)) + " class=\"menu__link\">" + (jade.escape(null == (jade_interp = item.text) ? "" : jade_interp)) + "</a></li>");
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in $$obj) {
	      $$l++;      var item = $$obj[$index];

	buf.push("<li class=\"menu__item\"><a" + (jade.attr("href", item.href, true, true)) + " class=\"menu__link\">" + (jade.escape(null == (jade_interp = item.text) ? "" : jade_interp)) + "</a></li>");
	    }

	  }
	}).call(this);

	buf.push("</ul>");}.call(this,"className" in locals_for_with?locals_for_with.className:typeof className!=="undefined"?className:undefined,"items" in locals_for_with?locals_for_with.items:typeof items!=="undefined"?items:undefined,"undefined" in locals_for_with?locals_for_with.undefined: false?undefined:undefined));;return buf.join("");
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(24);

	var _template = __webpack_require__(26);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Slider = function Slider(options) {
	  _classCallCheck(this, Slider);

	  this.html = (0, _template2.default)({
	    header: 'Lorem Ipsum Dolor',
	    description: 'IT WILL MAKE ALL OF YOUR DREAMS COME TRUE',
	    text: 'Semper sollicitudin gravida eget, vestibulum sit amet sapien. Nunc dignissim tincidunt est, et auctor turpis ornare a. Nam venenatis hendrerit est at volutpat. Morbi elementum euismod lacus id semper. In odio nunc, imperdiet eget aliquam quis, euismod id lectus. Nulla interdum arcu et felis aliquam a tempus lectus lobortis.'
	  });
	};

		exports.default = Slider;

/***/ },
/* 24 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 25 */,
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(17);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (description, header, text) {
	buf.push("<div class=\"slider\"><div class=\"container relative\"><div class=\"phone-specs\"><h1 class=\"phone-specs__header\">" + (jade.escape(null == (jade_interp = header) ? "" : jade_interp)) + "</h1><h3 class=\"phone-specs__description\">" + (jade.escape(null == (jade_interp = description) ? "" : jade_interp)) + "</h3><p class=\"phone-specs__text\">" + (jade.escape(null == (jade_interp = text) ? "" : jade_interp)) + "</p></div><div class=\"phone-view\"><img src=\"img/slider/iPhone-4.png\" alt=\"iPhone-4\" class=\"phone-view__clear\"><img src=\"img/slider/iPhone-4-fuzzy.png\" alt=\"iPhone-4-fuzzy\" class=\"phone-view__fuzzy\"><div class=\"phone-view__play-btn\"><a href=\"#\"><img src=\"img/slider/Play.png\" alt=\"Click me!\"></a></div></div><div class=\"slider__radio\"><div class=\"radio-group\"><i class=\"icon icon-circle icon-circle-dark-off\"></i><i class=\"icon icon-circle icon-circle-dark-on\"></i><i class=\"icon icon-circle icon-circle-dark-off\"></i><i class=\"icon icon-circle icon-circle-dark-off\"></i></div></div></div></div>");}.call(this,"description" in locals_for_with?locals_for_with.description:typeof description!=="undefined"?description:undefined,"header" in locals_for_with?locals_for_with.header:typeof header!=="undefined"?header:undefined,"text" in locals_for_with?locals_for_with.text:typeof text!=="undefined"?text:undefined));;return buf.join("");
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(28);

	var _template = __webpack_require__(31);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Header = function Header(data) {
	  _classCallCheck(this, Header);

	  this.html = (0, _template2.default)({
	    logo_img: 'img/header/logo.png',
	    logo_href: '#home',
	    menu: data.menu,
	    slider: data.slider
	  });
	};

		exports.default = Header;

/***/ },
/* 28 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 29 */,
/* 30 */,
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(17);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (logo_href, logo_img, menu, slider) {
	buf.push("<header class=\"header\"><div class=\"container relative\"><div class=\"header__logo\"><a" + (jade.attr("href", logo_href, true, true)) + "><img" + (jade.attr("src", logo_img, true, true)) + " alt=\"logo\"></a></div><nav class=\"header__nav\">" + (null == (jade_interp = menu) ? "" : jade_interp) + "</nav></div>" + (((jade_interp = slider) == null ? '' : jade_interp)) + "</header>");}.call(this,"logo_href" in locals_for_with?locals_for_with.logo_href:typeof logo_href!=="undefined"?logo_href:undefined,"logo_img" in locals_for_with?locals_for_with.logo_img:typeof logo_img!=="undefined"?logo_img:undefined,"menu" in locals_for_with?locals_for_with.menu:typeof menu!=="undefined"?menu:undefined,"slider" in locals_for_with?locals_for_with.slider:typeof slider!=="undefined"?slider:undefined));;return buf.join("");
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(33);

	var _template = __webpack_require__(35);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var About = function About(items) {
	  _classCallCheck(this, About);

	  this.html = (0, _template2.default)({ items: items });
	};

		exports.default = About;

/***/ },
/* 33 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 34 */,
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(17);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (items, undefined) {
	buf.push("<div id=\"about\" class=\"about-section\"><div class=\"container\"><ul class=\"preview-list\">");
	// iterate items
	;(function(){
	  var $$obj = items;
	  if ('number' == typeof $$obj.length) {

	    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
	      var item = $$obj[$index];

	buf.push("<li class=\"preview-list__item\"><i" + (jade.cls(['icon','icon-media',item.icon], [null,null,true])) + "></i><h4 class=\"preview-list__title\">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</h4><p class=\"preview-list__text\">" + (jade.escape(null == (jade_interp = item.text) ? "" : jade_interp)) + "</p><a href=\"#\" class=\"preview-list__more\">Read More</a></li>");
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in $$obj) {
	      $$l++;      var item = $$obj[$index];

	buf.push("<li class=\"preview-list__item\"><i" + (jade.cls(['icon','icon-media',item.icon], [null,null,true])) + "></i><h4 class=\"preview-list__title\">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</h4><p class=\"preview-list__text\">" + (jade.escape(null == (jade_interp = item.text) ? "" : jade_interp)) + "</p><a href=\"#\" class=\"preview-list__more\">Read More</a></li>");
	    }

	  }
	}).call(this);

	buf.push("</ul></div></div>");}.call(this,"items" in locals_for_with?locals_for_with.items:typeof items!=="undefined"?items:undefined,"undefined" in locals_for_with?locals_for_with.undefined: false?undefined:undefined));;return buf.join("");
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(37);

	var _template = __webpack_require__(39);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Quote = function Quote(data) {
	  _classCallCheck(this, Quote);

	  this.html = (0, _template2.default)({
	    author_img: "img/quote/author.png",
	    title: 'PINGBULLER ',
	    href: '#author-quote',
	    href_text: 'STARTS HERE',
	    text: data.jabber
	  });
	};

		exports.default = Quote;

/***/ },
/* 37 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 38 */,
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(17);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (author_img, href, href_text, text, title) {
	buf.push("<div class=\"quote\"><img" + (jade.attr("src", author_img, true, true)) + " alt=\"author\" class=\"quote__img\"><h4 class=\"quote__title\">" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "<a" + (jade.attr("href", href, true, true)) + " class=\"quote__link\">" + (jade.escape(null == (jade_interp = href_text) ? "" : jade_interp)) + "</a></h4><p class=\"quote__text\">" + (jade.escape(null == (jade_interp = text) ? "" : jade_interp)) + "</p></div><div class=\"radio-group\"><i class=\"icon icon-circle icon-circle-light-off\"></i><i class=\"icon icon-circle icon-circle-light-on\"></i><i class=\"icon icon-circle icon-circle-light-off\"></i><i class=\"icon icon-circle icon-circle-light-off\"></i></div>");}.call(this,"author_img" in locals_for_with?locals_for_with.author_img:typeof author_img!=="undefined"?author_img:undefined,"href" in locals_for_with?locals_for_with.href:typeof href!=="undefined"?href:undefined,"href_text" in locals_for_with?locals_for_with.href_text:typeof href_text!=="undefined"?href_text:undefined,"text" in locals_for_with?locals_for_with.text:typeof text!=="undefined"?text:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));;return buf.join("");
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(41);

	var _template = __webpack_require__(43);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Recent = function Recent(options) {
	  _classCallCheck(this, Recent);

	  var item_title = 'Nunc turpis neque feugiat eget';
	  this.html = (0, _template2.default)({
	    header: 'RECENT UPDATES',
	    href: '#recent',
	    href_text: 'READ MORE HERE',
	    items: [{
	      title: item_title,
	      href: '#post-1',
	      text: 'Posted by Admin on March 13 2012 in Recent News',
	      img: 'img/recent/random-1.png'
	    }, {
	      title: item_title,
	      href: '#post-2',
	      text: 'Posted by Admin on March 13 2012 in Category',
	      img: 'img/recent/random-2.png'
	    }, {
	      title: item_title,
	      href: '#post-3',
	      text: 'Posted by Admin on March 13 2012 in Category',
	      img: 'img/recent/random-3.png'
	    }]
	  });
	};

		exports.default = Recent;

/***/ },
/* 41 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 42 */,
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(17);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (header, href, href_text, items, undefined) {
	buf.push("<div class=\"recent\"><h4 class=\"recent__header\">" + (jade.escape(null == (jade_interp = header) ? "" : jade_interp)) + "</h4><ul class=\"recent__list\">");
	// iterate items
	;(function(){
	  var $$obj = items;
	  if ('number' == typeof $$obj.length) {

	    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
	      var item = $$obj[$index];

	buf.push("<li class=\"recent__item\"><img" + (jade.attr("src", item.img, true, true)) + " alt=\"update\" class=\"recent__img\"><a" + (jade.attr("href", item.href, true, true)) + " class=\"recent__link\">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a><p class=\"recent__text\">" + (jade.escape(null == (jade_interp = item.text) ? "" : jade_interp)) + "</p></li>");
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in $$obj) {
	      $$l++;      var item = $$obj[$index];

	buf.push("<li class=\"recent__item\"><img" + (jade.attr("src", item.img, true, true)) + " alt=\"update\" class=\"recent__img\"><a" + (jade.attr("href", item.href, true, true)) + " class=\"recent__link\">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a><p class=\"recent__text\">" + (jade.escape(null == (jade_interp = item.text) ? "" : jade_interp)) + "</p></li>");
	    }

	  }
	}).call(this);

	buf.push("</ul><a" + (jade.attr("href", href, true, true)) + " class=\"recent__more\">" + (jade.escape(null == (jade_interp = href_text) ? "" : jade_interp)) + "</a></div>");}.call(this,"header" in locals_for_with?locals_for_with.header:typeof header!=="undefined"?header:undefined,"href" in locals_for_with?locals_for_with.href:typeof href!=="undefined"?href:undefined,"href_text" in locals_for_with?locals_for_with.href_text:typeof href_text!=="undefined"?href_text:undefined,"items" in locals_for_with?locals_for_with.items:typeof items!=="undefined"?items:undefined,"undefined" in locals_for_with?locals_for_with.undefined: false?undefined:undefined));;return buf.join("");
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(45);

	var _template = __webpack_require__(47);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Brands = function Brands(items) {
	  _classCallCheck(this, Brands);

	  this.html = (0, _template2.default)({ items: items });
	};

		exports.default = Brands;

/***/ },
/* 45 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 46 */,
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(17);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (items, undefined) {
	buf.push("<div class=\"brands container\">");
	// iterate items
	;(function(){
	  var $$obj = items;
	  if ('number' == typeof $$obj.length) {

	    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
	      var item = $$obj[$index];

	buf.push("<a" + (jade.attr("href", item.href, true, true)) + "><img" + (jade.attr("src", item.src, true, true)) + (jade.attr("alt", item.alt, true, true)) + " class=\"brands__img\"></a>");
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in $$obj) {
	      $$l++;      var item = $$obj[$index];

	buf.push("<a" + (jade.attr("href", item.href, true, true)) + "><img" + (jade.attr("src", item.src, true, true)) + (jade.attr("alt", item.alt, true, true)) + " class=\"brands__img\"></a>");
	    }

	  }
	}).call(this);

	buf.push("</div>");}.call(this,"items" in locals_for_with?locals_for_with.items:typeof items!=="undefined"?items:undefined,"undefined" in locals_for_with?locals_for_with.undefined: false?undefined:undefined));;return buf.join("");
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(49);

	var _template = __webpack_require__(51);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Categories = function Categories(data) {
	  _classCallCheck(this, Categories);

	  this.html = (0, _template2.default)({
	    lorem: data.lorem
	  });
	};

		exports.default = Categories;

/***/ },
/* 49 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 50 */,
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(17);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (lorem) {
	buf.push("<div class=\"categories\"><div class=\"container\"><div class=\"category category--extra\"><h2 class=\"title-logo\">PINGBULL<span class=\"title-logo__suffix\">ER</span></h2><p class=\"category__subscription\">Copyright 2013, Pingbull AS</p><p class=\"category__text\">" + (jade.escape(null == (jade_interp = lorem) ? "" : jade_interp)) + "</p></div><div class=\"category category--extra\"><h4 class=\"category__title\">RECENT COMMENTS</h4><p class=\"category__text\">" + (jade.escape(null == (jade_interp = lorem) ? "" : jade_interp)) + "</p></div><div class=\"category category--extranews\"><h4 class=\"category__title\">NEWS CATEGORIES</h4><p class=\"category__text\">" + (jade.escape(null == (jade_interp = lorem) ? "" : jade_interp)) + "</p></div><div class=\"category category--extranews\"><h4 class=\"category__title\">NEWS CATEGORIES</h4><p class=\"category__text\">" + (jade.escape(null == (jade_interp = lorem) ? "" : jade_interp)) + "</p></div><div class=\"category category--news\"><h4 class=\"category__title\">NEWS CATEGORIES</h4><p class=\"category__text\">" + (jade.escape(null == (jade_interp = lorem) ? "" : jade_interp)) + "</p></div></div></div>");}.call(this,"lorem" in locals_for_with?locals_for_with.lorem:typeof lorem!=="undefined"?lorem:undefined));;return buf.join("");
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(53);

	var _template = __webpack_require__(56);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Footer = function Footer(data) {
	  _classCallCheck(this, Footer);

	  this.html = (0, _template2.default)({
	    menu: data.menu
	  });
	};

		exports.default = Footer;

/***/ },
/* 53 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 54 */,
/* 55 */,
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(17);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (menu) {
	buf.push("<footer class=\"footer\"><div class=\"container\">" + (((jade_interp = menu) == null ? '' : jade_interp)) + "<div class=\"contact-designer\">Designed by <a href=\"#designed\" class=\"contact-designer__link\"> Pingbull AS</a></div></div></footer>");}.call(this,"menu" in locals_for_with?locals_for_with.menu:typeof menu!=="undefined"?menu:undefined));;return buf.join("");
	}

/***/ },
/* 57 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
