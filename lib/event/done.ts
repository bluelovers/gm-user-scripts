/**
 * Created by user on 2017/7/13/013.
 */

function _uf_done(event: JQueryEventObject, mode?: boolean)
{
	event.stopPropagation();
	if (!mode) event.preventDefault();
}

function _uf_done2(event: JQueryEventObject, mode?: boolean)
{
	//event.stopPropagation();
	event.stopImmediatePropagation();

	if (!mode) event.preventDefault();
}

_uf_done._uf_done = _uf_done;
_uf_done._uf_done2 = _uf_done2;
_uf_done.default = _uf_done;

export = _uf_done;
