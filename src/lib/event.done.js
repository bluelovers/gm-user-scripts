/**
 * Created by user on 2017/7/13/013.
 */

module.exports = (event, mode) =>
{
	event.stopPropagation();
	if (!mode) event.preventDefault();
};
