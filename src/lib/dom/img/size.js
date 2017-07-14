/**
 * Created by user on 2017/7/14/014.
 */

module.exports._uf_fixsize2 = function _uf_fixsize2(who, area, force, scrollsize)
{
	var _elem = $(who);

	var _ok;

	if ($.isPlainObject(area) && $.isNumeric(area.width))
	{
		area = $('<div/>')
			.width(area.width)
			.height(area.height !== undefined ? area.height : area.width)
		;
	}
	else if ($.isArray(area) && $.isNumeric(area[0]))
	{
		area = $('<div/>')
			.width(area[0])
			.height(area[1] !== undefined ? area[1] : area[0])
		;
	}

	if (area === true || area == who || area == _elem)
	{
		scrollsize = null;
		_ok = true;
	}
	else if (area)
	{
		_ok = area;
	}
	else
	{
		_ok = window;
	}

	if (!scrollsize || _ok === true || (scrollsize.width === undefined && scrollsize.height === undefined) || (!scrollsize.width && !scrollsize.height))
	{
		scrollsize = null;
	}
	else
	{
		if (scrollsize == 'auto')
		{
			scrollsize.width = 'auto';
			scrollsize.height = 'auto';
		}

		scrollsize.width = scrollsize.width || 0;
		scrollsize.height = scrollsize.height || 0;

		/*
		if (scrollsize.width == 'auto')
		{
//				scrollsize.width = document.documentElement.scrollWidth - document.documentElement.clientWidth;
			scrollsize.width = (_ok === true ? 0 : $(_ok).width() - $(_ok).innerWidth());
		}

		if (scrollsize.height == 'auto')
		{
//				scrollsize.height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			scrollsize.height = (_ok === true ? 0 : $(_ok).height() - $(_ok).innerHeight());
		}
		*/
	}

	_elem.each(function(){
		var _this = $(this);
		var _area = $(_ok === true ? this : _ok);

		var _w = _this[0].naturalWidth;
		var _h = _this[0].naturalHeight;

		if (!_w || !_h)
		{
			_w = _this.width();
			_h = _this.height();
		}

		var _w2 = _area.width();
		var _h2 = _area.height();

		if (scrollsize)
		{
			/*
			_w2 -= scrollsize.width;
			_h2 -= scrollsize.height;
			*/

			_w2 = scrollsize.width == 'auto' ? _area.innerWidth() : _w2 - scrollsize.width;
			_h2 = scrollsize.height == 'auto' ? _area.innerHeight() : _h2 - scrollsize.height;
		}

		var _w3 = _w;
		var _h3 = _h;

		if (_w > _w2)
		{
			_w3 = _w2;
			_h3 = _h * (_w2 / _w);

//				_uf_log(1, [_w, _h, _w/_h], [_w2, _h2, _w2/_h2], [_w3, _h3, _w3/_h3]);

			if (_h3 > _h2)
			{
				_w3 = _w3 * (_h2 / _h3);
				_h3 = _h2;

//					_uf_log(1, [_w, _h, _w/_h], [_w2, _h2, _w2/_h2], [_w3, _h3, _w3/_h3]);
			}

//				_this.height(_h * (_w2 / _w)).width(_w2);
		}
		else if (force || (_h > _h2))
		{
			_w3 = _w * (_h2 / _h);
			_h3 = _h2;

//				_uf_log(2, [_w, _h, _w/_h], [_w2, _h2, _w2/_h2], [_w3, _h3, _w3/_h3]);

			if (_w3 > _w2)
			{
				_w3 = _w2;
				_h3 = _h * (_w2 / _w);

//					_uf_log(2, [_w, _h, _w/_h], [_w2, _h2, _w2/_h2], [_w3, _h3, _w3/_h3]);
			}

//				_this.width(_w * (_h2 / _h)).height(_h2);
		}
		else
		{
//				_uf_log(3, [_w, _h, _w/_h], [_w2, _h2, _w2/_h2], [_w3, _h3, _w3/_h3]);

//				_this.height(_h).width(_w);
		}

		_this.height(_h3).width(_w3);

//			_uf_log([_w, _h], [_w2, _h2], [_w3, _h3]);

		_this.attr({
			'data-naturalHeight': _h,
			'data-naturalWidth': _w,

			'data-height': _h3,
			'data-width': _w3,
		});
	});

	return _elem;
};
