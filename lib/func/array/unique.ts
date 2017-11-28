/**
 * Created by user on 2017/11/26/026.
 */

export function array_unique(array: any[])
{
	return array.filter(function (el, index, arr)
	{
		return index == arr.indexOf(el);
	});
}

export default array_unique;
