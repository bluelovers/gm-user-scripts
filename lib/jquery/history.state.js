/**
 * Created by user on 2017/7/21/021.
 */

module.exports.makeJQueryPlugin = ($ = global.jQuery, window = global.window) =>
{
	const history = window.history;

	const history_event = [
		'pushState',
		'replaceState',
	];

	/*
	history_event
		.forEach(function (event)
		{
			let fn = `on${event}`;

			console.log(`history.${fn}`, (fn in history));
			console.log(`history.${event}`, (event in history));

			console.log(`window.${fn.toLowerCase()}`, (fn.toLowerCase() in window));
			console.log(`window.${event.toLowerCase()}`, (event.toLowerCase() in window));
		})
	;
	*/

	history_event
		.forEach(function (event)
		{
			console.log(`history.${event}`, (event in history));

			$(window)
				.on(event.toLowerCase(), function (event)
				{
					console.log(777, event);
				})
			;

			((old) =>
			{
				const type = event.toLowerCase();

				history[event] = function (...argv)
				{
					let ret = old.call(this, ...argv);

					$(window).trigger({
						original: {
							location: window.location,
						},

						state: argv[0],
						title: argv[1],
						url: argv[2],

						type: type,
					});

					return ret;
				};

				//console.log(666, history[event]);

				let fn = `on${type}`;

			})(history[event])
		})
	;

};
