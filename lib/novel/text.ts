/**
 * Created by user on 2017/12/5/005.
 */

export class enspace
{
	public _cache_ = {
		replace: [],
		words: new Map(),
	};
	public _data_ = {
		m0: /([^a-z0-9\-\.\s])?([a-z0-9\-\.]+(?:[a-z0-9\-\.\s]+[a-z0-9\-\.]+)?)([^a-z0-9\-\.\s])?/uig,
		r1: /[「」\'\":\-\+（）\(\)\[\]【】～“”‘’:：：，*＊@。ω・、。`　─一\d『』◆~、？！\?\!×\.\<\>=…]/i,

		rtrim: /[ 　]+$/,

		words: [
			{
				s: '（·）',
				r: '',
			},
			{
				s: /\.{3}/g,
				r: '…',
			},
		]

	};
	public options = {};

	static create(...argv)
	{
		return new this(...argv);
	}

	replace(text, options = {}): string
	{
		if (!text || !/[^\s]/.test(text))
		{
			return text;
		}

		let _self = this;

		let _ret = text
			.toString()
			.replace(_self._data_.m0, function (...argv)
			{
				if (argv[2])
				{
					let old = argv[2];

					if (argv[2].length > 1 && argv[1] && !_self._data_.r1.test(argv[1]))
					{
						argv[2] = ' ' + argv[2];
					}

					if (argv[3] && !_self._data_.r1.test(argv[3]))
					{
						argv[2] = argv[2] + ' ';
					}

					if (old != argv[2])
					{
						_self._cache_.replace.push({
							old: old,
							new: argv[2],

							data: argv,
						});
					}
					else
					{
						//console.debug([old, argv[2]], argv);
					}

					return (argv[1] || '') + argv[2] + (argv[3] || '');
				}

				return argv[0];
			})
			.replace(_self._data_.rtrim, '')
		;

		if (options.words)
		{
			for (let i in _self._data_.words)
			{
				let _r = (_self._data_.words[i].s instanceof RegExp) ? _self._data_.words[i].s : new RegExp(_self._data_.words[i].s, 'g');

				let _new = _ret.replace(_r, _self._data_.words[i].r);

				if (_new != _ret)
				{
					let myMap = [];

					if (_self._cache_.words.has(_self._data_.words[i]))
					{
						myMap = _self._cache_.words.get(_self._data_.words[i]);
					}

					myMap.push({
						old: _ret,
						new: _new,
					});

					_self._cache_.words.set(_self._data_.words[i], myMap);

					_ret = _new;
				}

				if (!/[^\s]/.test(_ret))
				{
					break;
				}
			}
		}

		return _ret;
	}

	clearLF(text: string)
	{
		return text
			.toString()
			.replace(/\r\n|\r/g, '\n')
			.replace(/[ 　]+\n/g, '\n')
			.replace(/\n{4,}/g, '\n\n')
			.replace(/\n{3,}/g, '\n\n')
		;
	}
}

export default exports;
