/**
 * Created by user on 2017/11/17/017.
 */

export function transparent(iframe)
{
	iframe = $(iframe);

	iframe
		.attr('frameBorder', 0)
		.attr('allowTransparency', true)
		.css({
			backgroundColor: 'transparent',
			border: '0 none transparent',
			outline: '0 none transparent',
		})
	;

	return iframe;
}

export default transparent;
