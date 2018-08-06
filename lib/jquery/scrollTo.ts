/**
 * Created by user on 2017/7/13/013.
 */

import { IDemo, IGlobal, IGreasemonkey, IWindow, IJQueryStatic, IUrlObject2 } from '../core/demo';

// @ts-ignore
export function makeJQueryPlugin($: IJQueryStatic = global.jQuery, window: IWindow = global.window)
{
	(function (_old)
	{
		let _fn_top = function (who)
		{
			let _top;
			let _o;

			if ($.isNumeric(who))
			{
				_top = who;
			}
			else if (Array.isArray(who) && who.length)
			{
				for (let elem of who)
				{
					let _o;

					if (elem && (_o = $(elem)) && _o.length)
					{
						_top = _o.offset().top;
						break;
					}
				}
			}
			else if ((_o = $(who)) && _o.length)
			{
				_top = _o.offset().top;
			}

			return _top;
		};

//			if (!$.isfunction(_old))
		if (typeof _old === 'undefined')
		{
			// @ts-ignore
			$.fn.scrollTo = function (who, offset, animate?, finish?: boolean)
			{
				let _top = _fn_top(who);

				if (offset)
				{
					_top = (_top ? _top : 0) + _fn_top(offset);
				}

				if (_top !== undefined)
				{
					if (finish)
					{
						this.finish();
					}

					if (0 && animate)
					{
						return this.animate({
							scrollTop: _top,
						}, animate);
					}

					return this.scrollTop(_top);
				}

				return this;
			};
		}

//			if (!$.isfunction($.scrollTo))
		if (typeof $.scrollTo === 'undefined')
		{
			// @ts-ignore
			$.scrollTo = function (who, offset, animate?, finish?: boolean)
			{
				// @ts-ignore
				return $(window).scrollTo(who, offset, animate, finish);
			};
		}
		// @ts-ignore
	})($.fn.scrollTo);
}

export default makeJQueryPlugin
