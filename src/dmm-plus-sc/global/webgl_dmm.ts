/**
 * Created by user on 2017/11/18/018.
 */

import { IDemo } from 'root/lib/core/demo';

'use strict';

let o: IDemo = {

	priority: 100,

	script: true,

	metadata: {
		include: [
			'*/webgl_dmm/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (require('root/lib/greasemonkey/match').auto(_url_obj.source, module.exports) && $('#main_contents #game-outer').length)
		{
			return 2;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		let game_frame = $('#main_contents #game-outer');
		let game_width = (game_frame.length) ? game_frame.width() : 1200;

		const greasemonkey = require('root/lib/greasemonkey/uf');

		greasemonkey
			.GM_addStyle([
				`@media only screen and (max-width: ${game_width + 200}px) {
				#main_contents > div[style] { margin-left: 0; }
				}`,
				`#main_contents > div[style] { margin-left: 0; }`
			], 'body')
		;

	},

};

export = o;
