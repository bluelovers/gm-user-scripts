/**
 * Created by user on 2017/12/1/001.
 */

import { IDemo, IGlobal, IGreasemonkey, IWindow, IJQueryStatic, IUrlObject2 } from 'root/lib/core/demo';

declare const global: IGlobal;
declare const greasemonkey: IGreasemonkey;
declare const window: IWindow;
declare const unsafeWindow: IWindow;
declare const $: IJQueryStatic;
declare const jQuery: IJQueryStatic;

'use strict';

let o: IDemo = {

	metadata: {
		include: [
			'https://www.youtube.com/my_videos*',
		],
		match: [],
		nomatch: [],
		exclude: [],

		grant: [],
	},

	test(_url_obj = global._url_obj)
	{
		let ret;

		if (ret = require('root/lib/greasemonkey/match').auto(_url_obj.source, module.exports))
		{
			return true;
		}

		return false;
	},

	async main(_url_obj = global._url_obj)
	{
		const _uf_done = require('root/lib/event/done');
		const debounce = require('throttle-debounce/debounce');
		const throttle = require('throttle-debounce/throttle');
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		require('root/lib/greasemonkey/web/xhr').ajaxSetup();
		const YU = require('root/lib/site/youtube');

		greasemonkey
			.GM_addStyle([

				'#creator-page #creator-page-content .vm-list-view .vm-video-item-content-primary { width: 51%; min-width: 470px; }',
				'#creator-page #creator-page-content .vm-list-view .vm-video-item-content-secondary { width: 51%; min-width: 470px; margin-left: 1%; }',

				// for ajax edit title button
				'.vm-list-view .vm-video-title-container { overflow: visible; }',
				'.vm-list-view .vm-video-title-badges { white-space: normal; }',

				//'.vm-list-view .vm-video-title-badges { display: inline-block; }',
				'.vm-video-title-badges .btn-edit { opacity: 0;/* background-color: red; padding: 0px 5px; color: #fff; */ }',
				'.vm-video-title:hover .vm-video-title-badges .btn-edit { display: inline-block; visibility: visible; opacity: 1; }',
			])
		;

		let _area = $('#vm-video-list-container');

		$('#vm-video-list-container')
			.on('DOMNodeInserted', debounce(100, function ()
			{
				$('#vm-playlist-video-list-ol > li')
					.each(function ()
					{
						let _list = $(this);

						let _title_container = $('.vm-video-title .vm-video-title-container', _list);

						let _video_id = _title_container
							.attr('id')
							.replace(/^title_/, '')
						;

						if (!_video_id)
						{
							return;
						}

						$('a.vm-video-title-content:eq(0), a.yt-fluid-thumb-link', _list)
							.attr('href', function (i, val)
								{
									return val
										.replace(/^.*\/?watch\?v=/, 'https://youtu.be/')
										;
								}
							)
							.attr('target', '_blank')
						;

						$('.vm-video-side-content-left-container a, a.vm-playlist-edit-video, a.yt-fluid-thumb-link',
							_list
						)
							.attr('target', '_blank')
						;

						$('.edit-expand-menu-button .yt-uix-button-menu-item[href][onclick]', _list)
							.not('.vm-video-edit-menu-delete, .menu-item-top-divider, .vm-download-mp4')
							.attr('onclick', function (i, val)
								{
									return val.indexOf('window.location.href') != -1
										? ";window.open(this.getAttribute('href'), '_blank');return false;"
										: val;
								}
							)
						;

						if (!$('.vm-video-title-badges .btn-edit', _list).length)
						{
							let _btn_button = $('<span class="yt-badge yt-uix-button-primary btn-edit">Edit</span>')
								.appendTo($('.vm-video-title-badges', _list).after(
									'<span class="" style="display: inline-block;min-width: 40px;"></span>'
									)
								)
							;

							_title_container.addClass(
								'watch-title watch-editable'
							);

							let _title_content = $('.vm-video-title-content', _title_container);

							_btn_button
								.on('click', function ()
									{
										_title_container
											.hide()
										;

										$('.vm-video-title .edit-form', _list).remove();

										$('.vm-video-title', _list)
											.append(function ()
												{
													var _form = $(`
												<form class="edit-form">
													<span class=" yt-uix-form-input-container yt-uix-form-input-text-container "><input class="yt-uix-form-input-text " name="field_myvideo_title"></span>
													<span class="form-buttons">
														<button class="yt-uix-button yt-uix-button-size-default yt-uix-button-primary" type="submit" onclick=";return true;"><span class="yt-uix-button-content">儲存</span></button>
														<button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default" type="reset" onclick=";return false;"><span class="yt-uix-button-content">取消</span></button>
													</span>
													<div class="yt-alert yt-alert-naked yt-alert-error  ">  <div class="yt-alert-icon">
														<span class="icon master-sprite yt-sprite"></span>
													</div>
													<div class="yt-alert-content" role="alert"></div></div>
												</form>
												`
													);

													$(':input[name="field_myvideo_title"]', _form)
														.val(_title_content.text());

													$(':reset', _form)
														.on('click', function (event)
															{
																_uf_done(event);

																_form.triggerHandler('reset');
															}
														)
													;

													_form
														.on('submit', async function (event)
															{
																_uf_done(event);

																let _title = $(':input[name="field_myvideo_title"]', _form)
																	.val();

																if (!_title)
																{
																	return;
																}

																let data = await YU.ajaxSetTitle(_video_id, _title, yt_token());

																let _html = $('<div/>').append(data.html.title);

																_title_content.text(_html.find('#eow-title').attr('title'));

																_form.triggerHandler('reset');
															}
														)
														.on('reset', function (event)
															{
																_uf_done(event);

																$('.vm-video-title .edit-form', _list).remove();

																_title_container
																	.show()
																;
															}
														)
													;

													return _form;
												}
											)
										;

									}
								)
							;
						}
					})
				;
			}))
		;

		if (!$('div[data-ng-show="ctrl.showLoading"]:visible', _area).length)
		{
			$('#vm-video-list-container').triggerHandler('DOMNodeInserted');
		}
	},

	adblock(_url_obj = global._url_obj)
	{
		//
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

};

export = o as IDemo;

function yt_token(): string
{
	return unsafeWindow.yt.config_.XSRF_TOKEN;
}
