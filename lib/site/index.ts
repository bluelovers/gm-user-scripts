/**
 * Created by user on 2018/4/1/001.
 */

import * as hashSum from 'hash-sum';
import GM_XHR, { IXMLHttpRequestResponse } from 'root/lib/greasemonkey/gm/xhr';
import { GMApi } from 'root/lib/greasemonkey/gm/api';

export { GMApi }
export { hashSum }

export function create(who, options?)
{
	return SiteID.create(who, options);
}

export type IOptions = {
	chkSec?: number,
}

export class SiteID
{
	public IDKEY: string;
	protected _ = Math.random() * Date.now();

	protected options: IOptions = {
		chkSec: 10 * 60,
	};

	constructor(who, options?: IOptions)
	{
		this.options = Object.assign(this.options, options);

		this.IDKEY = hashSum(who);
	}

	static create(who, options?: IOptions)
	{
		return new this(who, options);
	}

	checkDate(date: Date | number, sec: number = this.options.chkSec)
	{
		return checkDate(date, sec);
	}

	getTimestamp()
	{
		return this.getValue('timestamp', 0);
	}

	updateTimestamp(now = Date.now())
	{
		return this.setValue('timestamp', now);
	}

	chkTimestamp(skipSec = 0)
	{
		let t = this.getTimestamp();
		let c = this.checkDate(t);

		if (skipSec > 0 && skipSec >= Math.abs(c))
		{
			return Math.max(1, c);
		}

		return c;
	}

	hashKey(key: string): string
	{
		return hashKey(key, this.IDKEY);
	}

	getValue(key: string, defaultValue?)
	{
		return GMApi.getValue(this.hashKey(key), defaultValue);
	}

	setValue(key: string, value)
	{
		GMApi.setValue(this.hashKey(key), value);

		return this;
	}
}

export default SiteID

export function checkDate(date: Date | number, sec: number = 10 * 60): number
{
	if (typeof date == 'number')
	{
		date = new Date(date);
	}

	let t = date.valueOf();
	let diff = (Date.now() - t) / 1000;

	if (diff == 0)
	{
		return 1;
	}
	else if (diff > 0 && diff >= sec)
	{
		return diff;
	}

	let c = new Date(t + 8 * 3600 * 1000);

	if (date.getDay() != c.getDay())
	{
		return 1;
	}

	return 0 - Math.abs(diff);
}

export function hashKey(key: string, prefix?): string
{
	if (prefix)
	{
		return prefix.toString() + key;
	}

	return key;
}
