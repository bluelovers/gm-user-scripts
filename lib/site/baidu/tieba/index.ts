/**
 * Created by user on 2018/7/27/027.
 */

import { IWindow } from '../../core/demo';

declare module 'root/lib/core/demo'
{
	interface IWindow
	{
		PageData: IBaiduTiebaPageData,
	}
}

declare module '../../core/demo'
{
	interface IWindow
	{
		PageData: IBaiduTiebaPageData,
	}
}

export type IBaiduTiebaPageDataBool = 0 | 1;

export interface IBaiduTiebaPageData
{
	tbs: string,
	page: "frs" | string,
	user: {},
	forum: {
		id: string,
		forum_id: string,
		name: string,
		forum_name: string,
		name_url: string,
		name_encode: string,
		member_name_url: string,
		first_class: string,
		second_class: string,
		album_good_smallflow: string,

		has_picture_frs: IBaiduTiebaPageDataBool,
	},

	// -------------

	page?: "pb_bright" | string,
	product?: "pb" | string,

	can_post?: IBaiduTiebaPageDataBool,
	can_anonym_post?: IBaiduTiebaPageDataBool,

	forum_type?: 1 | number,

	follow_sign?: string,
	forward_sign?: string,

	power?: {},
	is_thread_admin?: IBaiduTiebaPageDataBool,

	thread?: {
		author: string,
		thread_id: number,
		title: string,
		reply_num: number,
		thread_type: "0" | string,
		topic: {
			is_topic: boolean,
			topic_type: boolean,
			is_live_post: boolean,
			is_lpost: boolean,
			lpost_type: 0 | number,
		},
		is_ad: IBaiduTiebaPageDataBool,
		video_url: string
	},

	pager?: {
		cur_page: number,
		total_page: number,
	},

}

export function bde_image(input: JQuery<HTMLElement> | string)
{
	let elem = $(input);

	if (!elem.length)
	{
		return;
	}

	if (elem.data('fullsrc'))
	{
		return elem;
	}

	let src: string = elem.attr('data-original') || elem.prop('src');
	let fullsrc: string;
	let lowsrc: string = elem.attr('lowsrc');

	let name: string;
	let name_id: string;

	if (src.match(/(([^\/]+)\.(jpe?g|gif|png))$/))
	{
		name = RegExp.$1;
		name_id = RegExp.$2;
	}

	if (!name)
	{
		console.error(elem, name);

		return;
	}

	if (!lowsrc)
	{
		elem.attr('lowsrc', src);
		fullsrc = `http://imgsrc.baidu.com/forum/pic/item/${name}`;
		elem.attr('src', fullsrc);
	}
	else
	{
		fullsrc = src;
	}

	elem.attr('data-id', name_id);
	elem.data('fullsrc', fullsrc);

	return elem;
}

import * as self from './index';

export default self;
