/**
 * Created by user on 2017/11/17/017.
 */

import { IUrlObject } from 'root/lib/func/parse_url';
import { IGlobal } from 'root/lib/core';
import { IGreasemonkey } from 'root/lib/greasemonkey/uf';

export { IGlobal, IGreasemonkey };

export declare const global: IGlobal;
export declare const greasemonkey: IGreasemonkey;

export interface IDemo
{
	name?: string;
	name_id?: string;

	file?: string;

	disable?: boolean;
	priority?: number;
	script?: boolean;

	metadata?: IMetadata,

	test?: IMethodTest;
	main?: IMethod;
	adblock?: IMethod;
	clearly?: IMethodClearly;
}

export interface IMethod extends Function
{
	(_url_obj: IUrlObject);
}

export interface IMethodTest extends IMethod
{
	(_url_obj: IUrlObject): boolean | number;
}

export interface IMethodClearly extends IMethod
{
	(_url_obj: IUrlObject, _dom_list?);
}

export interface IMetadata
{
	match?: string[];
	exclude?: string[];

	nomatch?: string[];
}

export function create(data = {})
{
	return Object.assign(
		{

			metadata: {
				match: [
					//'http*://www.3dmgame.com/*',
				],
				exclude: [],
			},

			test(_url_obj = global._url_obj)
			{
				let ret;

				if (ret = require('root/lib/greasemonkey/match').auto(_url_obj._source, module.exports))
				{
					return true;
				}
				//console.debug(777, ret);

				/*
				if (_url_obj.host.match(/3dmgame\.com/))
				{
					return true;
				}
				*/

				return false;
			},

			main(_url_obj = global._url_obj)
			{
				const _uf_dom_filter_link = require('root/lib/dom/filter/link');
				_uf_dom_filter_link([
					//
				].join())
					.prop('target', '_blank')
				;
			},

			adblock(_url_obj = global._url_obj)
			{

			},

			clearly(_url_obj = global._url_obj, _dom_list = null)
			{
				let _dom = $(_dom_list);

				_dom = _dom
					.add([
						//
					].join())
				;

				//_dom.remove();

				return _dom;
			},
		}, data);
}

export default create;
