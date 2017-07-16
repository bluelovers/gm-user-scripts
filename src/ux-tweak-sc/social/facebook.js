/**
 * Created by user on 2017/7/16/016.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://www.facebook.com/*',
		],
		exclude: [],
	},

	test(_url_obj)
	{
		if (_url_obj.host.match(/facebook\.com/))
		{
			return true;
		}

		return false;
	},

	main()
	{
		const RETURN = module.exports.test(_url_obj);

		//console.log(_url_obj, RETURN);

		if (RETURN)
		{

			let _ready = function ()
			{
				let _a = $('#appsNav > ul > li > a[data-testid="left_nav_item_建立特效框"]:eq(0)')
					.not('[data-uf]')
					;

				if (_a.length)
				{
					_a
						.attr('data-uf', true)
						.parent('li')
						.after(function ()
						{
							let li = $('<li />')
								.addClass('clearfix sideNavItem stat_elem')
							;
							let a = $('<a draggable="false" />')
								.addClass('_5afe')
								.prop('href', '/profilepicframes?ref=app_bookmark')
								.html(function ()
								{
									return `<span class="imgWrap" data-testid="bookmark_icon_left_nav"><i class="img sp_CgOJqtrmT7M sx_f75c27" draggable="false"></i></span><div dir="ltr" class="linkWrap noCount">使用特效框</div>`;
								})
								.appendTo(li)
							;

							return li;
						})
					;
				}
			};

			$('body').on('click', 'a[href]:not([rel="ignore"] or [role] or [href="#"])', function(event)
			{
				setTimeout(_ready, 3000);
			});

			setTimeout(_ready, 1500);

			return RETURN;
		}
	},

	adblock()
	{

	},
};
