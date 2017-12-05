/**
 * Created by user on 2017/12/5/005.
 */

import font from './font';

let o = {

	body_light_on: {
		'background-color': '#e6d7bd',
		color: '#131d24',
	},

	body_light_off: {
		'background-color': '#4f535b',
		color: '#rgb(221, 221, 221)',
	},

	_setting: {
		line: 31,
		char: 23,
		lh: 1.25,

		fontSize: 14,
		fontFamily: `Consolas, ${font.NotoSansSC.name}, Microsoft Yahei UI, sans-serif`,

		lineHeight(fontSize = o._setting.fontSize, ln = o._setting.lh)
		{
			return Math.ceil(fontSize * ln);
		},
	},

	font_style: {
		fontSize: 14,
		fontFamily: `Consolas, ${font.NotoSansSC.name}, Microsoft Yahei UI, sans-serif`,
		'text-shadow': '0 0.5px 0 rgba(228, 228, 228, 0.8), 0 0 1px rgba(0, 0, 0, 0.75)',
	},

};

(o as any).default = o;

export = o;
