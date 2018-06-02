/**
 * Created by user on 2017/11/23/023.
 */

//export function onCapture(who, originalType: string, selector: string, listener: EventListener, ...argv)
//export function onCapture(who, originalType: string, listener: EventListener, ...argv)
export function onCapture<T extends EventListener>(who, originalType: string, listener: T, ...argv)
{
	let selector;

	if (typeof listener !== 'function')
	{
		selector = listener;
		listener = argv[argv.length - 1];
	}

	let t = originalType.split('.');

	const type = t.shift().toString();
	const namespace = t.join('.').toString();

	let o = $(who)
		.each(function ()
		{
			this.addEventListener(type, function (originalEvent)
			{
				//console.debug(type, originalType, selector, listener, originalEvent);

				let event = $.Event(originalEvent);

				if (!selector || selector && $(event.target).is(selector))
				{
					//console.debug('onCapture', event);

					listener.call(event.target, event);
				}

			}, true);
		})
	;

	return o;
}

export default onCapture;
