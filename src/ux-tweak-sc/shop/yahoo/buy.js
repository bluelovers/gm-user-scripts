/**
 * Created by user on 2017/7/18/018.
 */

'use strict';

module.exports = {

	metadata: {
		include: [
			'http*://tw.buy.yahoo.com/*',
			'http*://tw.buy.yahoo.com/bestbuy/*',
			'http*://tw.buy.yahoo.com/activity/*',
			'https://tw.search.buy.yahoo.com/search/shopping/*',
			'https://twpay.buy.yahoo.com/checkout/preview*',
			'https://tw.buy.yahoo.com/coupons*',
			'https://tw.buy.yahoo.com/gdsale/*.html',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/buy\.yahoo\.com/))
		{
			return true;
		}

		return false;
	},

	async main(_url_obj = global._url_obj)
	{
		if (adult_chk() === true)
		{
			return;
		}

		const keycodes = require('keycodes');
		const _uf_done = require('root/lib/event/done');
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		const { debounce } = require('throttle-debounce');
		const { throttle } = require('throttle-debounce');
		const greasemonkey = require('root/lib/greasemonkey/uf');

		const GMApi = require('root/lib/greasemonkey/gm/api').GMApi;

		const runtimeSiteID = require('root/lib/site/index').create(module.exports.file);

		$('#srp-pjax')
			.on('DOMNodeInserted', '#srp-pjax-content', debounce(200, function ()
			{
				$(window).triggerHandler('load');
			}))
		;

		$('.orderbox')
			.on('DOMNodeInserted', '#srp-pjax-content', debounce(200, function ()
			{
				$(window).triggerHandler('load');
			}))
		;

		proctip_post_gov(_url_obj);

		greasemonkey
			.GM_addStyle([
				`:root, html, body { font-size: 10pt; font-family: unset; }`,

				`#cl-menunav .tabview .panel ul.yui3-menu li.menuitem .yui3-menu-label { font-size: unset; }`,
			])
		;

		greasemonkey
			.GM_addStyle([
				`.ShoppingProductFeatures__productFeatureWrapper___1D0EZ ul li div { display: inline-block; margin-top: 0; margin-left: 0; }`,

			])
		;

		$(window)
			.on('load.ready', debounce(500, function ()
			{
				_uf_dom_filter_link([
					'#sr a, #cl-bestbuypd a, #bestdeal-bound, #eventKV_wrap a, .eventKV_wrap a',

					// https://tw.buy.yahoo.com/pay/shoppingcart.aspx?ct=40
					'.orderbox a.name',

					// https://tw.buy.yahoo.com/myaccount/service
					'.myacc-mod .listbox .pdname a, .myacc-mod .listbox .proc a',

					'#auction_bf .bd a',

					'#srp_result_list .item a',
					'#cl-vvrecmd .page-item a',

					'.header .link',

					'#shopcart a',
					'#myaccount a',

					'a[class*="OrderItem__item"]',

					'a[class*="BaseGridItem__content"]',

					'[class*="ViewAlsoView__recomendedItem"] a',
					'[class*="ProductHorizList"] a',

					'.catitem-bd #cl-recproduct a',

					'#cl-menunav .category .popup a',

				].join(','))
					.prop('target', '_blank')
					.attr('data-done', true)
					.off('click.open')
					.on('click.open', function (event)
					{
						window.open($(this).attr('data-href') || this.href, '_blank');

						return _uf_done(event);
					})
				;

				_uf_dom_filter_link([
					'#srp_result_list .item a',
					'#cl-vvrecmd .page-item a',
				].join(','))
					.attr('data-href', function ()
					{
						let href = $(this).attr('href');
						$(this).attr('href', 'javascript:void(0)');

						return href;
					})
				;

				$('.orderbox .rm')
					.not('[data-done]')
					.attr('data-done', true)
					.each(function ()
					{
						let _tr = $(this);

						let _gdid = _tr.attr('gdid');

						let _dom = problem(_gdid);

						_dom.prependTo($('.spec', _tr));
					})
				;

				let _share_btn = $('#isoredux-root span[class^="ShareButtons__copyText___"][data-clipboard-text]:eq(0)')
					.not('[data-done]')
				;

				if (_share_btn.length)
				{
					_share_btn.attr('data-done', true);

					// https://tw.buy.yahoo.com/gdsale/gdsale.asp?gdid=8957315
					let _href = _share_btn.attr('data-clipboard-text') || '';

					let _m = _href.match(/gdid=(\d+)/);
					if (_m && _m[1])
					{
						let _gdid = _m[1];

						let _dom = problem(_gdid);

						let _target = $('#isoredux-root div[class^=CheckoutBar__wrapper___]')

						_dom.appendTo(_target);
					}
				}

				$('.spec-table td:has(> .buy_input)')
					.not('[data-done]')
					.attr('data-done', true)
					.each(function ()
					{
						let _area = $(this);

						let _form = _area.parents('#cl-gdbooth').eq(0);

						let _gdid = $(':input#gdid:eq(0), :input[name="gdid"]:eq(0)', _form).eq(0).val();

						if (_gdid)
						{
							let _dom = problem(_gdid);

							$('a', _dom)
								.addClass('spec item')
								.css({
									'line-height': '1.85em',
									'min-width': '3em',
									'border-color': 'rgba(123, 0, 170, 0.6)',
									'color': '#7b00aa',
									'border-radius': '0.5em',

									'margin-right': '5px',
									'margin-left': '5px',
								})
							;

							_dom
								.css({
									'margin-top': '1em',
									'text-align': 'left',
								})
								.prependTo(_area)
							;
						}
					})
				;

				$('#myaccount > a:has(> .username)')
					.prop('href', 'https://tw.buy.yahoo.com/myaccount/orderlist?hpp=S2')
				;

				let _input = $('#TextBoxName, #TextBoxEmail, #TextBoxCustomValue, form[action*="actregister"]');

				if (_input.length)
				{
					_input.attr('autocomplete', 'on');

					$('#ButtonConfirm').removeAttr('disabled');

					$('.blockUI.blockOverlay').click(function (event)
					{
						$('.blockUI')
							.hide()
							.css('z-index', 0)
							.remove()
						;

						_uf_done(event);
					});

					_input = _input
						.filter(':text, textarea')
						.filter('[id]')
						.filter(':visible')
						.not(':hidden, :submit, :file')
					;

					_input
						.each(function ()
						{
							let _this = $(this);

							let _id = _this.prop('id');
							let _value = _this.val();

							if (!_value)
							{
								let _v = runtimeSiteID
									.getValue(_id)
								;

								if (_v)
								{
									_this.val(_v);
								}
							}
						})
					;

					_input
						.on('change keyup', function ()
						{
							let _this = $(this);

							let _id = _this.prop('id');
							let _value = _this.val();

							if (_value)
							{
								runtimeSiteID
									.setValue(_id, _value)
								;
							}
						})
					;
				}

				if (_url_obj.path.match(/coupons/))
				{
					$('div[class*="CouponsItem__receive"]').each(function ()
					{
						let _a = $(this);

						if (!_a.text().match(/已領取/))
						{
							this.click();
						}
					});
				}

				let classs = filter_hash_class([
					'InfoCell__cellContent',
					'InfoCell__cellTitle',
					'DeliveryInfo__expandableContent',
					'ProductMainInfo__ccardWrap',
					'InfoCell__cellContent',
					'ShoppingPromiseInfo__cellContent',
					'ThemeDiscoveryAd',
					'ProductMainInfo__ccard',
				]);

				$(`[class*="ProductHtmlDetail__detail___34PZN"] td > p[style*="font-size"], ${classs.join(', ')}, [class*="RadioButtons__radioBtn___qhOjt"] span`)
					.css('font-size', 'unset')
				;

			}))
			.on('load.search', function ()
			{
				//require('root/lib/dom/disable_nocontextmenu')
				//._uf_disable_nocontextmenu2(1, '#srp_result_list .item, #srp_result_list .item *');
			})
			.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
			{
				switch (event.which)
				{
					case keycodes('pageup'):
					case keycodes('left'):
						var _a = $('#srp_pagination .pre-page a');

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();
						}

						break;
					case keycodes('pagedown'):
					case keycodes('right'):
						var _a = $('#srp_pagination .next-page a');

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();
						}

						break;
				}
			}))
			.on('load.adult_chk', adult_chk)
			.triggerHandler('load')
		;
	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj)
	{

	},
};

function problem_data(id, problemtype = 1)
{
	return {
		addform: {
			text: '詢問',
			url: `https://tw.buy.yahoo.com/myaccount/problem_addform?gd=${id}&problemtype=${problemtype}`,
		},
		detail: {
			text: '記錄',
			url: `https://tw.buy.yahoo.com/myaccount/problem_detail?gd=${id}&problemtype=${problemtype}`,
		},
	};
}

function problem(id, problemtype = 1)
{
	let data = problem_data(id, problemtype);

	let area = $('<span/>')
		.css({
			display: 'block',
			'text-align': 'center',
		})
	;

	let _a = $('<a/>')
		.prop('target', '_blank')
		.prop('href', data.addform.url)
		.text(data.addform.text)
		.appendTo(area)
	;

	$('<span> | </span>').appendTo(area);

	_a.clone()
		.prop('target', '_blank')
		.prop('href', data.detail.url)
		.text(data.detail.text)
		.appendTo(area)
	;

	return area;
}

function adult_chk()
{
	let _a = $('#cl-restriction .action form .next:submit');

	if (_a.length)
	{
		_a[0].click();

		return true;
	}
}

function proctip_post_gov(_url_obj = global._url_obj)
{
	if (!_url_obj.path.match(/orderlist/))
	{
		return;
	}

	$('.proctip a')
		.each(function (i, elem)
		{
			let _this = $(this);
			let _href = _this.attr('href');

			if (_href.match(/postserv\.post\.gov\.tw\/webpost\/CSController.+(?:MAILNO=(\d+))/))
			{
				_this.attr('href', `http://postserv.post.gov.tw/pstmail/main_mail.html?MAILNO=${RegExp.$1}`);
			}
			else if (_href.match(/www\.tjoin\.com\/search\/stocksearch\.asp/))
			{
				_this.text().match(/(\d+)/);

				_this.attr('href', `http://www.kerrytj.com/zh/search/search_track.aspx?trackNo=${RegExp.$1}`);
			}
		})
	;
}

function filter_hash_class(classs)
{
	return classs.map(v => `[class*="${v}"]`)
}
