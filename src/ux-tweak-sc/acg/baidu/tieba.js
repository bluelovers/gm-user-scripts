"use strict";
let o = {
    metadata: {
        include: [
            'http*://tieba.baidu.com/*',
        ],
        match: [
            '*://tieba.baidu.com/i/i/my_tie*',
            '*://tieba.baidu.com/i/i/my_reply*',
            '*://tieba.baidu.com/i/i/atme*',
            '*://tieba.baidu.com/i/i/storethread*',
            '*://tieba.baidu.com/pmc/*',
        ],
        exclude: [],
        grant: [
            'GM_setClipboard',
        ],
    },
    test(_url_obj = global._url_obj) {
        let ret;
        if (ret = require('root/lib/greasemonkey/match').auto(_url_obj.source, module.exports)) {
            return true;
        }
        return false;
    },
    async main(_url_obj = global._url_obj) {
        const GMApi = require('root/lib/greasemonkey/gm/api').GMApi;
        const _uf_dom_filter_link = require('root/lib/dom/filter/link');
        const libSiteBaiduTieba = require('root/lib/site/baidu/tieba');
        const PromiseBluebird = await Promise.resolve().then(() => require('bluebird'));
        $(window).on('load.link', function () {
            _uf_dom_filter_link([
                '.u_itieba a, .u_news a, .u_username a, .com_userbar a, #j_u_username a',
            ])
                .attr('target', '_blank');
            $('.u_itieba a, .u_news a, .u_username a, .com_userbar a, #j_u_username a').attr('target', '_blank');
        }).triggerHandler('load.link');
        $('body').on('hover', '#j_u_username, .u_username, .u_username li, .u_ddl_con_top', function () {
            $(window).triggerHandler('load.link');
        });
        greasemonkey
            .GM_addStyle([
            `.d_post_content { line-height: 1.45em; }`,
            `.d_post_content_main { background: transparent; }`,
            `.tbui_aside_float_bar { opacity: 0.5; } 
					.tbui_aside_float_bar:hover { opacity: 0.8; }`,
            `@media only screen and (max-width: 1200px)
					{
					
					.right_section { display: none; }
					.left_section { float: none; margin: auto; }
					
					.search_bright .search_ipt, .l_container, .content, .pb_content, .thread_theme_5, .pb_footer, .pb_footer .p_thread, .tb_rich_poster_container, .search_bright .search_form, .nav_list { width: auto; }
					
					}`,
            `@media only screen and (max-width: 800px)
					{
					
					.core_title_wrap_bright { width: 100%; }
					
					.d_post_content_main { padding-left: 0px; }
					.d_author, .d_author_anonym { display: none; }
					.p_content { padding-right: 0px; }
					
					.d_post_content_main { float: none;margin: auto; }
					
					}`,
        ]);
        greasemonkey
            .GM_addStyle([
            `#com_userbar { position: fixed; top: 55px; background: #fff9; }`,
            `#com_userbar .u_bdhome { display: none; }`,
            `.floor-check-miss { padding: 10px;background-color: #451159;border-radius: 5px;padding-bottom: 6px;color: #fff;text-align: center;margin: 5px;margin-left: auto;}`,
            `.floor-check-miss:hover { opacity: 0.9; }`,
            `.threadlist_title {
				word-wrap: break-word;
				word-break: break-all;
				white-space: normal;
				}`,
            `.see_lz { 
				margin-left: 1em;
				text-decoration: none !important; 
				font-size: 9pt;
				padding: 2px 8px 1px;
				text-shadow: initial;
				font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
				}`,
            `.icon-reply {
					width: 16px;
					height: 13px;
					display: inline-block;
					vertical-align: middle;
					background: url(//tb2.bdstatic.com/tb/static-pb/widget/forum_title/images/icon_reply_d8a44b9.png) no-repeat;
				}`,
            `.deepread-wrap { font-size: 9pt; }`,
            `.j_thread_list .threadlist_title .see_lz { 
				display: none; 
				}`,
            `.j_thread_list:hover .threadlist_title .see_lz { display: inline-block; }`,
            `.l_post._louzhubiaoshi_post { border: 1px solid #2d64b3; }`,
            `._post-toc { 
				display: none; 
				position: sticky; 
				max-width: 150px; 
				top: 55px; 
				float: left; 
				//margin-left: -150px;
				left: 150px;
				font-size: 0.7em;
				opacity: 0.5;
				overflow-x: hidden;
				}`,
            `._post-toc dt {  }`,
            `._post-toc dt a { padding-left: 3px; border-radius: 3px; }`,
            `._post-toc dt .icon-reply {
				 
				 margin-left: 3px;
border-radius: 100%;
background-color: #fff;
width: 18px;
background-position: center;
height: 18px;
				 
				 }`,
            `._post-toc dt { opacity: 0.7; }`,
            `._post-toc dt:hover { opacity: 1; }`,
            `._post-toc dt a:hover { background: #2d64b3; color: #FFF; }`,
            `._louzhubiaoshi_toc {  }`,
            `._louzhubiaoshi_toc a { background: #FF7F42; color: #FFF; font-weight: bold; }`,
            `._post-toc a { min-width: 100px; display: inline-block; line-height: 2em; min-height: 2em; }`,
            `._post-toc:hover { opacity: 1; }`,
            `@media only screen and (max-width: 1600px) {
					._post-toc { left: 100px; }
				}`,
            `@media only screen and (max-width: 1500px) {
					._post-toc { left: 50px; }
				}`,
            `@media only screen and (max-width: 1400px) {
					._post-toc { left: 10px; }
				}`,
            `@media only screen and (min-width: 1000px) {
					._post-toc { display: block; }
					
					html, body, :root
					{
						scroll-behavior: smooth;
					}
				}`,
        ]);
        const throttle = require('throttle-debounce/throttle');
        const debounce = require('throttle-debounce/debounce');
        const _uf_done = require('root/lib/event/done');
        await PromiseBluebird.delay(250);
        let PageData;
        let _toc_inited = false;
        let _toc_area = $('<div class="_post-toc"/>');
        let _toc = $('<dl style="list-style-type: unset;"/>').appendTo(_toc_area);
        $('body').on('DOMNodeInserted', '#com_userbar', function (event) {
            if ($(event.target).is('#u_notify_item, .unread-num')) {
                $(window).triggerHandler('load.menu');
            }
        });
        $('#pb_content')
            .on('click', 'img.BDE_Image', function (event) {
            let _img = libSiteBaiduTieba.bde_image(this);
            if (_img && _img.length) {
                let name_id = _img.attr('data-id');
                let url;
                if (PageData && PageData.forum && PageData.thread) {
                    url = [
                        `http://tieba.baidu.com/photo/p?`,
                        `kw=${PageData.forum.name_url}`,
                        `&flux=1&tid=${PageData.thread.thread_id}`,
                        `&pic_id=${name_id}`,
                        `&pn=1&fp=2&see_lz=0&red_tag=s2698993533`,
                    ].join('');
                }
                else {
                    url = _img.prop('src');
                }
                _uf_done(event);
                window.open(url, name_id);
            }
        });
        $('body').on('DOMNodeInserted', '#thread_list .j_thread_list .media_box', debounce(500, function (event) {
            let _img = $('img[id^="big_img_"]', this);
            0 && console.log({
                "this": this,
                target: event.target,
                _img,
            });
            _img.each(function () {
                libSiteBaiduTieba.bde_image(this);
            });
        }));
        const CopyLib = require('root/lib/func/copy');
        $('body')
            .on('DOMNodeInserted DOMSubtreeModified', '#creative-platform-deepread-wrap', debounce(1000, function (event) {
            console.log(event.type, this, event.target);
            let _this = $(this);
            if (!_this.length || !_this.is('#creative-platform-deepread-wrap:not([data-done])')) {
                return;
            }
            _this.attr('data-done', true);
            let deepread_content = $('#deepread-wrap .deepread-content');
            let deepread_nav = $('#deepread-nav', _this);
            let _a = $('<a title="點擊可複製貼子">點擊可複製貼子</a>');
            _a.on('click', function (event) {
                console.log(event.type, this, event.target);
                CopyLib.copyElem($('#deepread-wrap .deepread-content')[0]);
            });
            _a.appendTo(deepread_nav);
            let _div = $('<div class="clearfix"/>');
            let t = $('.deepread-title, .deepread-author', _this);
            t.appendTo(_div);
            _div.insertAfter(deepread_nav);
        }));
        $(window)
            .on('load.sign', debounce(1000, function () {
            sign(_url_obj);
            $(window).triggerHandler('scroll.load');
        }))
            .on('load.menu', throttle(1000, function (event) {
            console.log(event.type, this, event.target);
            $('.u_news ul.j_category_list').each(function () {
                let ul = $(this);
                if (!ul.find('a.j_cleardata[data-type="favts"]').length) {
                    ul.prepend(`<li class="category_item category_item_empty"><a class="j_cleardata" href="http://tieba.baidu.com/i/i/storethread" target="_blank" data-type="favts">我的收藏</a></li>`);
                }
                if (!ul.find('a.j_cleardata[data-type="my_tie"]').length) {
                    ul.prepend(`<li class="category_item category_item_empty"><a class="j_cleardata" href="http://tieba.baidu.com/i/i/my_tie" target="_blank" data-type="my_tie">我的贴子</a></li>`);
                }
                if (!ul.find('a.j_cleardata[data-type="atme"]').length) {
                    ul.prepend(`<li class="category_item category_item_empty"><a class="j_cleardata" href="http://tieba.baidu.com/i/i/atme" target="_blank" data-type="atme">查看@提到我</a></li>`);
                }
                if (!ul.find('a.j_cleardata[data-type="reply"]').length) {
                    ul.prepend(`<li class="category_item category_item_empty"><a class="j_cleardata" href="http://tieba.baidu.com/i/i/replyme" target="_blank" data-type="reply">查看回复</a></li>`);
                }
                if (!ul.find('a.j_cleardata[data-type="recycle"]').length) {
                    ul.append(`<li class="category_item category_item_empty"><a class="j_cleardata" href="http://tieba.baidu.com/pmc/recycle" target="_blank" data-type="recycle">删贴信息</a></li>`);
                }
            });
        }))
            .on('load', throttle(500, function () {
            PageData = $.extend({}, {
                thread: {},
            }, unsafeWindow.PageData);
            $([
                '.feed_item a.itb_kw[title][href*="..."]',
            ].join(',')).attr('href', function () {
                let title = $(this).attr('title');
                return '/f?kw=' + title;
            });
            let floor;
            let last_post;
            let _toc_reset = true;
            let p_postlist = $('#j_p_postlist, #j_p_postlist #j_p_postlist, .p_postlist[id]', '#pb_content')
                .eq(-1);
            {
                let chk = $('> ._p_postlist_', p_postlist);
                if (chk.length) {
                    return;
                }
                p_postlist.prepend('<div class="_p_postlist_" style="display: none"/>');
            }
            $([
                '.card_title_fname',
                '.simple_block_container .wrap_container .nowrap a',
                '.simple_block_container .t_forward .common_source_main a:eq(-1)',
            ].join(',')).each(function () {
                let title = $(this).attr('title');
                if (title) {
                    $(this).text(title + (title.slice(-1) == '吧' ? '' : '吧'));
                }
            });
            let p_postlist_post = $('.l_post', p_postlist);
            p_postlist_post
                .each(function () {
                if (!_toc_inited) {
                    _toc_inited = true;
                    _toc_area
                        .insertBefore('#container');
                }
                let _this = $(this);
                let _field;
                try {
                    let s = _this.attr('data-field');
                    if (s) {
                        _field = JSON.parse(s);
                    }
                }
                catch (e) {
                }
                _field = Object.assign({
                    author: {},
                    content: {},
                }, _field);
                let floor_elem = _this.find('.post-tail-wrap > .tail-info:eq(-2)');
                let c = _field.content.post_no;
                if (!c) {
                    c = Number(floor_elem.text().replace(/\D/g, ''));
                }
                if (_toc_reset) {
                    _toc_reset = false;
                    _toc.empty();
                    $('.card_top_wrap').outerHeight($('.card_top_wrap .card_top').outerHeight());
                    $(window).triggerHandler('scroll.load');
                    floor = c;
                    last_post = _this;
                }
                if (typeof c === 'number' && !Number.isNaN(c)) {
                    let is_louzhubiaoshi = (_field.author.user_name == PageData.thread.author);
                    if (is_louzhubiaoshi) {
                        _this.addClass('_louzhubiaoshi_post');
                    }
                    {
                        let _a = $(`<dt></dt>`)
                            .html(`<a href="javascript:void(0)">#${c} ` + $('.p_author .p_author_name', _this)
                            .html() + '</a>');
                        _a.attr('title', _a.text());
                        if (is_louzhubiaoshi) {
                            _a.addClass('_louzhubiaoshi_toc');
                        }
                        if (_field.content.comment_num) {
                            _a.find('a:eq(0)').append('<i class="icon-reply"/>');
                        }
                        _a.find('a:eq(0)').on('click', function () {
                            $(window).triggerHandler('scroll.load');
                            let fn = function () {
                                $(window)
                                    .scrollTo(_this, -80);
                            };
                            setTimeout(fn, 200);
                        });
                        _a.appendTo(_toc);
                    }
                    if (c != floor) {
                        if (c != floor + 1) {
                            let a = [];
                            for (let i = floor + 1; i < c; i++) {
                                a.push(i);
                            }
                            if (a.length) {
                                last_post.find('.d_post_content_main')
                                    .append(`<div class="floor-check-miss">請注意：${a[0]}${a.length > 1
                                    ? ' ~ ' + a.slice(-1)
                                    : ''} 樓 可能已被吞文或刪除</div>`);
                            }
                        }
                        floor = c;
                        last_post = _this;
                    }
                }
                else {
                    console.error(c, floor);
                }
                _this.data('field-data', _field);
            })
                .filter(':not([data-floor-check])')
                .each(function () {
                let _this = $(this);
                let _post = _this;
                _this.attr('data-floor-check', true);
                let floor_elem = _this.find('.post-tail-wrap > .tail-info:eq(-2)');
                try {
                    if (_post.is(':not([data-loaded])')) {
                        _post.attr('data-loaded', true);
                        $('.d_post_content_main', _post).prepend($('<a/>')
                            .text('#' + _post.data('field').content.post_no)
                            .attr('href', 'http://tieba.baidu.com/p/' + PageData.thread.thread_id + '?pid=' + _post.data('field').content.post_id + '#' + _post.data('field').content.post_id)
                            .attr('style', 'float: right; z-index: 500; position: absolute; right: 0px; top: 0px; padding: 1px 5px;')
                            .attr('onclick', function () {
                            let id = _post.find('.d_post_content').attr('id');
                            return [
                                `event.preventDefault()`,
                                `var copyArea = document.getElementById('${id}')`,
                                `try{copyArea.select();}catch(e){console.error(e)}`,
                                `try{window.getSelection().removeAllRanges();}catch(e){}`,
                                `try{var range = document.createRange();range.selectNode(copyArea);window.getSelection().addRange(range)}catch(e){console.error(e)}`,
                                `try{document.execCommand('Copy')}catch(e){console.error(e)}`,
                                `return false`
                            ].join(';');
                        })
                            .attr('title', '點擊可複製貼子'));
                        floor_elem.wrapInner($('<a/>')
                            .attr('href', 'http://tieba.baidu.com/p/' + PageData.thread.thread_id + '?pid=' + _post.data('field').content.post_id + '#' + _post.data('field').content.post_id)
                            .on('click', _uf_done));
                    }
                }
                catch (e) { }
            });
            $('img.BDE_Image', p_postlist_post).each(function () {
                libSiteBaiduTieba.bde_image(this);
            });
            $(window).triggerHandler('scroll.load');
        }))
            .on('load.list', throttle(1000, function () {
            let ls = $('.j_thread_list .threadlist_title, .ihome_section .new_list .thread_name').each(function () {
                let _this = $(this);
                let _t = _this.find('a.j_th_tit, a.title');
                if (_t.length && !_this.find('.see_lz').length) {
                    let url = new URL(_t.prop('href'));
                    url.searchParams.append('see_lz', 1);
                    $('<a target="_blank" class="see_lz btn-sub btn-small">只看楼主</a>')
                        .attr('href', url.toString())
                        .appendTo($('<span/>')
                        .css({
                        display: 'inline-block',
                        'vertical-align': 'inherit',
                    })
                        .appendTo(_this));
                }
            });
            lazyload(_url_obj);
        }))
            .on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event) {
            const keycodes = require('keycodes');
            switch (event.which) {
                case keycodes('pageup'):
                case keycodes('left'):
                    var _a = $('.pagination-default a.prev, .pagination-default a.pre');
                    if (_a.length) {
                        _uf_done(event);
                        _a[0].click();
                    }
                    else {
                        console.log(event, _a);
                    }
                    break;
                case keycodes('pagedown'):
                case keycodes('right'):
                    var _a = $('.pagination-default a.next');
                    if (_a.length) {
                        _uf_done(event);
                        _a[0].click();
                    }
                    else {
                        console.log(event, _a);
                    }
                    break;
            }
        }))
            .on('load.scroll', function () {
            if ($(window).scrollTop() < 300) {
                $(window).scrollTo('#pb_content, .head_content .card_title, #content, #tab_forumname');
            }
        })
            .scrollTo('.head_content')
            .one('scroll', function (event) {
            console.log(event);
        })
            .on('scroll.reply', function (event) {
            if (event.namespace == 'reply') {
            }
            else {
            }
        })
            .on('scroll.load', throttle(1000, function (event) {
            let n = 0;
            $('.core_reply_wrapper:not([data-loaded])')
                .each(function () {
                let core_reply_wrapper = $(this);
                core_reply_wrapper.attr('data-loaded', true);
                let loading_reply = core_reply_wrapper.find('.loading_reply');
                let core_reply = core_reply_wrapper.parents('.core_reply:eq(0)').eq(0);
                core_reply_handler(core_reply);
                let t = Number(core_reply_wrapper.prop('data-loaded-try') || 0);
                if (t < 5 && loading_reply.length) {
                    n++;
                    core_reply_wrapper.prop('data-loaded-try', t + 1);
                    setTimeout(function () {
                        let event = $.Event('scroll.reply', {
                            pageY: core_reply_wrapper.offset().top,
                        });
                        $(window)
                            .add('html, body')
                            .trigger(event);
                        try {
                            let event = unsafeWindow.$.Event('scroll.reply', {
                                pageY: core_reply_wrapper.offset().top,
                            });
                            unsafeWindow.$(unsafeWindow)
                                .add('html, body')
                                .trigger(event);
                        }
                        catch (e) {
                        }
                        try {
                            let event = $.Event('scroll.reply', {
                                pageY: core_reply_wrapper.offset().top,
                            });
                            $(unsafeWindow)
                                .add('html, body')
                                .trigger(event);
                        }
                        catch (e) {
                        }
                        setTimeout(function () {
                            if (core_reply_wrapper.find('.loading_reply').length) {
                                core_reply_wrapper.removeAttr('data-loaded');
                            }
                        }, 200);
                        core_reply_handler(core_reply);
                    }, 1000 + n * 100);
                }
            });
        }))
            .triggerHandler('load');
        $('body').on('DOMNodeInserted', '#frs_list_pager, #thread_list', debounce(500, function () {
            $(window).triggerHandler('load.list');
        }));
        setTimeout(function () {
            $(window).triggerHandler('load.list');
        }, 500);
        $('#frs_list_pager')
            .on('DOMNodeInserted.page', debounce(200, function () {
            $(window).scrollTo('.head_content .card_title, #content, #tab_forumname');
        }));
        $('#j_core_title_wrap')
            .on('DOMNodeInserted', '.core_title_txt', throttle(200, function (event) {
            $(window).triggerHandler('load');
        }));
    },
    adblock(_url_obj = global._url_obj) {
    },
    clearly(_url_obj = global._url_obj, _dom_list = null) {
        let _dom = $(_dom_list);
        _dom = _dom
            .add($('#container').parentsUntil('body').addBack().siblings())
            .add($('#footer').nextAll())
            .add([
            '.share_btn_wrapper, #celebrity, #my_tieba_mod, .right_section, .see-image-btn, #sign_mod',
            '#j_head_focus_btn, .deepread-btn, #icon-reply, .p_author_face.round-avatar, #tb_rich_poster_container',
            '.core_reply_wrapper .j_user_card',
            'body :hidden, iframe, script',
            '#footer, #pb-footer-header, #quick_reply',
            '.j_user_sign',
            '.p_author .d_icons, .save_face_card, .d_name_icon, .save_face_bg',
            '.icon_tbworld, .BDE_Smiley',
            '.louzhubiaoshi_wrap, .save_face_card',
        ].join());
        $('.d_badge_lv').removeAttr('class');
        return _dom;
    },
};
async function sign(_url_obj = global._url_obj, bool) {
    const Promise = require('bluebird');
    await Promise.delay(1000);
    let b = $('#j_head_focus_btn');
    let a = $('#sign_mod #signstar_wrapper a.j_cansign');
    if (a.length) {
        if (b.is('.cancel_focus')) {
            a[0].click();
            await Promise.delay(500);
            a[0].click();
            await Promise.delay(500);
            $('.j_succ_info.sign_succ1').hide();
            return true;
        }
        else if (!bool) {
            b.one('click.sign', function () {
                sign(_url_obj, true);
            });
        }
    }
}
function lazyload(_url_obj) {
    const libSiteBaiduTieba = require('root/lib/site/baidu/tieba');
    $('img.BDE_Image[data-original], img.threadlist_pic')
        .not('[data-done]')
        .attr('data-done', true)
        .attr('src', function (i, old) {
        let _this = $(this);
        let src = _this.attr('data-original');
        let _img = libSiteBaiduTieba.bde_image(_this.clone());
        if (_img) {
            _this.attr('bpic', _img.data('fullsrc'));
        }
        if (old != src) {
            return src;
        }
    });
}
function core_reply_handler(_this) {
    let chk = _this.find('.lzl_link_fold:visible, .loading_reply');
    let elem = _this.find('.core_reply_wrapper');
    let min_height = elem.css('min-height').replace(/px$/, '');
    let height = elem.height();
    0 && console.log(elem, {
        min_height,
        height,
        chk: chk.length,
    });
    if (min_height <= 50 || height <= 50) {
        elem.css('min-height', 'auto');
    }
    if (chk.length) {
    }
    else {
    }
}
module.exports = o;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGllYmEuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInNyYy91eC10d2Vhay1zYy9hY2cvYmFpZHUvdGllYmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQWVBLElBQUksQ0FBQyxHQUFVO0lBRWQsUUFBUSxFQUFFO1FBQ1QsT0FBTyxFQUFFO1lBQ1IsMkJBQTJCO1NBQzNCO1FBQ0QsS0FBSyxFQUFFO1lBQ04saUNBQWlDO1lBQ2pDLG1DQUFtQztZQUNuQywrQkFBK0I7WUFDL0Isc0NBQXNDO1lBQ3RDLDJCQUEyQjtTQUMzQjtRQUNELE9BQU8sRUFBRSxFQUFFO1FBRVgsS0FBSyxFQUFFO1lBQ04saUJBQWlCO1NBQ2pCO0tBQ0Q7SUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRO1FBRTlCLElBQUksR0FBRyxDQUFDO1FBRVIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUN0RjtZQUNDLE9BQU8sSUFBSSxDQUFDO1NBQ1o7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUTtRQUVwQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDNUQsTUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUNoRSxNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQy9ELE1BQU0sZUFBZSxHQUFHLDJDQUFhLFVBQVUsRUFBQyxDQUFDO1FBRWpELENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFO1lBRXpCLG1CQUFtQixDQUFDO2dCQUNuQix3RUFBd0U7YUFDeEUsQ0FBQztpQkFD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LElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMzRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFFM0IsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO1FBQ3RCLFVBQVU7UUFDVixNQUFNO1FBQ04sR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNO0tBQ2YsQ0FBQyxDQUFDO0lBRUgsSUFBSSxVQUFVLElBQUksRUFBRSxJQUFJLE1BQU0sSUFBSSxFQUFFLEVBQ3BDO1FBRUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDL0I7SUFFRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQ2Q7S0FFQztTQUVEO0tBRUM7QUFHRixDQUFDO0FBNUZELGlCQUFTLENBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTcvOC8zLzAwMy5cbiAqL1xuXG5pbXBvcnQgeyBJRGVtbywgSUdsb2JhbCwgSUdyZWFzZW1vbmtleSwgSVdpbmRvdywgSUpRdWVyeVN0YXRpYywgSVVybE9iamVjdDIgfSBmcm9tICdyb290L2xpYi9jb3JlL2RlbW8nO1xuXG5kZWNsYXJlIGNvbnN0IGdsb2JhbDogSUdsb2JhbDtcbmRlY2xhcmUgY29uc3QgZ3JlYXNlbW9ua2V5OiBJR3JlYXNlbW9ua2V5O1xuZGVjbGFyZSBjb25zdCB3aW5kb3c6IElXaW5kb3c7XG5kZWNsYXJlIGNvbnN0IHVuc2FmZVdpbmRvdzogSVdpbmRvdztcbmRlY2xhcmUgY29uc3QgJDogSUpRdWVyeVN0YXRpYztcbmRlY2xhcmUgY29uc3QgalF1ZXJ5OiBJSlF1ZXJ5U3RhdGljO1xuXG5pbXBvcnQgeyBJQmFpZHVUaWViYVBhZ2VEYXRhLCBJQmFpZHVUaWViYVBvc3RGaWVsZCB9IGZyb20gJ3Jvb3QvbGliL3NpdGUvYmFpZHUvdGllYmEnO1xuXG5sZXQgbzogSURlbW8gPSB7XG5cblx0bWV0YWRhdGE6IHtcblx0XHRpbmNsdWRlOiBbXG5cdFx0XHQnaHR0cCo6Ly90aWViYS5iYWlkdS5jb20vKicsXG5cdFx0XSxcblx0XHRtYXRjaDogW1xuXHRcdFx0Jyo6Ly90aWViYS5iYWlkdS5jb20vaS9pL215X3RpZSonLFxuXHRcdFx0Jyo6Ly90aWViYS5iYWlkdS5jb20vaS9pL215X3JlcGx5KicsXG5cdFx0XHQnKjovL3RpZWJhLmJhaWR1LmNvbS9pL2kvYXRtZSonLFxuXHRcdFx0Jyo6Ly90aWViYS5iYWlkdS5jb20vaS9pL3N0b3JldGhyZWFkKicsXG5cdFx0XHQnKjovL3RpZWJhLmJhaWR1LmNvbS9wbWMvKicsXG5cdFx0XSxcblx0XHRleGNsdWRlOiBbXSxcblxuXHRcdGdyYW50OiBbXG5cdFx0XHQnR01fc2V0Q2xpcGJvYXJkJyxcblx0XHRdLFxuXHR9LFxuXG5cdHRlc3QoX3VybF9vYmogPSBnbG9iYWwuX3VybF9vYmopXG5cdHtcblx0XHRsZXQgcmV0O1xuXG5cdFx0aWYgKHJldCA9IHJlcXVpcmUoJ3Jvb3QvbGliL2dyZWFzZW1vbmtleS9tYXRjaCcpLmF1dG8oX3VybF9vYmouc291cmNlLCBtb2R1bGUuZXhwb3J0cykpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXG5cdGFzeW5jIG1haW4oX3VybF9vYmogPSBnbG9iYWwuX3VybF9vYmopXG5cdHtcblx0XHRjb25zdCBHTUFwaSA9IHJlcXVpcmUoJ3Jvb3QvbGliL2dyZWFzZW1vbmtleS9nbS9hcGknKS5HTUFwaTtcblx0XHRjb25zdCBfdWZfZG9tX2ZpbHRlcl9saW5rID0gcmVxdWlyZSgncm9vdC9saWIvZG9tL2ZpbHRlci9saW5rJyk7XG5cdFx0Y29uc3QgbGliU2l0ZUJhaWR1VGllYmEgPSByZXF1aXJlKCdyb290L2xpYi9zaXRlL2JhaWR1L3RpZWJhJyk7XG5cdFx0Y29uc3QgUHJvbWlzZUJsdWViaXJkID0gYXdhaXQgaW1wb3J0KCdibHVlYmlyZCcpO1xuXG5cdFx0JCh3aW5kb3cpLm9uKCdsb2FkLmxpbmsnLCBmdW5jdGlvbiAoKVxuXHRcdHtcblx0XHRcdF91Zl9kb21fZmlsdGVyX2xpbmsoW1xuXHRcdFx0XHQnLnVfaXRpZWJhIGEsIC51X25ld3MgYSwgLnVfdXNlcm5hbWUgYSwgLmNvbV91c2VyYmFyIGEsICNqX3VfdXNlcm5hbWUgYScsXG5cdFx0XHRdKVxuXHRcdFx0XHQuYXR0cigndGFyZ2V0JywgJ19ibGFuaycpXG5cdFx0XHQ7XG5cblx0XHRcdCQoJy51X2l0aWViYSBhLCAudV9uZXdzIGEsIC51X3VzZXJuYW1lIGEsIC5jb21fdXNlcmJhciBhLCAjal91X3VzZXJuYW1lIGEnKS5hdHRyKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG5cdFx0fSkudHJpZ2dlckhhbmRsZXIoJ2xvYWQubGluaycpO1xuXG5cdFx0JCgnYm9keScpLm9uKCdob3ZlcicsICcjal91X3VzZXJuYW1lLCAudV91c2VybmFtZSwgLnVfdXNlcm5hbWUgbGksIC51X2RkbF9jb25fdG9wJywgZnVuY3Rpb24gKClcblx0XHR7XG5cdFx0XHQkKHdpbmRvdykudHJpZ2dlckhhbmRsZXIoJ2xvYWQubGluaycpO1xuXHRcdH0pO1xuXG5cdFx0Z3JlYXNlbW9ua2V5XG5cdFx0XHQuR01fYWRkU3R5bGUoW1xuXG5cdFx0XHRcdGAuZF9wb3N0X2NvbnRlbnQgeyBsaW5lLWhlaWdodDogMS40NWVtOyB9YCxcblxuXHRcdFx0XHQvL2AubF9wb3N0X2JyaWdodCwgLnNraW5fbm9ybWFsIC53cmFwMSwgLnBiX2NvbnRlbnQgeyBiYWNrZ3JvdW5kOiAjZTZkN2JkOyB9YCxcblx0XHRcdFx0YC5kX3Bvc3RfY29udGVudF9tYWluIHsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1gLFxuXHRcdFx0XHQvL2AuY29yZV90aXRsZV93cmFwX2JyaWdodCB7IGJhY2tncm91bmQ6ICNmZmY5OyB9YCxcblxuXHRcdFx0XHRgLnRidWlfYXNpZGVfZmxvYXRfYmFyIHsgb3BhY2l0eTogMC41OyB9IFxuXHRcdFx0XHRcdC50YnVpX2FzaWRlX2Zsb2F0X2Jhcjpob3ZlciB7IG9wYWNpdHk6IDAuODsgfWAsXG5cblx0XHRcdFx0YEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQucmlnaHRfc2VjdGlvbiB7IGRpc3BsYXk6IG5vbmU7IH1cblx0XHRcdFx0XHQubGVmdF9zZWN0aW9uIHsgZmxvYXQ6IG5vbmU7IG1hcmdpbjogYXV0bzsgfVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC5zZWFyY2hfYnJpZ2h0IC5zZWFyY2hfaXB0LCAubF9jb250YWluZXIsIC5jb250ZW50LCAucGJfY29udGVudCwgLnRocmVhZF90aGVtZV81LCAucGJfZm9vdGVyLCAucGJfZm9vdGVyIC5wX3RocmVhZCwgLnRiX3JpY2hfcG9zdGVyX2NvbnRhaW5lciwgLnNlYXJjaF9icmlnaHQgLnNlYXJjaF9mb3JtLCAubmF2X2xpc3QgeyB3aWR0aDogYXV0bzsgfVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdH1gLFxuXG5cdFx0XHRcdGBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQuY29yZV90aXRsZV93cmFwX2JyaWdodCB7IHdpZHRoOiAxMDAlOyB9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0LmRfcG9zdF9jb250ZW50X21haW4geyBwYWRkaW5nLWxlZnQ6IDBweDsgfVxuXHRcdFx0XHRcdC5kX2F1dGhvciwgLmRfYXV0aG9yX2Fub255bSB7IGRpc3BsYXk6IG5vbmU7IH1cblx0XHRcdFx0XHQucF9jb250ZW50IHsgcGFkZGluZy1yaWdodDogMHB4OyB9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0LmRfcG9zdF9jb250ZW50X21haW4geyBmbG9hdDogbm9uZTttYXJnaW46IGF1dG87IH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHR9YCxcblxuXHRcdFx0XSlcblx0XHQ7XG5cblx0XHRncmVhc2Vtb25rZXlcblx0XHRcdC5HTV9hZGRTdHlsZShbXG5cdFx0XHRcdGAjY29tX3VzZXJiYXIgeyBwb3NpdGlvbjogZml4ZWQ7IHRvcDogNTVweDsgYmFja2dyb3VuZDogI2ZmZjk7IH1gLFxuXHRcdFx0XHRgI2NvbV91c2VyYmFyIC51X2JkaG9tZSB7IGRpc3BsYXk6IG5vbmU7IH1gLFxuXHRcdFx0XHRgLmZsb29yLWNoZWNrLW1pc3MgeyBwYWRkaW5nOiAxMHB4O2JhY2tncm91bmQtY29sb3I6ICM0NTExNTk7Ym9yZGVyLXJhZGl1czogNXB4O3BhZGRpbmctYm90dG9tOiA2cHg7Y29sb3I6ICNmZmY7dGV4dC1hbGlnbjogY2VudGVyO21hcmdpbjogNXB4O21hcmdpbi1sZWZ0OiBhdXRvO31gLFxuXHRcdFx0XHRgLmZsb29yLWNoZWNrLW1pc3M6aG92ZXIgeyBvcGFjaXR5OiAwLjk7IH1gLFxuXG5cdFx0XHRcdGAudGhyZWFkbGlzdF90aXRsZSB7XG5cdFx0XHRcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcblx0XHRcdFx0d29yZC1icmVhazogYnJlYWstYWxsO1xuXHRcdFx0XHR3aGl0ZS1zcGFjZTogbm9ybWFsO1xuXHRcdFx0XHR9YCxcblxuXHRcdFx0XHRgLnNlZV9seiB7IFxuXHRcdFx0XHRtYXJnaW4tbGVmdDogMWVtO1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDsgXG5cdFx0XHRcdGZvbnQtc2l6ZTogOXB0O1xuXHRcdFx0XHRwYWRkaW5nOiAycHggOHB4IDFweDtcblx0XHRcdFx0dGV4dC1zaGFkb3c6IGluaXRpYWw7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG5cdFx0XHRcdH1gLFxuXG5cdFx0XHRcdGAuaWNvbi1yZXBseSB7XG5cdFx0XHRcdFx0d2lkdGg6IDE2cHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxM3B4O1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHVybCgvL3RiMi5iZHN0YXRpYy5jb20vdGIvc3RhdGljLXBiL3dpZGdldC9mb3J1bV90aXRsZS9pbWFnZXMvaWNvbl9yZXBseV9kOGE0NGI5LnBuZykgbm8tcmVwZWF0O1xuXHRcdFx0XHR9YCxcblxuXHRcdFx0XHRgLmRlZXByZWFkLXdyYXAgeyBmb250LXNpemU6IDlwdDsgfWAsXG5cblx0XHRcdFx0YC5qX3RocmVhZF9saXN0IC50aHJlYWRsaXN0X3RpdGxlIC5zZWVfbHogeyBcblx0XHRcdFx0ZGlzcGxheTogbm9uZTsgXG5cdFx0XHRcdH1gLFxuXHRcdFx0XHRgLmpfdGhyZWFkX2xpc3Q6aG92ZXIgLnRocmVhZGxpc3RfdGl0bGUgLnNlZV9seiB7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgfWAsXG5cblx0XHRcdFx0YC5sX3Bvc3QuX2xvdXpodWJpYW9zaGlfcG9zdCB7IGJvcmRlcjogMXB4IHNvbGlkICMyZDY0YjM7IH1gLFxuXG5cdFx0XHRcdGAuX3Bvc3QtdG9jIHsgXG5cdFx0XHRcdGRpc3BsYXk6IG5vbmU7IFxuXHRcdFx0XHRwb3NpdGlvbjogc3RpY2t5OyBcblx0XHRcdFx0bWF4LXdpZHRoOiAxNTBweDsgXG5cdFx0XHRcdHRvcDogNTVweDsgXG5cdFx0XHRcdGZsb2F0OiBsZWZ0OyBcblx0XHRcdFx0Ly9tYXJnaW4tbGVmdDogLTE1MHB4O1xuXHRcdFx0XHRsZWZ0OiAxNTBweDtcblx0XHRcdFx0Zm9udC1zaXplOiAwLjdlbTtcblx0XHRcdFx0b3BhY2l0eTogMC41O1xuXHRcdFx0XHRvdmVyZmxvdy14OiBoaWRkZW47XG5cdFx0XHRcdH1gLFxuXG5cdFx0XHRcdGAuX3Bvc3QtdG9jIGR0IHsgIH1gLFxuXHRcdFx0XHRgLl9wb3N0LXRvYyBkdCBhIHsgcGFkZGluZy1sZWZ0OiAzcHg7IGJvcmRlci1yYWRpdXM6IDNweDsgfWAsXG5cblx0XHRcdFx0YC5fcG9zdC10b2MgZHQgLmljb24tcmVwbHkge1xuXHRcdFx0XHQgXG5cdFx0XHRcdCBtYXJnaW4tbGVmdDogM3B4O1xuYm9yZGVyLXJhZGl1czogMTAwJTtcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XG53aWR0aDogMThweDtcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbmhlaWdodDogMThweDtcblx0XHRcdFx0IFxuXHRcdFx0XHQgfWAsXG5cblx0XHRcdFx0YC5fcG9zdC10b2MgZHQgeyBvcGFjaXR5OiAwLjc7IH1gLFxuXHRcdFx0XHRgLl9wb3N0LXRvYyBkdDpob3ZlciB7IG9wYWNpdHk6IDE7IH1gLFxuXG5cdFx0XHRcdGAuX3Bvc3QtdG9jIGR0IGE6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjMmQ2NGIzOyBjb2xvcjogI0ZGRjsgfWAsXG5cblx0XHRcdFx0YC5fbG91emh1Ymlhb3NoaV90b2MgeyAgfWAsXG5cdFx0XHRcdGAuX2xvdXpodWJpYW9zaGlfdG9jIGEgeyBiYWNrZ3JvdW5kOiAjRkY3RjQyOyBjb2xvcjogI0ZGRjsgZm9udC13ZWlnaHQ6IGJvbGQ7IH1gLFxuXG5cdFx0XHRcdGAuX3Bvc3QtdG9jIGEgeyBtaW4td2lkdGg6IDEwMHB4OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGxpbmUtaGVpZ2h0OiAyZW07IG1pbi1oZWlnaHQ6IDJlbTsgfWAsXG5cblx0XHRcdFx0YC5fcG9zdC10b2M6aG92ZXIgeyBvcGFjaXR5OiAxOyB9YCxcblxuXHRcdFx0XHRgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcblx0XHRcdFx0XHQuX3Bvc3QtdG9jIHsgbGVmdDogMTAwcHg7IH1cblx0XHRcdFx0fWAsXG5cblx0XHRcdFx0YEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XG5cdFx0XHRcdFx0Ll9wb3N0LXRvYyB7IGxlZnQ6IDUwcHg7IH1cblx0XHRcdFx0fWAsXG5cblx0XHRcdFx0YEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XG5cdFx0XHRcdFx0Ll9wb3N0LXRvYyB7IGxlZnQ6IDEwcHg7IH1cblx0XHRcdFx0fWAsXG5cblx0XHRcdFx0YEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XG5cdFx0XHRcdFx0Ll9wb3N0LXRvYyB7IGRpc3BsYXk6IGJsb2NrOyB9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aHRtbCwgYm9keSwgOnJvb3Rcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1gLFxuXG5cdFx0XHRdKVxuXHRcdDtcblxuXHRcdGNvbnN0IHRocm90dGxlID0gcmVxdWlyZSgndGhyb3R0bGUtZGVib3VuY2UvdGhyb3R0bGUnKTtcblx0XHRjb25zdCBkZWJvdW5jZSA9IHJlcXVpcmUoJ3Rocm90dGxlLWRlYm91bmNlL2RlYm91bmNlJyk7XG5cdFx0Y29uc3QgX3VmX2RvbmUgPSByZXF1aXJlKCdyb290L2xpYi9ldmVudC9kb25lJyk7XG5cblx0XHRhd2FpdCBQcm9taXNlQmx1ZWJpcmQuZGVsYXkoMjUwKTtcblxuXHRcdGxldCBQYWdlRGF0YTogSUJhaWR1VGllYmFQYWdlRGF0YTtcblxuXHRcdGxldCBfdG9jX2luaXRlZCA9IGZhbHNlO1xuXG5cdFx0bGV0IF90b2NfYXJlYSA9ICQoJzxkaXYgY2xhc3M9XCJfcG9zdC10b2NcIi8+Jyk7XG5cdFx0bGV0IF90b2MgPSAkKCc8ZGwgc3R5bGU9XCJsaXN0LXN0eWxlLXR5cGU6IHVuc2V0O1wiLz4nKS5hcHBlbmRUbyhfdG9jX2FyZWEpO1xuXG5cdFx0JCgnYm9keScpLm9uKCdET01Ob2RlSW5zZXJ0ZWQnLCAnI2NvbV91c2VyYmFyJywgZnVuY3Rpb24gKGV2ZW50KVxuXHRcdHtcblx0XHRcdC8vY29uc29sZS5sb2coZXZlbnQudHlwZSwgdGhpcywgZXZlbnQudGFyZ2V0KTtcblxuXHRcdFx0aWYgKCQoZXZlbnQudGFyZ2V0KS5pcygnI3Vfbm90aWZ5X2l0ZW0sIC51bnJlYWQtbnVtJykpXG5cdFx0XHR7XG5cdFx0XHRcdCQod2luZG93KS50cmlnZ2VySGFuZGxlcignbG9hZC5tZW51Jyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkKCcjcGJfY29udGVudCcpXG5cdFx0XHQub24oJ2NsaWNrJywgJ2ltZy5CREVfSW1hZ2UnLCBmdW5jdGlvbiAoZXZlbnQpXG5cdFx0XHR7XG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBAdHlwZSBKUXVlcnk8SFRNTEVsZW1lbnQ+XG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRsZXQgX2ltZyA9IGxpYlNpdGVCYWlkdVRpZWJhLmJkZV9pbWFnZSh0aGlzKTtcblxuXHRcdFx0XHRpZiAoX2ltZyAmJiBfaW1nLmxlbmd0aClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxldCBuYW1lX2lkID0gX2ltZy5hdHRyKCdkYXRhLWlkJyk7XG5cblx0XHRcdFx0XHRsZXQgdXJsO1xuXG5cdFx0XHRcdFx0aWYgKFBhZ2VEYXRhICYmIFBhZ2VEYXRhLmZvcnVtICYmIFBhZ2VEYXRhLnRocmVhZClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR1cmwgPSBbXG5cdFx0XHRcdFx0XHRcdGBodHRwOi8vdGllYmEuYmFpZHUuY29tL3Bob3RvL3A/YCxcblx0XHRcdFx0XHRcdFx0YGt3PSR7UGFnZURhdGEuZm9ydW0ubmFtZV91cmx9YCxcblx0XHRcdFx0XHRcdFx0YCZmbHV4PTEmdGlkPSR7UGFnZURhdGEudGhyZWFkLnRocmVhZF9pZH1gLFxuXHRcdFx0XHRcdFx0XHRgJnBpY19pZD0ke25hbWVfaWR9YCxcblx0XHRcdFx0XHRcdFx0YCZwbj0xJmZwPTImc2VlX2x6PTAmcmVkX3RhZz1zMjY5ODk5MzUzM2AsXG5cdFx0XHRcdFx0XHRdLmpvaW4oJycpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR1cmwgPSBfaW1nLnByb3AoJ3NyYycpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdF91Zl9kb25lKGV2ZW50KTtcblxuXHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHR3aW5kb3cub3Blbih1cmwsIG5hbWVfaWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdDtcblxuXHRcdCQoJ2JvZHknKS5vbignRE9NTm9kZUluc2VydGVkJywgJyN0aHJlYWRfbGlzdCAual90aHJlYWRfbGlzdCAubWVkaWFfYm94JywgZGVib3VuY2UoNTAwLCBmdW5jdGlvbiAoZXZlbnQpXG5cdFx0e1xuXHRcdFx0bGV0IF9pbWcgPSAkKCdpbWdbaWRePVwiYmlnX2ltZ19cIl0nLCB0aGlzKTtcblxuXHRcdFx0MCAmJiBjb25zb2xlLmxvZyh7XG5cdFx0XHRcdFwidGhpc1wiOiB0aGlzLFxuXHRcdFx0XHR0YXJnZXQ6IGV2ZW50LnRhcmdldCxcblx0XHRcdFx0X2ltZyxcblx0XHRcdH0pO1xuXG5cdFx0XHRfaW1nLmVhY2goZnVuY3Rpb24gKClcblx0XHRcdHtcblx0XHRcdFx0bGliU2l0ZUJhaWR1VGllYmEuYmRlX2ltYWdlKHRoaXMpO1xuXHRcdFx0fSk7XG5cblx0XHR9KSk7XG5cblx0XHRjb25zdCBDb3B5TGliID0gcmVxdWlyZSgncm9vdC9saWIvZnVuYy9jb3B5Jyk7XG5cblx0XHQkKCdib2R5Jylcblx0XHRcdC5vbignRE9NTm9kZUluc2VydGVkIERPTVN1YnRyZWVNb2RpZmllZCcsICcjY3JlYXRpdmUtcGxhdGZvcm0tZGVlcHJlYWQtd3JhcCcsIGRlYm91bmNlKDEwMDAsIGZ1bmN0aW9uIChldmVudClcblx0XHR7XG5cdFx0XHRjb25zb2xlLmxvZyhldmVudC50eXBlLCB0aGlzLCBldmVudC50YXJnZXQpO1xuXHRcdFx0bGV0IF90aGlzID0gJCh0aGlzKTtcblxuXHRcdFx0aWYgKCFfdGhpcy5sZW5ndGggfHwgIV90aGlzLmlzKCcjY3JlYXRpdmUtcGxhdGZvcm0tZGVlcHJlYWQtd3JhcDpub3QoW2RhdGEtZG9uZV0pJykpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0X3RoaXMuYXR0cignZGF0YS1kb25lJywgdHJ1ZSk7XG5cblx0XHRcdGxldCBkZWVwcmVhZF9jb250ZW50ID0gJCgnI2RlZXByZWFkLXdyYXAgLmRlZXByZWFkLWNvbnRlbnQnKTtcblx0XHRcdGxldCBkZWVwcmVhZF9uYXYgPSAkKCcjZGVlcHJlYWQtbmF2JywgX3RoaXMpO1xuXG5cdFx0XHRsZXQgX2EgPSAkKCc8YSB0aXRsZT1cIum7nuaTiuWPr+ikh+ijveiyvOWtkFwiPum7nuaTiuWPr+ikh+ijveiyvOWtkDwvYT4nKTtcblxuXHRcdFx0X2Eub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KVxuXHRcdFx0e1xuXHRcdFx0XHRjb25zb2xlLmxvZyhldmVudC50eXBlLCB0aGlzLCBldmVudC50YXJnZXQpO1xuXG5cdFx0XHRcdENvcHlMaWIuY29weUVsZW0oJCgnI2RlZXByZWFkLXdyYXAgLmRlZXByZWFkLWNvbnRlbnQnKVswXSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0X2EuYXBwZW5kVG8oZGVlcHJlYWRfbmF2KTtcblxuXHRcdFx0bGV0IF9kaXYgPSAkKCc8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIi8+Jyk7XG5cdFx0XHRsZXQgdCA9ICQoJy5kZWVwcmVhZC10aXRsZSwgLmRlZXByZWFkLWF1dGhvcicsIF90aGlzKTtcblxuXHRcdFx0dC5hcHBlbmRUbyhfZGl2KTtcblx0XHRcdF9kaXYuaW5zZXJ0QWZ0ZXIoZGVlcHJlYWRfbmF2KTtcblx0XHR9KSlcblx0XHQ7XG5cblx0XHQkKHdpbmRvdylcblx0XHRcdC5vbignbG9hZC5zaWduJywgZGVib3VuY2UoMTAwMCwgZnVuY3Rpb24gKClcblx0XHRcdHtcblx0XHRcdFx0c2lnbihfdXJsX29iaik7XG5cblx0XHRcdFx0JCh3aW5kb3cpLnRyaWdnZXJIYW5kbGVyKCdzY3JvbGwubG9hZCcpO1xuXHRcdFx0fSkpXG5cdFx0XHQub24oJ2xvYWQubWVudScsIHRocm90dGxlKDEwMDAsIGZ1bmN0aW9uIChldmVudClcblx0XHRcdHtcblx0XHRcdFx0Y29uc29sZS5sb2coZXZlbnQudHlwZSwgdGhpcywgZXZlbnQudGFyZ2V0KTtcblxuXHRcdFx0XHQkKCcudV9uZXdzIHVsLmpfY2F0ZWdvcnlfbGlzdCcpLmVhY2goZnVuY3Rpb24gKClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxldCB1bCA9ICQodGhpcyk7XG5cblx0XHRcdFx0XHRpZiAoIXVsLmZpbmQoJ2Eual9jbGVhcmRhdGFbZGF0YS10eXBlPVwiZmF2dHNcIl0nKS5sZW5ndGgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dWwucHJlcGVuZChgPGxpIGNsYXNzPVwiY2F0ZWdvcnlfaXRlbSBjYXRlZ29yeV9pdGVtX2VtcHR5XCI+PGEgY2xhc3M9XCJqX2NsZWFyZGF0YVwiIGhyZWY9XCJodHRwOi8vdGllYmEuYmFpZHUuY29tL2kvaS9zdG9yZXRocmVhZFwiIHRhcmdldD1cIl9ibGFua1wiIGRhdGEtdHlwZT1cImZhdnRzXCI+5oiR55qE5pS26JePPC9hPjwvbGk+YCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCF1bC5maW5kKCdhLmpfY2xlYXJkYXRhW2RhdGEtdHlwZT1cIm15X3RpZVwiXScpLmxlbmd0aClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR1bC5wcmVwZW5kKGA8bGkgY2xhc3M9XCJjYXRlZ29yeV9pdGVtIGNhdGVnb3J5X2l0ZW1fZW1wdHlcIj48YSBjbGFzcz1cImpfY2xlYXJkYXRhXCIgaHJlZj1cImh0dHA6Ly90aWViYS5iYWlkdS5jb20vaS9pL215X3RpZVwiIHRhcmdldD1cIl9ibGFua1wiIGRhdGEtdHlwZT1cIm15X3RpZVwiPuaIkeeahOi0tOWtkDwvYT48L2xpPmApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICghdWwuZmluZCgnYS5qX2NsZWFyZGF0YVtkYXRhLXR5cGU9XCJhdG1lXCJdJykubGVuZ3RoKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHVsLnByZXBlbmQoYDxsaSBjbGFzcz1cImNhdGVnb3J5X2l0ZW0gY2F0ZWdvcnlfaXRlbV9lbXB0eVwiPjxhIGNsYXNzPVwial9jbGVhcmRhdGFcIiBocmVmPVwiaHR0cDovL3RpZWJhLmJhaWR1LmNvbS9pL2kvYXRtZVwiIHRhcmdldD1cIl9ibGFua1wiIGRhdGEtdHlwZT1cImF0bWVcIj7mn6XnnItA5o+Q5Yiw5oiRPC9hPjwvbGk+YCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCF1bC5maW5kKCdhLmpfY2xlYXJkYXRhW2RhdGEtdHlwZT1cInJlcGx5XCJdJykubGVuZ3RoKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHVsLnByZXBlbmQoYDxsaSBjbGFzcz1cImNhdGVnb3J5X2l0ZW0gY2F0ZWdvcnlfaXRlbV9lbXB0eVwiPjxhIGNsYXNzPVwial9jbGVhcmRhdGFcIiBocmVmPVwiaHR0cDovL3RpZWJhLmJhaWR1LmNvbS9pL2kvcmVwbHltZVwiIHRhcmdldD1cIl9ibGFua1wiIGRhdGEtdHlwZT1cInJlcGx5XCI+5p+l55yL5Zue5aSNPC9hPjwvbGk+YCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCF1bC5maW5kKCdhLmpfY2xlYXJkYXRhW2RhdGEtdHlwZT1cInJlY3ljbGVcIl0nKS5sZW5ndGgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Ly9odHRwOi8vdGllYmEuYmFpZHUuY29tL3BtYy9yZWN5Y2xlXG5cdFx0XHRcdFx0XHR1bC5hcHBlbmQoYDxsaSBjbGFzcz1cImNhdGVnb3J5X2l0ZW0gY2F0ZWdvcnlfaXRlbV9lbXB0eVwiPjxhIGNsYXNzPVwial9jbGVhcmRhdGFcIiBocmVmPVwiaHR0cDovL3RpZWJhLmJhaWR1LmNvbS9wbWMvcmVjeWNsZVwiIHRhcmdldD1cIl9ibGFua1wiIGRhdGEtdHlwZT1cInJlY3ljbGVcIj7liKDotLTkv6Hmga88L2E+PC9saT5gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSkpXG5cdFx0XHQub24oJ2xvYWQnLCB0aHJvdHRsZSg1MDAsIGZ1bmN0aW9uICgpXG5cdFx0XHR7XG5cdFx0XHRcdFBhZ2VEYXRhID0gJC5leHRlbmQoe30sIHtcblx0XHRcdFx0XHR0aHJlYWQ6IHt9LFxuXHRcdFx0XHR9LCB1bnNhZmVXaW5kb3cuUGFnZURhdGEpO1xuXG5cdFx0XHRcdCQoW1xuXHRcdFx0XHRcdCcuZmVlZF9pdGVtIGEuaXRiX2t3W3RpdGxlXVtocmVmKj1cIi4uLlwiXScsXG5cdFx0XHRcdF0uam9pbignLCcpKS5hdHRyKCdocmVmJywgZnVuY3Rpb24gKClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxldCB0aXRsZSA9ICQodGhpcykuYXR0cigndGl0bGUnKTtcblxuXHRcdFx0XHRcdHJldHVybiAnL2Y/a3c9JyArIHRpdGxlO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRsZXQgZmxvb3I6IG51bWJlcjtcblx0XHRcdFx0bGV0IGxhc3RfcG9zdDtcblxuXHRcdFx0XHRsZXQgX3RvY19yZXNldCA9IHRydWU7XG5cblx0XHRcdFx0bGV0IHBfcG9zdGxpc3QgPSAkKCcjal9wX3Bvc3RsaXN0LCAjal9wX3Bvc3RsaXN0ICNqX3BfcG9zdGxpc3QsIC5wX3Bvc3RsaXN0W2lkXScsICcjcGJfY29udGVudCcpXG5cdFx0XHRcdFx0LmVxKC0xKVxuXHRcdFx0XHQ7XG5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxldCBjaGsgPSAkKCc+IC5fcF9wb3N0bGlzdF8nLCBwX3Bvc3RsaXN0KTtcblxuXHRcdFx0XHRcdGlmIChjaGsubGVuZ3RoKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRwX3Bvc3RsaXN0LnByZXBlbmQoJzxkaXYgY2xhc3M9XCJfcF9wb3N0bGlzdF9cIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIi8+Jyk7XG5cdFx0XHRcdH1cblxuLy9cdFx0XHRcdCQoJy5wX3Bvc3RsaXN0ID4gLmxfcG9zdDpoYXMoLmxvdXpodWJpYW9zaGlfd3JhcCknKS5jc3Moe1xuLy9cdFx0XHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICMyZDY0YjMnLFxuLy9cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdCQoW1xuXHRcdFx0XHRcdCcuY2FyZF90aXRsZV9mbmFtZScsXG5cdFx0XHRcdFx0Jy5zaW1wbGVfYmxvY2tfY29udGFpbmVyIC53cmFwX2NvbnRhaW5lciAubm93cmFwIGEnLFxuXHRcdFx0XHRcdCcuc2ltcGxlX2Jsb2NrX2NvbnRhaW5lciAudF9mb3J3YXJkIC5jb21tb25fc291cmNlX21haW4gYTplcSgtMSknLFxuXHRcdFx0XHRdLmpvaW4oJywnKSkuZWFjaChmdW5jdGlvbiAoKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGV0IHRpdGxlID0gJCh0aGlzKS5hdHRyKCd0aXRsZScpO1xuXG5cdFx0XHRcdFx0aWYgKHRpdGxlKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCQodGhpcykudGV4dCh0aXRsZSArICh0aXRsZS5zbGljZSgtMSkgPT0gJ+WQpycgPyAnJyA6ICflkKcnKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRsZXQgcF9wb3N0bGlzdF9wb3N0ID0gJCgnLmxfcG9zdCcsIHBfcG9zdGxpc3QpO1xuXG5cdFx0XHRcdC8vY29uc29sZS5sb2cocF9wb3N0bGlzdCwgcF9wb3N0bGlzdF9wb3N0KTtcblxuXHRcdFx0XHRwX3Bvc3RsaXN0X3Bvc3Rcblx0XHRcdFx0XHQuZWFjaChmdW5jdGlvbiAoKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGlmICghX3RvY19pbml0ZWQpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdF90b2NfaW5pdGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0X3RvY19hcmVhXG5cdFx0XHRcdFx0XHRcdC8vLnByZXBlbmRUbygnI2NvbnRhaW5lcicpXG5cdFx0XHRcdFx0XHRcdFx0Lmluc2VydEJlZm9yZSgnI2NvbnRhaW5lcicpXG5cdFx0XHRcdFx0XHRcdDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0bGV0IF90aGlzID0gJCh0aGlzKTtcblxuXHRcdFx0XHRcdFx0bGV0IF9maWVsZDogSUJhaWR1VGllYmFQb3N0RmllbGQ7XG5cdFx0XHRcdFx0XHR0cnlcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bGV0IHMgPSBfdGhpcy5hdHRyKCdkYXRhLWZpZWxkJyk7XG5cdFx0XHRcdFx0XHRcdGlmIChzKVxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0X2ZpZWxkID0gSlNPTi5wYXJzZShzKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y2F0Y2ggKGUpXG5cdFx0XHRcdFx0XHR7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0X2ZpZWxkID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0XHRcdFx0XHRcdGF1dGhvcjoge30sXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHt9LFxuXHRcdFx0XHRcdFx0fSwgX2ZpZWxkKTtcblxuXHRcdFx0XHRcdFx0bGV0IGZsb29yX2VsZW0gPSBfdGhpcy5maW5kKCcucG9zdC10YWlsLXdyYXAgPiAudGFpbC1pbmZvOmVxKC0yKScpO1xuXHRcdFx0XHRcdFx0Ly9sZXQgYyA9IE51bWJlcihmbG9vcl9lbGVtLnRleHQoKS5yZXBsYWNlKC9cXEQvZywgJycpKTtcblx0XHRcdFx0XHRcdGxldCBjID0gX2ZpZWxkLmNvbnRlbnQucG9zdF9ubztcblxuXHRcdFx0XHRcdFx0aWYgKCFjKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRjID0gTnVtYmVyKGZsb29yX2VsZW0udGV4dCgpLnJlcGxhY2UoL1xcRC9nLCAnJykpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoX3RvY19yZXNldClcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0X3RvY19yZXNldCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRfdG9jLmVtcHR5KCk7XG5cblx0XHRcdFx0XHRcdFx0JCgnLmNhcmRfdG9wX3dyYXAnKS5vdXRlckhlaWdodCgkKCcuY2FyZF90b3Bfd3JhcCAuY2FyZF90b3AnKS5vdXRlckhlaWdodCgpKTtcblxuXHRcdFx0XHRcdFx0XHQkKHdpbmRvdykudHJpZ2dlckhhbmRsZXIoJ3Njcm9sbC5sb2FkJyk7XG5cblx0XHRcdFx0XHRcdFx0Zmxvb3IgPSBjO1xuXG5cdFx0XHRcdFx0XHRcdGxhc3RfcG9zdCA9IF90aGlzO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKGMsIF9maWVsZC5hdXRob3IudXNlcl9uYW1lLCBfZmllbGQpO1xuXG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mIGMgPT09ICdudW1iZXInICYmICFOdW1iZXIuaXNOYU4oYykpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGxldCBpc19sb3V6aHViaWFvc2hpID0gKF9maWVsZC5hdXRob3IudXNlcl9uYW1lID09IFBhZ2VEYXRhLnRocmVhZC5hdXRob3IpO1xuXG5cdFx0XHRcdFx0XHRcdGlmIChpc19sb3V6aHViaWFvc2hpKVxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0X3RoaXMuYWRkQ2xhc3MoJ19sb3V6aHViaWFvc2hpX3Bvc3QnKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRsZXQgX2EgPSAkKGA8ZHQ+PC9kdD5gKVxuXHRcdFx0XHRcdFx0XHRcdFx0Lmh0bWwoYDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj4jJHtjfSBgICsgJCgnLnBfYXV0aG9yIC5wX2F1dGhvcl9uYW1lJywgX3RoaXMpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5odG1sKCkgKyAnPC9hPicpXG5cdFx0XHRcdFx0XHRcdFx0O1xuXG5cdFx0XHRcdFx0XHRcdFx0X2EuYXR0cigndGl0bGUnLCBfYS50ZXh0KCkpO1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGlzX2xvdXpodWJpYW9zaGkpXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0X2EuYWRkQ2xhc3MoJ19sb3V6aHViaWFvc2hpX3RvYycpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGlmIChfZmllbGQuY29udGVudC5jb21tZW50X251bSlcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRfYS5maW5kKCdhOmVxKDApJykuYXBwZW5kKCc8aSBjbGFzcz1cImljb24tcmVwbHlcIi8+Jyk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0X2EuZmluZCgnYTplcSgwKScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0JCh3aW5kb3cpLnRyaWdnZXJIYW5kbGVyKCdzY3JvbGwubG9hZCcpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgZm4gPSBmdW5jdGlvbiAoKVxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkKHdpbmRvdylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuc2Nyb2xsVG8oX3RoaXMsIC04MClcblx0XHRcdFx0XHRcdFx0XHRcdFx0O1xuXHRcdFx0XHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChmbiwgMjAwKTtcblx0XHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0XHRcdF9hLmFwcGVuZFRvKF90b2MpO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZygyMjIsIGZsb29yLCBjLCBsYXN0X3Bvc3QpO1xuXG5cdFx0XHRcdFx0XHRcdGlmIChjICE9IGZsb29yKVxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGMgIT0gZmxvb3IgKyAxKVxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBhID0gW107XG5cdFx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gZmxvb3IgKyAxOyBpIDwgYzsgaSsrKVxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhLnB1c2goaSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmIChhLmxlbmd0aClcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFzdF9wb3N0LmZpbmQoJy5kX3Bvc3RfY29udGVudF9tYWluJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuYXBwZW5kKGA8ZGl2IGNsYXNzPVwiZmxvb3ItY2hlY2stbWlzc1wiPuiri+azqOaEj++8miR7YVswXX0ke2EubGVuZ3RoID4gMVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyAnIH4gJyArIGEuc2xpY2UoLTEpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnfSDmqJMg5Y+v6IO95bey6KKr5ZCe5paH5oiW5Yiq6ZmkPC9kaXY+YCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Zmxvb3IgPSBjO1xuXHRcdFx0XHRcdFx0XHRcdGxhc3RfcG9zdCA9IF90aGlzO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYywgZmxvb3IpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRfdGhpcy5kYXRhKCdmaWVsZC1kYXRhJywgX2ZpZWxkKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5maWx0ZXIoJzpub3QoW2RhdGEtZmxvb3ItY2hlY2tdKScpXG5cdFx0XHRcdFx0LmVhY2goZnVuY3Rpb24gKClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsZXQgX3RoaXMgPSAkKHRoaXMpO1xuXHRcdFx0XHRcdFx0bGV0IF9wb3N0ID0gX3RoaXM7XG5cblx0XHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHRcdF90aGlzLmF0dHIoJ2RhdGEtZmxvb3ItY2hlY2snLCB0cnVlKTtcblxuXHRcdFx0XHRcdFx0bGV0IGZsb29yX2VsZW0gPSBfdGhpcy5maW5kKCcucG9zdC10YWlsLXdyYXAgPiAudGFpbC1pbmZvOmVxKC0yKScpO1xuXG5cdFx0XHRcdFx0XHR0cnlcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aWYgKF9wb3N0LmlzKCc6bm90KFtkYXRhLWxvYWRlZF0pJykpXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0XHRcdFx0X3Bvc3QuYXR0cignZGF0YS1sb2FkZWQnLCB0cnVlKTtcblxuXHRcdFx0XHRcdFx0XHRcdCQoJy5kX3Bvc3RfY29udGVudF9tYWluJywgX3Bvc3QpLnByZXBlbmQoJCgnPGEvPicpXG5cdFx0XHRcdFx0XHRcdFx0XHQudGV4dCgnIycgKyBfcG9zdC5kYXRhKCdmaWVsZCcpLmNvbnRlbnQucG9zdF9ubylcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdocmVmJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0J2h0dHA6Ly90aWViYS5iYWlkdS5jb20vcC8nICsgUGFnZURhdGEudGhyZWFkLnRocmVhZF9pZCArICc/cGlkPScgKyBfcG9zdC5kYXRhKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnZmllbGQnKS5jb250ZW50LnBvc3RfaWQgKyAnIycgKyBfcG9zdC5kYXRhKCdmaWVsZCcpLmNvbnRlbnQucG9zdF9pZFxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ3N0eWxlJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0J2Zsb2F0OiByaWdodDsgei1pbmRleDogNTAwOyBwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAwcHg7IHRvcDogMHB4OyBwYWRkaW5nOiAxcHggNXB4Oydcblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHRcdC8qXG5cdFx0XHRcdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KVxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsZXQgdGV4dCA9IF9wb3N0LmZpbmQoJy5kX3Bvc3RfY29udGVudCcpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dFswXS5zZWxlY3QoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkb2N1bWVudC5leGVjQ29tbWFuZCgnQ29weScpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhdGNoIChlKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0R01BcGkuR01fc2V0Q2xpcGJvYXJkKHRleHQudGV4dCgpLnJlcGxhY2UoL1xcclxcbnxcXHIoPyFcXG4pfFxcbi9nLCBcIjxici8+XFxuXCIpKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXRjaCAoZSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfdWZfZG9uZShldmVudCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0Ki9cblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdvbmNsaWNrJywgZnVuY3Rpb24gKClcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IGlkID0gX3Bvc3QuZmluZCgnLmRfcG9zdF9jb250ZW50JykuYXR0cignaWQnKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGBldmVudC5wcmV2ZW50RGVmYXVsdCgpYCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgdmFyIGNvcHlBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJyR7aWR9JylgLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGB0cnl7Y29weUFyZWEuc2VsZWN0KCk7fWNhdGNoKGUpe2NvbnNvbGUuZXJyb3IoZSl9YCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgdHJ5e3dpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTt9Y2F0Y2goZSl7fWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YHRyeXt2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO3JhbmdlLnNlbGVjdE5vZGUoY29weUFyZWEpO3dpbmRvdy5nZXRTZWxlY3Rpb24oKS5hZGRSYW5nZShyYW5nZSl9Y2F0Y2goZSl7Y29uc29sZS5lcnJvcihlKX1gLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGB0cnl7ZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ0NvcHknKX1jYXRjaChlKXtjb25zb2xlLmVycm9yKGUpfWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YHJldHVybiBmYWxzZWBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XS5qb2luKCc7Jylcblx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cigndGl0bGUnLCAn6bue5pOK5Y+v6KSH6KO96LK85a2QJylcblx0XHRcdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHRcdFx0Zmxvb3JfZWxlbS53cmFwSW5uZXIoJCgnPGEvPicpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignaHJlZicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdodHRwOi8vdGllYmEuYmFpZHUuY29tL3AvJyArIFBhZ2VEYXRhLnRocmVhZC50aHJlYWRfaWQgKyAnP3BpZD0nICsgX3Bvc3QuZGF0YShcblx0XHRcdFx0XHRcdFx0XHRcdFx0J2ZpZWxkJykuY29udGVudC5wb3N0X2lkICsgJyMnICsgX3Bvc3QuZGF0YSgnZmllbGQnKS5jb250ZW50LnBvc3RfaWRcblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBfdWZfZG9uZSkpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNhdGNoIChlKVxuXHRcdFx0XHRcdFx0e31cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQ7XG5cblx0XHRcdFx0JCgnaW1nLkJERV9JbWFnZScsIHBfcG9zdGxpc3RfcG9zdCkuZWFjaChmdW5jdGlvbiAoKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGliU2l0ZUJhaWR1VGllYmEuYmRlX2ltYWdlKHRoaXMpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQkKHdpbmRvdykudHJpZ2dlckhhbmRsZXIoJ3Njcm9sbC5sb2FkJyk7XG5cdFx0XHR9KSlcblx0XHRcdC5vbignbG9hZC5saXN0JywgdGhyb3R0bGUoMTAwMCwgZnVuY3Rpb24gKClcblx0XHRcdHtcblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIOiZleeQhuiyvOWtkOWIl+ihqFxuXHRcdFx0XHQgKi9cblx0XHRcdFx0bGV0IGxzID0gJCgnLmpfdGhyZWFkX2xpc3QgLnRocmVhZGxpc3RfdGl0bGUsIC5paG9tZV9zZWN0aW9uIC5uZXdfbGlzdCAudGhyZWFkX25hbWUnKS5lYWNoKGZ1bmN0aW9uICgpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsZXQgX3RoaXMgPSAkKHRoaXMpO1xuXG5cdFx0XHRcdFx0bGV0IF90ID0gX3RoaXMuZmluZCgnYS5qX3RoX3RpdCwgYS50aXRsZScpO1xuXG5cdFx0XHRcdFx0aWYgKF90Lmxlbmd0aCAmJiAhX3RoaXMuZmluZCgnLnNlZV9seicpLmxlbmd0aClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsZXQgdXJsID0gbmV3IFVSTChfdC5wcm9wKCdocmVmJykpO1xuXG5cdFx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0XHR1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgnc2VlX2x6JywgMSk7XG5cblx0XHRcdFx0XHRcdCQoJzxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwic2VlX2x6IGJ0bi1zdWIgYnRuLXNtYWxsXCI+5Y+q55yL5qW85Li7PC9hPicpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdocmVmJywgdXJsLnRvU3RyaW5nKCkpXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmRUbygkKCc8c3Bhbi8+Jylcblx0XHRcdFx0XHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdFx0XHRcdFx0XHRcdFx0J3ZlcnRpY2FsLWFsaWduJzogJ2luaGVyaXQnLFxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0LmFwcGVuZFRvKF90aGlzKVxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKCdsb2FkLmxpc3QnLCBscyk7XG5cblx0XHRcdFx0bGF6eWxvYWQoX3VybF9vYmopO1xuXHRcdFx0fSkpXG5cdFx0XHQub24oJ2tleWRvd24ucGFnZScsIHJlcXVpcmUoJ3Jvb3QvbGliL2pxdWVyeS9ldmVudC9ob3RrZXknKS5wYWNrRXZlbnQoZnVuY3Rpb24gKGV2ZW50KVxuXHRcdFx0e1xuXHRcdFx0XHRjb25zdCBrZXljb2RlcyA9IHJlcXVpcmUoJ2tleWNvZGVzJyk7XG5cblx0XHRcdFx0c3dpdGNoIChldmVudC53aGljaClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNhc2Uga2V5Y29kZXMoJ3BhZ2V1cCcpOlxuXHRcdFx0XHRcdGNhc2Uga2V5Y29kZXMoJ2xlZnQnKTpcblxuXHRcdFx0XHRcdFx0dmFyIF9hID0gJCgnLnBhZ2luYXRpb24tZGVmYXVsdCBhLnByZXYsIC5wYWdpbmF0aW9uLWRlZmF1bHQgYS5wcmUnKTtcblxuXHRcdFx0XHRcdFx0aWYgKF9hLmxlbmd0aClcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0X3VmX2RvbmUoZXZlbnQpO1xuXHRcdFx0XHRcdFx0XHRfYVswXS5jbGljaygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhldmVudCwgX2EpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIGtleWNvZGVzKCdwYWdlZG93bicpOlxuXHRcdFx0XHRcdGNhc2Uga2V5Y29kZXMoJ3JpZ2h0Jyk6XG5cblx0XHRcdFx0XHRcdHZhciBfYSA9ICQoJy5wYWdpbmF0aW9uLWRlZmF1bHQgYS5uZXh0Jyk7XG5cblx0XHRcdFx0XHRcdGlmIChfYS5sZW5ndGgpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdF91Zl9kb25lKGV2ZW50KTtcblx0XHRcdFx0XHRcdFx0X2FbMF0uY2xpY2soKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXZlbnQsIF9hKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0pKVxuXHRcdFx0Lm9uKCdsb2FkLnNjcm9sbCcsIGZ1bmN0aW9uICgpXG5cdFx0XHR7XG5cdFx0XHRcdGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPCAzMDApXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0JCh3aW5kb3cpLnNjcm9sbFRvKCcjcGJfY29udGVudCwgLmhlYWRfY29udGVudCAuY2FyZF90aXRsZSwgI2NvbnRlbnQsICN0YWJfZm9ydW1uYW1lJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHQuc2Nyb2xsVG8oJy5oZWFkX2NvbnRlbnQnKVxuXHRcdFx0Lm9uZSgnc2Nyb2xsJywgZnVuY3Rpb24gKGV2ZW50KVxuXHRcdFx0e1xuXHRcdFx0XHRjb25zb2xlLmxvZyhldmVudCk7XG5cdFx0XHR9KVxuXHRcdFx0Lm9uKCdzY3JvbGwucmVwbHknLCBmdW5jdGlvbiAoZXZlbnQpXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChldmVudC5uYW1lc3BhY2UgPT0gJ3JlcGx5Jylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coZXZlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0e1xuXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQub24oJ3Njcm9sbC5sb2FkJywgdGhyb3R0bGUoMTAwMCwgZnVuY3Rpb24gKGV2ZW50KVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgbiA9IDA7XG5cblx0XHRcdFx0JCgnLmNvcmVfcmVwbHlfd3JhcHBlcjpub3QoW2RhdGEtbG9hZGVkXSknKVxuXHRcdFx0XHRcdC5lYWNoKGZ1bmN0aW9uICgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGV0IGNvcmVfcmVwbHlfd3JhcHBlciA9ICQodGhpcyk7XG5cdFx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0XHRjb3JlX3JlcGx5X3dyYXBwZXIuYXR0cignZGF0YS1sb2FkZWQnLCB0cnVlKTtcblxuXHRcdFx0XHRcdFx0bGV0IGxvYWRpbmdfcmVwbHkgPSBjb3JlX3JlcGx5X3dyYXBwZXIuZmluZCgnLmxvYWRpbmdfcmVwbHknKTtcblxuXHRcdFx0XHRcdFx0bGV0IGNvcmVfcmVwbHkgPSBjb3JlX3JlcGx5X3dyYXBwZXIucGFyZW50cygnLmNvcmVfcmVwbHk6ZXEoMCknKS5lcSgwKTtcblxuXHRcdFx0XHRcdFx0Y29yZV9yZXBseV9oYW5kbGVyKGNvcmVfcmVwbHkpO1xuXG5cdFx0XHRcdFx0XHRsZXQgdCA9IE51bWJlcihjb3JlX3JlcGx5X3dyYXBwZXIucHJvcCgnZGF0YS1sb2FkZWQtdHJ5JykgfHwgMCk7XG5cblx0XHRcdFx0XHRcdGlmICh0IDwgNSAmJiBsb2FkaW5nX3JlcGx5Lmxlbmd0aClcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bisrO1xuXG5cdFx0XHRcdFx0XHRcdGNvcmVfcmVwbHlfd3JhcHBlci5wcm9wKCdkYXRhLWxvYWRlZC10cnknLCB0ICsgMSk7XG5cblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKVxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IGV2ZW50ID0gJC5FdmVudCgnc2Nyb2xsLnJlcGx5Jywge1xuXHRcdFx0XHRcdFx0XHRcdFx0cGFnZVk6IGNvcmVfcmVwbHlfd3JhcHBlci5vZmZzZXQoKS50b3AsXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdFx0XHQkKHdpbmRvdylcblx0XHRcdFx0XHRcdFx0XHRcdC5hZGQoJ2h0bWwsIGJvZHknKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnRyaWdnZXIoZXZlbnQpXG5cdFx0XHRcdFx0XHRcdFx0O1xuXG5cdFx0XHRcdFx0XHRcdFx0dHJ5XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IGV2ZW50ID0gdW5zYWZlV2luZG93LiQuRXZlbnQoJ3Njcm9sbC5yZXBseScsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFnZVk6IGNvcmVfcmVwbHlfd3JhcHBlci5vZmZzZXQoKS50b3AsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdFx0XHRcdFx0dW5zYWZlV2luZG93LiQodW5zYWZlV2luZG93KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuYWRkKCdodG1sLCBib2R5Jylcblx0XHRcdFx0XHRcdFx0XHRcdFx0LnRyaWdnZXIoZXZlbnQpXG5cdFx0XHRcdFx0XHRcdFx0XHQ7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGNhdGNoIChlKVxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vY29uc29sZS5lcnJvcihlLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHRyeVxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBldmVudCA9ICQuRXZlbnQoJ3Njcm9sbC5yZXBseScsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFnZVk6IGNvcmVfcmVwbHlfd3JhcHBlci5vZmZzZXQoKS50b3AsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0JCh1bnNhZmVXaW5kb3cpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5hZGQoJ2h0bWwsIGJvZHknKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQudHJpZ2dlcihldmVudClcblx0XHRcdFx0XHRcdFx0XHRcdDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Y2F0Y2ggKGUpXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly9jb25zb2xlLmVycm9yKGUudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKVxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChjb3JlX3JlcGx5X3dyYXBwZXIuZmluZCgnLmxvYWRpbmdfcmVwbHknKS5sZW5ndGgpXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvcmVfcmVwbHlfd3JhcHBlci5yZW1vdmVBdHRyKCdkYXRhLWxvYWRlZCcpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0sIDIwMCk7XG5cblx0XHRcdFx0XHRcdFx0XHRjb3JlX3JlcGx5X2hhbmRsZXIoY29yZV9yZXBseSk7XG5cdFx0XHRcdFx0XHRcdH0sIDEwMDAgKyBuICogMTAwKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQ7XG5cdFx0XHR9KSlcblx0XHRcdC50cmlnZ2VySGFuZGxlcignbG9hZCcpXG5cdFx0O1xuXG5cdFx0JCgnYm9keScpLm9uKCdET01Ob2RlSW5zZXJ0ZWQnLCAnI2Zyc19saXN0X3BhZ2VyLCAjdGhyZWFkX2xpc3QnLCBkZWJvdW5jZSg1MDAsIGZ1bmN0aW9uICgpXG5cdFx0e1xuXHRcdFx0JCh3aW5kb3cpLnRyaWdnZXJIYW5kbGVyKCdsb2FkLmxpc3QnKTtcblx0XHR9KSk7XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpXG5cdFx0e1xuXHRcdFx0JCh3aW5kb3cpLnRyaWdnZXJIYW5kbGVyKCdsb2FkLmxpc3QnKTtcblx0XHR9LCA1MDApO1xuXG5cdFx0JCgnI2Zyc19saXN0X3BhZ2VyJylcblx0XHRcdC5vbignRE9NTm9kZUluc2VydGVkLnBhZ2UnLCBkZWJvdW5jZSgyMDAsIGZ1bmN0aW9uICgpXG5cdFx0XHR7XG5cdFx0XHRcdC8vY29uc29sZS5sb2coZXZlbnQudHlwZSwgdGhpcywgZXZlbnQudGFyZ2V0KTtcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHQkKHdpbmRvdykuc2Nyb2xsVG8oJy5oZWFkX2NvbnRlbnQgLmNhcmRfdGl0bGUsICNjb250ZW50LCAjdGFiX2ZvcnVtbmFtZScpO1xuXHRcdFx0fSkpXG5cdFx0O1xuXG4vL1x0XHQkKCdib2R5Jylcbi8vXHRcdFx0Lm9uKCdET01Ob2RlSW5zZXJ0ZWQnLCAnLnBiX2Zvb3RlciAubF90aHJlYWRfaW5mbycsIGRlYm91bmNlKDIwMCwgZnVuY3Rpb24gKGV2ZW50KVxuLy9cdFx0XHR7XG4vL1x0XHRcdFx0Y29uc29sZS5sb2coJ0RPTU5vZGVJbnNlcnRlZCcsIHRoaXMsIGV2ZW50LnRhcmdldCk7XG4vL1x0XHRcdFx0JCh3aW5kb3cpLnRyaWdnZXJIYW5kbGVyKCdsb2FkJyk7XG4vL1x0XHRcdH0pKVxuLy9cdFx0O1xuXG5cdFx0JCgnI2pfY29yZV90aXRsZV93cmFwJylcblx0XHRcdC5vbignRE9NTm9kZUluc2VydGVkJywgJy5jb3JlX3RpdGxlX3R4dCcsIHRocm90dGxlKDIwMCwgZnVuY3Rpb24gKGV2ZW50KVxuXHRcdFx0e1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKGV2ZW50LnR5cGUsIHRoaXMsIGV2ZW50LnRhcmdldCk7XG5cdFx0XHRcdCQod2luZG93KS50cmlnZ2VySGFuZGxlcignbG9hZCcpO1xuXHRcdFx0fSkpXG5cdFx0O1xuXHR9LFxuXG5cdGFkYmxvY2soX3VybF9vYmogPSBnbG9iYWwuX3VybF9vYmopXG5cdHtcblxuXHR9LFxuXG5cdGNsZWFybHkoX3VybF9vYmogPSBnbG9iYWwuX3VybF9vYmosIF9kb21fbGlzdCA9IG51bGwpXG5cdHtcblx0XHRsZXQgX2RvbSA9ICQoX2RvbV9saXN0KTtcblxuXHRcdF9kb20gPSBfZG9tXG5cdFx0XHQuYWRkKCQoJyNjb250YWluZXInKS5wYXJlbnRzVW50aWwoJ2JvZHknKS5hZGRCYWNrKCkuc2libGluZ3MoKSlcblx0XHRcdC5hZGQoJCgnI2Zvb3RlcicpLm5leHRBbGwoKSlcblx0XHRcdC5hZGQoW1xuXHRcdFx0XHQnLnNoYXJlX2J0bl93cmFwcGVyLCAjY2VsZWJyaXR5LCAjbXlfdGllYmFfbW9kLCAucmlnaHRfc2VjdGlvbiwgLnNlZS1pbWFnZS1idG4sICNzaWduX21vZCcsXG5cdFx0XHRcdCcjal9oZWFkX2ZvY3VzX2J0biwgLmRlZXByZWFkLWJ0biwgI2ljb24tcmVwbHksIC5wX2F1dGhvcl9mYWNlLnJvdW5kLWF2YXRhciwgI3RiX3JpY2hfcG9zdGVyX2NvbnRhaW5lcicsXG5cdFx0XHRcdCcuY29yZV9yZXBseV93cmFwcGVyIC5qX3VzZXJfY2FyZCcsXG5cdFx0XHRcdCdib2R5IDpoaWRkZW4sIGlmcmFtZSwgc2NyaXB0Jyxcblx0XHRcdFx0JyNmb290ZXIsICNwYi1mb290ZXItaGVhZGVyLCAjcXVpY2tfcmVwbHknLFxuXHRcdFx0XHQnLmpfdXNlcl9zaWduJyxcblxuXHRcdFx0XHQnLnBfYXV0aG9yIC5kX2ljb25zLCAuc2F2ZV9mYWNlX2NhcmQsIC5kX25hbWVfaWNvbiwgLnNhdmVfZmFjZV9iZycsXG5cblx0XHRcdFx0Jy5pY29uX3Rid29ybGQsIC5CREVfU21pbGV5Jyxcblx0XHRcdFx0Jy5sb3V6aHViaWFvc2hpX3dyYXAsIC5zYXZlX2ZhY2VfY2FyZCcsXG5cdFx0XHRdLmpvaW4oKSlcblx0XHQ7XG5cblx0XHQkKCcuZF9iYWRnZV9sdicpLnJlbW92ZUF0dHIoJ2NsYXNzJyk7XG5cblx0XHQvL19kb20ucmVtb3ZlKCk7XG5cblx0XHRyZXR1cm4gX2RvbTtcblx0fSxcbn07XG5cbmV4cG9ydCA9IG8gYXMgSURlbW87XG5cbmFzeW5jIGZ1bmN0aW9uIHNpZ24oX3VybF9vYmogPSBnbG9iYWwuX3VybF9vYmosIGJvb2w/OiBib29sZWFuKVxue1xuXHRjb25zdCBQcm9taXNlID0gcmVxdWlyZSgnYmx1ZWJpcmQnKTtcblxuXHRhd2FpdCBQcm9taXNlLmRlbGF5KDEwMDApO1xuXG5cdGxldCBiID0gJCgnI2pfaGVhZF9mb2N1c19idG4nKTtcblx0bGV0IGEgPSAkKCcjc2lnbl9tb2QgI3NpZ25zdGFyX3dyYXBwZXIgYS5qX2NhbnNpZ24nKTtcblxuXHRpZiAoYS5sZW5ndGgpXG5cdHtcblx0XHRpZiAoYi5pcygnLmNhbmNlbF9mb2N1cycpKVxuXHRcdHtcblx0XHRcdGFbMF0uY2xpY2soKTtcblx0XHRcdGF3YWl0IFByb21pc2UuZGVsYXkoNTAwKTtcblx0XHRcdGFbMF0uY2xpY2soKTtcblx0XHRcdGF3YWl0IFByb21pc2UuZGVsYXkoNTAwKTtcblx0XHRcdCQoJy5qX3N1Y2NfaW5mby5zaWduX3N1Y2MxJykuaGlkZSgpO1xuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoIWJvb2wpXG5cdFx0e1xuXHRcdFx0Yi5vbmUoJ2NsaWNrLnNpZ24nLCBmdW5jdGlvbiAoKVxuXHRcdFx0e1xuXHRcdFx0XHRzaWduKF91cmxfb2JqLCB0cnVlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG59XG5cbmZ1bmN0aW9uIGxhenlsb2FkKF91cmxfb2JqKVxue1xuXHRjb25zdCBsaWJTaXRlQmFpZHVUaWViYSA9IHJlcXVpcmUoJ3Jvb3QvbGliL3NpdGUvYmFpZHUvdGllYmEnKTtcblxuXHQkKCdpbWcuQkRFX0ltYWdlW2RhdGEtb3JpZ2luYWxdLCBpbWcudGhyZWFkbGlzdF9waWMnKVxuXHRcdC5ub3QoJ1tkYXRhLWRvbmVdJylcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0LmF0dHIoJ2RhdGEtZG9uZScsIHRydWUpXG5cdFx0LmF0dHIoJ3NyYycsIGZ1bmN0aW9uIChpLCBvbGQpXG5cdFx0e1xuXHRcdFx0bGV0IF90aGlzID0gJCh0aGlzKTtcblx0XHRcdGxldCBzcmMgPSBfdGhpcy5hdHRyKCdkYXRhLW9yaWdpbmFsJyk7XG5cblx0XHRcdGxldCBfaW1nID0gbGliU2l0ZUJhaWR1VGllYmEuYmRlX2ltYWdlKF90aGlzLmNsb25lKCkpO1xuXG5cdFx0XHRpZiAoX2ltZylcblx0XHRcdHtcblx0XHRcdFx0X3RoaXMuYXR0cignYnBpYycsIF9pbWcuZGF0YSgnZnVsbHNyYycpKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9sZCAhPSBzcmMpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiBzcmM7XG5cdFx0XHR9XG5cdFx0fSlcblx0O1xufVxuXG5mdW5jdGlvbiBjb3JlX3JlcGx5X2hhbmRsZXIoX3RoaXMpXG57XG5cdGxldCBjaGsgPSBfdGhpcy5maW5kKCcubHpsX2xpbmtfZm9sZDp2aXNpYmxlLCAubG9hZGluZ19yZXBseScpO1xuXHRsZXQgZWxlbSA9IF90aGlzLmZpbmQoJy5jb3JlX3JlcGx5X3dyYXBwZXInKTtcblxuXHRsZXQgbWluX2hlaWdodCA9IGVsZW0uY3NzKCdtaW4taGVpZ2h0JykucmVwbGFjZSgvcHgkLywgJycpO1xuXHRsZXQgaGVpZ2h0ID0gZWxlbS5oZWlnaHQoKTtcblxuXHQwICYmIGNvbnNvbGUubG9nKGVsZW0sIHtcblx0XHRtaW5faGVpZ2h0LFxuXHRcdGhlaWdodCxcblx0XHRjaGs6IGNoay5sZW5ndGgsXG5cdH0pO1xuXG5cdGlmIChtaW5faGVpZ2h0IDw9IDUwIHx8IGhlaWdodCA8PSA1MClcblx0e1xuXHRcdC8vIOiZleeQhuaNsuWLleaZguacg+WboOeCuueVmeiogOWNgOeahOmrmOW6puiuiuWLleWwjuiHtOWumuS9jSDku6Xlj4og55yL5Yiw55m96Imy5YWn5a6555qE5ZWP6aGMXG5cdFx0ZWxlbS5jc3MoJ21pbi1oZWlnaHQnLCAnYXV0bycpO1xuXHR9XG5cblx0aWYgKGNoay5sZW5ndGgpXG5cdHtcblx0XHQvL2VsZW0uc2hvdygpO1xuXHR9XG5cdGVsc2Vcblx0e1xuXHRcdC8vZWxlbS5oaWRlKCk7XG5cdH1cblxuXHQvL2NvbnNvbGUubG9nKGVsZW0sIGNoayk7XG59XG4iXX0=