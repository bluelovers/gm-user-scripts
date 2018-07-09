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

import * as self from './copy';
export default self;
