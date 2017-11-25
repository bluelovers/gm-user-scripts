/**
 * Created by user on 2017/7/14/014.
 */

'use strict';

export interface IHTMLElement extends HTMLElement
{
	naturalWidth?: number;
	naturalHeight?: number;
}

export function _uf_fixsize2(who, area, force, scrollsize)
{
	let _elem = $(who);

	let _ok;

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
	}

	_elem.each(function(){
		let _this = $(this);
		let _area = $(_ok === true ? this : _ok);

		let _w = (_this[0] as IHTMLElement).naturalWidth;
		let _h = (_this[0] as IHTMLElement).naturalHeight;

		if (!_w || !_h)
		{
			_w = _this.width();
			_h = _this.height();
		}

		let _w2 = _area.width();
		let _h2 = _area.height();

		if (scrollsize)
		{
			_w2 = scrollsize.width == 'auto' ? _area.innerWidth() : _w2 - scrollsize.width;
			_h2 = scrollsize.height == 'auto' ? _area.innerHeight() : _h2 - scrollsize.height;
		}

		let _w3 = _w;
		let _h3 = _h;

		if (_w > _w2)
		{
			_w3 = _w2;
			_h3 = _h * (_w2 / _w);

			if (_h3 > _h2)
			{
				_w3 = _w3 * (_h2 / _h3);
				_h3 = _h2;
			}
		}
		else if (force > 1)
		{
			let scale = calc_scale(_w, _h);

			_w3 = _w3 * scale;
			_h3 = _h2;

			//console.log(force, scale, [_w, _h], [_w3, _h3]);
		}
		else if (force || (_h > _h2))
		{
			_w3 = _w * (_h2 / _h);
			_h3 = _h2;

			if (_w3 > _w2)
			{
				_w3 = _w2;
				_h3 = _h * (_w2 / _w);
			}
		}
		else
		{
		}

		_this.height(_h3).width(_w3);

		_this.attr({
			'data-naturalHeight': _h,
			'data-naturalWidth': _w,

			'data-height': _h3,
			'data-width': _w3,
		});
	});

	return _elem;
}

export default _uf_fixsize2;

export function calc_scale(w: number, h: number)
{
	return w / h;
}
