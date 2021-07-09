/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-arrow-up': '&#xe90c;',
		'icon-phone': '&#xe900;',
		'icon-close': '&#xe901;',
		'icon-cosmetic': '&#xe902;',
		'icon-facebook': '&#xe903;',
		'icon-instagram': '&#xe904;',
		'icon-mail': '&#xe905;',
		'icon-map-pin': '&#xe906;',
		'icon-menu': '&#xe907;',
		'icon-trim': '&#xe908;',
		'icon-whatsapp': '&#xe909;',
		'icon-woman-hair': '&#xe90a;',
		'icon-youtube': '&#xe90b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
