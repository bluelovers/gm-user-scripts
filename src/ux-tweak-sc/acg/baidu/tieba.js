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
            `.topic_list_box { max-height: 388px; height: auto; }`,
            `.topic_list_box .topic_list_hot { display: none; }`,
            `.topic_list_box:hover .topic_list_hot { display: block; }`,
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
        $('body').on('DOMNodeInserted', '#thread_list .j_thread_list .media_box', debounce(500, async function (event) {
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
            .on('DOMNodeInserted DOMSubtreeModified', '#creative-platform-deepread-wrap', debounce(1000, async function (event) {
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
        $('body')
            .one('DOMNodeInserted DOMSubtreeModified', '.tbui_aside_float_bar', debounce(1000, async function (event) {
            let tbui_aside_float_bar = $('.tbui_aside_float_bar');
            let tbui_fbar_refresh = $('.tbui_fbar_refresh', tbui_aside_float_bar);
            if (!tbui_fbar_refresh.length) {
                tbui_fbar_refresh = $(`<li class="tbui_aside_fbar_button tbui_fbar_refresh"><a href="javascript:void(0)"></a></li>`)
                    .insertAfter(tbui_aside_float_bar.find('.tbui_fbar_post'));
                tbui_fbar_refresh.on('click', function () {
                    window.location.reload();
                });
            }
            if ($('#pb_content, #content_wrap').length) {
                $('.tbui_fbar_top, .tbui_fbar_top a', tbui_aside_float_bar)
                    .off('click')
                    .on('click', function (event) {
                    _uf_done(event);
                    let _t = $('#pb_content');
                    let n = 0;
                    if (_t.length) {
                        n = $('#j_core_title_wrap')
                            .outerHeight();
                        $(window)
                            .scrollTo(_t, 0 - n);
                    }
                    else {
                        n = $('#head .search_main')
                            .outerHeight();
                        $(window)
                            .scrollTo('#content_wrap', 0 - n);
                    }
                });
            }
        }));
        $(window)
            .on('load.sign', debounce(1000, async function () {
            sign(_url_obj);
            $(window).triggerHandler('scroll.load');
        }))
            .on('load.menu', throttle(1000, async function (event) {
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
            .on('load.post', throttle(500, async function () {
            PageData = updatePageData(PageData);
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
            new Promise(function () {
                $('img.BDE_Image', p_postlist_post).each(async function () {
                    libSiteBaiduTieba.bde_image(this);
                });
                $('.right_section div:has(> .topic_list_box)')
                    .css('height', 'auto');
                $(window).triggerHandler('scroll.load');
            });
        }))
            .on('load.list', throttle(1000, async function () {
            let in_tieba_list = $('.head_content .card_title_fname').length;
            let _toc_reset = true;
            let ls = $('.j_thread_list .threadlist_title, .ihome_section .new_list .thread_name').each(function () {
                let _this = $(this);
                let _t = _this.find('a.j_th_tit, a.title');
                if (_t.length && !_this.find('.see_lz').length) {
                    if (0 && !_toc_inited) {
                        _toc_inited = true;
                        _toc_area
                            .insertBefore('#content');
                    }
                    if (0 && _toc_reset) {
                        _toc_reset = false;
                        _toc.empty();
                    }
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
                    if (0) {
                        let _a = $(`<dt></dt>`)
                            .html(`<a href="javascript:void(0)">` + $('.j_th_tit', _this)
                            .text() + '</a>');
                        _a.attr('title', _a.text());
                        _a.appendTo(_toc);
                    }
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
            .on('load.scroll', async function () {
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
            .on('scroll.load', throttle(1000, async function (event) {
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
                    setTimeout(async function () {
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
            $(window)
                .triggerHandler('load.list');
        }));
        setTimeout(function () {
            $(window)
                .triggerHandler('load.list');
        }, 500);
        $('#frs_list_pager')
            .on('DOMNodeInserted.page', debounce(200, async function () {
            $(window).scrollTo('.head_content .card_title, #content, #tab_forumname');
        }));
        $('#j_core_title_wrap')
            .on('DOMNodeInserted', '.core_title_txt', throttle(200, async function (event) {
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
function updatePageData(PageData) {
    return PageData = $.extend({}, {
        thread: {},
    }, unsafeWindow.PageData);
}
module.exports = o;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGllYmEuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInNyYy91eC10d2Vhay1zYy9hY2cvYmFpZHUvdGllYmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQWVBLElBQUksQ0FBQyxHQUFVO0lBRWQsUUFBUSxFQUFFO1FBQ1QsT0FBTyxFQUFFO1lBQ1IsMkJBQTJCO1NBQzNCO1FBQ0QsS0FBSyxFQUFFO1lBQ04saUNBQWlDO1lBQ2pDLG1DQUFtQztZQUNuQywrQkFBK0I7WUFDL0Isc0NBQXNDO1lBQ3RDLDJCQUEyQjtTQUMzQjtRQUNELE9BQU8sRUFBRSxFQUFFO1FBRVgsS0FBSyxFQUFFO1lBQ04saUJBQWlCO1NBQ2pCO0tBQ0Q7SUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRO1FBRTlCLElBQUksR0FBRyxDQUFDO1FBRVIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUN0RjtZQUNDLE9BQU8sSUFBSSxDQUFDO1NBQ1o7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUTtRQUVwQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDNUQsTUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUNoRSxNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQy9ELE1BQU0sZUFBZSxHQUFHLDJDQUFhLFVBQVUsRUFBQyxDQUFDO1FBRWpELENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFO1lBRXpCLG1CQUFtQixDQUFDO2dCQUNuQix3RUFBd0U7YUFDeEUsQ0FBQztpQkFD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QUFDO0lBRTdDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMzRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFFM0IsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO1FBQ3RCLFVBQVU7UUFDVixNQUFNO1FBQ04sR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNO0tBQ2YsQ0FBQyxDQUFDO0lBRUgsSUFBSSxVQUFVLElBQUksRUFBRSxJQUFJLE1BQU0sSUFBSSxFQUFFLEVBQ3BDO1FBRUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDL0I7SUFFRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQ2Q7S0FFQztTQUVEO0tBRUM7QUFHRixDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsUUFBUztJQUVoQyxPQUFPLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtRQUM5QixNQUFNLEVBQUUsRUFBRTtLQUVWLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFwR0QsaUJBQVMsQ0FBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxNy84LzMvMDAzLlxuICovXG5cbmltcG9ydCB7IElEZW1vLCBJR2xvYmFsLCBJR3JlYXNlbW9ua2V5LCBJV2luZG93LCBJSlF1ZXJ5U3RhdGljLCBJVXJsT2JqZWN0MiB9IGZyb20gJ3Jvb3QvbGliL2NvcmUvZGVtbyc7XG5cbmRlY2xhcmUgY29uc3QgZ2xvYmFsOiBJR2xvYmFsO1xuZGVjbGFyZSBjb25zdCBncmVhc2Vtb25rZXk6IElHcmVhc2Vtb25rZXk7XG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogSVdpbmRvdztcbmRlY2xhcmUgY29uc3QgdW5zYWZlV2luZG93OiBJV2luZG93O1xuZGVjbGFyZSBjb25zdCAkOiBJSlF1ZXJ5U3RhdGljO1xuZGVjbGFyZSBjb25zdCBqUXVlcnk6IElKUXVlcnlTdGF0aWM7XG5cbmltcG9ydCB7IElCYWlkdVRpZWJhUGFnZURhdGEsIElCYWlkdVRpZWJhUG9zdEZpZWxkIH0gZnJvbSAncm9vdC9saWIvc2l0ZS9iYWlkdS90aWViYSc7XG5cbmxldCBvOiBJRGVtbyA9IHtcblxuXHRtZXRhZGF0YToge1xuXHRcdGluY2x1ZGU6IFtcblx0XHRcdCdodHRwKjovL3RpZWJhLmJhaWR1LmNvbS8qJyxcblx0XHRdLFxuXHRcdG1hdGNoOiBbXG5cdFx0XHQnKjovL3RpZWJhLmJhaWR1LmNvbS9pL2kvbXlfdGllKicsXG5cdFx0XHQnKjovL3RpZWJhLmJhaWR1LmNvbS9pL2kvbXlfcmVwbHkqJyxcblx0XHRcdCcqOi8vdGllYmEuYmFpZHUuY29tL2kvaS9hdG1lKicsXG5cdFx0XHQnKjovL3RpZWJhLmJhaWR1LmNvbS9pL2kvc3RvcmV0aHJlYWQqJyxcblx0XHRcdCcqOi8vdGllYmEuYmFpZHUuY29tL3BtYy8qJyxcblx0XHRdLFxuXHRcdGV4Y2x1ZGU6IFtdLFxuXG5cdFx0Z3JhbnQ6IFtcblx0XHRcdCdHTV9zZXRDbGlwYm9hcmQnLFxuXHRcdF0sXG5cdH0sXG5cblx0dGVzdChfdXJsX29iaiA9IGdsb2JhbC5fdXJsX29iailcblx0e1xuXHRcdGxldCByZXQ7XG5cblx0XHRpZiAocmV0ID0gcmVxdWlyZSgncm9vdC9saWIvZ3JlYXNlbW9ua2V5L21hdGNoJykuYXV0byhfdXJsX29iai5zb3VyY2UsIG1vZHVsZS5leHBvcnRzKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cblx0YXN5bmMgbWFpbihfdXJsX29iaiA9IGdsb2JhbC5fdXJsX29iailcblx0e1xuXHRcdGNvbnN0IEdNQXBpID0gcmVxdWlyZSgncm9vdC9saWIvZ3JlYXNlbW9ua2V5L2dtL2FwaScpLkdNQXBpO1xuXHRcdGNvbnN0IF91Zl9kb21fZmlsdGVyX2xpbmsgPSByZXF1aXJlKCdyb290L2xpYi9kb20vZmlsdGVyL2xpbmsnKTtcblx0XHRjb25zdCBsaWJTaXRlQmFpZHVUaWViYSA9IHJlcXVpcmUoJ3Jvb3QvbGliL3NpdGUvYmFpZHUvdGllYmEnKTtcblx0XHRjb25zdCBQcm9taXNlQmx1ZWJpcmQgPSBhd2FpdCBpbXBvcnQoJ2JsdWViaXJkJyk7XG5cblx0XHQkKHdpbmRvdykub24oJ2xvYWQubGluaycsIGZ1bmN0aW9uICgpXG5cdFx0e1xuXHRcdFx0X3VmX2RvbV9maWx0ZXJfbGluayhbXG5cdFx0XHRcdCcudV9pdGllYmEgYSwgLnVfbmV3cyBhLCAudV91c2VybmFtZSBhLCAuY29tX3VzZXJiYXIgYSwgI2pfdV91c2VybmFtZSBhJyxcblx0XHRcdF0pXG5cdFx0XHRcdC5hdHRyKCd0YXJnZXQnLCAnX2JsYW5rJylcblx0XHRcdDtcblxuXHRcdFx0JCgnLnVfaXRpZWJhIGEsIC51X25ld3MgYSwgLnVfdXNlcm5hbWUgYSwgLmNvbV91c2VyYmFyIGEsICNqX3VfdXNlcm5hbWUgYScpLmF0dHIoJ3RhcmdldCcsICdfYmxhbmsnKTtcblx0XHR9KS50cmlnZ2VySGFuZGxlcignbG9hZC5saW5rJyk7XG5cblx0XHQkKCdib2R5Jykub24oJ2hvdmVyJywgJyNqX3VfdXNlcm5hbWUsIC51X3VzZXJuYW1lLCAudV91c2VybmFtZSBsaSwgLnVfZGRsX2Nvbl90b3AnLCBmdW5jdGlvbiAoKVxuXHRcdHtcblx0XHRcdCQod2luZG93KS50cmlnZ2VySGFuZGxlcignbG9hZC5saW5rJyk7XG5cdFx0fSk7XG5cblx0XHRncmVhc2Vtb25rZXlcblx0XHRcdC5HTV9hZGRTdHlsZShbXG5cblx0XHRcdFx0YC5kX3Bvc3RfY29udGVudCB7IGxpbmUtaGVpZ2h0OiAxLjQ1ZW07IH1gLFxuXG5cdFx0XHRcdC8vYC5sX3Bvc3RfYnJpZ2h0LCAuc2tpbl9ub3JtYWwgLndyYXAxLCAucGJfY29udGVudCB7IGJhY2tncm91bmQ6ICNlNmQ3YmQ7IH1gLFxuXHRcdFx0XHRgLmRfcG9zdF9jb250ZW50X21haW4geyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfWAsXG5cdFx0XHRcdC8vYC5jb3JlX3RpdGxlX3dyYXBfYnJpZ2h0IHsgYmFja2dyb3VuZDogI2ZmZjk7IH1gLFxuXG5cdFx0XHRcdGAudGJ1aV9hc2lkZV9mbG9hdF9iYXIgeyBvcGFjaXR5OiAwLjU7IH0gXG5cdFx0XHRcdFx0LnRidWlfYXNpZGVfZmxvYXRfYmFyOmhvdmVyIHsgb3BhY2l0eTogMC44OyB9YCxcblxuXHRcdFx0XHRgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC5yaWdodF9zZWN0aW9uIHsgZGlzcGxheTogbm9uZTsgfVxuXHRcdFx0XHRcdC5sZWZ0X3NlY3Rpb24geyBmbG9hdDogbm9uZTsgbWFyZ2luOiBhdXRvOyB9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0LnNlYXJjaF9icmlnaHQgLnNlYXJjaF9pcHQsIC5sX2NvbnRhaW5lciwgLmNvbnRlbnQsIC5wYl9jb250ZW50LCAudGhyZWFkX3RoZW1lXzUsIC5wYl9mb290ZXIsIC5wYl9mb290ZXIgLnBfdGhyZWFkLCAudGJfcmljaF9wb3N0ZXJfY29udGFpbmVyLCAuc2VhcmNoX2JyaWdodCAuc2VhcmNoX2Zvcm0sIC5uYXZfbGlzdCB7IHdpZHRoOiBhdXRvOyB9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0fWAsXG5cblx0XHRcdFx0YEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC5jb3JlX3RpdGxlX3dyYXBfYnJpZ2h0IHsgd2lkdGg6IDEwMCU7IH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQuZF9wb3N0X2NvbnRlbnRfbWFpbiB7IHBhZGRpbmctbGVmdDogMHB4OyB9XG5cdFx0XHRcdFx0LmRfYXV0aG9yLCAuZF9hdXRob3JfYW5vbnltIHsgZGlzcGxheTogbm9uZTsgfVxuXHRcdFx0XHRcdC5wX2NvbnRlbnQgeyBwYWRkaW5nLXJpZ2h0OiAwcHg7IH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQuZF9wb3N0X2NvbnRlbnRfbWFpbiB7IGZsb2F0OiBub25lO21hcmdpbjogYXV0bzsgfVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdH1gLFxuXG5cdFx0XHRdKVxuXHRcdDtcblxuXHRcdGdyZWFzZW1vbmtleVxuXHRcdFx0LkdNX2FkZFN0eWxlKFtcblx0XHRcdFx0YCNjb21fdXNlcmJhciB7IHBvc2l0aW9uOiBmaXhlZDsgdG9wOiA1NXB4OyBiYWNrZ3JvdW5kOiAjZmZmOTsgfWAsXG5cdFx0XHRcdGAjY29tX3VzZXJiYXIgLnVfYmRob21lIHsgZGlzcGxheTogbm9uZTsgfWAsXG5cdFx0XHRcdGAuZmxvb3ItY2hlY2stbWlzcyB7IHBhZGRpbmc6IDEwcHg7YmFja2dyb3VuZC1jb2xvcjogIzQ1MTE1OTtib3JkZXItcmFkaXVzOiA1cHg7cGFkZGluZy1ib3R0b206IDZweDtjb2xvcjogI2ZmZjt0ZXh0LWFsaWduOiBjZW50ZXI7bWFyZ2luOiA1cHg7bWFyZ2luLWxlZnQ6IGF1dG87fWAsXG5cdFx0XHRcdGAuZmxvb3ItY2hlY2stbWlzczpob3ZlciB7IG9wYWNpdHk6IDAuOTsgfWAsXG5cblx0XHRcdFx0YC50aHJlYWRsaXN0X3RpdGxlIHtcblx0XHRcdFx0d29yZC13cmFwOiBicmVhay13b3JkO1xuXHRcdFx0XHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XG5cdFx0XHRcdHdoaXRlLXNwYWNlOiBub3JtYWw7XG5cdFx0XHRcdH1gLFxuXG5cdFx0XHRcdGAuc2VlX2x6IHsgXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAxZW07XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50OyBcblx0XHRcdFx0Zm9udC1zaXplOiA5cHQ7XG5cdFx0XHRcdHBhZGRpbmc6IDJweCA4cHggMXB4O1xuXHRcdFx0XHR0ZXh0LXNoYWRvdzogaW5pdGlhbDtcblx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcblx0XHRcdFx0fWAsXG5cblx0XHRcdFx0YC5pY29uLXJlcGx5IHtcblx0XHRcdFx0XHR3aWR0aDogMTZweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDEzcHg7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogdXJsKC8vdGIyLmJkc3RhdGljLmNvbS90Yi9zdGF0aWMtcGIvd2lkZ2V0L2ZvcnVtX3RpdGxlL2ltYWdlcy9pY29uX3JlcGx5X2Q4YTQ0YjkucG5nKSBuby1yZXBlYXQ7XG5cdFx0XHRcdH1gLFxuXG5cdFx0XHRcdGAuZGVlcHJlYWQtd3JhcCB7IGZvbnQtc2l6ZTogOXB0OyB9YCxcblxuXHRcdFx0XHRgLmpfdGhyZWFkX2xpc3QgLnRocmVhZGxpc3RfdGl0bGUgLnNlZV9seiB7IFxuXHRcdFx0XHRkaXNwbGF5OiBub25lOyBcblx0XHRcdFx0fWAsXG5cdFx0XHRcdGAual90aHJlYWRfbGlzdDpob3ZlciAudGhyZWFkbGlzdF90aXRsZSAuc2VlX2x6IHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9YCxcblxuXHRcdFx0XHRgLmxfcG9zdC5fbG91emh1Ymlhb3NoaV9wb3N0IHsgYm9yZGVyOiAxcHggc29saWQgIzJkNjRiMzsgfWAsXG5cblx0XHRcdFx0YC5fcG9zdC10b2MgeyBcblx0XHRcdFx0ZGlzcGxheTogbm9uZTsgXG5cdFx0XHRcdHBvc2l0aW9uOiBzdGlja3k7IFxuXHRcdFx0XHRtYXgtd2lkdGg6IDE1MHB4OyBcblx0XHRcdFx0dG9wOiA1NXB4OyBcblx0XHRcdFx0ZmxvYXQ6IGxlZnQ7IFxuXHRcdFx0XHQvL21hcmdpbi1sZWZ0OiAtMTUwcHg7XG5cdFx0XHRcdGxlZnQ6IDE1MHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDAuN2VtO1xuXHRcdFx0XHRvcGFjaXR5OiAwLjU7XG5cdFx0XHRcdG92ZXJmbG93LXg6IGhpZGRlbjtcblx0XHRcdFx0fWAsXG5cblx0XHRcdFx0YC5fcG9zdC10b2MgZHQgeyAgfWAsXG5cdFx0XHRcdGAuX3Bvc3QtdG9jIGR0IGEgeyBwYWRkaW5nLWxlZnQ6IDNweDsgYm9yZGVyLXJhZGl1czogM3B4OyB9YCxcblxuXHRcdFx0XHRgLl9wb3N0LXRvYyBkdCAuaWNvbi1yZXBseSB7XG5cdFx0XHRcdCBcblx0XHRcdFx0IG1hcmdpbi1sZWZ0OiAzcHg7XG5ib3JkZXItcmFkaXVzOiAxMDAlO1xuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbndpZHRoOiAxOHB4O1xuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuaGVpZ2h0OiAxOHB4O1xuXHRcdFx0XHQgXG5cdFx0XHRcdCB9YCxcblxuXHRcdFx0XHRgLl9wb3N0LXRvYyBkdCB7IG9wYWNpdHk6IDAuNzsgfWAsXG5cdFx0XHRcdGAuX3Bvc3QtdG9jIGR0OmhvdmVyIHsgb3BhY2l0eTogMTsgfWAsXG5cblx0XHRcdFx0YC5fcG9zdC10b2MgZHQgYTpob3ZlciB7IGJhY2tncm91bmQ6ICMyZDY0YjM7IGNvbG9yOiAjRkZGOyB9YCxcblxuXHRcdFx0XHRgLl9sb3V6aHViaWFvc2hpX3RvYyB7ICB9YCxcblx0XHRcdFx0YC5fbG91emh1Ymlhb3NoaV90b2MgYSB7IGJhY2tncm91bmQ6ICNGRjdGNDI7IGNvbG9yOiAjRkZGOyBmb250LXdlaWdodDogYm9sZDsgfWAsXG5cblx0XHRcdFx0YC5fcG9zdC10b2MgYSB7IG1pbi13aWR0aDogMTAwcHg7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgbGluZS1oZWlnaHQ6IDJlbTsgbWluLWhlaWdodDogMmVtOyB9YCxcblxuXHRcdFx0XHRgLl9wb3N0LXRvYzpob3ZlciB7IG9wYWNpdHk6IDE7IH1gLFxuXG5cdFx0XHRcdGBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuXHRcdFx0XHRcdC5fcG9zdC10b2MgeyBsZWZ0OiAxMDBweDsgfVxuXHRcdFx0XHR9YCxcblxuXHRcdFx0XHRgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcblx0XHRcdFx0XHQuX3Bvc3QtdG9jIHsgbGVmdDogNTBweDsgfVxuXHRcdFx0XHR9YCxcblxuXHRcdFx0XHRgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcblx0XHRcdFx0XHQuX3Bvc3QtdG9jIHsgbGVmdDogMTBweDsgfVxuXHRcdFx0XHR9YCxcblxuXHRcdFx0XHRgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcblx0XHRcdFx0XHQuX3Bvc3QtdG9jIHsgZGlzcGxheTogYmxvY2s7IH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRodG1sLCBib2R5LCA6cm9vdFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fWAsXG5cblx0XHRcdFx0YC50b3BpY19saXN0X2JveCB7IG1heC1oZWlnaHQ6IDM4OHB4OyBoZWlnaHQ6IGF1dG87IH1gLFxuXHRcdFx0XHRgLnRvcGljX2xpc3RfYm94IC50b3BpY19saXN0X2hvdCB7IGRpc3BsYXk6IG5vbmU7IH1gLFxuXHRcdFx0XHRgLnRvcGljX2xpc3RfYm94OmhvdmVyIC50b3BpY19saXN0X2hvdCB7IGRpc3BsYXk6IGJsb2NrOyB9YCxcblxuXHRcdFx0XSlcblx0XHQ7XG5cblx0XHRjb25zdCB0aHJvdHRsZSA9IHJlcXVpcmUoJ3Rocm90dGxlLWRlYm91bmNlL3Rocm90dGxlJyk7XG5cdFx0Y29uc3QgZGVib3VuY2UgPSByZXF1aXJlKCd0aHJvdHRsZS1kZWJvdW5jZS9kZWJvdW5jZScpO1xuXHRcdGNvbnN0IF91Zl9kb25lID0gcmVxdWlyZSgncm9vdC9saWIvZXZlbnQvZG9uZScpO1xuXG5cdFx0YXdhaXQgUHJvbWlzZUJsdWViaXJkLmRlbGF5KDI1MCk7XG5cblx0XHRsZXQgUGFnZURhdGE6IElCYWlkdVRpZWJhUGFnZURhdGE7XG5cblx0XHRsZXQgX3RvY19pbml0ZWQgPSBmYWxzZTtcblxuXHRcdGxldCBfdG9jX2FyZWEgPSAkKCc8ZGl2IGNsYXNzPVwiX3Bvc3QtdG9jXCIvPicpO1xuXHRcdGxldCBfdG9jID0gJCgnPGRsIHN0eWxlPVwibGlzdC1zdHlsZS10eXBlOiB1bnNldDtcIi8+JykuYXBwZW5kVG8oX3RvY19hcmVhKTtcblxuXHRcdCQoJ2JvZHknKS5vbignRE9NTm9kZUluc2VydGVkJywgJyNjb21fdXNlcmJhcicsIGZ1bmN0aW9uIChldmVudClcblx0XHR7XG5cdFx0XHQvL2NvbnNvbGUubG9nKGV2ZW50LnR5cGUsIHRoaXMsIGV2ZW50LnRhcmdldCk7XG5cblx0XHRcdGlmICgkKGV2ZW50LnRhcmdldCkuaXMoJyN1X25vdGlmeV9pdGVtLCAudW5yZWFkLW51bScpKVxuXHRcdFx0e1xuXHRcdFx0XHQkKHdpbmRvdykudHJpZ2dlckhhbmRsZXIoJ2xvYWQubWVudScpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JCgnI3BiX2NvbnRlbnQnKVxuXHRcdFx0Lm9uKCdjbGljaycsICdpbWcuQkRFX0ltYWdlJywgZnVuY3Rpb24gKGV2ZW50KVxuXHRcdFx0e1xuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogQHR5cGUgSlF1ZXJ5PEhUTUxFbGVtZW50PlxuXHRcdFx0XHQgKi9cblx0XHRcdFx0bGV0IF9pbWcgPSBsaWJTaXRlQmFpZHVUaWViYS5iZGVfaW1hZ2UodGhpcyk7XG5cblx0XHRcdFx0aWYgKF9pbWcgJiYgX2ltZy5sZW5ndGgpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsZXQgbmFtZV9pZCA9IF9pbWcuYXR0cignZGF0YS1pZCcpO1xuXG5cdFx0XHRcdFx0bGV0IHVybDtcblxuXHRcdFx0XHRcdGlmIChQYWdlRGF0YSAmJiBQYWdlRGF0YS5mb3J1bSAmJiBQYWdlRGF0YS50aHJlYWQpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dXJsID0gW1xuXHRcdFx0XHRcdFx0XHRgaHR0cDovL3RpZWJhLmJhaWR1LmNvbS9waG90by9wP2AsXG5cdFx0XHRcdFx0XHRcdGBrdz0ke1BhZ2VEYXRhLmZvcnVtLm5hbWVfdXJsfWAsXG5cdFx0XHRcdFx0XHRcdGAmZmx1eD0xJnRpZD0ke1BhZ2VEYXRhLnRocmVhZC50aHJlYWRfaWR9YCxcblx0XHRcdFx0XHRcdFx0YCZwaWNfaWQ9JHtuYW1lX2lkfWAsXG5cdFx0XHRcdFx0XHRcdGAmcG49MSZmcD0yJnNlZV9sej0wJnJlZF90YWc9czI2OTg5OTM1MzNgLFxuXHRcdFx0XHRcdFx0XS5qb2luKCcnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dXJsID0gX2ltZy5wcm9wKCdzcmMnKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRfdWZfZG9uZShldmVudCk7XG5cblx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0d2luZG93Lm9wZW4odXJsLCBuYW1lX2lkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHQ7XG5cblx0XHQkKCdib2R5Jykub24oJ0RPTU5vZGVJbnNlcnRlZCcsICcjdGhyZWFkX2xpc3QgLmpfdGhyZWFkX2xpc3QgLm1lZGlhX2JveCcsIGRlYm91bmNlKDUwMCwgYXN5bmMgZnVuY3Rpb24gKGV2ZW50KVxuXHRcdHtcblx0XHRcdGxldCBfaW1nID0gJCgnaW1nW2lkXj1cImJpZ19pbWdfXCJdJywgdGhpcyk7XG5cblx0XHRcdDAgJiYgY29uc29sZS5sb2coe1xuXHRcdFx0XHRcInRoaXNcIjogdGhpcyxcblx0XHRcdFx0dGFyZ2V0OiBldmVudC50YXJnZXQsXG5cdFx0XHRcdF9pbWcsXG5cdFx0XHR9KTtcblxuXHRcdFx0X2ltZy5lYWNoKGZ1bmN0aW9uICgpXG5cdFx0XHR7XG5cdFx0XHRcdGxpYlNpdGVCYWlkdVRpZWJhLmJkZV9pbWFnZSh0aGlzKTtcblx0XHRcdH0pO1xuXG5cdFx0fSkpO1xuXG5cdFx0Y29uc3QgQ29weUxpYiA9IHJlcXVpcmUoJ3Jvb3QvbGliL2Z1bmMvY29weScpO1xuXG5cdFx0JCgnYm9keScpXG5cdFx0XHQub24oJ0RPTU5vZGVJbnNlcnRlZCBET01TdWJ0cmVlTW9kaWZpZWQnLCAnI2NyZWF0aXZlLXBsYXRmb3JtLWRlZXByZWFkLXdyYXAnLCBkZWJvdW5jZSgxMDAwLCBhc3luYyBmdW5jdGlvbiAoZXZlbnQpXG5cdFx0XHR7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGV2ZW50LnR5cGUsIHRoaXMsIGV2ZW50LnRhcmdldCk7XG5cdFx0XHRcdGxldCBfdGhpcyA9ICQodGhpcyk7XG5cblx0XHRcdFx0aWYgKCFfdGhpcy5sZW5ndGggfHwgIV90aGlzLmlzKCcjY3JlYXRpdmUtcGxhdGZvcm0tZGVlcHJlYWQtd3JhcDpub3QoW2RhdGEtZG9uZV0pJykpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdF90aGlzLmF0dHIoJ2RhdGEtZG9uZScsIHRydWUpO1xuXG5cdFx0XHRcdGxldCBkZWVwcmVhZF9jb250ZW50ID0gJCgnI2RlZXByZWFkLXdyYXAgLmRlZXByZWFkLWNvbnRlbnQnKTtcblx0XHRcdFx0bGV0IGRlZXByZWFkX25hdiA9ICQoJyNkZWVwcmVhZC1uYXYnLCBfdGhpcyk7XG5cblx0XHRcdFx0bGV0IF9hID0gJCgnPGEgdGl0bGU9XCLpu57mk4rlj6/opIfoo73osrzlrZBcIj7pu57mk4rlj6/opIfoo73osrzlrZA8L2E+Jyk7XG5cblx0XHRcdFx0X2Eub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXZlbnQudHlwZSwgdGhpcywgZXZlbnQudGFyZ2V0KTtcblxuXHRcdFx0XHRcdENvcHlMaWIuY29weUVsZW0oJCgnI2RlZXByZWFkLXdyYXAgLmRlZXByZWFkLWNvbnRlbnQnKVswXSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdF9hLmFwcGVuZFRvKGRlZXByZWFkX25hdik7XG5cblx0XHRcdFx0bGV0IF9kaXYgPSAkKCc8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIi8+Jyk7XG5cdFx0XHRcdGxldCB0ID0gJCgnLmRlZXByZWFkLXRpdGxlLCAuZGVlcHJlYWQtYXV0aG9yJywgX3RoaXMpO1xuXG5cdFx0XHRcdHQuYXBwZW5kVG8oX2Rpdik7XG5cdFx0XHRcdF9kaXYuaW5zZXJ0QWZ0ZXIoZGVlcHJlYWRfbmF2KTtcblx0XHRcdH0pKVxuXHRcdDtcblxuXHRcdCQoJ2JvZHknKVxuXHRcdFx0Lm9uZSgnRE9NTm9kZUluc2VydGVkIERPTVN1YnRyZWVNb2RpZmllZCcsICcudGJ1aV9hc2lkZV9mbG9hdF9iYXInLCBkZWJvdW5jZSgxMDAwLCBhc3luYyBmdW5jdGlvbiAoZXZlbnQpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCB0YnVpX2FzaWRlX2Zsb2F0X2JhciA9ICQoJy50YnVpX2FzaWRlX2Zsb2F0X2JhcicpO1xuXG5cdFx0XHRcdGxldCB0YnVpX2ZiYXJfcmVmcmVzaCA9ICQoJy50YnVpX2ZiYXJfcmVmcmVzaCcsIHRidWlfYXNpZGVfZmxvYXRfYmFyKTtcblxuXHRcdFx0XHRpZiAoIXRidWlfZmJhcl9yZWZyZXNoLmxlbmd0aClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRidWlfZmJhcl9yZWZyZXNoID0gJChgPGxpIGNsYXNzPVwidGJ1aV9hc2lkZV9mYmFyX2J1dHRvbiB0YnVpX2ZiYXJfcmVmcmVzaFwiPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj48L2E+PC9saT5gKVxuXHRcdFx0XHRcdFx0Lmluc2VydEFmdGVyKHRidWlfYXNpZGVfZmxvYXRfYmFyLmZpbmQoJy50YnVpX2ZiYXJfcG9zdCcpKVxuXHRcdFx0XHRcdDtcblxuXHRcdFx0XHRcdHRidWlfZmJhcl9yZWZyZXNoLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCQoJyNwYl9jb250ZW50LCAjY29udGVudF93cmFwJykubGVuZ3RoKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0JCgnLnRidWlfZmJhcl90b3AsIC50YnVpX2ZiYXJfdG9wIGEnLCB0YnVpX2FzaWRlX2Zsb2F0X2Jhcilcblx0XHRcdFx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdF91Zl9kb25lKGV2ZW50KTtcblxuXHRcdFx0XHRcdFx0XHRsZXQgX3QgPSAkKCcjcGJfY29udGVudCcpO1xuXHRcdFx0XHRcdFx0XHRsZXQgbiA9IDA7XG5cblx0XHRcdFx0XHRcdFx0aWYgKF90Lmxlbmd0aClcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdG4gPSAkKCcjal9jb3JlX3RpdGxlX3dyYXAnKVxuXHRcdFx0XHRcdFx0XHRcdFx0Lm91dGVySGVpZ2h0KClcblx0XHRcdFx0XHRcdFx0XHQ7XG5cblx0XHRcdFx0XHRcdFx0XHQkKHdpbmRvdylcblx0XHRcdFx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0XHRcdFx0XHQuc2Nyb2xsVG8oX3QsIDAgLSBuKVxuXHRcdFx0XHRcdFx0XHRcdDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRuID0gJCgnI2hlYWQgLnNlYXJjaF9tYWluJylcblx0XHRcdFx0XHRcdFx0XHRcdC5vdXRlckhlaWdodCgpXG5cdFx0XHRcdFx0XHRcdFx0O1xuXG5cdFx0XHRcdFx0XHRcdFx0JCh3aW5kb3cpXG5cdFx0XHRcdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdFx0XHRcdFx0LnNjcm9sbFRvKCcjY29udGVudF93cmFwJywgMCAtIG4pXG5cdFx0XHRcdFx0XHRcdFx0O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdDtcblx0XHRcdFx0fVxuXHRcdFx0fSkpXG5cdFx0O1xuXG5cdFx0JCh3aW5kb3cpXG5cdFx0XHQub24oJ2xvYWQuc2lnbicsIGRlYm91bmNlKDEwMDAsIGFzeW5jIGZ1bmN0aW9uICgpXG5cdFx0XHR7XG5cdFx0XHRcdHNpZ24oX3VybF9vYmopO1xuXG5cdFx0XHRcdCQod2luZG93KS50cmlnZ2VySGFuZGxlcignc2Nyb2xsLmxvYWQnKTtcblx0XHRcdH0pKVxuXHRcdFx0Lm9uKCdsb2FkLm1lbnUnLCB0aHJvdHRsZSgxMDAwLCBhc3luYyBmdW5jdGlvbiAoZXZlbnQpXG5cdFx0XHR7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGV2ZW50LnR5cGUsIHRoaXMsIGV2ZW50LnRhcmdldCk7XG5cblx0XHRcdFx0JCgnLnVfbmV3cyB1bC5qX2NhdGVnb3J5X2xpc3QnKS5lYWNoKGZ1bmN0aW9uICgpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsZXQgdWwgPSAkKHRoaXMpO1xuXG5cdFx0XHRcdFx0aWYgKCF1bC5maW5kKCdhLmpfY2xlYXJkYXRhW2RhdGEtdHlwZT1cImZhdnRzXCJdJykubGVuZ3RoKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHVsLnByZXBlbmQoYDxsaSBjbGFzcz1cImNhdGVnb3J5X2l0ZW0gY2F0ZWdvcnlfaXRlbV9lbXB0eVwiPjxhIGNsYXNzPVwial9jbGVhcmRhdGFcIiBocmVmPVwiaHR0cDovL3RpZWJhLmJhaWR1LmNvbS9pL2kvc3RvcmV0aHJlYWRcIiB0YXJnZXQ9XCJfYmxhbmtcIiBkYXRhLXR5cGU9XCJmYXZ0c1wiPuaIkeeahOaUtuiXjzwvYT48L2xpPmApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICghdWwuZmluZCgnYS5qX2NsZWFyZGF0YVtkYXRhLXR5cGU9XCJteV90aWVcIl0nKS5sZW5ndGgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dWwucHJlcGVuZChgPGxpIGNsYXNzPVwiY2F0ZWdvcnlfaXRlbSBjYXRlZ29yeV9pdGVtX2VtcHR5XCI+PGEgY2xhc3M9XCJqX2NsZWFyZGF0YVwiIGhyZWY9XCJodHRwOi8vdGllYmEuYmFpZHUuY29tL2kvaS9teV90aWVcIiB0YXJnZXQ9XCJfYmxhbmtcIiBkYXRhLXR5cGU9XCJteV90aWVcIj7miJHnmoTotLTlrZA8L2E+PC9saT5gKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIXVsLmZpbmQoJ2Eual9jbGVhcmRhdGFbZGF0YS10eXBlPVwiYXRtZVwiXScpLmxlbmd0aClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR1bC5wcmVwZW5kKGA8bGkgY2xhc3M9XCJjYXRlZ29yeV9pdGVtIGNhdGVnb3J5X2l0ZW1fZW1wdHlcIj48YSBjbGFzcz1cImpfY2xlYXJkYXRhXCIgaHJlZj1cImh0dHA6Ly90aWViYS5iYWlkdS5jb20vaS9pL2F0bWVcIiB0YXJnZXQ9XCJfYmxhbmtcIiBkYXRhLXR5cGU9XCJhdG1lXCI+5p+l55yLQOaPkOWIsOaIkTwvYT48L2xpPmApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICghdWwuZmluZCgnYS5qX2NsZWFyZGF0YVtkYXRhLXR5cGU9XCJyZXBseVwiXScpLmxlbmd0aClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR1bC5wcmVwZW5kKGA8bGkgY2xhc3M9XCJjYXRlZ29yeV9pdGVtIGNhdGVnb3J5X2l0ZW1fZW1wdHlcIj48YSBjbGFzcz1cImpfY2xlYXJkYXRhXCIgaHJlZj1cImh0dHA6Ly90aWViYS5iYWlkdS5jb20vaS9pL3JlcGx5bWVcIiB0YXJnZXQ9XCJfYmxhbmtcIiBkYXRhLXR5cGU9XCJyZXBseVwiPuafpeeci+WbnuWkjTwvYT48L2xpPmApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICghdWwuZmluZCgnYS5qX2NsZWFyZGF0YVtkYXRhLXR5cGU9XCJyZWN5Y2xlXCJdJykubGVuZ3RoKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdC8vaHR0cDovL3RpZWJhLmJhaWR1LmNvbS9wbWMvcmVjeWNsZVxuXHRcdFx0XHRcdFx0dWwuYXBwZW5kKGA8bGkgY2xhc3M9XCJjYXRlZ29yeV9pdGVtIGNhdGVnb3J5X2l0ZW1fZW1wdHlcIj48YSBjbGFzcz1cImpfY2xlYXJkYXRhXCIgaHJlZj1cImh0dHA6Ly90aWViYS5iYWlkdS5jb20vcG1jL3JlY3ljbGVcIiB0YXJnZXQ9XCJfYmxhbmtcIiBkYXRhLXR5cGU9XCJyZWN5Y2xlXCI+5Yig6LS05L+h5oGvPC9hPjwvbGk+YCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pKVxuXHRcdFx0Lypcblx0XHRcdC5vbignbG9hZC5pbml0JywgYXN5bmMgZnVuY3Rpb24gKClcblx0XHRcdHtcblxuXHRcdFx0fSlcblx0XHRcdCovXG5cdFx0XHQub24oJ2xvYWQucG9zdCcsIHRocm90dGxlKDUwMCwgYXN5bmMgZnVuY3Rpb24gKClcblx0XHRcdHtcblx0XHRcdFx0UGFnZURhdGEgPSB1cGRhdGVQYWdlRGF0YShQYWdlRGF0YSlcblxuXHRcdFx0XHQkKFtcblx0XHRcdFx0XHQnLmZlZWRfaXRlbSBhLml0Yl9rd1t0aXRsZV1baHJlZio9XCIuLi5cIl0nLFxuXHRcdFx0XHRdLmpvaW4oJywnKSkuYXR0cignaHJlZicsIGZ1bmN0aW9uICgpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsZXQgdGl0bGUgPSAkKHRoaXMpLmF0dHIoJ3RpdGxlJyk7XG5cblx0XHRcdFx0XHRyZXR1cm4gJy9mP2t3PScgKyB0aXRsZTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bGV0IGZsb29yOiBudW1iZXI7XG5cdFx0XHRcdGxldCBsYXN0X3Bvc3Q7XG5cblx0XHRcdFx0bGV0IF90b2NfcmVzZXQgPSB0cnVlO1xuXG5cdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0bGV0IHBfcG9zdGxpc3QgPSAkKCcjal9wX3Bvc3RsaXN0LCAjal9wX3Bvc3RsaXN0ICNqX3BfcG9zdGxpc3QsIC5wX3Bvc3RsaXN0W2lkXScsICcjcGJfY29udGVudCcpXG5cdFx0XHRcdFx0LmVxKC0xKVxuXHRcdFx0XHQ7XG5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxldCBjaGsgPSAkKCc+IC5fcF9wb3N0bGlzdF8nLCBwX3Bvc3RsaXN0KTtcblxuXHRcdFx0XHRcdGlmIChjaGsubGVuZ3RoKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRwX3Bvc3RsaXN0LnByZXBlbmQoJzxkaXYgY2xhc3M9XCJfcF9wb3N0bGlzdF9cIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIi8+Jyk7XG5cdFx0XHRcdH1cblxuLy9cdFx0XHRcdCQoJy5wX3Bvc3RsaXN0ID4gLmxfcG9zdDpoYXMoLmxvdXpodWJpYW9zaGlfd3JhcCknKS5jc3Moe1xuLy9cdFx0XHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICMyZDY0YjMnLFxuLy9cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdCQoW1xuXHRcdFx0XHRcdCcuY2FyZF90aXRsZV9mbmFtZScsXG5cdFx0XHRcdFx0Jy5zaW1wbGVfYmxvY2tfY29udGFpbmVyIC53cmFwX2NvbnRhaW5lciAubm93cmFwIGEnLFxuXHRcdFx0XHRcdCcuc2ltcGxlX2Jsb2NrX2NvbnRhaW5lciAudF9mb3J3YXJkIC5jb21tb25fc291cmNlX21haW4gYTplcSgtMSknLFxuXHRcdFx0XHRdLmpvaW4oJywnKSkuZWFjaChmdW5jdGlvbiAoKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGV0IHRpdGxlID0gJCh0aGlzKS5hdHRyKCd0aXRsZScpO1xuXG5cdFx0XHRcdFx0aWYgKHRpdGxlKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCQodGhpcykudGV4dCh0aXRsZSArICh0aXRsZS5zbGljZSgtMSkgPT0gJ+WQpycgPyAnJyA6ICflkKcnKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRsZXQgcF9wb3N0bGlzdF9wb3N0ID0gJCgnLmxfcG9zdDp2aXNpYmxlJywgcF9wb3N0bGlzdCk7XG5cblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhwX3Bvc3RsaXN0LCBwX3Bvc3RsaXN0X3Bvc3QpO1xuXG5cdFx0XHRcdHBfcG9zdGxpc3RfcG9zdFxuXHRcdFx0XHRcdC5lYWNoKGZ1bmN0aW9uICgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aWYgKCFfdG9jX2luaXRlZClcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0X3RvY19pbml0ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRfdG9jX2FyZWFcblx0XHRcdFx0XHRcdFx0Ly8ucHJlcGVuZFRvKCcjY29udGFpbmVyJylcblx0XHRcdFx0XHRcdFx0XHQuaW5zZXJ0QmVmb3JlKCcjY29udGFpbmVyJylcblx0XHRcdFx0XHRcdFx0O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRsZXQgX3RoaXMgPSAkKHRoaXMpO1xuXG5cdFx0XHRcdFx0XHRsZXQgX2ZpZWxkOiBJQmFpZHVUaWViYVBvc3RGaWVsZDtcblx0XHRcdFx0XHRcdHRyeVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRsZXQgcyA9IF90aGlzLmF0dHIoJ2RhdGEtZmllbGQnKTtcblx0XHRcdFx0XHRcdFx0aWYgKHMpXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRfZmllbGQgPSBKU09OLnBhcnNlKHMpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjYXRjaCAoZSlcblx0XHRcdFx0XHRcdHtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRfZmllbGQgPSBPYmplY3QuYXNzaWduKHtcblx0XHRcdFx0XHRcdFx0YXV0aG9yOiB7fSxcblx0XHRcdFx0XHRcdFx0Y29udGVudDoge30sXG5cdFx0XHRcdFx0XHR9LCBfZmllbGQpO1xuXG5cdFx0XHRcdFx0XHRsZXQgZmxvb3JfZWxlbSA9IF90aGlzLmZpbmQoJy5wb3N0LXRhaWwtd3JhcCA+IC50YWlsLWluZm86ZXEoLTIpJyk7XG5cdFx0XHRcdFx0XHQvL2xldCBjID0gTnVtYmVyKGZsb29yX2VsZW0udGV4dCgpLnJlcGxhY2UoL1xcRC9nLCAnJykpO1xuXHRcdFx0XHRcdFx0bGV0IGMgPSBfZmllbGQuY29udGVudC5wb3N0X25vO1xuXG5cdFx0XHRcdFx0XHRpZiAoIWMpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGMgPSBOdW1iZXIoZmxvb3JfZWxlbS50ZXh0KCkucmVwbGFjZSgvXFxEL2csICcnKSk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmIChfdG9jX3Jlc2V0KVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRfdG9jX3Jlc2V0ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdF90b2MuZW1wdHkoKTtcblxuXHRcdFx0XHRcdFx0XHQkKCcuY2FyZF90b3Bfd3JhcCcpLm91dGVySGVpZ2h0KCQoJy5jYXJkX3RvcF93cmFwIC5jYXJkX3RvcCcpLm91dGVySGVpZ2h0KCkpO1xuXG5cdFx0XHRcdFx0XHRcdCQod2luZG93KS50cmlnZ2VySGFuZGxlcignc2Nyb2xsLmxvYWQnKTtcblxuXHRcdFx0XHRcdFx0XHRmbG9vciA9IGM7XG5cblx0XHRcdFx0XHRcdFx0bGFzdF9wb3N0ID0gX3RoaXM7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coYywgX2ZpZWxkLmF1dGhvci51c2VyX25hbWUsIF9maWVsZCk7XG5cblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgYyA9PT0gJ251bWJlcicgJiYgIU51bWJlci5pc05hTihjKSlcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bGV0IGlzX2xvdXpodWJpYW9zaGkgPSAoX2ZpZWxkLmF1dGhvci51c2VyX25hbWUgPT0gUGFnZURhdGEudGhyZWFkLmF1dGhvcik7XG5cblx0XHRcdFx0XHRcdFx0aWYgKGlzX2xvdXpodWJpYW9zaGkpXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRfdGhpcy5hZGRDbGFzcygnX2xvdXpodWJpYW9zaGlfcG9zdCcpO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGxldCBfYSA9ICQoYDxkdD48L2R0PmApXG5cdFx0XHRcdFx0XHRcdFx0XHQuaHRtbChgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPiMke2N9IGAgKyAkKCcucF9hdXRob3IgLnBfYXV0aG9yX25hbWUnLCBfdGhpcylcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lmh0bWwoKSArICc8L2E+Jylcblx0XHRcdFx0XHRcdFx0XHQ7XG5cblx0XHRcdFx0XHRcdFx0XHRfYS5hdHRyKCd0aXRsZScsIF9hLnRleHQoKSk7XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAoaXNfbG91emh1Ymlhb3NoaSlcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRfYS5hZGRDbGFzcygnX2xvdXpodWJpYW9zaGlfdG9jJyk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKF9maWVsZC5jb250ZW50LmNvbW1lbnRfbnVtKVxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdF9hLmZpbmQoJ2E6ZXEoMCknKS5hcHBlbmQoJzxpIGNsYXNzPVwiaWNvbi1yZXBseVwiLz4nKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRfYS5maW5kKCdhOmVxKDApJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKClcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHQkKHdpbmRvdykudHJpZ2dlckhhbmRsZXIoJ3Njcm9sbC5sb2FkJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cblx0XHRcdFx0XHRcdFx0XHRcdGxldCBmbiA9IGZ1bmN0aW9uICgpXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCQod2luZG93KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnNjcm9sbFRvKF90aGlzLCAtODApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDtcblx0XHRcdFx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZm4sIDIwMCk7XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdFx0XHRfYS5hcHBlbmRUbyhfdG9jKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coMjIyLCBmbG9vciwgYywgbGFzdF9wb3N0KTtcblxuXHRcdFx0XHRcdFx0XHRpZiAoYyAhPSBmbG9vcilcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjICE9IGZsb29yICsgMSlcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgYSA9IFtdO1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IGZsb29yICsgMTsgaSA8IGM7IGkrKylcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YS5wdXNoKGkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoYS5sZW5ndGgpXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhc3RfcG9zdC5maW5kKCcuZF9wb3N0X2NvbnRlbnRfbWFpbicpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmFwcGVuZChgPGRpdiBjbGFzcz1cImZsb29yLWNoZWNrLW1pc3NcIj7oq4vms6jmhI/vvJoke2FbMF19JHthLmxlbmd0aCA+IDFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gJyB+ICcgKyBhLnNsaWNlKC0xKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ30g5qiTIOWPr+iDveW3suiiq+WQnuaWh+aIluWIqumZpDwvZGl2PmApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGZsb29yID0gYztcblx0XHRcdFx0XHRcdFx0XHRsYXN0X3Bvc3QgPSBfdGhpcztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGMsIGZsb29yKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0X3RoaXMuZGF0YSgnZmllbGQtZGF0YScsIF9maWVsZCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuZmlsdGVyKCc6bm90KFtkYXRhLWZsb29yLWNoZWNrXSknKVxuXHRcdFx0XHRcdC5lYWNoKGZ1bmN0aW9uICgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGV0IF90aGlzID0gJCh0aGlzKTtcblx0XHRcdFx0XHRcdGxldCBfcG9zdCA9IF90aGlzO1xuXG5cdFx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0XHRfdGhpcy5hdHRyKCdkYXRhLWZsb29yLWNoZWNrJywgdHJ1ZSk7XG5cblx0XHRcdFx0XHRcdGxldCBmbG9vcl9lbGVtID0gX3RoaXMuZmluZCgnLnBvc3QtdGFpbC13cmFwID4gLnRhaWwtaW5mbzplcSgtMiknKTtcblxuXHRcdFx0XHRcdFx0dHJ5XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGlmIChfcG9zdC5pcygnOm5vdChbZGF0YS1sb2FkZWRdKScpKVxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdFx0XHRcdF9wb3N0LmF0dHIoJ2RhdGEtbG9hZGVkJywgdHJ1ZSk7XG5cblx0XHRcdFx0XHRcdFx0XHQkKCcuZF9wb3N0X2NvbnRlbnRfbWFpbicsIF9wb3N0KS5wcmVwZW5kKCQoJzxhLz4nKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnRleHQoJyMnICsgX3Bvc3QuZGF0YSgnZmllbGQnKS5jb250ZW50LnBvc3Rfbm8pXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignaHJlZicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdodHRwOi8vdGllYmEuYmFpZHUuY29tL3AvJyArIFBhZ2VEYXRhLnRocmVhZC50aHJlYWRfaWQgKyAnP3BpZD0nICsgX3Bvc3QuZGF0YShcblx0XHRcdFx0XHRcdFx0XHRcdFx0J2ZpZWxkJykuY29udGVudC5wb3N0X2lkICsgJyMnICsgX3Bvc3QuZGF0YSgnZmllbGQnKS5jb250ZW50LnBvc3RfaWRcblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdzdHlsZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdmbG9hdDogcmlnaHQ7IHotaW5kZXg6IDUwMDsgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogMHB4OyB0b3A6IDBweDsgcGFkZGluZzogMXB4IDVweDsnXG5cdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHQvKlxuXHRcdFx0XHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudClcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IHRleHQgPSBfcG9zdC5maW5kKCcuZF9wb3N0X2NvbnRlbnQnKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0cnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHRbMF0uc2VsZWN0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ0NvcHknKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXRjaCAoZSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0cnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEdNQXBpLkdNX3NldENsaXBib2FyZCh0ZXh0LnRleHQoKS5yZXBsYWNlKC9cXHJcXG58XFxyKD8hXFxuKXxcXG4vZywgXCI8YnIvPlxcblwiKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2F0Y2ggKGUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0X3VmX2RvbmUoZXZlbnQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdCovXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignb25jbGljaycsIGZ1bmN0aW9uICgpXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxldCBpZCA9IF9wb3N0LmZpbmQoJy5kX3Bvc3RfY29udGVudCcpLmF0dHIoJ2lkJyk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgZXZlbnQucHJldmVudERlZmF1bHQoKWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YHZhciBjb3B5QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcke2lkfScpYCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgdHJ5e2NvcHlBcmVhLnNlbGVjdCgpO31jYXRjaChlKXtjb25zb2xlLmVycm9yKGUpfWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YHRyeXt3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7fWNhdGNoKGUpe31gLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGB0cnl7dmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtyYW5nZS5zZWxlY3ROb2RlKGNvcHlBcmVhKTt3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuYWRkUmFuZ2UocmFuZ2UpfWNhdGNoKGUpe2NvbnNvbGUuZXJyb3IoZSl9YCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgdHJ5e2RvY3VtZW50LmV4ZWNDb21tYW5kKCdDb3B5Jyl9Y2F0Y2goZSl7Y29uc29sZS5lcnJvcihlKX1gLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGByZXR1cm4gZmFsc2VgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF0uam9pbignOycpXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ3RpdGxlJywgJ+m7nuaTiuWPr+ikh+ijveiyvOWtkCcpXG5cdFx0XHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0XHRcdGZsb29yX2VsZW0ud3JhcElubmVyKCQoJzxhLz4nKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnaHR0cDovL3RpZWJhLmJhaWR1LmNvbS9wLycgKyBQYWdlRGF0YS50aHJlYWQudGhyZWFkX2lkICsgJz9waWQ9JyArIF9wb3N0LmRhdGEoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdmaWVsZCcpLmNvbnRlbnQucG9zdF9pZCArICcjJyArIF9wb3N0LmRhdGEoJ2ZpZWxkJykuY29udGVudC5wb3N0X2lkXG5cdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgX3VmX2RvbmUpKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjYXRjaCAoZSlcblx0XHRcdFx0XHRcdHt9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0O1xuXG5cdFx0XHRcdG5ldyBQcm9taXNlKGZ1bmN0aW9uICgpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0JCgnaW1nLkJERV9JbWFnZScsIHBfcG9zdGxpc3RfcG9zdCkuZWFjaChhc3luYyBmdW5jdGlvbiAoKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxpYlNpdGVCYWlkdVRpZWJhLmJkZV9pbWFnZSh0aGlzKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHQkKCcucmlnaHRfc2VjdGlvbiBkaXY6aGFzKD4gLnRvcGljX2xpc3RfYm94KScpXG5cdFx0XHRcdFx0XHQuY3NzKCdoZWlnaHQnLCAnYXV0bycpXG5cdFx0XHRcdFx0O1xuXG5cdFx0XHRcdFx0JCh3aW5kb3cpLnRyaWdnZXJIYW5kbGVyKCdzY3JvbGwubG9hZCcpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pKVxuXHRcdFx0Lm9uKCdsb2FkLmxpc3QnLCB0aHJvdHRsZSgxMDAwLCBhc3luYyBmdW5jdGlvbiAoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgaW5fdGllYmFfbGlzdCA9ICQoJy5oZWFkX2NvbnRlbnQgLmNhcmRfdGl0bGVfZm5hbWUnKS5sZW5ndGg7XG5cblx0XHRcdFx0bGV0IF90b2NfcmVzZXQgPSB0cnVlO1xuXG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiDomZXnkIbosrzlrZDliJfooahcblx0XHRcdFx0ICovXG5cdFx0XHRcdGxldCBscyA9ICQoJy5qX3RocmVhZF9saXN0IC50aHJlYWRsaXN0X3RpdGxlLCAuaWhvbWVfc2VjdGlvbiAubmV3X2xpc3QgLnRocmVhZF9uYW1lJykuZWFjaChmdW5jdGlvbiAoKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGV0IF90aGlzID0gJCh0aGlzKTtcblxuXHRcdFx0XHRcdGxldCBfdCA9IF90aGlzLmZpbmQoJ2Eual90aF90aXQsIGEudGl0bGUnKTtcblxuXHRcdFx0XHRcdGlmIChfdC5sZW5ndGggJiYgIV90aGlzLmZpbmQoJy5zZWVfbHonKS5sZW5ndGgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aWYgKDAgJiYgIV90b2NfaW5pdGVkKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRfdG9jX2luaXRlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdF90b2NfYXJlYVxuXHRcdFx0XHRcdFx0XHQvLy5wcmVwZW5kVG8oJyNjb250ZW50Jylcblx0XHRcdFx0XHRcdFx0XHQuaW5zZXJ0QmVmb3JlKCcjY29udGVudCcpXG5cdFx0XHRcdFx0XHRcdDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKDAgJiYgX3RvY19yZXNldClcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0X3RvY19yZXNldCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRfdG9jLmVtcHR5KCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGxldCB1cmwgPSBuZXcgVVJMKF90LnByb3AoJ2hyZWYnKSk7XG5cblx0XHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHRcdHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCdzZWVfbHonLCAxKTtcblxuXHRcdFx0XHRcdFx0JCgnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJzZWVfbHogYnRuLXN1YiBidG4tc21hbGxcIj7lj6rnnIvmpbzkuLs8L2E+Jylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCB1cmwudG9TdHJpbmcoKSlcblx0XHRcdFx0XHRcdFx0LmFwcGVuZFRvKCQoJzxzcGFuLz4nKVxuXHRcdFx0XHRcdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0XHRcdFx0XHRcdFx0XHQndmVydGljYWwtYWxpZ24nOiAnaW5oZXJpdCcsXG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHQuYXBwZW5kVG8oX3RoaXMpXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdDtcblxuXHRcdFx0XHRcdFx0aWYgKDApXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGxldCBfYSA9ICQoYDxkdD48L2R0PmApXG5cdFx0XHRcdFx0XHRcdFx0Lmh0bWwoYDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj5gICsgJCgnLmpfdGhfdGl0JywgX3RoaXMpXG5cdFx0XHRcdFx0XHRcdFx0XHQudGV4dCgpICsgJzwvYT4nKVxuXHRcdFx0XHRcdFx0XHQ7XG5cblx0XHRcdFx0XHRcdFx0X2EuYXR0cigndGl0bGUnLCBfYS50ZXh0KCkpO1xuXG5cdFx0XHRcdFx0XHRcdF9hLmFwcGVuZFRvKF90b2MpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly9jb25zb2xlLmxvZygnbG9hZC5saXN0JywgbHMpO1xuXG5cdFx0XHRcdGxhenlsb2FkKF91cmxfb2JqKTtcblx0XHRcdH0pKVxuXHRcdFx0Lm9uKCdrZXlkb3duLnBhZ2UnLCByZXF1aXJlKCdyb290L2xpYi9qcXVlcnkvZXZlbnQvaG90a2V5JykucGFja0V2ZW50KGZ1bmN0aW9uIChldmVudClcblx0XHRcdHtcblx0XHRcdFx0Y29uc3Qga2V5Y29kZXMgPSByZXF1aXJlKCdrZXljb2RlcycpO1xuXG5cdFx0XHRcdHN3aXRjaCAoZXZlbnQud2hpY2gpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjYXNlIGtleWNvZGVzKCdwYWdldXAnKTpcblx0XHRcdFx0XHRjYXNlIGtleWNvZGVzKCdsZWZ0Jyk6XG5cblx0XHRcdFx0XHRcdHZhciBfYSA9ICQoJy5wYWdpbmF0aW9uLWRlZmF1bHQgYS5wcmV2LCAucGFnaW5hdGlvbi1kZWZhdWx0IGEucHJlJyk7XG5cblx0XHRcdFx0XHRcdGlmIChfYS5sZW5ndGgpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdF91Zl9kb25lKGV2ZW50KTtcblx0XHRcdFx0XHRcdFx0X2FbMF0uY2xpY2soKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXZlbnQsIF9hKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBrZXljb2RlcygncGFnZWRvd24nKTpcblx0XHRcdFx0XHRjYXNlIGtleWNvZGVzKCdyaWdodCcpOlxuXG5cdFx0XHRcdFx0XHR2YXIgX2EgPSAkKCcucGFnaW5hdGlvbi1kZWZhdWx0IGEubmV4dCcpO1xuXG5cdFx0XHRcdFx0XHRpZiAoX2EubGVuZ3RoKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRfdWZfZG9uZShldmVudCk7XG5cdFx0XHRcdFx0XHRcdF9hWzBdLmNsaWNrKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGV2ZW50LCBfYSk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSlcblx0XHRcdC5vbignbG9hZC5zY3JvbGwnLCBhc3luYyBmdW5jdGlvbiAoKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpIDwgMzAwKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdCQod2luZG93KS5zY3JvbGxUbygnI3BiX2NvbnRlbnQsIC5oZWFkX2NvbnRlbnQgLmNhcmRfdGl0bGUsICNjb250ZW50LCAjdGFiX2ZvcnVtbmFtZScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0LnNjcm9sbFRvKCcuaGVhZF9jb250ZW50Jylcblx0XHRcdC5vbmUoJ3Njcm9sbCcsIGZ1bmN0aW9uIChldmVudClcblx0XHRcdHtcblx0XHRcdFx0Y29uc29sZS5sb2coZXZlbnQpO1xuXHRcdFx0fSlcblx0XHRcdC5vbignc2Nyb2xsLnJlcGx5JywgZnVuY3Rpb24gKGV2ZW50KVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoZXZlbnQubmFtZXNwYWNlID09ICdyZXBseScpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKGV2ZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdHtcblxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0Lm9uKCdzY3JvbGwubG9hZCcsIHRocm90dGxlKDEwMDAsIGFzeW5jIGZ1bmN0aW9uIChldmVudClcblx0XHRcdHtcblx0XHRcdFx0bGV0IG4gPSAwO1xuXG5cdFx0XHRcdCQoJy5jb3JlX3JlcGx5X3dyYXBwZXI6bm90KFtkYXRhLWxvYWRlZF0pJylcblx0XHRcdFx0XHQuZWFjaChmdW5jdGlvbiAoKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxldCBjb3JlX3JlcGx5X3dyYXBwZXIgPSAkKHRoaXMpO1xuXHRcdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdFx0Y29yZV9yZXBseV93cmFwcGVyLmF0dHIoJ2RhdGEtbG9hZGVkJywgdHJ1ZSk7XG5cblx0XHRcdFx0XHRcdGxldCBsb2FkaW5nX3JlcGx5ID0gY29yZV9yZXBseV93cmFwcGVyLmZpbmQoJy5sb2FkaW5nX3JlcGx5Jyk7XG5cblx0XHRcdFx0XHRcdGxldCBjb3JlX3JlcGx5ID0gY29yZV9yZXBseV93cmFwcGVyLnBhcmVudHMoJy5jb3JlX3JlcGx5OmVxKDApJykuZXEoMCk7XG5cblx0XHRcdFx0XHRcdGNvcmVfcmVwbHlfaGFuZGxlcihjb3JlX3JlcGx5KTtcblxuXHRcdFx0XHRcdFx0bGV0IHQgPSBOdW1iZXIoY29yZV9yZXBseV93cmFwcGVyLnByb3AoJ2RhdGEtbG9hZGVkLXRyeScpIHx8IDApO1xuXG5cdFx0XHRcdFx0XHRpZiAodCA8IDUgJiYgbG9hZGluZ19yZXBseS5sZW5ndGgpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdG4rKztcblxuXHRcdFx0XHRcdFx0XHRjb3JlX3JlcGx5X3dyYXBwZXIucHJvcCgnZGF0YS1sb2FkZWQtdHJ5JywgdCArIDEpO1xuXG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoYXN5bmMgZnVuY3Rpb24gKClcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGxldCBldmVudCA9ICQuRXZlbnQoJ3Njcm9sbC5yZXBseScsIHtcblx0XHRcdFx0XHRcdFx0XHRcdHBhZ2VZOiBjb3JlX3JlcGx5X3dyYXBwZXIub2Zmc2V0KCkudG9wLFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRcdFx0JCh3aW5kb3cpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYWRkKCdodG1sLCBib2R5Jylcblx0XHRcdFx0XHRcdFx0XHRcdC50cmlnZ2VyKGV2ZW50KVxuXHRcdFx0XHRcdFx0XHRcdDtcblxuXHRcdFx0XHRcdFx0XHRcdHRyeVxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBldmVudCA9IHVuc2FmZVdpbmRvdy4kLkV2ZW50KCdzY3JvbGwucmVwbHknLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhZ2VZOiBjb3JlX3JlcGx5X3dyYXBwZXIub2Zmc2V0KCkudG9wLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHRcdFx0XHRcdHVuc2FmZVdpbmRvdy4kKHVuc2FmZVdpbmRvdylcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmFkZCgnaHRtbCwgYm9keScpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC50cmlnZ2VyKGV2ZW50KVxuXHRcdFx0XHRcdFx0XHRcdFx0O1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRjYXRjaCAoZSlcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHQvL2NvbnNvbGUuZXJyb3IoZS50b1N0cmluZygpKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHR0cnlcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgZXZlbnQgPSAkLkV2ZW50KCdzY3JvbGwucmVwbHknLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhZ2VZOiBjb3JlX3JlcGx5X3dyYXBwZXIub2Zmc2V0KCkudG9wLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdCQodW5zYWZlV2luZG93KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuYWRkKCdodG1sLCBib2R5Jylcblx0XHRcdFx0XHRcdFx0XHRcdFx0LnRyaWdnZXIoZXZlbnQpXG5cdFx0XHRcdFx0XHRcdFx0XHQ7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGNhdGNoIChlKVxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vY29uc29sZS5lcnJvcihlLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKClcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoY29yZV9yZXBseV93cmFwcGVyLmZpbmQoJy5sb2FkaW5nX3JlcGx5JykubGVuZ3RoKVxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb3JlX3JlcGx5X3dyYXBwZXIucmVtb3ZlQXR0cignZGF0YS1sb2FkZWQnKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9LCAyMDApO1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29yZV9yZXBseV9oYW5kbGVyKGNvcmVfcmVwbHkpO1xuXHRcdFx0XHRcdFx0XHR9LCAxMDAwICsgbiAqIDEwMCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0O1xuXHRcdFx0fSkpXG5cdFx0XHQudHJpZ2dlckhhbmRsZXIoJ2xvYWQnKVxuXHRcdDtcblxuXHRcdCQoJ2JvZHknKS5vbignRE9NTm9kZUluc2VydGVkJywgJyNmcnNfbGlzdF9wYWdlciwgI3RocmVhZF9saXN0JywgZGVib3VuY2UoNTAwLCBmdW5jdGlvbiAoKVxuXHRcdHtcblx0XHRcdCQod2luZG93KVxuXHRcdFx0XHQudHJpZ2dlckhhbmRsZXIoJ2xvYWQubGlzdCcpXG5cdFx0XHQ7XG5cdFx0fSkpO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKVxuXHRcdHtcblx0XHRcdCQod2luZG93KVxuXHRcdFx0XHQudHJpZ2dlckhhbmRsZXIoJ2xvYWQubGlzdCcpXG5cdFx0XHQ7XG5cdFx0fSwgNTAwKTtcblxuXHRcdCQoJyNmcnNfbGlzdF9wYWdlcicpXG5cdFx0XHQub24oJ0RPTU5vZGVJbnNlcnRlZC5wYWdlJywgZGVib3VuY2UoMjAwLCBhc3luYyBmdW5jdGlvbiAoKVxuXHRcdFx0e1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKGV2ZW50LnR5cGUsIHRoaXMsIGV2ZW50LnRhcmdldCk7XG5cdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0JCh3aW5kb3cpLnNjcm9sbFRvKCcuaGVhZF9jb250ZW50IC5jYXJkX3RpdGxlLCAjY29udGVudCwgI3RhYl9mb3J1bW5hbWUnKTtcblx0XHRcdH0pKVxuXHRcdDtcblxuLy9cdFx0JCgnYm9keScpXG4vL1x0XHRcdC5vbignRE9NTm9kZUluc2VydGVkJywgJy5wYl9mb290ZXIgLmxfdGhyZWFkX2luZm8nLCBkZWJvdW5jZSgyMDAsIGZ1bmN0aW9uIChldmVudClcbi8vXHRcdFx0e1xuLy9cdFx0XHRcdGNvbnNvbGUubG9nKCdET01Ob2RlSW5zZXJ0ZWQnLCB0aGlzLCBldmVudC50YXJnZXQpO1xuLy9cdFx0XHRcdCQod2luZG93KS50cmlnZ2VySGFuZGxlcignbG9hZCcpO1xuLy9cdFx0XHR9KSlcbi8vXHRcdDtcblxuXHRcdCQoJyNqX2NvcmVfdGl0bGVfd3JhcCcpXG5cdFx0XHQub24oJ0RPTU5vZGVJbnNlcnRlZCcsICcuY29yZV90aXRsZV90eHQnLCB0aHJvdHRsZSgyMDAsIGFzeW5jIGZ1bmN0aW9uIChldmVudClcblx0XHRcdHtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhldmVudC50eXBlLCB0aGlzLCBldmVudC50YXJnZXQpO1xuXHRcdFx0XHQkKHdpbmRvdykudHJpZ2dlckhhbmRsZXIoJ2xvYWQnKTtcblx0XHRcdH0pKVxuXHRcdDtcblx0fSxcblxuXHRhZGJsb2NrKF91cmxfb2JqID0gZ2xvYmFsLl91cmxfb2JqKVxuXHR7XG5cblx0fSxcblxuXHRjbGVhcmx5KF91cmxfb2JqID0gZ2xvYmFsLl91cmxfb2JqLCBfZG9tX2xpc3QgPSBudWxsKVxuXHR7XG5cdFx0bGV0IF9kb20gPSAkKF9kb21fbGlzdCk7XG5cblx0XHRfZG9tID0gX2RvbVxuXHRcdFx0LmFkZCgkKCcjY29udGFpbmVyJykucGFyZW50c1VudGlsKCdib2R5JykuYWRkQmFjaygpLnNpYmxpbmdzKCkpXG5cdFx0XHQuYWRkKCQoJyNmb290ZXInKS5uZXh0QWxsKCkpXG5cdFx0XHQuYWRkKFtcblx0XHRcdFx0Jy5zaGFyZV9idG5fd3JhcHBlciwgI2NlbGVicml0eSwgI215X3RpZWJhX21vZCwgLnJpZ2h0X3NlY3Rpb24sIC5zZWUtaW1hZ2UtYnRuLCAjc2lnbl9tb2QnLFxuXHRcdFx0XHQnI2pfaGVhZF9mb2N1c19idG4sIC5kZWVwcmVhZC1idG4sICNpY29uLXJlcGx5LCAucF9hdXRob3JfZmFjZS5yb3VuZC1hdmF0YXIsICN0Yl9yaWNoX3Bvc3Rlcl9jb250YWluZXInLFxuXHRcdFx0XHQnLmNvcmVfcmVwbHlfd3JhcHBlciAual91c2VyX2NhcmQnLFxuXHRcdFx0XHQnYm9keSA6aGlkZGVuLCBpZnJhbWUsIHNjcmlwdCcsXG5cdFx0XHRcdCcjZm9vdGVyLCAjcGItZm9vdGVyLWhlYWRlciwgI3F1aWNrX3JlcGx5Jyxcblx0XHRcdFx0Jy5qX3VzZXJfc2lnbicsXG5cblx0XHRcdFx0Jy5wX2F1dGhvciAuZF9pY29ucywgLnNhdmVfZmFjZV9jYXJkLCAuZF9uYW1lX2ljb24sIC5zYXZlX2ZhY2VfYmcnLFxuXG5cdFx0XHRcdCcuaWNvbl90YndvcmxkLCAuQkRFX1NtaWxleScsXG5cdFx0XHRcdCcubG91emh1Ymlhb3NoaV93cmFwLCAuc2F2ZV9mYWNlX2NhcmQnLFxuXHRcdFx0XS5qb2luKCkpXG5cdFx0O1xuXG5cdFx0JCgnLmRfYmFkZ2VfbHYnKS5yZW1vdmVBdHRyKCdjbGFzcycpO1xuXG5cdFx0Ly9fZG9tLnJlbW92ZSgpO1xuXG5cdFx0cmV0dXJuIF9kb207XG5cdH0sXG59O1xuXG5leHBvcnQgPSBvIGFzIElEZW1vO1xuXG5hc3luYyBmdW5jdGlvbiBzaWduKF91cmxfb2JqID0gZ2xvYmFsLl91cmxfb2JqLCBib29sPzogYm9vbGVhbilcbntcblx0Y29uc3QgUHJvbWlzZSA9IHJlcXVpcmUoJ2JsdWViaXJkJyk7XG5cblx0YXdhaXQgUHJvbWlzZS5kZWxheSgxMDAwKTtcblxuXHRsZXQgYiA9ICQoJyNqX2hlYWRfZm9jdXNfYnRuJyk7XG5cdGxldCBhID0gJCgnI3NpZ25fbW9kICNzaWduc3Rhcl93cmFwcGVyIGEual9jYW5zaWduJyk7XG5cblx0aWYgKGEubGVuZ3RoKVxuXHR7XG5cdFx0aWYgKGIuaXMoJy5jYW5jZWxfZm9jdXMnKSlcblx0XHR7XG5cdFx0XHRhWzBdLmNsaWNrKCk7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmRlbGF5KDUwMCk7XG5cdFx0XHRhWzBdLmNsaWNrKCk7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmRlbGF5KDUwMCk7XG5cdFx0XHQkKCcual9zdWNjX2luZm8uc2lnbl9zdWNjMScpLmhpZGUoKTtcblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKCFib29sKVxuXHRcdHtcblx0XHRcdGIub25lKCdjbGljay5zaWduJywgZnVuY3Rpb24gKClcblx0XHRcdHtcblx0XHRcdFx0c2lnbihfdXJsX29iaiwgdHJ1ZSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxufVxuXG5mdW5jdGlvbiBsYXp5bG9hZChfdXJsX29iailcbntcblx0Y29uc3QgbGliU2l0ZUJhaWR1VGllYmEgPSByZXF1aXJlKCdyb290L2xpYi9zaXRlL2JhaWR1L3RpZWJhJyk7XG5cblx0JCgnaW1nLkJERV9JbWFnZVtkYXRhLW9yaWdpbmFsXSwgaW1nLnRocmVhZGxpc3RfcGljJylcblx0XHQubm90KCdbZGF0YS1kb25lXScpXG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdC5hdHRyKCdkYXRhLWRvbmUnLCB0cnVlKVxuXHRcdC5hdHRyKCdzcmMnLCBmdW5jdGlvbiAoaSwgb2xkKVxuXHRcdHtcblx0XHRcdGxldCBfdGhpcyA9ICQodGhpcyk7XG5cdFx0XHRsZXQgc3JjID0gX3RoaXMuYXR0cignZGF0YS1vcmlnaW5hbCcpO1xuXG5cdFx0XHRsZXQgX2ltZyA9IGxpYlNpdGVCYWlkdVRpZWJhLmJkZV9pbWFnZShfdGhpcy5jbG9uZSgpKTtcblxuXHRcdFx0aWYgKF9pbWcpXG5cdFx0XHR7XG5cdFx0XHRcdF90aGlzLmF0dHIoJ2JwaWMnLCBfaW1nLmRhdGEoJ2Z1bGxzcmMnKSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvbGQgIT0gc3JjKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gc3JjO1xuXHRcdFx0fVxuXHRcdH0pXG5cdDtcbn1cblxuZnVuY3Rpb24gY29yZV9yZXBseV9oYW5kbGVyKF90aGlzKVxue1xuXHRsZXQgY2hrID0gX3RoaXMuZmluZCgnLmx6bF9saW5rX2ZvbGQ6dmlzaWJsZSwgLmxvYWRpbmdfcmVwbHknKTtcblx0bGV0IGVsZW0gPSBfdGhpcy5maW5kKCcuY29yZV9yZXBseV93cmFwcGVyJyk7XG5cblx0bGV0IG1pbl9oZWlnaHQgPSBlbGVtLmNzcygnbWluLWhlaWdodCcpLnJlcGxhY2UoL3B4JC8sICcnKTtcblx0bGV0IGhlaWdodCA9IGVsZW0uaGVpZ2h0KCk7XG5cblx0MCAmJiBjb25zb2xlLmxvZyhlbGVtLCB7XG5cdFx0bWluX2hlaWdodCxcblx0XHRoZWlnaHQsXG5cdFx0Y2hrOiBjaGsubGVuZ3RoLFxuXHR9KTtcblxuXHRpZiAobWluX2hlaWdodCA8PSA1MCB8fCBoZWlnaHQgPD0gNTApXG5cdHtcblx0XHQvLyDomZXnkIbmjbLli5XmmYLmnIPlm6DngrrnlZnoqIDljYDnmoTpq5jluqbororli5XlsI7oh7TlrprkvY0g5Lul5Y+KIOeci+WIsOeZveiJsuWFp+WuueeahOWVj+mhjFxuXHRcdGVsZW0uY3NzKCdtaW4taGVpZ2h0JywgJ2F1dG8nKTtcblx0fVxuXG5cdGlmIChjaGsubGVuZ3RoKVxuXHR7XG5cdFx0Ly9lbGVtLnNob3coKTtcblx0fVxuXHRlbHNlXG5cdHtcblx0XHQvL2VsZW0uaGlkZSgpO1xuXHR9XG5cblx0Ly9jb25zb2xlLmxvZyhlbGVtLCBjaGspO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQYWdlRGF0YShQYWdlRGF0YT8pOiBJQmFpZHVUaWViYVBhZ2VEYXRhXG57XG5cdHJldHVybiBQYWdlRGF0YSA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0dGhyZWFkOiB7fSxcblx0XHQvLyBAdHMtaWdub3JlXG5cdH0sIHVuc2FmZVdpbmRvdy5QYWdlRGF0YSk7XG59XG4iXX0=