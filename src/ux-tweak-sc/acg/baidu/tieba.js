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
            let p_postlist_post = $('.l_post:visible', p_postlist);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGllYmEuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInNyYy91eC10d2Vhay1zYy9hY2cvYmFpZHUvdGllYmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQWVBLElBQUksQ0FBQyxHQUFVO0lBRWQsUUFBUSxFQUFFO1FBQ1QsT0FBTyxFQUFFO1lBQ1IsMkJBQTJCO1NBQzNCO1FBQ0QsS0FBSyxFQUFFO1lBQ04saUNBQWlDO1lBQ2pDLG1DQUFtQztZQUNuQywrQkFBK0I7WUFDL0Isc0NBQXNDO1lBQ3RDLDJCQUEyQjtTQUMzQjtRQUNELE9BQU8sRUFBRSxFQUFFO1FBRVgsS0FBSyxFQUFFO1lBQ04saUJBQWlCO1NBQ2pCO0tBQ0Q7SUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRO1FBRTlCLElBQUksR0FBRyxDQUFDO1FBRVIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUN0RjtZQUNDLE9BQU8sSUFBSSxDQUFDO1NBQ1o7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUTtRQUVwQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDNUQsTUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUNoRSxNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQy9ELE1BQU0sZUFBZSxHQUFHLDJDQUFhLFVBQVUsRUFBQyxDQUFDO1FBRWpELENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFO1lBRXpCLG1CQUFtQixDQUFDO2dCQUNuQix3RUFBd0U7YUFDeEUsQ0FBQztpQkFD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QUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzNELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUUzQixDQUFDLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7UUFDdEIsVUFBVTtRQUNWLE1BQU07UUFDTixHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU07S0FDZixDQUFDLENBQUM7SUFFSCxJQUFJLFVBQVUsSUFBSSxFQUFFLElBQUksTUFBTSxJQUFJLEVBQUUsRUFDcEM7UUFFQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztLQUMvQjtJQUVELElBQUksR0FBRyxDQUFDLE1BQU0sRUFDZDtLQUVDO1NBRUQ7S0FFQztBQUdGLENBQUM7QUE1RkQsaUJBQVMsQ0FBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxNy84LzMvMDAzLlxuICovXG5cbmltcG9ydCB7IElEZW1vLCBJR2xvYmFsLCBJR3JlYXNlbW9ua2V5LCBJV2luZG93LCBJSlF1ZXJ5U3RhdGljLCBJVXJsT2JqZWN0MiB9IGZyb20gJ3Jvb3QvbGliL2NvcmUvZGVtbyc7XG5cbmRlY2xhcmUgY29uc3QgZ2xvYmFsOiBJR2xvYmFsO1xuZGVjbGFyZSBjb25zdCBncmVhc2Vtb25rZXk6IElHcmVhc2Vtb25rZXk7XG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogSVdpbmRvdztcbmRlY2xhcmUgY29uc3QgdW5zYWZlV2luZG93OiBJV2luZG93O1xuZGVjbGFyZSBjb25zdCAkOiBJSlF1ZXJ5U3RhdGljO1xuZGVjbGFyZSBjb25zdCBqUXVlcnk6IElKUXVlcnlTdGF0aWM7XG5cbmltcG9ydCB7IElCYWlkdVRpZWJhUGFnZURhdGEsIElCYWlkdVRpZWJhUG9zdEZpZWxkIH0gZnJvbSAncm9vdC9saWIvc2l0ZS9iYWlkdS90aWViYSc7XG5cbmxldCBvOiBJRGVtbyA9IHtcblxuXHRtZXRhZGF0YToge1xuXHRcdGluY2x1ZGU6IFtcblx0XHRcdCdodHRwKjovL3RpZWJhLmJhaWR1LmNvbS8qJyxcblx0XHRdLFxuXHRcdG1hdGNoOiBbXG5cdFx0XHQnKjovL3RpZWJhLmJhaWR1LmNvbS9pL2kvbXlfdGllKicsXG5cdFx0XHQnKjovL3RpZWJhLmJhaWR1LmNvbS9pL2kvbXlfcmVwbHkqJyxcblx0XHRcdCcqOi8vdGllYmEuYmFpZHUuY29tL2kvaS9hdG1lKicsXG5cdFx0XHQnKjovL3RpZWJhLmJhaWR1LmNvbS9pL2kvc3RvcmV0aHJlYWQqJyxcblx0XHRcdCcqOi8vdGllYmEuYmFpZHUuY29tL3BtYy8qJyxcblx0XHRdLFxuXHRcdGV4Y2x1ZGU6IFtdLFxuXG5cdFx0Z3JhbnQ6IFtcblx0XHRcdCdHTV9zZXRDbGlwYm9hcmQnLFxuXHRcdF0sXG5cdH0sXG5cblx0dGVzdChfdXJsX29iaiA9IGdsb2JhbC5fdXJsX29iailcblx0e1xuXHRcdGxldCByZXQ7XG5cblx0XHRpZiAocmV0ID0gcmVxdWlyZSgncm9vdC9saWIvZ3JlYXNlbW9ua2V5L21hdGNoJykuYXV0byhfdXJsX29iai5zb3VyY2UsIG1vZHVsZS5leHBvcnRzKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cblx0YXN5bmMgbWFpbihfdXJsX29iaiA9IGdsb2JhbC5fdXJsX29iailcblx0e1xuXHRcdGNvbnN0IEdNQXBpID0gcmVxdWlyZSgncm9vdC9saWIvZ3JlYXNlbW9ua2V5L2dtL2FwaScpLkdNQXBpO1xuXHRcdGNvbnN0IF91Zl9kb21fZmlsdGVyX2xpbmsgPSByZXF1aXJlKCdyb290L2xpYi9kb20vZmlsdGVyL2xpbmsnKTtcblx0XHRjb25zdCBsaWJTaXRlQmFpZHVUaWViYSA9IHJlcXVpcmUoJ3Jvb3QvbGliL3NpdGUvYmFpZHUvdGllYmEnKTtcblx0XHRjb25zdCBQcm9taXNlQmx1ZWJpcmQgPSBhd2FpdCBpbXBvcnQoJ2JsdWViaXJkJyk7XG5cblx0XHQkKHdpbmRvdykub24oJ2xvYWQubGluaycsIGZ1bmN0aW9uICgpXG5cdFx0e1xuXHRcdFx0X3VmX2RvbV9maWx0ZXJfbGluayhbXG5cdFx0XHRcdCcudV9pdGllYmEgYSwgLnVfbmV3cyBhLCAudV91c2VybmFtZSBhLCAuY29tX3VzZXJiYXIgYSwgI2pfdV91c2VybmFtZSBhJyxcblx0XHRcdF0pXG5cdFx0XHRcdC5hdHRyKCd0YXJnZXQnLCAnX2JsYW5rJylcblx0XHRcdDtcblxuXHRcdFx0JCgnLnVfaXRpZWJhIGEsIC51X25ld3MgYSwgLnVfdXNlcm5hbWUgYSwgLmNvbV91c2VyYmFyIGEsICNqX3VfdXNlcm5hbWUgYScpLmF0dHIoJ3RhcmdldCcsICdfYmxhbmsnKTtcblx0XHR9KS50cmlnZ2VySGFuZGxlcignbG9hZC5saW5rJyk7XG5cblx0XHQkKCdib2R5Jykub24oJ2hvdmVyJywgJyNqX3VfdXNlcm5hbWUsIC51X3VzZXJuYW1lLCAudV91c2VybmFtZSBsaSwgLnVfZGRsX2Nvbl90b3AnLCBmdW5jdGlvbiAoKVxuXHRcdHtcblx0XHRcdCQod2luZG93KS50cmlnZ2VySGFuZGxlcignbG9hZC5saW5rJyk7XG5cdFx0fSk7XG5cblx0XHRncmVhc2Vtb25rZXlcblx0XHRcdC5HTV9hZGRTdHlsZShbXG5cblx0XHRcdFx0YC5kX3Bvc3RfY29udGVudCB7IGxpbmUtaGVpZ2h0OiAxLjQ1ZW07IH1gLFxuXG5cdFx0XHRcdC8vYC5sX3Bvc3RfYnJpZ2h0LCAuc2tpbl9ub3JtYWwgLndyYXAxLCAucGJfY29udGVudCB7IGJhY2tncm91bmQ6ICNlNmQ3YmQ7IH1gLFxuXHRcdFx0XHRgLmRfcG9zdF9jb250ZW50X21haW4geyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfWAsXG5cdFx0XHRcdC8vYC5jb3JlX3RpdGxlX3dyYXBfYnJpZ2h0IHsgYmFja2dyb3VuZDogI2ZmZjk7IH1gLFxuXG5cdFx0XHRcdGAudGJ1aV9hc2lkZV9mbG9hdF9iYXIgeyBvcGFjaXR5OiAwLjU7IH0gXG5cdFx0XHRcdFx0LnRidWlfYXNpZGVfZmxvYXRfYmFyOmhvdmVyIHsgb3BhY2l0eTogMC44OyB9YCxcblxuXHRcdFx0XHRgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC5yaWdodF9zZWN0aW9uIHsgZGlzcGxheTogbm9uZTsgfVxuXHRcdFx0XHRcdC5sZWZ0X3NlY3Rpb24geyBmbG9hdDogbm9uZTsgbWFyZ2luOiBhdXRvOyB9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0LnNlYXJjaF9icmlnaHQgLnNlYXJjaF9pcHQsIC5sX2NvbnRhaW5lciwgLmNvbnRlbnQsIC5wYl9jb250ZW50LCAudGhyZWFkX3RoZW1lXzUsIC5wYl9mb290ZXIsIC5wYl9mb290ZXIgLnBfdGhyZWFkLCAudGJfcmljaF9wb3N0ZXJfY29udGFpbmVyLCAuc2VhcmNoX2JyaWdodCAuc2VhcmNoX2Zvcm0sIC5uYXZfbGlzdCB7IHdpZHRoOiBhdXRvOyB9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0fWAsXG5cblx0XHRcdFx0YEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC5jb3JlX3RpdGxlX3dyYXBfYnJpZ2h0IHsgd2lkdGg6IDEwMCU7IH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQuZF9wb3N0X2NvbnRlbnRfbWFpbiB7IHBhZGRpbmctbGVmdDogMHB4OyB9XG5cdFx0XHRcdFx0LmRfYXV0aG9yLCAuZF9hdXRob3JfYW5vbnltIHsgZGlzcGxheTogbm9uZTsgfVxuXHRcdFx0XHRcdC5wX2NvbnRlbnQgeyBwYWRkaW5nLXJpZ2h0OiAwcHg7IH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQuZF9wb3N0X2NvbnRlbnRfbWFpbiB7IGZsb2F0OiBub25lO21hcmdpbjogYXV0bzsgfVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdH1gLFxuXG5cdFx0XHRdKVxuXHRcdDtcblxuXHRcdGdyZWFzZW1vbmtleVxuXHRcdFx0LkdNX2FkZFN0eWxlKFtcblx0XHRcdFx0YCNjb21fdXNlcmJhciB7IHBvc2l0aW9uOiBmaXhlZDsgdG9wOiA1NXB4OyBiYWNrZ3JvdW5kOiAjZmZmOTsgfWAsXG5cdFx0XHRcdGAjY29tX3VzZXJiYXIgLnVfYmRob21lIHsgZGlzcGxheTogbm9uZTsgfWAsXG5cdFx0XHRcdGAuZmxvb3ItY2hlY2stbWlzcyB7IHBhZGRpbmc6IDEwcHg7YmFja2dyb3VuZC1jb2xvcjogIzQ1MTE1OTtib3JkZXItcmFkaXVzOiA1cHg7cGFkZGluZy1ib3R0b206IDZweDtjb2xvcjogI2ZmZjt0ZXh0LWFsaWduOiBjZW50ZXI7bWFyZ2luOiA1cHg7bWFyZ2luLWxlZnQ6IGF1dG87fWAsXG5cdFx0XHRcdGAuZmxvb3ItY2hlY2stbWlzczpob3ZlciB7IG9wYWNpdHk6IDAuOTsgfWAsXG5cblx0XHRcdFx0YC50aHJlYWRsaXN0X3RpdGxlIHtcblx0XHRcdFx0d29yZC13cmFwOiBicmVhay13b3JkO1xuXHRcdFx0XHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XG5cdFx0XHRcdHdoaXRlLXNwYWNlOiBub3JtYWw7XG5cdFx0XHRcdH1gLFxuXG5cdFx0XHRcdGAuc2VlX2x6IHsgXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAxZW07XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50OyBcblx0XHRcdFx0Zm9udC1zaXplOiA5cHQ7XG5cdFx0XHRcdHBhZGRpbmc6IDJweCA4cHggMXB4O1xuXHRcdFx0XHR0ZXh0LXNoYWRvdzogaW5pdGlhbDtcblx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcblx0XHRcdFx0fWAsXG5cblx0XHRcdFx0YC5pY29uLXJlcGx5IHtcblx0XHRcdFx0XHR3aWR0aDogMTZweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDEzcHg7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogdXJsKC8vdGIyLmJkc3RhdGljLmNvbS90Yi9zdGF0aWMtcGIvd2lkZ2V0L2ZvcnVtX3RpdGxlL2ltYWdlcy9pY29uX3JlcGx5X2Q4YTQ0YjkucG5nKSBuby1yZXBlYXQ7XG5cdFx0XHRcdH1gLFxuXG5cdFx0XHRcdGAuZGVlcHJlYWQtd3JhcCB7IGZvbnQtc2l6ZTogOXB0OyB9YCxcblxuXHRcdFx0XHRgLmpfdGhyZWFkX2xpc3QgLnRocmVhZGxpc3RfdGl0bGUgLnNlZV9seiB7IFxuXHRcdFx0XHRkaXNwbGF5OiBub25lOyBcblx0XHRcdFx0fWAsXG5cdFx0XHRcdGAual90aHJlYWRfbGlzdDpob3ZlciAudGhyZWFkbGlzdF90aXRsZSAuc2VlX2x6IHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9YCxcblxuXHRcdFx0XHRgLmxfcG9zdC5fbG91emh1Ymlhb3NoaV9wb3N0IHsgYm9yZGVyOiAxcHggc29saWQgIzJkNjRiMzsgfWAsXG5cblx0XHRcdFx0YC5fcG9zdC10b2MgeyBcblx0XHRcdFx0ZGlzcGxheTogbm9uZTsgXG5cdFx0XHRcdHBvc2l0aW9uOiBzdGlja3k7IFxuXHRcdFx0XHRtYXgtd2lkdGg6IDE1MHB4OyBcblx0XHRcdFx0dG9wOiA1NXB4OyBcblx0XHRcdFx0ZmxvYXQ6IGxlZnQ7IFxuXHRcdFx0XHQvL21hcmdpbi1sZWZ0OiAtMTUwcHg7XG5cdFx0XHRcdGxlZnQ6IDE1MHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDAuN2VtO1xuXHRcdFx0XHRvcGFjaXR5OiAwLjU7XG5cdFx0XHRcdG92ZXJmbG93LXg6IGhpZGRlbjtcblx0XHRcdFx0fWAsXG5cblx0XHRcdFx0YC5fcG9zdC10b2MgZHQgeyAgfWAsXG5cdFx0XHRcdGAuX3Bvc3QtdG9jIGR0IGEgeyBwYWRkaW5nLWxlZnQ6IDNweDsgYm9yZGVyLXJhZGl1czogM3B4OyB9YCxcblxuXHRcdFx0XHRgLl9wb3N0LXRvYyBkdCAuaWNvbi1yZXBseSB7XG5cdFx0XHRcdCBcblx0XHRcdFx0IG1hcmdpbi1sZWZ0OiAzcHg7XG5ib3JkZXItcmFkaXVzOiAxMDAlO1xuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbndpZHRoOiAxOHB4O1xuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuaGVpZ2h0OiAxOHB4O1xuXHRcdFx0XHQgXG5cdFx0XHRcdCB9YCxcblxuXHRcdFx0XHRgLl9wb3N0LXRvYyBkdCB7IG9wYWNpdHk6IDAuNzsgfWAsXG5cdFx0XHRcdGAuX3Bvc3QtdG9jIGR0OmhvdmVyIHsgb3BhY2l0eTogMTsgfWAsXG5cblx0XHRcdFx0YC5fcG9zdC10b2MgZHQgYTpob3ZlciB7IGJhY2tncm91bmQ6ICMyZDY0YjM7IGNvbG9yOiAjRkZGOyB9YCxcblxuXHRcdFx0XHRgLl9sb3V6aHViaWFvc2hpX3RvYyB7ICB9YCxcblx0XHRcdFx0YC5fbG91emh1Ymlhb3NoaV90b2MgYSB7IGJhY2tncm91bmQ6ICNGRjdGNDI7IGNvbG9yOiAjRkZGOyBmb250LXdlaWdodDogYm9sZDsgfWAsXG5cblx0XHRcdFx0YC5fcG9zdC10b2MgYSB7IG1pbi13aWR0aDogMTAwcHg7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgbGluZS1oZWlnaHQ6IDJlbTsgbWluLWhlaWdodDogMmVtOyB9YCxcblxuXHRcdFx0XHRgLl9wb3N0LXRvYzpob3ZlciB7IG9wYWNpdHk6IDE7IH1gLFxuXG5cdFx0XHRcdGBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuXHRcdFx0XHRcdC5fcG9zdC10b2MgeyBsZWZ0OiAxMDBweDsgfVxuXHRcdFx0XHR9YCxcblxuXHRcdFx0XHRgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcblx0XHRcdFx0XHQuX3Bvc3QtdG9jIHsgbGVmdDogNTBweDsgfVxuXHRcdFx0XHR9YCxcblxuXHRcdFx0XHRgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcblx0XHRcdFx0XHQuX3Bvc3QtdG9jIHsgbGVmdDogMTBweDsgfVxuXHRcdFx0XHR9YCxcblxuXHRcdFx0XHRgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcblx0XHRcdFx0XHQuX3Bvc3QtdG9jIHsgZGlzcGxheTogYmxvY2s7IH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRodG1sLCBib2R5LCA6cm9vdFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fWAsXG5cblx0XHRcdF0pXG5cdFx0O1xuXG5cdFx0Y29uc3QgdGhyb3R0bGUgPSByZXF1aXJlKCd0aHJvdHRsZS1kZWJvdW5jZS90aHJvdHRsZScpO1xuXHRcdGNvbnN0IGRlYm91bmNlID0gcmVxdWlyZSgndGhyb3R0bGUtZGVib3VuY2UvZGVib3VuY2UnKTtcblx0XHRjb25zdCBfdWZfZG9uZSA9IHJlcXVpcmUoJ3Jvb3QvbGliL2V2ZW50L2RvbmUnKTtcblxuXHRcdGF3YWl0IFByb21pc2VCbHVlYmlyZC5kZWxheSgyNTApO1xuXG5cdFx0bGV0IFBhZ2VEYXRhOiBJQmFpZHVUaWViYVBhZ2VEYXRhO1xuXG5cdFx0bGV0IF90b2NfaW5pdGVkID0gZmFsc2U7XG5cblx0XHRsZXQgX3RvY19hcmVhID0gJCgnPGRpdiBjbGFzcz1cIl9wb3N0LXRvY1wiLz4nKTtcblx0XHRsZXQgX3RvYyA9ICQoJzxkbCBzdHlsZT1cImxpc3Qtc3R5bGUtdHlwZTogdW5zZXQ7XCIvPicpLmFwcGVuZFRvKF90b2NfYXJlYSk7XG5cblx0XHQkKCdib2R5Jykub24oJ0RPTU5vZGVJbnNlcnRlZCcsICcjY29tX3VzZXJiYXInLCBmdW5jdGlvbiAoZXZlbnQpXG5cdFx0e1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhldmVudC50eXBlLCB0aGlzLCBldmVudC50YXJnZXQpO1xuXG5cdFx0XHRpZiAoJChldmVudC50YXJnZXQpLmlzKCcjdV9ub3RpZnlfaXRlbSwgLnVucmVhZC1udW0nKSlcblx0XHRcdHtcblx0XHRcdFx0JCh3aW5kb3cpLnRyaWdnZXJIYW5kbGVyKCdsb2FkLm1lbnUnKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdCQoJyNwYl9jb250ZW50Jylcblx0XHRcdC5vbignY2xpY2snLCAnaW1nLkJERV9JbWFnZScsIGZ1bmN0aW9uIChldmVudClcblx0XHRcdHtcblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIEB0eXBlIEpRdWVyeTxIVE1MRWxlbWVudD5cblx0XHRcdFx0ICovXG5cdFx0XHRcdGxldCBfaW1nID0gbGliU2l0ZUJhaWR1VGllYmEuYmRlX2ltYWdlKHRoaXMpO1xuXG5cdFx0XHRcdGlmIChfaW1nICYmIF9pbWcubGVuZ3RoKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGV0IG5hbWVfaWQgPSBfaW1nLmF0dHIoJ2RhdGEtaWQnKTtcblxuXHRcdFx0XHRcdGxldCB1cmw7XG5cblx0XHRcdFx0XHRpZiAoUGFnZURhdGEgJiYgUGFnZURhdGEuZm9ydW0gJiYgUGFnZURhdGEudGhyZWFkKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHVybCA9IFtcblx0XHRcdFx0XHRcdFx0YGh0dHA6Ly90aWViYS5iYWlkdS5jb20vcGhvdG8vcD9gLFxuXHRcdFx0XHRcdFx0XHRga3c9JHtQYWdlRGF0YS5mb3J1bS5uYW1lX3VybH1gLFxuXHRcdFx0XHRcdFx0XHRgJmZsdXg9MSZ0aWQ9JHtQYWdlRGF0YS50aHJlYWQudGhyZWFkX2lkfWAsXG5cdFx0XHRcdFx0XHRcdGAmcGljX2lkPSR7bmFtZV9pZH1gLFxuXHRcdFx0XHRcdFx0XHRgJnBuPTEmZnA9MiZzZWVfbHo9MCZyZWRfdGFnPXMyNjk4OTkzNTMzYCxcblx0XHRcdFx0XHRcdF0uam9pbignJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHVybCA9IF9pbWcucHJvcCgnc3JjJyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0X3VmX2RvbmUoZXZlbnQpO1xuXG5cdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdHdpbmRvdy5vcGVuKHVybCwgbmFtZV9pZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0O1xuXG5cdFx0JCgnYm9keScpLm9uKCdET01Ob2RlSW5zZXJ0ZWQnLCAnI3RocmVhZF9saXN0IC5qX3RocmVhZF9saXN0IC5tZWRpYV9ib3gnLCBkZWJvdW5jZSg1MDAsIGZ1bmN0aW9uIChldmVudClcblx0XHR7XG5cdFx0XHRsZXQgX2ltZyA9ICQoJ2ltZ1tpZF49XCJiaWdfaW1nX1wiXScsIHRoaXMpO1xuXG5cdFx0XHQwICYmIGNvbnNvbGUubG9nKHtcblx0XHRcdFx0XCJ0aGlzXCI6IHRoaXMsXG5cdFx0XHRcdHRhcmdldDogZXZlbnQudGFyZ2V0LFxuXHRcdFx0XHRfaW1nLFxuXHRcdFx0fSk7XG5cblx0XHRcdF9pbWcuZWFjaChmdW5jdGlvbiAoKVxuXHRcdFx0e1xuXHRcdFx0XHRsaWJTaXRlQmFpZHVUaWViYS5iZGVfaW1hZ2UodGhpcyk7XG5cdFx0XHR9KTtcblxuXHRcdH0pKTtcblxuXHRcdGNvbnN0IENvcHlMaWIgPSByZXF1aXJlKCdyb290L2xpYi9mdW5jL2NvcHknKTtcblxuXHRcdCQoJ2JvZHknKVxuXHRcdFx0Lm9uKCdET01Ob2RlSW5zZXJ0ZWQgRE9NU3VidHJlZU1vZGlmaWVkJywgJyNjcmVhdGl2ZS1wbGF0Zm9ybS1kZWVwcmVhZC13cmFwJywgZGVib3VuY2UoMTAwMCwgZnVuY3Rpb24gKGV2ZW50KVxuXHRcdHtcblx0XHRcdGNvbnNvbGUubG9nKGV2ZW50LnR5cGUsIHRoaXMsIGV2ZW50LnRhcmdldCk7XG5cdFx0XHRsZXQgX3RoaXMgPSAkKHRoaXMpO1xuXG5cdFx0XHRpZiAoIV90aGlzLmxlbmd0aCB8fCAhX3RoaXMuaXMoJyNjcmVhdGl2ZS1wbGF0Zm9ybS1kZWVwcmVhZC13cmFwOm5vdChbZGF0YS1kb25lXSknKSlcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRfdGhpcy5hdHRyKCdkYXRhLWRvbmUnLCB0cnVlKTtcblxuXHRcdFx0bGV0IGRlZXByZWFkX2NvbnRlbnQgPSAkKCcjZGVlcHJlYWQtd3JhcCAuZGVlcHJlYWQtY29udGVudCcpO1xuXHRcdFx0bGV0IGRlZXByZWFkX25hdiA9ICQoJyNkZWVwcmVhZC1uYXYnLCBfdGhpcyk7XG5cblx0XHRcdGxldCBfYSA9ICQoJzxhIHRpdGxlPVwi6bue5pOK5Y+v6KSH6KO96LK85a2QXCI+6bue5pOK5Y+v6KSH6KO96LK85a2QPC9hPicpO1xuXG5cdFx0XHRfYS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpXG5cdFx0XHR7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGV2ZW50LnR5cGUsIHRoaXMsIGV2ZW50LnRhcmdldCk7XG5cblx0XHRcdFx0Q29weUxpYi5jb3B5RWxlbSgkKCcjZGVlcHJlYWQtd3JhcCAuZGVlcHJlYWQtY29udGVudCcpWzBdKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRfYS5hcHBlbmRUbyhkZWVwcmVhZF9uYXYpO1xuXG5cdFx0XHRsZXQgX2RpdiA9ICQoJzxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiLz4nKTtcblx0XHRcdGxldCB0ID0gJCgnLmRlZXByZWFkLXRpdGxlLCAuZGVlcHJlYWQtYXV0aG9yJywgX3RoaXMpO1xuXG5cdFx0XHR0LmFwcGVuZFRvKF9kaXYpO1xuXHRcdFx0X2Rpdi5pbnNlcnRBZnRlcihkZWVwcmVhZF9uYXYpO1xuXHRcdH0pKVxuXHRcdDtcblxuXHRcdCQod2luZG93KVxuXHRcdFx0Lm9uKCdsb2FkLnNpZ24nLCBkZWJvdW5jZSgxMDAwLCBmdW5jdGlvbiAoKVxuXHRcdFx0e1xuXHRcdFx0XHRzaWduKF91cmxfb2JqKTtcblxuXHRcdFx0XHQkKHdpbmRvdykudHJpZ2dlckhhbmRsZXIoJ3Njcm9sbC5sb2FkJyk7XG5cdFx0XHR9KSlcblx0XHRcdC5vbignbG9hZC5tZW51JywgdGhyb3R0bGUoMTAwMCwgZnVuY3Rpb24gKGV2ZW50KVxuXHRcdFx0e1xuXHRcdFx0XHRjb25zb2xlLmxvZyhldmVudC50eXBlLCB0aGlzLCBldmVudC50YXJnZXQpO1xuXG5cdFx0XHRcdCQoJy51X25ld3MgdWwual9jYXRlZ29yeV9saXN0JykuZWFjaChmdW5jdGlvbiAoKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGV0IHVsID0gJCh0aGlzKTtcblxuXHRcdFx0XHRcdGlmICghdWwuZmluZCgnYS5qX2NsZWFyZGF0YVtkYXRhLXR5cGU9XCJmYXZ0c1wiXScpLmxlbmd0aClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR1bC5wcmVwZW5kKGA8bGkgY2xhc3M9XCJjYXRlZ29yeV9pdGVtIGNhdGVnb3J5X2l0ZW1fZW1wdHlcIj48YSBjbGFzcz1cImpfY2xlYXJkYXRhXCIgaHJlZj1cImh0dHA6Ly90aWViYS5iYWlkdS5jb20vaS9pL3N0b3JldGhyZWFkXCIgdGFyZ2V0PVwiX2JsYW5rXCIgZGF0YS10eXBlPVwiZmF2dHNcIj7miJHnmoTmlLbol488L2E+PC9saT5gKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIXVsLmZpbmQoJ2Eual9jbGVhcmRhdGFbZGF0YS10eXBlPVwibXlfdGllXCJdJykubGVuZ3RoKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHVsLnByZXBlbmQoYDxsaSBjbGFzcz1cImNhdGVnb3J5X2l0ZW0gY2F0ZWdvcnlfaXRlbV9lbXB0eVwiPjxhIGNsYXNzPVwial9jbGVhcmRhdGFcIiBocmVmPVwiaHR0cDovL3RpZWJhLmJhaWR1LmNvbS9pL2kvbXlfdGllXCIgdGFyZ2V0PVwiX2JsYW5rXCIgZGF0YS10eXBlPVwibXlfdGllXCI+5oiR55qE6LS05a2QPC9hPjwvbGk+YCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCF1bC5maW5kKCdhLmpfY2xlYXJkYXRhW2RhdGEtdHlwZT1cImF0bWVcIl0nKS5sZW5ndGgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dWwucHJlcGVuZChgPGxpIGNsYXNzPVwiY2F0ZWdvcnlfaXRlbSBjYXRlZ29yeV9pdGVtX2VtcHR5XCI+PGEgY2xhc3M9XCJqX2NsZWFyZGF0YVwiIGhyZWY9XCJodHRwOi8vdGllYmEuYmFpZHUuY29tL2kvaS9hdG1lXCIgdGFyZ2V0PVwiX2JsYW5rXCIgZGF0YS10eXBlPVwiYXRtZVwiPuafpeeci0Dmj5DliLDmiJE8L2E+PC9saT5gKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIXVsLmZpbmQoJ2Eual9jbGVhcmRhdGFbZGF0YS10eXBlPVwicmVwbHlcIl0nKS5sZW5ndGgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dWwucHJlcGVuZChgPGxpIGNsYXNzPVwiY2F0ZWdvcnlfaXRlbSBjYXRlZ29yeV9pdGVtX2VtcHR5XCI+PGEgY2xhc3M9XCJqX2NsZWFyZGF0YVwiIGhyZWY9XCJodHRwOi8vdGllYmEuYmFpZHUuY29tL2kvaS9yZXBseW1lXCIgdGFyZ2V0PVwiX2JsYW5rXCIgZGF0YS10eXBlPVwicmVwbHlcIj7mn6XnnIvlm57lpI08L2E+PC9saT5gKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIXVsLmZpbmQoJ2Eual9jbGVhcmRhdGFbZGF0YS10eXBlPVwicmVjeWNsZVwiXScpLmxlbmd0aClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQvL2h0dHA6Ly90aWViYS5iYWlkdS5jb20vcG1jL3JlY3ljbGVcblx0XHRcdFx0XHRcdHVsLmFwcGVuZChgPGxpIGNsYXNzPVwiY2F0ZWdvcnlfaXRlbSBjYXRlZ29yeV9pdGVtX2VtcHR5XCI+PGEgY2xhc3M9XCJqX2NsZWFyZGF0YVwiIGhyZWY9XCJodHRwOi8vdGllYmEuYmFpZHUuY29tL3BtYy9yZWN5Y2xlXCIgdGFyZ2V0PVwiX2JsYW5rXCIgZGF0YS10eXBlPVwicmVjeWNsZVwiPuWIoOi0tOS/oeaBrzwvYT48L2xpPmApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KSlcblx0XHRcdC5vbignbG9hZCcsIHRocm90dGxlKDUwMCwgZnVuY3Rpb24gKClcblx0XHRcdHtcblx0XHRcdFx0UGFnZURhdGEgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0XHRcdHRocmVhZDoge30sXG5cdFx0XHRcdH0sIHVuc2FmZVdpbmRvdy5QYWdlRGF0YSk7XG5cblx0XHRcdFx0JChbXG5cdFx0XHRcdFx0Jy5mZWVkX2l0ZW0gYS5pdGJfa3dbdGl0bGVdW2hyZWYqPVwiLi4uXCJdJyxcblx0XHRcdFx0XS5qb2luKCcsJykpLmF0dHIoJ2hyZWYnLCBmdW5jdGlvbiAoKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGV0IHRpdGxlID0gJCh0aGlzKS5hdHRyKCd0aXRsZScpO1xuXG5cdFx0XHRcdFx0cmV0dXJuICcvZj9rdz0nICsgdGl0bGU7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGxldCBmbG9vcjogbnVtYmVyO1xuXHRcdFx0XHRsZXQgbGFzdF9wb3N0O1xuXG5cdFx0XHRcdGxldCBfdG9jX3Jlc2V0ID0gdHJ1ZTtcblxuXHRcdFx0XHRsZXQgcF9wb3N0bGlzdCA9ICQoJyNqX3BfcG9zdGxpc3QsICNqX3BfcG9zdGxpc3QgI2pfcF9wb3N0bGlzdCwgLnBfcG9zdGxpc3RbaWRdJywgJyNwYl9jb250ZW50Jylcblx0XHRcdFx0XHQuZXEoLTEpXG5cdFx0XHRcdDtcblxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGV0IGNoayA9ICQoJz4gLl9wX3Bvc3RsaXN0XycsIHBfcG9zdGxpc3QpO1xuXG5cdFx0XHRcdFx0aWYgKGNoay5sZW5ndGgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHBfcG9zdGxpc3QucHJlcGVuZCgnPGRpdiBjbGFzcz1cIl9wX3Bvc3RsaXN0X1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiLz4nKTtcblx0XHRcdFx0fVxuXG4vL1x0XHRcdFx0JCgnLnBfcG9zdGxpc3QgPiAubF9wb3N0OmhhcygubG91emh1Ymlhb3NoaV93cmFwKScpLmNzcyh7XG4vL1x0XHRcdFx0XHRib3JkZXI6ICcxcHggc29saWQgIzJkNjRiMycsXG4vL1x0XHRcdFx0fSk7XG5cblx0XHRcdFx0JChbXG5cdFx0XHRcdFx0Jy5jYXJkX3RpdGxlX2ZuYW1lJyxcblx0XHRcdFx0XHQnLnNpbXBsZV9ibG9ja19jb250YWluZXIgLndyYXBfY29udGFpbmVyIC5ub3dyYXAgYScsXG5cdFx0XHRcdFx0Jy5zaW1wbGVfYmxvY2tfY29udGFpbmVyIC50X2ZvcndhcmQgLmNvbW1vbl9zb3VyY2VfbWFpbiBhOmVxKC0xKScsXG5cdFx0XHRcdF0uam9pbignLCcpKS5lYWNoKGZ1bmN0aW9uICgpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsZXQgdGl0bGUgPSAkKHRoaXMpLmF0dHIoJ3RpdGxlJyk7XG5cblx0XHRcdFx0XHRpZiAodGl0bGUpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0JCh0aGlzKS50ZXh0KHRpdGxlICsgKHRpdGxlLnNsaWNlKC0xKSA9PSAn5ZCnJyA/ICcnIDogJ+WQpycpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGxldCBwX3Bvc3RsaXN0X3Bvc3QgPSAkKCcubF9wb3N0OnZpc2libGUnLCBwX3Bvc3RsaXN0KTtcblxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKHBfcG9zdGxpc3QsIHBfcG9zdGxpc3RfcG9zdCk7XG5cblx0XHRcdFx0cF9wb3N0bGlzdF9wb3N0XG5cdFx0XHRcdFx0LmVhY2goZnVuY3Rpb24gKClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRpZiAoIV90b2NfaW5pdGVkKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRfdG9jX2luaXRlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdF90b2NfYXJlYVxuXHRcdFx0XHRcdFx0XHQvLy5wcmVwZW5kVG8oJyNjb250YWluZXInKVxuXHRcdFx0XHRcdFx0XHRcdC5pbnNlcnRCZWZvcmUoJyNjb250YWluZXInKVxuXHRcdFx0XHRcdFx0XHQ7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGxldCBfdGhpcyA9ICQodGhpcyk7XG5cblx0XHRcdFx0XHRcdGxldCBfZmllbGQ6IElCYWlkdVRpZWJhUG9zdEZpZWxkO1xuXHRcdFx0XHRcdFx0dHJ5XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGxldCBzID0gX3RoaXMuYXR0cignZGF0YS1maWVsZCcpO1xuXHRcdFx0XHRcdFx0XHRpZiAocylcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdF9maWVsZCA9IEpTT04ucGFyc2Uocyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNhdGNoIChlKVxuXHRcdFx0XHRcdFx0e1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdF9maWVsZCA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdFx0XHRcdFx0XHRhdXRob3I6IHt9LFxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiB7fSxcblx0XHRcdFx0XHRcdH0sIF9maWVsZCk7XG5cblx0XHRcdFx0XHRcdGxldCBmbG9vcl9lbGVtID0gX3RoaXMuZmluZCgnLnBvc3QtdGFpbC13cmFwID4gLnRhaWwtaW5mbzplcSgtMiknKTtcblx0XHRcdFx0XHRcdC8vbGV0IGMgPSBOdW1iZXIoZmxvb3JfZWxlbS50ZXh0KCkucmVwbGFjZSgvXFxEL2csICcnKSk7XG5cdFx0XHRcdFx0XHRsZXQgYyA9IF9maWVsZC5jb250ZW50LnBvc3Rfbm87XG5cblx0XHRcdFx0XHRcdGlmICghYylcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0YyA9IE51bWJlcihmbG9vcl9lbGVtLnRleHQoKS5yZXBsYWNlKC9cXEQvZywgJycpKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKF90b2NfcmVzZXQpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdF90b2NfcmVzZXQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0X3RvYy5lbXB0eSgpO1xuXG5cdFx0XHRcdFx0XHRcdCQoJy5jYXJkX3RvcF93cmFwJykub3V0ZXJIZWlnaHQoJCgnLmNhcmRfdG9wX3dyYXAgLmNhcmRfdG9wJykub3V0ZXJIZWlnaHQoKSk7XG5cblx0XHRcdFx0XHRcdFx0JCh3aW5kb3cpLnRyaWdnZXJIYW5kbGVyKCdzY3JvbGwubG9hZCcpO1xuXG5cdFx0XHRcdFx0XHRcdGZsb29yID0gYztcblxuXHRcdFx0XHRcdFx0XHRsYXN0X3Bvc3QgPSBfdGhpcztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhjLCBfZmllbGQuYXV0aG9yLnVzZXJfbmFtZSwgX2ZpZWxkKTtcblxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBjID09PSAnbnVtYmVyJyAmJiAhTnVtYmVyLmlzTmFOKGMpKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRsZXQgaXNfbG91emh1Ymlhb3NoaSA9IChfZmllbGQuYXV0aG9yLnVzZXJfbmFtZSA9PSBQYWdlRGF0YS50aHJlYWQuYXV0aG9yKTtcblxuXHRcdFx0XHRcdFx0XHRpZiAoaXNfbG91emh1Ymlhb3NoaSlcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdF90aGlzLmFkZENsYXNzKCdfbG91emh1Ymlhb3NoaV9wb3N0Jyk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IF9hID0gJChgPGR0PjwvZHQ+YClcblx0XHRcdFx0XHRcdFx0XHRcdC5odG1sKGA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+IyR7Y30gYCArICQoJy5wX2F1dGhvciAucF9hdXRob3JfbmFtZScsIF90aGlzKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuaHRtbCgpICsgJzwvYT4nKVxuXHRcdFx0XHRcdFx0XHRcdDtcblxuXHRcdFx0XHRcdFx0XHRcdF9hLmF0dHIoJ3RpdGxlJywgX2EudGV4dCgpKTtcblxuXHRcdFx0XHRcdFx0XHRcdGlmIChpc19sb3V6aHViaWFvc2hpKVxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdF9hLmFkZENsYXNzKCdfbG91emh1Ymlhb3NoaV90b2MnKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAoX2ZpZWxkLmNvbnRlbnQuY29tbWVudF9udW0pXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0X2EuZmluZCgnYTplcSgwKScpLmFwcGVuZCgnPGkgY2xhc3M9XCJpY29uLXJlcGx5XCIvPicpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdF9hLmZpbmQoJ2E6ZXEoMCknKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKVxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdCQod2luZG93KS50cmlnZ2VySGFuZGxlcignc2Nyb2xsLmxvYWQnKTtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IGZuID0gZnVuY3Rpb24gKClcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JCh3aW5kb3cpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnNjcm9sbFRvKF90aGlzLCAtODApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDtcblx0XHRcdFx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZm4sIDIwMCk7XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdFx0XHRfYS5hcHBlbmRUbyhfdG9jKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coMjIyLCBmbG9vciwgYywgbGFzdF9wb3N0KTtcblxuXHRcdFx0XHRcdFx0XHRpZiAoYyAhPSBmbG9vcilcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjICE9IGZsb29yICsgMSlcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgYSA9IFtdO1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IGZsb29yICsgMTsgaSA8IGM7IGkrKylcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YS5wdXNoKGkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoYS5sZW5ndGgpXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhc3RfcG9zdC5maW5kKCcuZF9wb3N0X2NvbnRlbnRfbWFpbicpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmFwcGVuZChgPGRpdiBjbGFzcz1cImZsb29yLWNoZWNrLW1pc3NcIj7oq4vms6jmhI/vvJoke2FbMF19JHthLmxlbmd0aCA+IDFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gJyB+ICcgKyBhLnNsaWNlKC0xKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ30g5qiTIOWPr+iDveW3suiiq+WQnuaWh+aIluWIqumZpDwvZGl2PmApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGZsb29yID0gYztcblx0XHRcdFx0XHRcdFx0XHRsYXN0X3Bvc3QgPSBfdGhpcztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGMsIGZsb29yKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0X3RoaXMuZGF0YSgnZmllbGQtZGF0YScsIF9maWVsZCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuZmlsdGVyKCc6bm90KFtkYXRhLWZsb29yLWNoZWNrXSknKVxuXHRcdFx0XHRcdC5lYWNoKGZ1bmN0aW9uICgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGV0IF90aGlzID0gJCh0aGlzKTtcblx0XHRcdFx0XHRcdGxldCBfcG9zdCA9IF90aGlzO1xuXG5cdFx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0XHRfdGhpcy5hdHRyKCdkYXRhLWZsb29yLWNoZWNrJywgdHJ1ZSk7XG5cblx0XHRcdFx0XHRcdGxldCBmbG9vcl9lbGVtID0gX3RoaXMuZmluZCgnLnBvc3QtdGFpbC13cmFwID4gLnRhaWwtaW5mbzplcSgtMiknKTtcblxuXHRcdFx0XHRcdFx0dHJ5XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGlmIChfcG9zdC5pcygnOm5vdChbZGF0YS1sb2FkZWRdKScpKVxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdFx0XHRcdF9wb3N0LmF0dHIoJ2RhdGEtbG9hZGVkJywgdHJ1ZSk7XG5cblx0XHRcdFx0XHRcdFx0XHQkKCcuZF9wb3N0X2NvbnRlbnRfbWFpbicsIF9wb3N0KS5wcmVwZW5kKCQoJzxhLz4nKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnRleHQoJyMnICsgX3Bvc3QuZGF0YSgnZmllbGQnKS5jb250ZW50LnBvc3Rfbm8pXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignaHJlZicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdodHRwOi8vdGllYmEuYmFpZHUuY29tL3AvJyArIFBhZ2VEYXRhLnRocmVhZC50aHJlYWRfaWQgKyAnP3BpZD0nICsgX3Bvc3QuZGF0YShcblx0XHRcdFx0XHRcdFx0XHRcdFx0J2ZpZWxkJykuY29udGVudC5wb3N0X2lkICsgJyMnICsgX3Bvc3QuZGF0YSgnZmllbGQnKS5jb250ZW50LnBvc3RfaWRcblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdzdHlsZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdmbG9hdDogcmlnaHQ7IHotaW5kZXg6IDUwMDsgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogMHB4OyB0b3A6IDBweDsgcGFkZGluZzogMXB4IDVweDsnXG5cdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHQvKlxuXHRcdFx0XHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudClcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IHRleHQgPSBfcG9zdC5maW5kKCcuZF9wb3N0X2NvbnRlbnQnKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0cnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHRbMF0uc2VsZWN0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ0NvcHknKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXRjaCAoZSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0cnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEdNQXBpLkdNX3NldENsaXBib2FyZCh0ZXh0LnRleHQoKS5yZXBsYWNlKC9cXHJcXG58XFxyKD8hXFxuKXxcXG4vZywgXCI8YnIvPlxcblwiKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2F0Y2ggKGUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0X3VmX2RvbmUoZXZlbnQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdCovXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignb25jbGljaycsIGZ1bmN0aW9uICgpXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxldCBpZCA9IF9wb3N0LmZpbmQoJy5kX3Bvc3RfY29udGVudCcpLmF0dHIoJ2lkJyk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgZXZlbnQucHJldmVudERlZmF1bHQoKWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YHZhciBjb3B5QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcke2lkfScpYCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgdHJ5e2NvcHlBcmVhLnNlbGVjdCgpO31jYXRjaChlKXtjb25zb2xlLmVycm9yKGUpfWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YHRyeXt3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7fWNhdGNoKGUpe31gLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGB0cnl7dmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtyYW5nZS5zZWxlY3ROb2RlKGNvcHlBcmVhKTt3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuYWRkUmFuZ2UocmFuZ2UpfWNhdGNoKGUpe2NvbnNvbGUuZXJyb3IoZSl9YCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgdHJ5e2RvY3VtZW50LmV4ZWNDb21tYW5kKCdDb3B5Jyl9Y2F0Y2goZSl7Y29uc29sZS5lcnJvcihlKX1gLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGByZXR1cm4gZmFsc2VgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF0uam9pbignOycpXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ3RpdGxlJywgJ+m7nuaTiuWPr+ikh+ijveiyvOWtkCcpXG5cdFx0XHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0XHRcdGZsb29yX2VsZW0ud3JhcElubmVyKCQoJzxhLz4nKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnaHR0cDovL3RpZWJhLmJhaWR1LmNvbS9wLycgKyBQYWdlRGF0YS50aHJlYWQudGhyZWFkX2lkICsgJz9waWQ9JyArIF9wb3N0LmRhdGEoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdmaWVsZCcpLmNvbnRlbnQucG9zdF9pZCArICcjJyArIF9wb3N0LmRhdGEoJ2ZpZWxkJykuY29udGVudC5wb3N0X2lkXG5cdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgX3VmX2RvbmUpKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjYXRjaCAoZSlcblx0XHRcdFx0XHRcdHt9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0O1xuXG5cdFx0XHRcdCQoJ2ltZy5CREVfSW1hZ2UnLCBwX3Bvc3RsaXN0X3Bvc3QpLmVhY2goZnVuY3Rpb24gKClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxpYlNpdGVCYWlkdVRpZWJhLmJkZV9pbWFnZSh0aGlzKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0JCh3aW5kb3cpLnRyaWdnZXJIYW5kbGVyKCdzY3JvbGwubG9hZCcpO1xuXHRcdFx0fSkpXG5cdFx0XHQub24oJ2xvYWQubGlzdCcsIHRocm90dGxlKDEwMDAsIGZ1bmN0aW9uICgpXG5cdFx0XHR7XG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiDomZXnkIbosrzlrZDliJfooahcblx0XHRcdFx0ICovXG5cdFx0XHRcdGxldCBscyA9ICQoJy5qX3RocmVhZF9saXN0IC50aHJlYWRsaXN0X3RpdGxlLCAuaWhvbWVfc2VjdGlvbiAubmV3X2xpc3QgLnRocmVhZF9uYW1lJykuZWFjaChmdW5jdGlvbiAoKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGV0IF90aGlzID0gJCh0aGlzKTtcblxuXHRcdFx0XHRcdGxldCBfdCA9IF90aGlzLmZpbmQoJ2Eual90aF90aXQsIGEudGl0bGUnKTtcblxuXHRcdFx0XHRcdGlmIChfdC5sZW5ndGggJiYgIV90aGlzLmZpbmQoJy5zZWVfbHonKS5sZW5ndGgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGV0IHVybCA9IG5ldyBVUkwoX3QucHJvcCgnaHJlZicpKTtcblxuXHRcdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdFx0dXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoJ3NlZV9seicsIDEpO1xuXG5cdFx0XHRcdFx0XHQkKCc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cInNlZV9seiBidG4tc3ViIGJ0bi1zbWFsbFwiPuWPqueci+alvOS4uzwvYT4nKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignaHJlZicsIHVybC50b1N0cmluZygpKVxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kVG8oJCgnPHNwYW4vPicpXG5cdFx0XHRcdFx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRcdFx0XHRcdFx0XHRcdCd2ZXJ0aWNhbC1hbGlnbic6ICdpbmhlcml0Jyxcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdC5hcHBlbmRUbyhfdGhpcylcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly9jb25zb2xlLmxvZygnbG9hZC5saXN0JywgbHMpO1xuXG5cdFx0XHRcdGxhenlsb2FkKF91cmxfb2JqKTtcblx0XHRcdH0pKVxuXHRcdFx0Lm9uKCdrZXlkb3duLnBhZ2UnLCByZXF1aXJlKCdyb290L2xpYi9qcXVlcnkvZXZlbnQvaG90a2V5JykucGFja0V2ZW50KGZ1bmN0aW9uIChldmVudClcblx0XHRcdHtcblx0XHRcdFx0Y29uc3Qga2V5Y29kZXMgPSByZXF1aXJlKCdrZXljb2RlcycpO1xuXG5cdFx0XHRcdHN3aXRjaCAoZXZlbnQud2hpY2gpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjYXNlIGtleWNvZGVzKCdwYWdldXAnKTpcblx0XHRcdFx0XHRjYXNlIGtleWNvZGVzKCdsZWZ0Jyk6XG5cblx0XHRcdFx0XHRcdHZhciBfYSA9ICQoJy5wYWdpbmF0aW9uLWRlZmF1bHQgYS5wcmV2LCAucGFnaW5hdGlvbi1kZWZhdWx0IGEucHJlJyk7XG5cblx0XHRcdFx0XHRcdGlmIChfYS5sZW5ndGgpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdF91Zl9kb25lKGV2ZW50KTtcblx0XHRcdFx0XHRcdFx0X2FbMF0uY2xpY2soKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXZlbnQsIF9hKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBrZXljb2RlcygncGFnZWRvd24nKTpcblx0XHRcdFx0XHRjYXNlIGtleWNvZGVzKCdyaWdodCcpOlxuXG5cdFx0XHRcdFx0XHR2YXIgX2EgPSAkKCcucGFnaW5hdGlvbi1kZWZhdWx0IGEubmV4dCcpO1xuXG5cdFx0XHRcdFx0XHRpZiAoX2EubGVuZ3RoKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRfdWZfZG9uZShldmVudCk7XG5cdFx0XHRcdFx0XHRcdF9hWzBdLmNsaWNrKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGV2ZW50LCBfYSk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSlcblx0XHRcdC5vbignbG9hZC5zY3JvbGwnLCBmdW5jdGlvbiAoKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpIDwgMzAwKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdCQod2luZG93KS5zY3JvbGxUbygnI3BiX2NvbnRlbnQsIC5oZWFkX2NvbnRlbnQgLmNhcmRfdGl0bGUsICNjb250ZW50LCAjdGFiX2ZvcnVtbmFtZScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0LnNjcm9sbFRvKCcuaGVhZF9jb250ZW50Jylcblx0XHRcdC5vbmUoJ3Njcm9sbCcsIGZ1bmN0aW9uIChldmVudClcblx0XHRcdHtcblx0XHRcdFx0Y29uc29sZS5sb2coZXZlbnQpO1xuXHRcdFx0fSlcblx0XHRcdC5vbignc2Nyb2xsLnJlcGx5JywgZnVuY3Rpb24gKGV2ZW50KVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoZXZlbnQubmFtZXNwYWNlID09ICdyZXBseScpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKGV2ZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdHtcblxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0Lm9uKCdzY3JvbGwubG9hZCcsIHRocm90dGxlKDEwMDAsIGZ1bmN0aW9uIChldmVudClcblx0XHRcdHtcblx0XHRcdFx0bGV0IG4gPSAwO1xuXG5cdFx0XHRcdCQoJy5jb3JlX3JlcGx5X3dyYXBwZXI6bm90KFtkYXRhLWxvYWRlZF0pJylcblx0XHRcdFx0XHQuZWFjaChmdW5jdGlvbiAoKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxldCBjb3JlX3JlcGx5X3dyYXBwZXIgPSAkKHRoaXMpO1xuXHRcdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdFx0Y29yZV9yZXBseV93cmFwcGVyLmF0dHIoJ2RhdGEtbG9hZGVkJywgdHJ1ZSk7XG5cblx0XHRcdFx0XHRcdGxldCBsb2FkaW5nX3JlcGx5ID0gY29yZV9yZXBseV93cmFwcGVyLmZpbmQoJy5sb2FkaW5nX3JlcGx5Jyk7XG5cblx0XHRcdFx0XHRcdGxldCBjb3JlX3JlcGx5ID0gY29yZV9yZXBseV93cmFwcGVyLnBhcmVudHMoJy5jb3JlX3JlcGx5OmVxKDApJykuZXEoMCk7XG5cblx0XHRcdFx0XHRcdGNvcmVfcmVwbHlfaGFuZGxlcihjb3JlX3JlcGx5KTtcblxuXHRcdFx0XHRcdFx0bGV0IHQgPSBOdW1iZXIoY29yZV9yZXBseV93cmFwcGVyLnByb3AoJ2RhdGEtbG9hZGVkLXRyeScpIHx8IDApO1xuXG5cdFx0XHRcdFx0XHRpZiAodCA8IDUgJiYgbG9hZGluZ19yZXBseS5sZW5ndGgpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdG4rKztcblxuXHRcdFx0XHRcdFx0XHRjb3JlX3JlcGx5X3dyYXBwZXIucHJvcCgnZGF0YS1sb2FkZWQtdHJ5JywgdCArIDEpO1xuXG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKClcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGxldCBldmVudCA9ICQuRXZlbnQoJ3Njcm9sbC5yZXBseScsIHtcblx0XHRcdFx0XHRcdFx0XHRcdHBhZ2VZOiBjb3JlX3JlcGx5X3dyYXBwZXIub2Zmc2V0KCkudG9wLFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRcdFx0JCh3aW5kb3cpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYWRkKCdodG1sLCBib2R5Jylcblx0XHRcdFx0XHRcdFx0XHRcdC50cmlnZ2VyKGV2ZW50KVxuXHRcdFx0XHRcdFx0XHRcdDtcblxuXHRcdFx0XHRcdFx0XHRcdHRyeVxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBldmVudCA9IHVuc2FmZVdpbmRvdy4kLkV2ZW50KCdzY3JvbGwucmVwbHknLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhZ2VZOiBjb3JlX3JlcGx5X3dyYXBwZXIub2Zmc2V0KCkudG9wLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHRcdFx0XHRcdHVuc2FmZVdpbmRvdy4kKHVuc2FmZVdpbmRvdylcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmFkZCgnaHRtbCwgYm9keScpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC50cmlnZ2VyKGV2ZW50KVxuXHRcdFx0XHRcdFx0XHRcdFx0O1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRjYXRjaCAoZSlcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHQvL2NvbnNvbGUuZXJyb3IoZS50b1N0cmluZygpKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHR0cnlcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgZXZlbnQgPSAkLkV2ZW50KCdzY3JvbGwucmVwbHknLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhZ2VZOiBjb3JlX3JlcGx5X3dyYXBwZXIub2Zmc2V0KCkudG9wLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdCQodW5zYWZlV2luZG93KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuYWRkKCdodG1sLCBib2R5Jylcblx0XHRcdFx0XHRcdFx0XHRcdFx0LnRyaWdnZXIoZXZlbnQpXG5cdFx0XHRcdFx0XHRcdFx0XHQ7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGNhdGNoIChlKVxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vY29uc29sZS5lcnJvcihlLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKClcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoY29yZV9yZXBseV93cmFwcGVyLmZpbmQoJy5sb2FkaW5nX3JlcGx5JykubGVuZ3RoKVxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb3JlX3JlcGx5X3dyYXBwZXIucmVtb3ZlQXR0cignZGF0YS1sb2FkZWQnKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9LCAyMDApO1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29yZV9yZXBseV9oYW5kbGVyKGNvcmVfcmVwbHkpO1xuXHRcdFx0XHRcdFx0XHR9LCAxMDAwICsgbiAqIDEwMCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0O1xuXHRcdFx0fSkpXG5cdFx0XHQudHJpZ2dlckhhbmRsZXIoJ2xvYWQnKVxuXHRcdDtcblxuXHRcdCQoJ2JvZHknKS5vbignRE9NTm9kZUluc2VydGVkJywgJyNmcnNfbGlzdF9wYWdlciwgI3RocmVhZF9saXN0JywgZGVib3VuY2UoNTAwLCBmdW5jdGlvbiAoKVxuXHRcdHtcblx0XHRcdCQod2luZG93KS50cmlnZ2VySGFuZGxlcignbG9hZC5saXN0Jyk7XG5cdFx0fSkpO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKVxuXHRcdHtcblx0XHRcdCQod2luZG93KS50cmlnZ2VySGFuZGxlcignbG9hZC5saXN0Jyk7XG5cdFx0fSwgNTAwKTtcblxuXHRcdCQoJyNmcnNfbGlzdF9wYWdlcicpXG5cdFx0XHQub24oJ0RPTU5vZGVJbnNlcnRlZC5wYWdlJywgZGVib3VuY2UoMjAwLCBmdW5jdGlvbiAoKVxuXHRcdFx0e1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKGV2ZW50LnR5cGUsIHRoaXMsIGV2ZW50LnRhcmdldCk7XG5cdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0JCh3aW5kb3cpLnNjcm9sbFRvKCcuaGVhZF9jb250ZW50IC5jYXJkX3RpdGxlLCAjY29udGVudCwgI3RhYl9mb3J1bW5hbWUnKTtcblx0XHRcdH0pKVxuXHRcdDtcblxuLy9cdFx0JCgnYm9keScpXG4vL1x0XHRcdC5vbignRE9NTm9kZUluc2VydGVkJywgJy5wYl9mb290ZXIgLmxfdGhyZWFkX2luZm8nLCBkZWJvdW5jZSgyMDAsIGZ1bmN0aW9uIChldmVudClcbi8vXHRcdFx0e1xuLy9cdFx0XHRcdGNvbnNvbGUubG9nKCdET01Ob2RlSW5zZXJ0ZWQnLCB0aGlzLCBldmVudC50YXJnZXQpO1xuLy9cdFx0XHRcdCQod2luZG93KS50cmlnZ2VySGFuZGxlcignbG9hZCcpO1xuLy9cdFx0XHR9KSlcbi8vXHRcdDtcblxuXHRcdCQoJyNqX2NvcmVfdGl0bGVfd3JhcCcpXG5cdFx0XHQub24oJ0RPTU5vZGVJbnNlcnRlZCcsICcuY29yZV90aXRsZV90eHQnLCB0aHJvdHRsZSgyMDAsIGZ1bmN0aW9uIChldmVudClcblx0XHRcdHtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhldmVudC50eXBlLCB0aGlzLCBldmVudC50YXJnZXQpO1xuXHRcdFx0XHQkKHdpbmRvdykudHJpZ2dlckhhbmRsZXIoJ2xvYWQnKTtcblx0XHRcdH0pKVxuXHRcdDtcblx0fSxcblxuXHRhZGJsb2NrKF91cmxfb2JqID0gZ2xvYmFsLl91cmxfb2JqKVxuXHR7XG5cblx0fSxcblxuXHRjbGVhcmx5KF91cmxfb2JqID0gZ2xvYmFsLl91cmxfb2JqLCBfZG9tX2xpc3QgPSBudWxsKVxuXHR7XG5cdFx0bGV0IF9kb20gPSAkKF9kb21fbGlzdCk7XG5cblx0XHRfZG9tID0gX2RvbVxuXHRcdFx0LmFkZCgkKCcjY29udGFpbmVyJykucGFyZW50c1VudGlsKCdib2R5JykuYWRkQmFjaygpLnNpYmxpbmdzKCkpXG5cdFx0XHQuYWRkKCQoJyNmb290ZXInKS5uZXh0QWxsKCkpXG5cdFx0XHQuYWRkKFtcblx0XHRcdFx0Jy5zaGFyZV9idG5fd3JhcHBlciwgI2NlbGVicml0eSwgI215X3RpZWJhX21vZCwgLnJpZ2h0X3NlY3Rpb24sIC5zZWUtaW1hZ2UtYnRuLCAjc2lnbl9tb2QnLFxuXHRcdFx0XHQnI2pfaGVhZF9mb2N1c19idG4sIC5kZWVwcmVhZC1idG4sICNpY29uLXJlcGx5LCAucF9hdXRob3JfZmFjZS5yb3VuZC1hdmF0YXIsICN0Yl9yaWNoX3Bvc3Rlcl9jb250YWluZXInLFxuXHRcdFx0XHQnLmNvcmVfcmVwbHlfd3JhcHBlciAual91c2VyX2NhcmQnLFxuXHRcdFx0XHQnYm9keSA6aGlkZGVuLCBpZnJhbWUsIHNjcmlwdCcsXG5cdFx0XHRcdCcjZm9vdGVyLCAjcGItZm9vdGVyLWhlYWRlciwgI3F1aWNrX3JlcGx5Jyxcblx0XHRcdFx0Jy5qX3VzZXJfc2lnbicsXG5cblx0XHRcdFx0Jy5wX2F1dGhvciAuZF9pY29ucywgLnNhdmVfZmFjZV9jYXJkLCAuZF9uYW1lX2ljb24sIC5zYXZlX2ZhY2VfYmcnLFxuXG5cdFx0XHRcdCcuaWNvbl90YndvcmxkLCAuQkRFX1NtaWxleScsXG5cdFx0XHRcdCcubG91emh1Ymlhb3NoaV93cmFwLCAuc2F2ZV9mYWNlX2NhcmQnLFxuXHRcdFx0XS5qb2luKCkpXG5cdFx0O1xuXG5cdFx0JCgnLmRfYmFkZ2VfbHYnKS5yZW1vdmVBdHRyKCdjbGFzcycpO1xuXG5cdFx0Ly9fZG9tLnJlbW92ZSgpO1xuXG5cdFx0cmV0dXJuIF9kb207XG5cdH0sXG59O1xuXG5leHBvcnQgPSBvIGFzIElEZW1vO1xuXG5hc3luYyBmdW5jdGlvbiBzaWduKF91cmxfb2JqID0gZ2xvYmFsLl91cmxfb2JqLCBib29sPzogYm9vbGVhbilcbntcblx0Y29uc3QgUHJvbWlzZSA9IHJlcXVpcmUoJ2JsdWViaXJkJyk7XG5cblx0YXdhaXQgUHJvbWlzZS5kZWxheSgxMDAwKTtcblxuXHRsZXQgYiA9ICQoJyNqX2hlYWRfZm9jdXNfYnRuJyk7XG5cdGxldCBhID0gJCgnI3NpZ25fbW9kICNzaWduc3Rhcl93cmFwcGVyIGEual9jYW5zaWduJyk7XG5cblx0aWYgKGEubGVuZ3RoKVxuXHR7XG5cdFx0aWYgKGIuaXMoJy5jYW5jZWxfZm9jdXMnKSlcblx0XHR7XG5cdFx0XHRhWzBdLmNsaWNrKCk7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmRlbGF5KDUwMCk7XG5cdFx0XHRhWzBdLmNsaWNrKCk7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmRlbGF5KDUwMCk7XG5cdFx0XHQkKCcual9zdWNjX2luZm8uc2lnbl9zdWNjMScpLmhpZGUoKTtcblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKCFib29sKVxuXHRcdHtcblx0XHRcdGIub25lKCdjbGljay5zaWduJywgZnVuY3Rpb24gKClcblx0XHRcdHtcblx0XHRcdFx0c2lnbihfdXJsX29iaiwgdHJ1ZSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxufVxuXG5mdW5jdGlvbiBsYXp5bG9hZChfdXJsX29iailcbntcblx0Y29uc3QgbGliU2l0ZUJhaWR1VGllYmEgPSByZXF1aXJlKCdyb290L2xpYi9zaXRlL2JhaWR1L3RpZWJhJyk7XG5cblx0JCgnaW1nLkJERV9JbWFnZVtkYXRhLW9yaWdpbmFsXSwgaW1nLnRocmVhZGxpc3RfcGljJylcblx0XHQubm90KCdbZGF0YS1kb25lXScpXG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdC5hdHRyKCdkYXRhLWRvbmUnLCB0cnVlKVxuXHRcdC5hdHRyKCdzcmMnLCBmdW5jdGlvbiAoaSwgb2xkKVxuXHRcdHtcblx0XHRcdGxldCBfdGhpcyA9ICQodGhpcyk7XG5cdFx0XHRsZXQgc3JjID0gX3RoaXMuYXR0cignZGF0YS1vcmlnaW5hbCcpO1xuXG5cdFx0XHRsZXQgX2ltZyA9IGxpYlNpdGVCYWlkdVRpZWJhLmJkZV9pbWFnZShfdGhpcy5jbG9uZSgpKTtcblxuXHRcdFx0aWYgKF9pbWcpXG5cdFx0XHR7XG5cdFx0XHRcdF90aGlzLmF0dHIoJ2JwaWMnLCBfaW1nLmRhdGEoJ2Z1bGxzcmMnKSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvbGQgIT0gc3JjKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gc3JjO1xuXHRcdFx0fVxuXHRcdH0pXG5cdDtcbn1cblxuZnVuY3Rpb24gY29yZV9yZXBseV9oYW5kbGVyKF90aGlzKVxue1xuXHRsZXQgY2hrID0gX3RoaXMuZmluZCgnLmx6bF9saW5rX2ZvbGQ6dmlzaWJsZSwgLmxvYWRpbmdfcmVwbHknKTtcblx0bGV0IGVsZW0gPSBfdGhpcy5maW5kKCcuY29yZV9yZXBseV93cmFwcGVyJyk7XG5cblx0bGV0IG1pbl9oZWlnaHQgPSBlbGVtLmNzcygnbWluLWhlaWdodCcpLnJlcGxhY2UoL3B4JC8sICcnKTtcblx0bGV0IGhlaWdodCA9IGVsZW0uaGVpZ2h0KCk7XG5cblx0MCAmJiBjb25zb2xlLmxvZyhlbGVtLCB7XG5cdFx0bWluX2hlaWdodCxcblx0XHRoZWlnaHQsXG5cdFx0Y2hrOiBjaGsubGVuZ3RoLFxuXHR9KTtcblxuXHRpZiAobWluX2hlaWdodCA8PSA1MCB8fCBoZWlnaHQgPD0gNTApXG5cdHtcblx0XHQvLyDomZXnkIbmjbLli5XmmYLmnIPlm6DngrrnlZnoqIDljYDnmoTpq5jluqbororli5XlsI7oh7TlrprkvY0g5Lul5Y+KIOeci+WIsOeZveiJsuWFp+WuueeahOWVj+mhjFxuXHRcdGVsZW0uY3NzKCdtaW4taGVpZ2h0JywgJ2F1dG8nKTtcblx0fVxuXG5cdGlmIChjaGsubGVuZ3RoKVxuXHR7XG5cdFx0Ly9lbGVtLnNob3coKTtcblx0fVxuXHRlbHNlXG5cdHtcblx0XHQvL2VsZW0uaGlkZSgpO1xuXHR9XG5cblx0Ly9jb25zb2xlLmxvZyhlbGVtLCBjaGspO1xufVxuIl19