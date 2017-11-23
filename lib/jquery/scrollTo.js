/**
 * Created by user on 2017/7/13/013.
 */

module.exports.makeJQueryPlugin = ($ = global.jQuery, window = global.window) =>
{
	(function (_old)
	{
		var _fn_top = function (who)
		{
			var _top;
			var _o;

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
			$.fn.scrollTo = function (who, offset)
			{
				var _top = _fn_top(who);

				if (offset)
				{
					_top = (_top ? _top : 0) + _fn_top(offset);
				}

				if (_top !== undefined)
				{
					this.scrollTop(_top);
				}

				return this;
			};
		}

//			if (!$.isfunction($.scrollTo))
		if (typeof $.scrollTo === 'undefined')
		{
			$.scrollTo = function (who, offset)
			{
				return $(window).scrollTo(who, offset);
			};
		}
	})($.fn.scrollTo);
};
