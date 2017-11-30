/**
 * Created by user on 2017/7/13/013.
 */

interface Iexports
{
	_uf_done(event: JQueryEventObject|Event, mode?: boolean);
	_uf_done2(event: JQueryEventObject|Event, mode?: boolean);

	default(event: JQueryEventObject|Event, mode?: boolean);
}

function _uf_done(event: JQueryEventObject|Event, mode?: boolean)
{
	event.stopPropagation();
	if (!mode) event.preventDefault();
}

function _uf_done2(event: JQueryEventObject|Event, mode?: boolean)
{
	//event.stopPropagation();
	event.stopImmediatePropagation();

	if (!mode) event.preventDefault();
}

Object.assign(_uf_done, {
	_uf_done,
	_uf_done2,
	default: _uf_done,
}) as Iexports;

export = _uf_done;
