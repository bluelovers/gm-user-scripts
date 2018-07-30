"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    main(_url_obj = global._url_obj) {
        const GMApi = require('root/lib/greasemonkey/gm/api').GMApi;
        const _uf_dom_filter_link = require('root/lib/dom/filter/link');
        const libSiteBaiduTieba = require('root/lib/site/baidu/tieba');
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
            `.deepread-wrap { font-size: 9pt; }`,
            `.j_thread_list .threadlist_title .see_lz { 
				display: none; 
				}`,
            `.j_thread_list:hover .threadlist_title .see_lz { display: inline-block; }`,
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
        let PageData;
        let _toc_inited = false;
        let _toc_area = $('<div class="_post-toc"/>');
        let _toc = $('<dl style="list-style-type: unset;"/>').appendTo(_toc_area);
        $('body').on('DOMNodeInserted', '#com_userbar', debounce(1000, function () {
            $(window).triggerHandler('load.menu');
        }));
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
        $(window)
            .on('load.sign', debounce(1000, function () {
            sign(_url_obj);
            $(window).triggerHandler('scroll.load');
        }))
            .on('load.menu', debounce(1000, function () {
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
            .on('load', debounce(200, function () {
            PageData = $.extend({}, {
                thread: {},
            }, unsafeWindow.PageData);
            $('.p_postlist > .l_post:has(.louzhubiaoshi_wrap)').css({
                border: '1px solid #2d64b3',
            });
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
            $([
                '.feed_item a.itb_kw[title][href*="..."]',
            ].join(',')).attr('href', function () {
                let title = $(this).attr('title');
                return '/f?kw=' + title;
            });
            let floor;
            let last_post;
            let n = 0;
            let _toc_reset = true;
            let p_postlist_post = $('.p_postlist .l_post[data-field]');
            p_postlist_post
                .each(function () {
                if (!_toc_inited) {
                    _toc_inited = true;
                    _toc_area
                        .insertBefore('#container');
                }
                if (_toc_reset) {
                    _toc_reset = false;
                    _toc.empty();
                    $('.card_top_wrap').outerHeight($('.card_top_wrap .card_top').outerHeight());
                    $(window).triggerHandler('scroll.load');
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
                _this.data('field-data', _field);
                let floor_elem = _this.find('.post-tail-wrap > .tail-info:eq(-2)');
                let c = _field.content.post_no;
                if (c && !Number.isNaN(c)) {
                    console.log(c, _field.author.user_name, _field);
                    let _a = $(`<dt></dt>`)
                        .html(`<a href="javascript:void(0)">#${c} ` + $('.p_author .p_author_name', _this)
                        .html() + '</a>');
                    _a.attr('title', _a.text());
                    _a.on('click', function () {
                        $(window).triggerHandler('scroll.load');
                        $(window).scrollTo(_this, -70);
                    });
                    _a.appendTo(_toc);
                }
            })
                .filter(':not([data-floor-check])')
                .each(function () {
                n++;
                let _this = $(this);
                let _post = _this;
                _this.attr('data-floor-check', true);
                let floor_elem = _this.find('.post-tail-wrap > .tail-info:eq(-2)');
                let c = Number(floor_elem.text().replace(/\D/g, ''));
                if (Number.isNaN(c) || Number.isNaN(floor)) {
                    console.error(floor_elem, c, floor);
                }
                if (typeof floor == 'number' && c != floor + 1 && !Number.isNaN(c)) {
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
                    else {
                        console.error(floor_elem, c, floor, a);
                    }
                }
                floor = c;
                last_post = _this;
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
            .on('load.list', throttle(500, function () {
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
            console.log('load.list', ls);
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
        $('.pb_footer .l_thread_info')
            .on('DOMNodeInserted', debounce(200, function () {
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
async function sign(_url_obj = global._url_obj) {
    const Promise = require('bluebird');
    await Promise.delay(1000);
    let a = $('#sign_mod #signstar_wrapper a.j_cansign');
    if (a.length) {
        a[0].click();
        await Promise.delay(500);
        a[0].click();
        await Promise.delay(500);
        $('.j_succ_info.sign_succ1').hide();
        return true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGllYmEuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInNyYy91eC10d2Vhay1zYy9hY2cvYmFpZHUvdGllYmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFlQSxJQUFJLENBQUMsR0FBVTtJQUVkLFFBQVEsRUFBRTtRQUNULE9BQU8sRUFBRTtZQUNSLDJCQUEyQjtTQUMzQjtRQUNELEtBQUssRUFBRTtZQUNOLGlDQUFpQztZQUNqQyxtQ0FBbUM7WUFDbkMsK0JBQStCO1lBQy9CLHNDQUFzQztZQUN0QywyQkFBMkI7U0FDM0I7UUFDRCxPQUFPLEVBQUUsRUFBRTtRQUVYLEtBQUssRUFBRTtZQUNOLGlCQUFpQjtTQUNqQjtLQUNEO0lBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUTtRQUU5QixJQUFJLEdBQUcsQ0FBQztRQUVSLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDdEY7WUFDQyxPQUFPLElBQUksQ0FBQztTQUNaO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUTtRQUU5QixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDNUQsTUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUNoRSxNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBRS9ELENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFO1lBRXpCLG1CQUFtQixDQUFDO2dCQUNuQix3RUFBd0U7YUFDeEUsQ0FBQztpQkFDQSxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUN6QjtZQUVELENBQUMsQ0FB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QUFNLElBQUksRUFBRSxFQUNwQztRQUVDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQy9CO0lBRUQsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUNkO0tBRUM7U0FFRDtLQUVDO0FBR0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTcvOC8zLzAwMy5cbiAqL1xuXG5pbXBvcnQgeyBJRGVtbywgSUdsb2JhbCwgSUdyZWFzZW1vbmtleSwgSVdpbmRvdywgSUpRdWVyeVN0YXRpYywgSVVybE9iamVjdDIgfSBmcm9tICdyb290L2xpYi9jb3JlL2RlbW8nO1xuXG5kZWNsYXJlIGNvbnN0IGdsb2JhbDogSUdsb2JhbDtcbmRlY2xhcmUgY29uc3QgZ3JlYXNlbW9ua2V5OiBJR3JlYXNlbW9ua2V5O1xuZGVjbGFyZSBjb25zdCB3aW5kb3c6IElXaW5kb3c7XG5kZWNsYXJlIGNvbnN0IHVuc2FmZVdpbmRvdzogSVdpbmRvdztcbmRlY2xhcmUgY29uc3QgJDogSUpRdWVyeVN0YXRpYztcbmRlY2xhcmUgY29uc3QgalF1ZXJ5OiBJSlF1ZXJ5U3RhdGljO1xuXG5pbXBvcnQgeyBJQmFpZHVUaWViYVBhZ2VEYXRhLCBJQmFpZHVUaWViYVBvc3RGaWVsZCB9IGZyb20gJ3Jvb3QvbGliL3NpdGUvYmFpZHUvdGllYmEnO1xuXG5sZXQgbzogSURlbW8gPSB7XG5cblx0bWV0YWRhdGE6IHtcblx0XHRpbmNsdWRlOiBbXG5cdFx0XHQnaHR0cCo6Ly90aWViYS5iYWlkdS5jb20vKicsXG5cdFx0XSxcblx0XHRtYXRjaDogW1xuXHRcdFx0Jyo6Ly90aWViYS5iYWlkdS5jb20vaS9pL215X3RpZSonLFxuXHRcdFx0Jyo6Ly90aWViYS5iYWlkdS5jb20vaS9pL215X3JlcGx5KicsXG5cdFx0XHQnKjovL3RpZWJhLmJhaWR1LmNvbS9pL2kvYXRtZSonLFxuXHRcdFx0Jyo6Ly90aWViYS5iYWlkdS5jb20vaS9pL3N0b3JldGhyZWFkKicsXG5cdFx0XHQnKjovL3RpZWJhLmJhaWR1LmNvbS9wbWMvKicsXG5cdFx0XSxcblx0XHRleGNsdWRlOiBbXSxcblxuXHRcdGdyYW50OiBbXG5cdFx0XHQnR01fc2V0Q2xpcGJvYXJkJyxcblx0XHRdLFxuXHR9LFxuXG5cdHRlc3QoX3VybF9vYmogPSBnbG9iYWwuX3VybF9vYmopXG5cdHtcblx0XHRsZXQgcmV0O1xuXG5cdFx0aWYgKHJldCA9IHJlcXVpcmUoJ3Jvb3QvbGliL2dyZWFzZW1vbmtleS9tYXRjaCcpLmF1dG8oX3VybF9vYmouc291cmNlLCBtb2R1bGUuZXhwb3J0cykpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXG5cdG1haW4oX3VybF9vYmogPSBnbG9iYWwuX3VybF9vYmopXG5cdHtcblx0XHRjb25zdCBHTUFwaSA9IHJlcXVpcmUoJ3Jvb3QvbGliL2dyZWFzZW1vbmtleS9nbS9hcGknKS5HTUFwaTtcblx0XHRjb25zdCBfdWZfZG9tX2ZpbHRlcl9saW5rID0gcmVxdWlyZSgncm9vdC9saWIvZG9tL2ZpbHRlci9saW5rJyk7XG5cdFx0Y29uc3QgbGliU2l0ZUJhaWR1VGllYmEgPSByZXF1aXJlKCdyb290L2xpYi9zaXRlL2JhaWR1L3RpZWJhJyk7XG5cblx0XHQkKHdpbmRvdykub24oJ2xvYWQubGluaycsIGZ1bmN0aW9uICgpXG5cdFx0e1xuXHRcdFx0X3VmX2RvbV9maWx0ZXJfbGluayhbXG5cdFx0XHRcdCcudV9pdGllYmEgYSwgLnVfbmV3cyBhLCAudV91c2VybmFtZSBhLCAuY29tX3VzZXJiYXIgYSwgI2pfdV91c2VybmFtZSBhJyxcblx0XHRcdF0pXG5cdFx0XHRcdC5hdHRyKCd0YXJnZXQnLCAnX2JsYW5rJylcblx0XHRcdDtcblxuXHRcdFx0JCgnLnVfaXRpZWJhIGEsIC51X25ld3MgYSwgLnVfdXNlcm5hbWUgYSwgLmNvbV91c2VyYmFyIGEsICNqX3VfdXNlcm5hbWUgYScpLmF0dHIoJ3RhcmdldCcsICdfYmxhbmsnKTtcblx0XHR9KS50cmlnZ2VySGFuZGxlcignbG9hZC5saW5rJyk7XG5cblx0XHQkKCdib2R5Jykub24oJ2hvdmVyJywgJyNqX3VfdXNlcm5hbWUsIC51X3VzZXJuYW1lLCAudV91c2VybmFtZSBsaSwgLnVfZGRsX2Nvbl90b3AnLCBmdW5jdGlvbiAoKVxuXHRcdHtcblx0XHRcdCQod2luZG93KS50cmlnZ2VySGFuZGxlcignbG9hZC5saW5rJyk7XG5cdFx0fSk7XG5cblx0XHRncmVhc2Vtb25rZXlcblx0XHRcdC5HTV9hZGRTdHlsZShbXG5cblx0XHRcdFx0YC5kX3Bvc3RfY29udGVudCB7IGxpbmUtaGVpZ2h0OiAxLjQ1ZW07IH1gLFxuXG5cdFx0XHRcdC8vYC5sX3Bvc3RfYnJpZ2h0LCAuc2tpbl9ub3JtYWwgLndyYXAxLCAucGJfY29udGVudCB7IGJhY2tncm91bmQ6ICNlNmQ3YmQ7IH1gLFxuXHRcdFx0XHRgLmRfcG9zdF9jb250ZW50X21haW4geyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfWAsXG5cdFx0XHRcdC8vYC5jb3JlX3RpdGxlX3dyYXBfYnJpZ2h0IHsgYmFja2dyb3VuZDogI2ZmZjk7IH1gLFxuXG5cdFx0XHRcdGAudGJ1aV9hc2lkZV9mbG9hdF9iYXIgeyBvcGFjaXR5OiAwLjU7IH0gXG5cdFx0XHRcdFx0LnRidWlfYXNpZGVfZmxvYXRfYmFyOmhvdmVyIHsgb3BhY2l0eTogMC44OyB9YCxcblxuXHRcdFx0XHRgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC5yaWdodF9zZWN0aW9uIHsgZGlzcGxheTogbm9uZTsgfVxuXHRcdFx0XHRcdC5sZWZ0X3NlY3Rpb24geyBmbG9hdDogbm9uZTsgbWFyZ2luOiBhdXRvOyB9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0LnNlYXJjaF9icmlnaHQgLnNlYXJjaF9pcHQsIC5sX2NvbnRhaW5lciwgLmNvbnRlbnQsIC5wYl9jb250ZW50LCAudGhyZWFkX3RoZW1lXzUsIC5wYl9mb290ZXIsIC5wYl9mb290ZXIgLnBfdGhyZWFkLCAudGJfcmljaF9wb3N0ZXJfY29udGFpbmVyLCAuc2VhcmNoX2JyaWdodCAuc2VhcmNoX2Zvcm0sIC5uYXZfbGlzdCB7IHdpZHRoOiBhdXRvOyB9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0fWAsXG5cblx0XHRcdFx0YEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC5jb3JlX3RpdGxlX3dyYXBfYnJpZ2h0IHsgd2lkdGg6IDEwMCU7IH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQuZF9wb3N0X2NvbnRlbnRfbWFpbiB7IHBhZGRpbmctbGVmdDogMHB4OyB9XG5cdFx0XHRcdFx0LmRfYXV0aG9yLCAuZF9hdXRob3JfYW5vbnltIHsgZGlzcGxheTogbm9uZTsgfVxuXHRcdFx0XHRcdC5wX2NvbnRlbnQgeyBwYWRkaW5nLXJpZ2h0OiAwcHg7IH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQuZF9wb3N0X2NvbnRlbnRfbWFpbiB7IGZsb2F0OiBub25lO21hcmdpbjogYXV0bzsgfVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdH1gLFxuXG5cdFx0XHRdKVxuXHRcdDtcblxuXHRcdGdyZWFzZW1vbmtleVxuXHRcdFx0LkdNX2FkZFN0eWxlKFtcblx0XHRcdFx0YCNjb21fdXNlcmJhciB7IHBvc2l0aW9uOiBmaXhlZDsgdG9wOiA1NXB4OyBiYWNrZ3JvdW5kOiAjZmZmOTsgfWAsXG5cdFx0XHRcdGAjY29tX3VzZXJiYXIgLnVfYmRob21lIHsgZGlzcGxheTogbm9uZTsgfWAsXG5cdFx0XHRcdGAuZmxvb3ItY2hlY2stbWlzcyB7IHBhZGRpbmc6IDEwcHg7YmFja2dyb3VuZC1jb2xvcjogIzQ1MTE1OTtib3JkZXItcmFkaXVzOiA1cHg7cGFkZGluZy1ib3R0b206IDZweDtjb2xvcjogI2ZmZjt0ZXh0LWFsaWduOiBjZW50ZXI7bWFyZ2luOiA1cHg7bWFyZ2luLWxlZnQ6IGF1dG87fWAsXG5cdFx0XHRcdGAuZmxvb3ItY2hlY2stbWlzczpob3ZlciB7IG9wYWNpdHk6IDAuOTsgfWAsXG5cblx0XHRcdFx0YC50aHJlYWRsaXN0X3RpdGxlIHtcblx0XHRcdFx0d29yZC13cmFwOiBicmVhay13b3JkO1xuXHRcdFx0XHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XG5cdFx0XHRcdHdoaXRlLXNwYWNlOiBub3JtYWw7XG5cdFx0XHRcdH1gLFxuXG5cdFx0XHRcdGAuc2VlX2x6IHsgXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAxZW07XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50OyBcblx0XHRcdFx0Zm9udC1zaXplOiA5cHQ7XG5cdFx0XHRcdHBhZGRpbmc6IDJweCA4cHggMXB4O1xuXHRcdFx0XHR0ZXh0LXNoYWRvdzogaW5pdGlhbDtcblx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcblx0XHRcdFx0fWAsXG5cblx0XHRcdFx0YC5kZWVwcmVhZC13cmFwIHsgZm9udC1zaXplOiA5cHQ7IH1gLFxuXG5cdFx0XHRcdGAual90aHJlYWRfbGlzdCAudGhyZWFkbGlzdF90aXRsZSAuc2VlX2x6IHsgXG5cdFx0XHRcdGRpc3BsYXk6IG5vbmU7IFxuXHRcdFx0XHR9YCxcblx0XHRcdFx0YC5qX3RocmVhZF9saXN0OmhvdmVyIC50aHJlYWRsaXN0X3RpdGxlIC5zZWVfbHogeyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1gLFxuXG5cdFx0XHRcdGAuX3Bvc3QtdG9jIHsgXG5cdFx0XHRcdGRpc3BsYXk6IG5vbmU7IFxuXHRcdFx0XHRwb3NpdGlvbjogc3RpY2t5OyBcblx0XHRcdFx0bWF4LXdpZHRoOiAxNTBweDsgXG5cdFx0XHRcdHRvcDogNTVweDsgXG5cdFx0XHRcdGZsb2F0OiBsZWZ0OyBcblx0XHRcdFx0Ly9tYXJnaW4tbGVmdDogLTE1MHB4O1xuXHRcdFx0XHRsZWZ0OiAxNTBweDtcblx0XHRcdFx0Zm9udC1zaXplOiAwLjdlbTtcblx0XHRcdFx0b3BhY2l0eTogMC41O1xuXHRcdFx0XHRvdmVyZmxvdy14OiBoaWRkZW47XG5cdFx0XHRcdH1gLFxuXG5cdFx0XHRcdGAuX3Bvc3QtdG9jIGEgeyBtaW4td2lkdGg6IDEwMHB4OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGxpbmUtaGVpZ2h0OiAyZW07IG1pbi1oZWlnaHQ6IDJlbTsgfWAsXG5cblx0XHRcdFx0YC5fcG9zdC10b2M6aG92ZXIgeyBvcGFjaXR5OiAxOyB9YCxcblxuXHRcdFx0XHRgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcblx0XHRcdFx0XHQuX3Bvc3QtdG9jIHsgbGVmdDogMTAwcHg7IH1cblx0XHRcdFx0fWAsXG5cblx0XHRcdFx0YEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XG5cdFx0XHRcdFx0Ll9wb3N0LXRvYyB7IGxlZnQ6IDUwcHg7IH1cblx0XHRcdFx0fWAsXG5cblx0XHRcdFx0YEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XG5cdFx0XHRcdFx0Ll9wb3N0LXRvYyB7IGxlZnQ6IDEwcHg7IH1cblx0XHRcdFx0fWAsXG5cblx0XHRcdFx0YEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XG5cdFx0XHRcdFx0Ll9wb3N0LXRvYyB7IGRpc3BsYXk6IGJsb2NrOyB9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aHRtbCwgYm9keSwgOnJvb3Rcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1gLFxuXG5cdFx0XHRdKVxuXHRcdDtcblxuXHRcdGNvbnN0IHRocm90dGxlID0gcmVxdWlyZSgndGhyb3R0bGUtZGVib3VuY2UvdGhyb3R0bGUnKTtcblx0XHRjb25zdCBkZWJvdW5jZSA9IHJlcXVpcmUoJ3Rocm90dGxlLWRlYm91bmNlL2RlYm91bmNlJyk7XG5cdFx0Y29uc3QgX3VmX2RvbmUgPSByZXF1aXJlKCdyb290L2xpYi9ldmVudC9kb25lJyk7XG5cblx0XHRsZXQgUGFnZURhdGE6IElCYWlkdVRpZWJhUGFnZURhdGE7XG5cblx0XHRsZXQgX3RvY19pbml0ZWQgPSBmYWxzZTtcblxuXHRcdGxldCBfdG9jX2FyZWEgPSAkKCc8ZGl2IGNsYXNzPVwiX3Bvc3QtdG9jXCIvPicpO1xuXHRcdGxldCBfdG9jID0gJCgnPGRsIHN0eWxlPVwibGlzdC1zdHlsZS10eXBlOiB1bnNldDtcIi8+JykuYXBwZW5kVG8oX3RvY19hcmVhKTtcblxuXHRcdCQoJ2JvZHknKS5vbignRE9NTm9kZUluc2VydGVkJywgJyNjb21fdXNlcmJhcicsIGRlYm91bmNlKDEwMDAsIGZ1bmN0aW9uICgpXG5cdFx0e1xuXHRcdFx0JCh3aW5kb3cpLnRyaWdnZXJIYW5kbGVyKCdsb2FkLm1lbnUnKTtcblx0XHR9KSk7XG5cblx0XHQkKCcjcGJfY29udGVudCcpXG5cdFx0XHQub24oJ2NsaWNrJywgJ2ltZy5CREVfSW1hZ2UnLCBmdW5jdGlvbiAoZXZlbnQpXG5cdFx0XHR7XG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBAdHlwZSBKUXVlcnk8SFRNTEVsZW1lbnQ+XG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRsZXQgX2ltZyA9IGxpYlNpdGVCYWlkdVRpZWJhLmJkZV9pbWFnZSh0aGlzKTtcblxuXHRcdFx0XHRpZiAoX2ltZyAmJiBfaW1nLmxlbmd0aClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxldCBuYW1lX2lkID0gX2ltZy5hdHRyKCdkYXRhLWlkJyk7XG5cblx0XHRcdFx0XHRsZXQgdXJsO1xuXG5cdFx0XHRcdFx0aWYgKFBhZ2VEYXRhICYmIFBhZ2VEYXRhLmZvcnVtICYmIFBhZ2VEYXRhLnRocmVhZClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR1cmwgPSBbXG5cdFx0XHRcdFx0XHRcdGBodHRwOi8vdGllYmEuYmFpZHUuY29tL3Bob3RvL3A/YCxcblx0XHRcdFx0XHRcdFx0YGt3PSR7UGFnZURhdGEuZm9ydW0ubmFtZV91cmx9YCxcblx0XHRcdFx0XHRcdFx0YCZmbHV4PTEmdGlkPSR7UGFnZURhdGEudGhyZWFkLnRocmVhZF9pZH1gLFxuXHRcdFx0XHRcdFx0XHRgJnBpY19pZD0ke25hbWVfaWR9YCxcblx0XHRcdFx0XHRcdFx0YCZwbj0xJmZwPTImc2VlX2x6PTAmcmVkX3RhZz1zMjY5ODk5MzUzM2AsXG5cdFx0XHRcdFx0XHRdLmpvaW4oJycpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR1cmwgPSBfaW1nLnByb3AoJ3NyYycpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdF91Zl9kb25lKGV2ZW50KTtcblxuXHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHR3aW5kb3cub3Blbih1cmwsIG5hbWVfaWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdDtcblxuXHRcdCQoJ2JvZHknKS5vbignRE9NTm9kZUluc2VydGVkJywgJyN0aHJlYWRfbGlzdCAual90aHJlYWRfbGlzdCAubWVkaWFfYm94JywgZGVib3VuY2UoNTAwLCBmdW5jdGlvbiAoZXZlbnQpXG5cdFx0e1xuXHRcdFx0bGV0IF9pbWcgPSAkKCdpbWdbaWRePVwiYmlnX2ltZ19cIl0nLCB0aGlzKTtcblxuXHRcdFx0MCAmJiBjb25zb2xlLmxvZyh7XG5cdFx0XHRcdFwidGhpc1wiOiB0aGlzLFxuXHRcdFx0XHR0YXJnZXQ6IGV2ZW50LnRhcmdldCxcblx0XHRcdFx0X2ltZyxcblx0XHRcdH0pO1xuXG5cdFx0XHRfaW1nLmVhY2goZnVuY3Rpb24gKClcblx0XHRcdHtcblx0XHRcdFx0bGliU2l0ZUJhaWR1VGllYmEuYmRlX2ltYWdlKHRoaXMpO1xuXHRcdFx0fSk7XG5cblx0XHR9KSk7XG5cblx0XHQkKHdpbmRvdylcblx0XHRcdC5vbignbG9hZC5zaWduJywgZGVib3VuY2UoMTAwMCwgZnVuY3Rpb24gKClcblx0XHRcdHtcblx0XHRcdFx0c2lnbihfdXJsX29iaik7XG5cblx0XHRcdFx0JCh3aW5kb3cpLnRyaWdnZXJIYW5kbGVyKCdzY3JvbGwubG9hZCcpO1xuXHRcdFx0fSkpXG5cdFx0XHQub24oJ2xvYWQubWVudScsIGRlYm91bmNlKDEwMDAsIGZ1bmN0aW9uICgpXG5cdFx0XHR7XG5cdFx0XHRcdCQoJy51X25ld3MgdWwual9jYXRlZ29yeV9saXN0JykuZWFjaChmdW5jdGlvbiAoKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGV0IHVsID0gJCh0aGlzKTtcblxuXHRcdFx0XHRcdGlmICghdWwuZmluZCgnYS5qX2NsZWFyZGF0YVtkYXRhLXR5cGU9XCJmYXZ0c1wiXScpLmxlbmd0aClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR1bC5wcmVwZW5kKGA8bGkgY2xhc3M9XCJjYXRlZ29yeV9pdGVtIGNhdGVnb3J5X2l0ZW1fZW1wdHlcIj48YSBjbGFzcz1cImpfY2xlYXJkYXRhXCIgaHJlZj1cImh0dHA6Ly90aWViYS5iYWlkdS5jb20vaS9pL3N0b3JldGhyZWFkXCIgdGFyZ2V0PVwiX2JsYW5rXCIgZGF0YS10eXBlPVwiZmF2dHNcIj7miJHnmoTmlLbol488L2E+PC9saT5gKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIXVsLmZpbmQoJ2Eual9jbGVhcmRhdGFbZGF0YS10eXBlPVwibXlfdGllXCJdJykubGVuZ3RoKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHVsLnByZXBlbmQoYDxsaSBjbGFzcz1cImNhdGVnb3J5X2l0ZW0gY2F0ZWdvcnlfaXRlbV9lbXB0eVwiPjxhIGNsYXNzPVwial9jbGVhcmRhdGFcIiBocmVmPVwiaHR0cDovL3RpZWJhLmJhaWR1LmNvbS9pL2kvbXlfdGllXCIgdGFyZ2V0PVwiX2JsYW5rXCIgZGF0YS10eXBlPVwibXlfdGllXCI+5oiR55qE6LS05a2QPC9hPjwvbGk+YCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCF1bC5maW5kKCdhLmpfY2xlYXJkYXRhW2RhdGEtdHlwZT1cImF0bWVcIl0nKS5sZW5ndGgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dWwucHJlcGVuZChgPGxpIGNsYXNzPVwiY2F0ZWdvcnlfaXRlbSBjYXRlZ29yeV9pdGVtX2VtcHR5XCI+PGEgY2xhc3M9XCJqX2NsZWFyZGF0YVwiIGhyZWY9XCJodHRwOi8vdGllYmEuYmFpZHUuY29tL2kvaS9hdG1lXCIgdGFyZ2V0PVwiX2JsYW5rXCIgZGF0YS10eXBlPVwiYXRtZVwiPuafpeeci0Dmj5DliLDmiJE8L2E+PC9saT5gKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIXVsLmZpbmQoJ2Eual9jbGVhcmRhdGFbZGF0YS10eXBlPVwicmVwbHlcIl0nKS5sZW5ndGgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dWwucHJlcGVuZChgPGxpIGNsYXNzPVwiY2F0ZWdvcnlfaXRlbSBjYXRlZ29yeV9pdGVtX2VtcHR5XCI+PGEgY2xhc3M9XCJqX2NsZWFyZGF0YVwiIGhyZWY9XCJodHRwOi8vdGllYmEuYmFpZHUuY29tL2kvaS9yZXBseW1lXCIgdGFyZ2V0PVwiX2JsYW5rXCIgZGF0YS10eXBlPVwicmVwbHlcIj7mn6XnnIvlm57lpI08L2E+PC9saT5gKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIXVsLmZpbmQoJ2Eual9jbGVhcmRhdGFbZGF0YS10eXBlPVwicmVjeWNsZVwiXScpLmxlbmd0aClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQvL2h0dHA6Ly90aWViYS5iYWlkdS5jb20vcG1jL3JlY3ljbGVcblx0XHRcdFx0XHRcdHVsLmFwcGVuZChgPGxpIGNsYXNzPVwiY2F0ZWdvcnlfaXRlbSBjYXRlZ29yeV9pdGVtX2VtcHR5XCI+PGEgY2xhc3M9XCJqX2NsZWFyZGF0YVwiIGhyZWY9XCJodHRwOi8vdGllYmEuYmFpZHUuY29tL3BtYy9yZWN5Y2xlXCIgdGFyZ2V0PVwiX2JsYW5rXCIgZGF0YS10eXBlPVwicmVjeWNsZVwiPuWIoOi0tOS/oeaBrzwvYT48L2xpPmApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KSlcblx0XHRcdC5vbignbG9hZCcsIGRlYm91bmNlKDIwMCwgZnVuY3Rpb24gKClcblx0XHRcdHtcblx0XHRcdFx0UGFnZURhdGEgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0XHRcdHRocmVhZDoge30sXG5cdFx0XHRcdH0sIHVuc2FmZVdpbmRvdy5QYWdlRGF0YSk7XG5cblx0XHRcdFx0JCgnLnBfcG9zdGxpc3QgPiAubF9wb3N0OmhhcygubG91emh1Ymlhb3NoaV93cmFwKScpLmNzcyh7XG5cdFx0XHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICMyZDY0YjMnLFxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQkKFtcblx0XHRcdFx0XHQnLmNhcmRfdGl0bGVfZm5hbWUnLFxuXHRcdFx0XHRcdCcuc2ltcGxlX2Jsb2NrX2NvbnRhaW5lciAud3JhcF9jb250YWluZXIgLm5vd3JhcCBhJyxcblx0XHRcdFx0XHQnLnNpbXBsZV9ibG9ja19jb250YWluZXIgLnRfZm9yd2FyZCAuY29tbW9uX3NvdXJjZV9tYWluIGE6ZXEoLTEpJyxcblx0XHRcdFx0XS5qb2luKCcsJykpLmVhY2goZnVuY3Rpb24gKClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxldCB0aXRsZSA9ICQodGhpcykuYXR0cigndGl0bGUnKTtcblxuXHRcdFx0XHRcdGlmICh0aXRsZSlcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLnRleHQodGl0bGUgKyAodGl0bGUuc2xpY2UoLTEpID09ICflkKcnID8gJycgOiAn5ZCnJykpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0JChbXG5cdFx0XHRcdFx0Jy5mZWVkX2l0ZW0gYS5pdGJfa3dbdGl0bGVdW2hyZWYqPVwiLi4uXCJdJyxcblx0XHRcdFx0XS5qb2luKCcsJykpLmF0dHIoJ2hyZWYnLCBmdW5jdGlvbiAoKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGV0IHRpdGxlID0gJCh0aGlzKS5hdHRyKCd0aXRsZScpO1xuXG5cdFx0XHRcdFx0cmV0dXJuICcvZj9rdz0nICsgdGl0bGU7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGxldCBmbG9vcjtcblx0XHRcdFx0bGV0IGxhc3RfcG9zdDtcblx0XHRcdFx0bGV0IG4gPSAwO1xuXG5cdFx0XHRcdGxldCBfdG9jX3Jlc2V0ID0gdHJ1ZTtcblxuXHRcdFx0XHRsZXQgcF9wb3N0bGlzdF9wb3N0ID0gJCgnLnBfcG9zdGxpc3QgLmxfcG9zdFtkYXRhLWZpZWxkXScpO1xuXG5cdFx0XHRcdHBfcG9zdGxpc3RfcG9zdFxuXHRcdFx0XHRcdC5lYWNoKGZ1bmN0aW9uICgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aWYgKCFfdG9jX2luaXRlZClcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0X3RvY19pbml0ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRfdG9jX2FyZWFcblx0XHRcdFx0XHRcdFx0Ly8ucHJlcGVuZFRvKCcjY29udGFpbmVyJylcblx0XHRcdFx0XHRcdFx0XHQuaW5zZXJ0QmVmb3JlKCcjY29udGFpbmVyJylcblx0XHRcdFx0XHRcdFx0O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoX3RvY19yZXNldClcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0X3RvY19yZXNldCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRfdG9jLmVtcHR5KCk7XG5cblx0XHRcdFx0XHRcdFx0JCgnLmNhcmRfdG9wX3dyYXAnKS5vdXRlckhlaWdodCgkKCcuY2FyZF90b3Bfd3JhcCAuY2FyZF90b3AnKS5vdXRlckhlaWdodCgpKTtcblxuXHRcdFx0XHRcdFx0XHQkKHdpbmRvdykudHJpZ2dlckhhbmRsZXIoJ3Njcm9sbC5sb2FkJyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGxldCBfdGhpcyA9ICQodGhpcyk7XG5cblx0XHRcdFx0XHRcdGxldCBfZmllbGQ6IElCYWlkdVRpZWJhUG9zdEZpZWxkO1xuXHRcdFx0XHRcdFx0dHJ5XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGxldCBzID0gX3RoaXMuYXR0cignZGF0YS1maWVsZCcpO1xuXHRcdFx0XHRcdFx0XHRpZiAocylcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdF9maWVsZCA9IEpTT04ucGFyc2Uocyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNhdGNoIChlKVxuXHRcdFx0XHRcdFx0e1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdF9maWVsZCA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdFx0XHRcdFx0XHRhdXRob3I6IHt9LFxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiB7fSxcblx0XHRcdFx0XHRcdH0sIF9maWVsZCk7XG5cblx0XHRcdFx0XHRcdF90aGlzLmRhdGEoJ2ZpZWxkLWRhdGEnLCBfZmllbGQpO1xuXG5cdFx0XHRcdFx0XHRsZXQgZmxvb3JfZWxlbSA9IF90aGlzLmZpbmQoJy5wb3N0LXRhaWwtd3JhcCA+IC50YWlsLWluZm86ZXEoLTIpJyk7XG5cdFx0XHRcdFx0XHQvL2xldCBjID0gTnVtYmVyKGZsb29yX2VsZW0udGV4dCgpLnJlcGxhY2UoL1xcRC9nLCAnJykpO1xuXHRcdFx0XHRcdFx0bGV0IGMgPSBfZmllbGQuY29udGVudC5wb3N0X25vO1xuXG5cdFx0XHRcdFx0XHRpZiAoYyAmJiAhTnVtYmVyLmlzTmFOKGMpKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhjLCBfZmllbGQuYXV0aG9yLnVzZXJfbmFtZSwgX2ZpZWxkKTtcblxuXHRcdFx0XHRcdFx0XHRsZXQgX2EgPSAkKGA8ZHQ+PC9kdD5gKVxuXHRcdFx0XHRcdFx0XHRcdC5odG1sKGA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+IyR7Y30gYCArICQoJy5wX2F1dGhvciAucF9hdXRob3JfbmFtZScsIF90aGlzKVxuXHRcdFx0XHRcdFx0XHRcdFx0Lmh0bWwoKSArICc8L2E+Jylcblx0XHRcdFx0XHRcdFx0O1xuXG5cdFx0XHRcdFx0XHRcdF9hLmF0dHIoJ3RpdGxlJywgX2EudGV4dCgpKTtcblxuXHRcdFx0XHRcdFx0XHRfYS5vbignY2xpY2snLCBmdW5jdGlvbiAoKVxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0JCh3aW5kb3cpLnRyaWdnZXJIYW5kbGVyKCdzY3JvbGwubG9hZCcpO1xuXHRcdFx0XHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHRcdFx0XHQkKHdpbmRvdykuc2Nyb2xsVG8oX3RoaXMsIC03MCk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRcdF9hLmFwcGVuZFRvKF90b2MpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmZpbHRlcignOm5vdChbZGF0YS1mbG9vci1jaGVja10pJylcblx0XHRcdFx0XHQuZWFjaChmdW5jdGlvbiAoKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG4rKztcblxuXHRcdFx0XHRcdFx0bGV0IF90aGlzID0gJCh0aGlzKTtcblx0XHRcdFx0XHRcdGxldCBfcG9zdCA9IF90aGlzO1xuXG5cdFx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0XHRfdGhpcy5hdHRyKCdkYXRhLWZsb29yLWNoZWNrJywgdHJ1ZSk7XG5cblx0XHRcdFx0XHRcdGxldCBmbG9vcl9lbGVtID0gX3RoaXMuZmluZCgnLnBvc3QtdGFpbC13cmFwID4gLnRhaWwtaW5mbzplcSgtMiknKTtcblxuXHRcdFx0XHRcdFx0bGV0IGMgPSBOdW1iZXIoZmxvb3JfZWxlbS50ZXh0KCkucmVwbGFjZSgvXFxEL2csICcnKSk7XG5cblx0XHRcdFx0XHRcdGlmIChOdW1iZXIuaXNOYU4oYykgfHwgTnVtYmVyLmlzTmFOKGZsb29yKSlcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihmbG9vcl9lbGVtLCBjLCBmbG9vcik7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgZmxvb3IgPT0gJ251bWJlcicgJiYgYyAhPSBmbG9vciArIDEgJiYgIU51bWJlci5pc05hTihjKSlcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bGV0IGEgPSBbXTtcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IGZsb29yICsgMTsgaSA8IGM7IGkrKylcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGEucHVzaChpKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGlmIChhLmxlbmd0aClcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGxhc3RfcG9zdC5maW5kKCcuZF9wb3N0X2NvbnRlbnRfbWFpbicpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXBwZW5kKGA8ZGl2IGNsYXNzPVwiZmxvb3ItY2hlY2stbWlzc1wiPuiri+azqOaEj++8miR7YVswXX0ke2EubGVuZ3RoID4gMVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ/ICcgfiAnICsgYS5zbGljZSgtMSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ30g5qiTIOWPr+iDveW3suiiq+WQnuaWh+aIluWIqumZpDwvZGl2PmApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZmxvb3JfZWxlbSwgYywgZmxvb3IsIGEpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGZsb29yID0gYztcblx0XHRcdFx0XHRcdGxhc3RfcG9zdCA9IF90aGlzO1xuXG5cdFx0XHRcdFx0XHR0cnlcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aWYgKF9wb3N0LmlzKCc6bm90KFtkYXRhLWxvYWRlZF0pJykpXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0XHRcdFx0X3Bvc3QuYXR0cignZGF0YS1sb2FkZWQnLCB0cnVlKTtcblxuXHRcdFx0XHRcdFx0XHRcdCQoJy5kX3Bvc3RfY29udGVudF9tYWluJywgX3Bvc3QpLnByZXBlbmQoJCgnPGEvPicpXG5cdFx0XHRcdFx0XHRcdFx0XHQudGV4dCgnIycgKyBfcG9zdC5kYXRhKCdmaWVsZCcpLmNvbnRlbnQucG9zdF9ubylcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdocmVmJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0J2h0dHA6Ly90aWViYS5iYWlkdS5jb20vcC8nICsgUGFnZURhdGEudGhyZWFkLnRocmVhZF9pZCArICc/cGlkPScgKyBfcG9zdC5kYXRhKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnZmllbGQnKS5jb250ZW50LnBvc3RfaWQgKyAnIycgKyBfcG9zdC5kYXRhKCdmaWVsZCcpLmNvbnRlbnQucG9zdF9pZFxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ3N0eWxlJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0J2Zsb2F0OiByaWdodDsgei1pbmRleDogNTAwOyBwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAwcHg7IHRvcDogMHB4OyBwYWRkaW5nOiAxcHggNXB4Oydcblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHRcdC8qXG5cdFx0XHRcdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KVxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsZXQgdGV4dCA9IF9wb3N0LmZpbmQoJy5kX3Bvc3RfY29udGVudCcpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dFswXS5zZWxlY3QoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkb2N1bWVudC5leGVjQ29tbWFuZCgnQ29weScpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhdGNoIChlKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0R01BcGkuR01fc2V0Q2xpcGJvYXJkKHRleHQudGV4dCgpLnJlcGxhY2UoL1xcclxcbnxcXHIoPyFcXG4pfFxcbi9nLCBcIjxici8+XFxuXCIpKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXRjaCAoZSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfdWZfZG9uZShldmVudCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0Ki9cblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdvbmNsaWNrJywgZnVuY3Rpb24gKClcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IGlkID0gX3Bvc3QuZmluZCgnLmRfcG9zdF9jb250ZW50JykuYXR0cignaWQnKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGBldmVudC5wcmV2ZW50RGVmYXVsdCgpYCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgdmFyIGNvcHlBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJyR7aWR9JylgLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGB0cnl7Y29weUFyZWEuc2VsZWN0KCk7fWNhdGNoKGUpe2NvbnNvbGUuZXJyb3IoZSl9YCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgdHJ5e3dpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTt9Y2F0Y2goZSl7fWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YHRyeXt2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO3JhbmdlLnNlbGVjdE5vZGUoY29weUFyZWEpO3dpbmRvdy5nZXRTZWxlY3Rpb24oKS5hZGRSYW5nZShyYW5nZSl9Y2F0Y2goZSl7Y29uc29sZS5lcnJvcihlKX1gLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGB0cnl7ZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ0NvcHknKX1jYXRjaChlKXtjb25zb2xlLmVycm9yKGUpfWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YHJldHVybiBmYWxzZWBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XS5qb2luKCc7Jylcblx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cigndGl0bGUnLCAn6bue5pOK5Y+v6KSH6KO96LK85a2QJylcblx0XHRcdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHRcdFx0Zmxvb3JfZWxlbS53cmFwSW5uZXIoJCgnPGEvPicpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignaHJlZicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdodHRwOi8vdGllYmEuYmFpZHUuY29tL3AvJyArIFBhZ2VEYXRhLnRocmVhZC50aHJlYWRfaWQgKyAnP3BpZD0nICsgX3Bvc3QuZGF0YShcblx0XHRcdFx0XHRcdFx0XHRcdFx0J2ZpZWxkJykuY29udGVudC5wb3N0X2lkICsgJyMnICsgX3Bvc3QuZGF0YSgnZmllbGQnKS5jb250ZW50LnBvc3RfaWRcblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBfdWZfZG9uZSkpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNhdGNoIChlKVxuXHRcdFx0XHRcdFx0e31cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQ7XG5cblx0XHRcdFx0JCgnaW1nLkJERV9JbWFnZScsIHBfcG9zdGxpc3RfcG9zdCkuZWFjaChmdW5jdGlvbiAoKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGliU2l0ZUJhaWR1VGllYmEuYmRlX2ltYWdlKHRoaXMpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQkKHdpbmRvdykudHJpZ2dlckhhbmRsZXIoJ3Njcm9sbC5sb2FkJyk7XG5cdFx0XHR9KSlcblx0XHRcdC5vbignbG9hZC5saXN0JywgdGhyb3R0bGUoNTAwLCBmdW5jdGlvbiAoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgbHMgPSAkKCcual90aHJlYWRfbGlzdCAudGhyZWFkbGlzdF90aXRsZSwgLmlob21lX3NlY3Rpb24gLm5ld19saXN0IC50aHJlYWRfbmFtZScpLmVhY2goZnVuY3Rpb24gKClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxldCBfdGhpcyA9ICQodGhpcyk7XG5cblx0XHRcdFx0XHRsZXQgX3QgPSBfdGhpcy5maW5kKCdhLmpfdGhfdGl0LCBhLnRpdGxlJyk7XG5cblx0XHRcdFx0XHRpZiAoX3QubGVuZ3RoICYmICFfdGhpcy5maW5kKCcuc2VlX2x6JykubGVuZ3RoKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxldCB1cmwgPSBuZXcgVVJMKF90LnByb3AoJ2hyZWYnKSk7XG5cblx0XHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHRcdHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCdzZWVfbHonLCAxKTtcblxuXHRcdFx0XHRcdFx0JCgnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJzZWVfbHogYnRuLXN1YiBidG4tc21hbGxcIj7lj6rnnIvmpbzkuLs8L2E+Jylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCB1cmwudG9TdHJpbmcoKSlcblx0XHRcdFx0XHRcdFx0LmFwcGVuZFRvKCQoJzxzcGFuLz4nKVxuXHRcdFx0XHRcdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0XHRcdFx0XHRcdFx0XHQndmVydGljYWwtYWxpZ24nOiAnaW5oZXJpdCcsXG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHQuYXBwZW5kVG8oX3RoaXMpXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdsb2FkLmxpc3QnLCBscyk7XG5cblx0XHRcdFx0bGF6eWxvYWQoX3VybF9vYmopO1xuXHRcdFx0fSkpXG5cdFx0XHQub24oJ2tleWRvd24ucGFnZScsIHJlcXVpcmUoJ3Jvb3QvbGliL2pxdWVyeS9ldmVudC9ob3RrZXknKS5wYWNrRXZlbnQoZnVuY3Rpb24gKGV2ZW50KVxuXHRcdFx0e1xuXHRcdFx0XHRjb25zdCBrZXljb2RlcyA9IHJlcXVpcmUoJ2tleWNvZGVzJyk7XG5cblx0XHRcdFx0c3dpdGNoIChldmVudC53aGljaClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNhc2Uga2V5Y29kZXMoJ3BhZ2V1cCcpOlxuXHRcdFx0XHRcdGNhc2Uga2V5Y29kZXMoJ2xlZnQnKTpcblxuXHRcdFx0XHRcdFx0dmFyIF9hID0gJCgnLnBhZ2luYXRpb24tZGVmYXVsdCBhLnByZXYsIC5wYWdpbmF0aW9uLWRlZmF1bHQgYS5wcmUnKTtcblxuXHRcdFx0XHRcdFx0aWYgKF9hLmxlbmd0aClcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0X3VmX2RvbmUoZXZlbnQpO1xuXHRcdFx0XHRcdFx0XHRfYVswXS5jbGljaygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhldmVudCwgX2EpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIGtleWNvZGVzKCdwYWdlZG93bicpOlxuXHRcdFx0XHRcdGNhc2Uga2V5Y29kZXMoJ3JpZ2h0Jyk6XG5cblx0XHRcdFx0XHRcdHZhciBfYSA9ICQoJy5wYWdpbmF0aW9uLWRlZmF1bHQgYS5uZXh0Jyk7XG5cblx0XHRcdFx0XHRcdGlmIChfYS5sZW5ndGgpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdF91Zl9kb25lKGV2ZW50KTtcblx0XHRcdFx0XHRcdFx0X2FbMF0uY2xpY2soKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXZlbnQsIF9hKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0pKVxuXHRcdFx0Lm9uKCdsb2FkLnNjcm9sbCcsIGZ1bmN0aW9uICgpXG5cdFx0XHR7XG5cdFx0XHRcdGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPCAzMDApXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0JCh3aW5kb3cpLnNjcm9sbFRvKCcjcGJfY29udGVudCwgLmhlYWRfY29udGVudCAuY2FyZF90aXRsZSwgI2NvbnRlbnQsICN0YWJfZm9ydW1uYW1lJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHQuc2Nyb2xsVG8oJy5oZWFkX2NvbnRlbnQnKVxuXHRcdFx0Lm9uZSgnc2Nyb2xsJywgZnVuY3Rpb24gKGV2ZW50KVxuXHRcdFx0e1xuXHRcdFx0XHRjb25zb2xlLmxvZyhldmVudCk7XG5cdFx0XHR9KVxuXHRcdFx0Lm9uKCdzY3JvbGwucmVwbHknLCBmdW5jdGlvbiAoZXZlbnQpXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChldmVudC5uYW1lc3BhY2UgPT0gJ3JlcGx5Jylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coZXZlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0e1xuXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQub24oJ3Njcm9sbC5sb2FkJywgdGhyb3R0bGUoMTAwMCwgZnVuY3Rpb24gKGV2ZW50KVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgbiA9IDA7XG5cblx0XHRcdFx0JCgnLmNvcmVfcmVwbHlfd3JhcHBlcjpub3QoW2RhdGEtbG9hZGVkXSknKVxuXHRcdFx0XHRcdC5lYWNoKGZ1bmN0aW9uICgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGV0IGNvcmVfcmVwbHlfd3JhcHBlciA9ICQodGhpcyk7XG5cdFx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0XHRjb3JlX3JlcGx5X3dyYXBwZXIuYXR0cignZGF0YS1sb2FkZWQnLCB0cnVlKTtcblxuXHRcdFx0XHRcdFx0bGV0IGxvYWRpbmdfcmVwbHkgPSBjb3JlX3JlcGx5X3dyYXBwZXIuZmluZCgnLmxvYWRpbmdfcmVwbHknKTtcblxuXHRcdFx0XHRcdFx0bGV0IGNvcmVfcmVwbHkgPSBjb3JlX3JlcGx5X3dyYXBwZXIucGFyZW50cygnLmNvcmVfcmVwbHk6ZXEoMCknKS5lcSgwKTtcblxuXHRcdFx0XHRcdFx0Y29yZV9yZXBseV9oYW5kbGVyKGNvcmVfcmVwbHkpO1xuXG5cdFx0XHRcdFx0XHRsZXQgdCA9IE51bWJlcihjb3JlX3JlcGx5X3dyYXBwZXIucHJvcCgnZGF0YS1sb2FkZWQtdHJ5JykgfHwgMCk7XG5cblx0XHRcdFx0XHRcdGlmICh0IDwgNSAmJiBsb2FkaW5nX3JlcGx5Lmxlbmd0aClcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bisrO1xuXG5cdFx0XHRcdFx0XHRcdGNvcmVfcmVwbHlfd3JhcHBlci5wcm9wKCdkYXRhLWxvYWRlZC10cnknLCB0ICsgMSk7XG5cblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKVxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IGV2ZW50ID0gJC5FdmVudCgnc2Nyb2xsLnJlcGx5Jywge1xuXHRcdFx0XHRcdFx0XHRcdFx0cGFnZVk6IGNvcmVfcmVwbHlfd3JhcHBlci5vZmZzZXQoKS50b3AsXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdFx0XHQkKHdpbmRvdylcblx0XHRcdFx0XHRcdFx0XHRcdC5hZGQoJ2h0bWwsIGJvZHknKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnRyaWdnZXIoZXZlbnQpXG5cdFx0XHRcdFx0XHRcdFx0O1xuXG5cdFx0XHRcdFx0XHRcdFx0dHJ5XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IGV2ZW50ID0gdW5zYWZlV2luZG93LiQuRXZlbnQoJ3Njcm9sbC5yZXBseScsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFnZVk6IGNvcmVfcmVwbHlfd3JhcHBlci5vZmZzZXQoKS50b3AsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdFx0XHRcdFx0dW5zYWZlV2luZG93LiQodW5zYWZlV2luZG93KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuYWRkKCdodG1sLCBib2R5Jylcblx0XHRcdFx0XHRcdFx0XHRcdFx0LnRyaWdnZXIoZXZlbnQpXG5cdFx0XHRcdFx0XHRcdFx0XHQ7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGNhdGNoIChlKVxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vY29uc29sZS5lcnJvcihlLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHRyeVxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBldmVudCA9ICQuRXZlbnQoJ3Njcm9sbC5yZXBseScsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFnZVk6IGNvcmVfcmVwbHlfd3JhcHBlci5vZmZzZXQoKS50b3AsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0JCh1bnNhZmVXaW5kb3cpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5hZGQoJ2h0bWwsIGJvZHknKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQudHJpZ2dlcihldmVudClcblx0XHRcdFx0XHRcdFx0XHRcdDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Y2F0Y2ggKGUpXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly9jb25zb2xlLmVycm9yKGUudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKVxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChjb3JlX3JlcGx5X3dyYXBwZXIuZmluZCgnLmxvYWRpbmdfcmVwbHknKS5sZW5ndGgpXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvcmVfcmVwbHlfd3JhcHBlci5yZW1vdmVBdHRyKCdkYXRhLWxvYWRlZCcpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0sIDIwMCk7XG5cblx0XHRcdFx0XHRcdFx0XHRjb3JlX3JlcGx5X2hhbmRsZXIoY29yZV9yZXBseSk7XG5cdFx0XHRcdFx0XHRcdH0sIDEwMDAgKyBuICogMTAwKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQ7XG5cdFx0XHR9KSlcblx0XHRcdC50cmlnZ2VySGFuZGxlcignbG9hZCcpXG5cdFx0O1xuXG5cdFx0JCgnYm9keScpLm9uKCdET01Ob2RlSW5zZXJ0ZWQnLCAnI2Zyc19saXN0X3BhZ2VyLCAjdGhyZWFkX2xpc3QnLCBkZWJvdW5jZSg1MDAsIGZ1bmN0aW9uICgpXG5cdFx0e1xuXHRcdFx0JCh3aW5kb3cpLnRyaWdnZXJIYW5kbGVyKCdsb2FkLmxpc3QnKTtcblx0XHR9KSk7XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpXG5cdFx0e1xuXHRcdFx0JCh3aW5kb3cpLnRyaWdnZXJIYW5kbGVyKCdsb2FkLmxpc3QnKTtcblx0XHR9LCA1MDApO1xuXG5cdFx0JCgnI2Zyc19saXN0X3BhZ2VyJylcblx0XHRcdC5vbignRE9NTm9kZUluc2VydGVkLnBhZ2UnLCBkZWJvdW5jZSgyMDAsIGZ1bmN0aW9uICgpXG5cdFx0XHR7XG5cdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0JCh3aW5kb3cpLnNjcm9sbFRvKCcuaGVhZF9jb250ZW50IC5jYXJkX3RpdGxlLCAjY29udGVudCwgI3RhYl9mb3J1bW5hbWUnKTtcblx0XHRcdH0pKVxuXHRcdDtcblxuXHRcdCQoJy5wYl9mb290ZXIgLmxfdGhyZWFkX2luZm8nKVxuXHRcdFx0Lm9uKCdET01Ob2RlSW5zZXJ0ZWQnLCBkZWJvdW5jZSgyMDAsIGZ1bmN0aW9uICgpXG5cdFx0XHR7XG5cdFx0XHRcdCQod2luZG93KS50cmlnZ2VySGFuZGxlcignbG9hZCcpO1xuXHRcdFx0fSkpXG5cdFx0O1xuXHR9LFxuXG5cdGFkYmxvY2soX3VybF9vYmogPSBnbG9iYWwuX3VybF9vYmopXG5cdHtcblxuXHR9LFxuXG5cdGNsZWFybHkoX3VybF9vYmogPSBnbG9iYWwuX3VybF9vYmosIF9kb21fbGlzdCA9IG51bGwpXG5cdHtcblx0XHRsZXQgX2RvbSA9ICQoX2RvbV9saXN0KTtcblxuXHRcdF9kb20gPSBfZG9tXG5cdFx0XHQuYWRkKCQoJyNjb250YWluZXInKS5wYXJlbnRzVW50aWwoJ2JvZHknKS5hZGRCYWNrKCkuc2libGluZ3MoKSlcblx0XHRcdC5hZGQoJCgnI2Zvb3RlcicpLm5leHRBbGwoKSlcblx0XHRcdC5hZGQoW1xuXHRcdFx0XHQnLnNoYXJlX2J0bl93cmFwcGVyLCAjY2VsZWJyaXR5LCAjbXlfdGllYmFfbW9kLCAucmlnaHRfc2VjdGlvbiwgLnNlZS1pbWFnZS1idG4sICNzaWduX21vZCcsXG5cdFx0XHRcdCcjal9oZWFkX2ZvY3VzX2J0biwgLmRlZXByZWFkLWJ0biwgI2ljb24tcmVwbHksIC5wX2F1dGhvcl9mYWNlLnJvdW5kLWF2YXRhciwgI3RiX3JpY2hfcG9zdGVyX2NvbnRhaW5lcicsXG5cdFx0XHRcdCcuY29yZV9yZXBseV93cmFwcGVyIC5qX3VzZXJfY2FyZCcsXG5cdFx0XHRcdCdib2R5IDpoaWRkZW4sIGlmcmFtZSwgc2NyaXB0Jyxcblx0XHRcdFx0JyNmb290ZXIsICNwYi1mb290ZXItaGVhZGVyLCAjcXVpY2tfcmVwbHknLFxuXHRcdFx0XHQnLmpfdXNlcl9zaWduJyxcblxuXHRcdFx0XHQnLnBfYXV0aG9yIC5kX2ljb25zLCAuc2F2ZV9mYWNlX2NhcmQsIC5kX25hbWVfaWNvbiwgLnNhdmVfZmFjZV9iZycsXG5cblx0XHRcdFx0Jy5pY29uX3Rid29ybGQsIC5CREVfU21pbGV5Jyxcblx0XHRcdFx0Jy5sb3V6aHViaWFvc2hpX3dyYXAsIC5zYXZlX2ZhY2VfY2FyZCcsXG5cdFx0XHRdLmpvaW4oKSlcblx0XHQ7XG5cblx0XHQkKCcuZF9iYWRnZV9sdicpLnJlbW92ZUF0dHIoJ2NsYXNzJyk7XG5cblx0XHQvL19kb20ucmVtb3ZlKCk7XG5cblx0XHRyZXR1cm4gX2RvbTtcblx0fSxcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIHNpZ24oX3VybF9vYmogPSBnbG9iYWwuX3VybF9vYmopXG57XG5cdGNvbnN0IFByb21pc2UgPSByZXF1aXJlKCdibHVlYmlyZCcpO1xuXG5cdGF3YWl0IFByb21pc2UuZGVsYXkoMTAwMCk7XG5cblx0bGV0IGEgPSAkKCcjc2lnbl9tb2QgI3NpZ25zdGFyX3dyYXBwZXIgYS5qX2NhbnNpZ24nKTtcblxuXHRpZiAoYS5sZW5ndGgpXG5cdHtcblx0XHRhWzBdLmNsaWNrKCk7XG5cdFx0YXdhaXQgUHJvbWlzZS5kZWxheSg1MDApO1xuXHRcdGFbMF0uY2xpY2soKTtcblx0XHRhd2FpdCBQcm9taXNlLmRlbGF5KDUwMCk7XG5cdFx0JCgnLmpfc3VjY19pbmZvLnNpZ25fc3VjYzEnKS5oaWRlKCk7XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5mdW5jdGlvbiBsYXp5bG9hZChfdXJsX29iailcbntcblx0Y29uc3QgbGliU2l0ZUJhaWR1VGllYmEgPSByZXF1aXJlKCdyb290L2xpYi9zaXRlL2JhaWR1L3RpZWJhJyk7XG5cblx0JCgnaW1nLkJERV9JbWFnZVtkYXRhLW9yaWdpbmFsXSwgaW1nLnRocmVhZGxpc3RfcGljJylcblx0XHQubm90KCdbZGF0YS1kb25lXScpXG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdC5hdHRyKCdkYXRhLWRvbmUnLCB0cnVlKVxuXHRcdC5hdHRyKCdzcmMnLCBmdW5jdGlvbiAoaSwgb2xkKVxuXHRcdHtcblx0XHRcdGxldCBfdGhpcyA9ICQodGhpcyk7XG5cdFx0XHRsZXQgc3JjID0gX3RoaXMuYXR0cignZGF0YS1vcmlnaW5hbCcpO1xuXG5cdFx0XHRsZXQgX2ltZyA9IGxpYlNpdGVCYWlkdVRpZWJhLmJkZV9pbWFnZShfdGhpcy5jbG9uZSgpKTtcblxuXHRcdFx0aWYgKF9pbWcpXG5cdFx0XHR7XG5cdFx0XHRcdF90aGlzLmF0dHIoJ2JwaWMnLCBfaW1nLmRhdGEoJ2Z1bGxzcmMnKSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvbGQgIT0gc3JjKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gc3JjO1xuXHRcdFx0fVxuXHRcdH0pXG5cdDtcbn1cblxuZnVuY3Rpb24gY29yZV9yZXBseV9oYW5kbGVyKF90aGlzKVxue1xuXHRsZXQgY2hrID0gX3RoaXMuZmluZCgnLmx6bF9saW5rX2ZvbGQ6dmlzaWJsZSwgLmxvYWRpbmdfcmVwbHknKTtcblx0bGV0IGVsZW0gPSBfdGhpcy5maW5kKCcuY29yZV9yZXBseV93cmFwcGVyJyk7XG5cblx0bGV0IG1pbl9oZWlnaHQgPSBlbGVtLmNzcygnbWluLWhlaWdodCcpLnJlcGxhY2UoL3B4JC8sICcnKTtcblx0bGV0IGhlaWdodCA9IGVsZW0uaGVpZ2h0KCk7XG5cblx0MCAmJiBjb25zb2xlLmxvZyhlbGVtLCB7XG5cdFx0bWluX2hlaWdodCxcblx0XHRoZWlnaHQsXG5cdFx0Y2hrOiBjaGsubGVuZ3RoLFxuXHR9KTtcblxuXHRpZiAobWluX2hlaWdodCA8PSA1MCB8fCBoZWlnaHQgPD0gNTApXG5cdHtcblx0XHQvLyDomZXnkIbmjbLli5XmmYLmnIPlm6DngrrnlZnoqIDljYDnmoTpq5jluqbororli5XlsI7oh7TlrprkvY0g5Lul5Y+KIOeci+WIsOeZveiJsuWFp+WuueeahOWVj+mhjFxuXHRcdGVsZW0uY3NzKCdtaW4taGVpZ2h0JywgJ2F1dG8nKTtcblx0fVxuXG5cdGlmIChjaGsubGVuZ3RoKVxuXHR7XG5cdFx0Ly9lbGVtLnNob3coKTtcblx0fVxuXHRlbHNlXG5cdHtcblx0XHQvL2VsZW0uaGlkZSgpO1xuXHR9XG5cblx0Ly9jb25zb2xlLmxvZyhlbGVtLCBjaGspO1xufVxuIl19