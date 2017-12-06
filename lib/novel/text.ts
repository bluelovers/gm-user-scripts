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
		r1: /[「」①→\'\":\-\+（）╮（╯＿╰）╭\(\)\[\]■【】《》~～“”‘’:：：，*＊@。ω・、。`　─一\d『』◆~、？！\?\!×\.\<\>=…]/i,

		rtrim: /[ 　]+$/,

		words: [
			/*
			{
				s: '（·）',
				r: '',
			},
			*/
			{
				s: /\.{3}/g,
				r: '…',
			},
			{
				s: '(.)（·）(.)',
				r: '$1$2',
			},
			{
				s: '毛@骨@悚@然',
				r: '毛骨悚然',

				no_regex: true,
			},
			{
				s: '果#_@_#体',
				r: '裸体',
			},
			{
				s: '绝@望#的￥魔%手',
				r: '绝望的魔手',

				no_regex: true,
			},
			{
				s: /\?([一二三四五六七八九十零]式)/g,
				r: '·$1',
			},
			{
				s: '，”',
				r: '”',

				no_regex: true,
			},

		]

	};
	public options = {};

	constructor(options?)
	{
		let _self = this;

		let r = '(?:\@|（·）|\-|\/|\\\(\\\)|%|￥|_)';

		[
			'怀@孕',
			'傻@瓜',
			'禁@书',
			'妊@娠',
			'肉@(?:身|体)',
			'呻@吟',
			'翻@弄',
			'做@爱',
			'射@出',
			'毛@骨',
			'骨@悚',
			'悚@然',
			'艳@丽',
			'麻@痹',
			'绝@望',
			'魔@手',
			'代@价',
		]
			.concat(options && options.words_block ? options.words_block : null)
			.filter(function (el, index, arr)
			{
				return el && (index == arr.indexOf(el));
			})
			.forEach(function (value)
			{
				let a = value.split('@');

				_self._data_.words.push({
					s: new RegExp(`(${a[0]})${r}(${a[1]})`, 'g'),
					r: '$1$2',
				});
			})
		;

		this._data_.words.map(function (value, index, array)
		{
			// @ts-ignore
			if (value.no_regex)
			{
				return value;
			}

			if (typeof value.s == 'string' && (value.s as string).match(/^(.+)#_@_#(.+)$/))
			{
				// @ts-ignore
				value._source = value.s;

				value.s = new RegExp((RegExp.$1 + r + RegExp.$2), 'g');
			}
			else if (typeof value.s == 'string')
			{
				// @ts-ignore
				value._source = value.s;

				value.s = new RegExp(value.s, 'g');
			}

			return value;
		});
	}

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

					return (argv[1] || '') + argv[2].replace(/( ){2,}/g, '$1') + (argv[3] || '');
				}

				return argv[0];
			})
			.replace(_self._data_.rtrim, '')
		;

		// @ts-ignore
		if (options.words)
		{
			for (let i in _self._data_.words)
			{
				let _r = _self._data_.words[i].s;

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
