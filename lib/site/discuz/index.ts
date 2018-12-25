/**
 * Created by user on 2018/12/25/025.
 */

export function hide_userinfo(context)
{
	let _area = $('.pls.favatar', context);

	let _avatar = _area.find('> div:has(.avatar)')
		.not('.p_pop')
		.eq(0);

	if (_avatar.find('img[src*="noavatar"]').length)
	{
		_avatar.addClass('noavatar');
	}

	_avatar.addClass('_avatar_area');

	let _pls_sub = $('<div class="_pls_sub"/>');

	console.log(_pls_sub, _avatar);

	_avatar.after(_pls_sub);

	_avatar
		.nextAll()
		.appendTo(_pls_sub)
	;
}

