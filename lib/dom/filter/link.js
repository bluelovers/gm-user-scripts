/**
 * Created by user on 2017/7/13/013.
 */

module.exports = function _uf_dom_filter_link(_dom, _content, mode)
{
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
