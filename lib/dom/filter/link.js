/**
 * Created by user on 2017/7/13/013.
 */

module.exports = function _uf_dom_filter_link(_dom, _content, mode)
{
	if (Array.isArray(_dom))
	{
		let _dom_new = $();

		$.each(_dom, function (index, value)
		{
			_dom_new = _dom_new.add(value)
		});

		_dom = _dom_new;
	}

	if (_content)
	{
		_dom = $(_dom, _content);
	}
	else
	{
		_dom = $(_dom);
	}

	_dom = _dom.filter('a[href]').not('[href^="javascript:"], [href^="#"], [href=""]');

	return _dom;
};
