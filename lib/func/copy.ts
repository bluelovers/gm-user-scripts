/**
 * Created by user on 2018/7/9/009.
 */

export function copyonclick(id: string)
{
	return [
		`event.preventDefault()`,
		`var copyArea = document.getElementById('${id}')`,
		`try{copyArea.select();}catch(e){console.error(e)}`,
		`try{window.getSelection().removeAllRanges();}catch(e){}`,
		`try{var range = document.createRange();range.selectNode(copyArea);window.getSelection().addRange(range)}catch(e){console.error(e)}`,
		`try{document.execCommand('Copy')}catch(e){console.error(e)}`,
		`return false`
	].join(';')
}

export function copyElem(copyArea: HTMLElement)
{
	try
	{
		window.getSelection().removeAllRanges();
	}
	catch (e)
	{}
	try
	{
		// @ts-ignore
		copyArea.select();
	}
	catch (e)
	{
		console.error(e)
	}
	try
	{
		let range = document.createRange();
		range.selectNode(copyArea);
		window.getSelection().addRange(range)
	}
	catch (e)
	{
		console.error(e)
	}

	try
	{
		document.execCommand('Copy')
	}
	catch (e)
	{
		console.error(e)
	}
}

export default exports as typeof import('./copy');
