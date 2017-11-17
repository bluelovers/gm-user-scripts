/**
 * Created by user on 2017/7/13/013.
 */

function _uf_done(event: JQueryEventObject, mode?: boolean)
{
	event.stopPropagation();
	if (!mode) event.preventDefault();
}

_uf_done._uf_done = _uf_done;
_uf_done.default = _uf_done;

export = _uf_done;
