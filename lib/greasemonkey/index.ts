/**
 * Created by user on 2017/7/14/014.
 */

export function GM_addStyle(css: string, head?)
{
	head = head || document.getElementsByTagName('head')[0];

	if (!head)
	{
		return;
	}

	let style = document.createElement('style');
	style.type = 'text/css';

	try
	{
		style.innerHTML = css
	}
	catch (e)
	{
		style.innerText = css
	}
	head.appendChild(style);

	return style;
}

export default exports;
