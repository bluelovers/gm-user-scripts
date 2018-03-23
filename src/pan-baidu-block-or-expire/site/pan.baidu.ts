/**
 * Created by user on 2017/7/22/022.
 */

'use strict';

import { IDemo, IGlobal, IGreasemonkey, IWindow, IJQueryStatic, IUrlObject2 } from 'root/lib/core/demo';

declare const global: IGlobal;
declare const greasemonkey: IGreasemonkey;
declare const window: IWindow;
declare const unsafeWindow: IWindow;
declare const $: IJQueryStatic;
declare const jQuery: IJQueryStatic;

let o: IDemo = {

	metadata: {
		include: [
			'http*://pan.baidu.com/s/*',
			'http*://pan.baidu.com/error/*',
			'http*://pan.baidu.com/wap/error*',
		],
		match: [
			'https://pan.baidu.com/wap/error',
			'http://pan.baidu.com/wap/error',
		],
		nomatch: [],
		exclude: [],

		grant: [],
	},

	test(_url_obj = global._url_obj)
	{
		let ret;

		if (ret = require('root/lib/greasemonkey/match').auto(_url_obj.source, module.exports))
		{
			return true;
		}

		return false;
	},

	async main(_url_obj = global._url_obj)
	{
		/**
		 * 過期測試
		 * https://pan.baidu.com/s/1dEBdp1R
		 *
		 * 封鎖測試
		 * https://pan.baidu.com/s/1o9Tnnya
		 */

		if (_url_obj.path.match(/wap\/error(?=[\/\?]|$)/))
		{
			let bool = _url_obj.query.match(/err_num=1/);

			if (bool)
			{
				/**
				 * https://pan.baidu.com/wap/error?err_num=1&err_type=share
				 */

				$('#pageMain .share-error.error-box')
					.prepend(`<div>
<font color=red>此分享連結可能已經過期或刪除</font><br>
<font color=red>請通知分享者補檔或嘗試其他分流連結</font><br>
</div>`)
				;
			}
			else if (_url_obj.query.match(/err_num=3/))
			{
				/**
				 * https://pan.baidu.com/wap/error?err_num=3&err_type=share
				 */

				$('#pageMain .share-error.error-box')
					.prepend(`<div>
<font color=blue>1. 你的 IP 可能屬於被和諧區域</font><br>
<font color=blue>請嘗試使用 VPN / Proxy</font><br>
<font color=red>2. 此分享者所屬的 IP 可能被和諧</font><br>
<font color=red>請通知更換其他網盤再進行分享</font><br>
</div>`)
				;
			}
		}
		else if (_url_obj.path.match(/\/error(?=[\/\?]|$)/) && !/文件已取消/.test(document.title))
		{
			$('.module-error .reason, #pageMain .share-error.error-box')
				.prepend(`<div>
<font color=blue>1. 你的 IP 可能屬於被和諧區域</font><br>
<font color=blue>請嘗試使用 VPN / Proxy</font><br>
<font color=red>2. 此分享者所屬的 IP 可能被和諧</font><br>
<font color=red>請通知更換其他網盤再進行分享</font><br>
</div>`)
			;
		}
		else if (_url_obj.path.match(/\/s\/\w+/))
		{
			$('#mainContent #share_nofound_des .error-img')
				.after(`<div>
<font color=blue>1. 百度盤可能出錯</font><br>
<font color=blue>請嘗試重新整理頁面</font><br>
<font color=red>2. 此分享連結可能已經過期或刪除</font><br>
<font color=red>請通知分享者補檔或嘗試其他分流連結</font><br>
</div>`)
			;
		}

	},

	adblock(_url_obj = global._url_obj)
	{
	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add([
				'#pageBottom, #novel_header, #footer',
			].join())
		;

		return _dom;
	},

};

export = o as IDemo;
