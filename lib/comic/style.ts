/**
 * Created by user on 2017/7/14/014.
 */

let o = {

	toCss(css = {}, css_important = {}): string
	{
		let t = $('<div/>');

		if (Array.isArray(css))
		{
			css.forEach(function (css)
			{
				t.css(css);
			})
		}
		else
		{
			t.css(css);
		}

		let s = [];

		s.push((t.attr('style') || ''));

		t.removeAttr('style');

		if (Array.isArray(css_important))
		{
			css_important.forEach(function (css)
			{
				t.css(css);
			})
		}
		else
		{
			t.css(css_important);
		}

		s.push((t.attr('style') || '').replace(/;/g, ' !important;'));

		t.remove();

		return s.join(';');
	},

	photo: {
		filter: 'contrast(115%)',
		padding: 0,
		margin: 'auto',
		border: '0px none #fff',
		outline: 0,

		'max-width': 'initial',
		'max-height': 'initial',

		'min-width': 'initial',
		'min-height': 'initial',

		'border-spacing': 0,
	},

	photo_area: {
		padding: 0,
		margin: 'auto',
		border: '0px none #fff',
		outline: 0,
		'border-spacing': 0,
	},

	overflow_hidden: {
		'overflow-x': 'hidden',
	},

	body: {
		margin: 0,
		padding: 0,
		outline: 0,
	},

	bg_transparent: {
		background: 'transparent',
	},

	bg_dark: {
		background: '#34353b',
	},

	bg_dark2: {
		background: '#4f535b',
	},

	bg_dark_text: {
		color: '#DDDDDD',
	},

	bg_dark_border: {
		border: '1px solid #000000',
	},

	page: {
		//position: 'fixed',
		position: 'absolute',
		padding: '10px',
		'z-index': 100,
		'min-width': '80px',
		'text-align': 'center',
	},

	page_position: {
		top: 50,
		left: 50,
	},

	video_thumb: {
		'min-width': 120,
		'min-height': 90,

		display: 'inline-block',
		background: 'rgb(0, 0, 0) none repeat scroll 0% 0%',
		color: 'rgb(255, 255, 255)',
		'text-decoration': 'none',
		'text-align': 'center',
		padding: 5,
	},

	vertical: {

	},

	vertical_before: {
		content: '',
		display: 'inline-block',
		'vertical-align': 'middle',
		height: '100%',
	},

	vertical_target: {
		'vertical-align': 'middle',
		display: 'inline-block',
	},

};

(o as any).default = o;

export = o;
