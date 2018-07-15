'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    metadata: {
        include: [
            'http*://*.pixiv.net/*',
            'http*://www.pixiv.net/search*',
        ],
        exclude: [],
    },
    test(_url_obj) {
        if (_url_obj.host.match(/pixiv\.net/)) {
            return true;
        }
        return false;
    },
    main(_url_obj = global._url_obj) {
        const debounce = require('throttle-debounce/debounce');
        const throttle = require('throttle-debounce/throttle');
        const _uf_done = require('root/lib/event/done');
        const _uf_dom_filter_link = require('root/lib/dom/filter/link');
        if (document.referrer
            && _url_obj.path.match(/member\.php/)
            && _url_obj.query.match(/^id=\d+$/)
            && !document.referrer.match(/pixiv/)) {
            location.href = location.href.replace('member.php', 'member_illust.php');
            return;
        }
        $(window)
            .on('load.link', debounce(100, function () {
            _uf_dom_filter_link([
                '.works_display a.work, .tagCloud a, .user-list a, .image-item a, .worksListOthersImg a, .rank-detail a, .tags .tag a, #favorite-preference form, .spotlight-wrapper .spotlight-article-body .works-column a.work, .spotlight-wrapper .sidebar a, .members a',
                '.post a',
                '.column-search-result a',
                '#js-react-search-mid a',
                'ul li div a[href*="member"]',
            ].join(','))
                .prop('target', '_blank');
        }))
            .triggerHandler('load.link');
        $('#js-react-search-mid')
            .on('DOMNodeInserted', debounce(100, function () {
            $(window).triggerHandler('load.link');
        }));
        const greasemonkey = require('root/lib/greasemonkey/uf');
        $(window).scrollTo($()
            .push('.layout-body')
            .push('#search-result')
            .eq(0));
        let _pixiv_user_id = (unsafeWindow.pixiv && unsafeWindow.pixiv.user && unsafeWindow.pixiv.user.id)
            ? unsafeWindow.pixiv.user.id
            : null;
        if (_pixiv_user_id) {
            $('.navigation-list .menus .bookmarks')
                .prop(function () {
                let _a = $('<a/>')
                    .prop({
                    'href': 'http://www.pixiv.net/bookmark.php?type=user',
                })
                    .html('<i class="_icon sprites-bookmarks"></i>關注');
                return $('<li class="bookmarks"/>').append(_a);
            });
        }
        $('#favorite-button').prop('href', 'javasctipt:void(0);');
        follow_button(_url_obj, window);
        if (_url_obj.path.match(/member_illust\.php/) && _url_obj.query.match(/mode=medium/)) {
            if ($('body').css('background-color') == '#E4E7EE' || $('body')
                .css('background-color') == 'rgb(228, 231, 238)') {
                $('body').css('background-color', 'rgba(0, 3, 11, 0.9)');
            }
            $('#root').on('DOMNodeInserted', function (event) {
                let _a = _uf_dom_filter_link('a:not([data-done])[href*="member.php"]', $(event.target))
                    .attr('data-done', true)
                    .attr('target', '_blank')
                    .attr('href', function (i, old) {
                    return old.replace('member.php', 'member_illust.php');
                });
            });
        }
        else if (_url_obj.path.match(/search\.php/)) {
            if ($('.column-header, .column-label').find('.tabs li:eq(0) a.current').length) {
                let fn = function () {
                    if ($('.column-search-result ._no-item:visible, #js-react-search-mid:visible > ._no-item:visible').length) {
                        location.href = $('.column-header, .column-label')
                            .find('.tabs a[href*="search_user"]')
                            .prop('href');
                        return true;
                    }
                };
                if (!fn()) {
                    $('#js-react-search-mid')
                        .on('DOMNodeInserted', fn);
                }
            }
            $.scrollTo($('#js-react-search-mid, #wrapper').eq(-1));
            module.exports.adblock(_url_obj);
            $('.column-search-result').on('DOMNodeInserted', throttle(300, function () {
                _uf_dom_filter_link([
                    '.column-search-result a',
                ].join(','))
                    .prop('target', '_blank');
            }));
            $(document).on('click mousedown', function (event) {
                var _this = $(event.target);
                if (_this.is(':not(.following2) .follow-button')) {
                    var _a = _this.parents('.user-info:first').find('a.user-name:first');
                    var _href = _a.prop('href')
                        .replace('member.php', 'member_illust.php');
                    setTimeout(function () {
                        window.open(_href, '_blank');
                    }, 200);
                }
            });
        }
        else if (_url_obj.path.match(/search_user\.php/)) {
            $('.user-search-result-container .user-recommendation-item a.title')
                .prop('href', function (i, v) {
                return v.replace('member.php', 'member_illust.php');
            });
            if ($('.user-search-result-container .user-recommendation-item').length == 1) {
                location.href = $('.user-search-result-container .user-recommendation-item a.title')
                    .prop('href');
            }
            let _href;
            $('.follow:not(.following)')
                .on('click', function (event) {
                _href = $(this)
                    .parents('.user-recommendation-item').eq(0)
                    .find('a.title')
                    .prop('href');
            });
            $('body')
                .on('click', '.action-follow :submit, .action-follow ._button', function () {
                window.open(_href, '_blank');
            });
        }
        else if (_url_obj.path.match(/bookmark_add\.php/)) {
            $(window)
                .on('load', debounce(3000, function () {
                if (!$('.user-recommendation-items .user-recommendation-item').length && $('#wrapper .user-recommendation-unit ._no-item:visible').length) {
                    window.close();
                }
            }));
            global._follow_area = $('.user-recommendation-items._loading');
        }
        else if (_url_obj.path.match(/jump\.php/)) {
            window.location.href = $('b > a:first').attr('href');
        }
        else if (_url_obj.path.match(/stacc/) && _url_obj.query.match(/mode=unify/)) {
            let _area_selector = '#stacc_timeline > .stacc_status_summary:not([data-done])';
            let _area = $(_area_selector);
            greasemonkey.GM_addStyle([
                '._uf_stacc_ref_illust { box-shadow: 0px 0px 0px 2px rgba(0, 149, 222, 0.3) inset; border-radius: 10px; }'
            ].join());
            let _fn_timeline = function (event) {
                _area = $(_area_selector)
                    .each(function (index) {
                    let _this = $(this);
                    _this
                        .attr('data-done', true)
                        .attr('data-index', index);
                    let _stacc_ref_illust_user_name = $('.stacc_ref_illust_user_name > a:first', _this);
                    let _stacc_post_user_name = $('.stacc_post_user_name', _this);
                    let _badge_poster = $('.stacc_follow_unify_comment_profile_list img[src*="badge_add_content.png"]:first', _this);
                    if ($('.stacc_ref_thumb_caption .stacc_ref_illust_title', _this).length && !_badge_poster.length && _stacc_ref_illust_user_name.text() != _stacc_post_user_name.text()) {
                        _this
                            .addClass('_uf_stacc_ref_illust');
                    }
                    $('.stacc_ref_user_illust_caption_img a', _this).attr('href', function (i, v) {
                        v = v.replace('member.php', 'member_illust.php');
                        return v;
                    });
                });
            };
            $(window)
                .on('load.timeline', _fn_timeline)
                .triggerHandler('load.timeline');
            $('#stacc_timeline')
                .on('DOMNodeInserted', function (event) {
                setTimeout(() => {
                    $(window).triggerHandler('load.timeline');
                }, 1000);
            });
        }
        $(window)
            .on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event) {
            switch (event.which) {
                case 33:
                case 37:
                    var _a = $('.pager-container a[rel="prev"]');
                    if (_a.length) {
                        _uf_done(event);
                        location.href = _a.prop('href');
                        return false;
                    }
                    break;
                case 34:
                case 39:
                    var _a = $('.pager-container a[rel="next"]');
                    if (_a.length) {
                        _uf_done(event);
                        location.href = _a.prop('href');
                        return false;
                    }
                    break;
            }
        }))
            .on('load', function () {
        });
        $('a[href*="jump.php"]', '.profile-web, .caption, .body')
            .each(function () {
            var _this = $(this);
            var _url = _this.prop('href');
            if (_url.match(/jump\.php\?(.+)$/)) {
                _url = decodeURIComponent(RegExp.$1);
                _this.prop('href', _url);
            }
        })
            .prop('target', '_blank');
    },
    adblock(_url_obj) {
        if (_url_obj.path.match(/search\.php/)) {
            $('.popular-introduction-overlay').hide();
        }
    },
};
function _pixiv_source(_src) {
    let _ret;
    let _regex = /(pixiv\.net)\/(?:c\/.+\/img-master)\/(img\/[\/a-z0-9]+\/.+)_master1200(\..+)/i;
    if (_src.match(_regex)) {
        _ret = _src.replace(_regex, '$1/img-original/$2$3');
    }
    else if ((_regex = /(\/img\/.+)\/mobile\/(.+)_(?:\d+)mw(\.(?:jpg|png|gif|bmp))$/) && _src.match(_regex)) {
        _ret = _src.replace(_regex, '$1/$2$3');
    }
    else if ((_regex = /_m(\.(?:jpg|png|gif|bmp))$/) && _src.match(_regex)) {
        _ret = _src.replace(_regex, '$1');
    }
    return _ret;
}
function pixiv_link_uid(uid, type = 'member_illust') {
    return `http://www.pixiv.net/${type}.php?id=${uid}`;
}
function follow_button(_url_obj, window) {
    $('body')
        .on('click.follow', ':not(.following2) .follow-button:not(.on), aside section button[data-click-label="follow"], section button[data-click-label="follow"], ul li div button[data-click-label="follow"]', function (event) {
        let _this = $(this);
        console.info('click.follow', _this);
        let uid = _this.attr('data-user-id');
        if (!uid) {
            uid = _this.parents('[data-id]:eq(0)').eq(0)
                .attr('data-id');
        }
        if (!uid) {
            let p = _this.parents('aside section, ul li div')
                .find('a[href*="/member.php"], a[href*="/member_illust.php"]')
                .eq(0);
            if (p.length) {
                window.open(href_replace(p.prop('href')), '_blank');
            }
        }
        if (uid) {
            if (_url_obj.path.match(/member\.php/)) {
                setTimeout(function () {
                    window.location.href = pixiv_link_uid(uid);
                }, 200);
            }
            else {
                let _skip;
                if (/member_illust\.php/.test(_url_obj.path) && _url_obj.query.match(/(?:\b|&|^)id=(\d+)/)) {
                    if (RegExp.$1 == uid) {
                        _skip = true;
                    }
                }
                if (!_skip) {
                    window.open(pixiv_link_uid(uid), '_blank');
                }
            }
            setTimeout(() => {
                global._follow_area && global._follow_area
                    .triggerHandler('DOMNodeInserted');
            }, 500);
        }
        else {
            console.debug(_this, uid, event);
        }
    });
}
function href_replace(href) {
    return href.replace('member.php', 'member_illust.php');
}
function href_uid(href) {
    let m = href.match(/(?:[&\?])id=(\d+)(?:$|&|#)/);
    if (m && m[1]) {
        return m[1];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl4aXYuanMiLCJzb3VyY2VSb290IjoiRDovVXNlcnMvRG9jdW1lbnRzL1RoZSBQcm9qZWN0L2dtX3NjcmlwdHNfcmVwby93cy11c2Vyc2NyaXB0L3BhY2thZ2VzL3V4LXR3ZWFrLXNjLyIsInNvdXJjZXMiOlsic3JjL3V4LXR3ZWFrLXNjL2FydC9waXhpdi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxZQUFZLENBQUM7O0FBb0JiLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFFaEIsUUFBUSxFQUFFO1FBQ1QsT0FBTyxFQUFFO1lBQ1IsdUJBQXVCO1lBQ3ZCLCtCQUErQjtTQUMvQjtRQUNELE9BQU8sRUFBRSxFQUFFO0tBQ1g7SUFFRCxJQUFJLENBQUMsUUFBUTtRQUVaLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQ3JDO1lBQ0MsT0FBTyxJQUFJLENBQUM7U0FDWjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVE7UUFFOUIsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDdkQsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFFdkQsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFHaEQsTUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUVoRSxJQUFJLFFBQVEsQ0FBQyxRQUFRO2VBQ2pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztlQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7ZUFDaEMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFFckM7WUFDQyxRQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJ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Q1I7YUFFRDtZQUNDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNqQztJQUNGLENBQUMsQ0FBQyxDQUNGO0FBQ0YsQ0FBQztBQUVELHNCQUFzQixJQUFZO0lBRWpDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBRUQsa0JBQWtCLElBQVk7SUFFN0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBRWpELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDYjtRQUNDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ1o7QUFDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxNy83LzE0LzAxNC5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IElEZW1vLCBJR2xvYmFsLCBJR3JlYXNlbW9ua2V5LCBJV2luZG93LCBJSlF1ZXJ5U3RhdGljLCBJVXJsT2JqZWN0MiB9IGZyb20gJ3Jvb3QvbGliL2NvcmUvZGVtbyc7XG5cbmRlY2xhcmUgY29uc3QgZ2xvYmFsOiBJR2xvYmFsO1xuZGVjbGFyZSBjb25zdCBncmVhc2Vtb25rZXk6IElHcmVhc2Vtb25rZXk7XG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogSVdpbmRvdztcbmRlY2xhcmUgY29uc3QgdW5zYWZlV2luZG93OiBJV2luZG93O1xuZGVjbGFyZSBjb25zdCAkOiBJSlF1ZXJ5U3RhdGljO1xuZGVjbGFyZSBjb25zdCBqUXVlcnk6IElKUXVlcnlTdGF0aWM7XG5cbmRlY2xhcmUgbW9kdWxlICdyb290L2xpYi9jb3JlL2RlbW8nXG57XG5cdGludGVyZmFjZSBJR2xvYmFsXG5cdHtcblx0XHRfZm9sbG93X2FyZWEsXG5cdFx0X3VybF9vYmo/OiBJVXJsT2JqZWN0Mjtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuXHRtZXRhZGF0YToge1xuXHRcdGluY2x1ZGU6IFtcblx0XHRcdCdodHRwKjovLyoucGl4aXYubmV0LyonLFxuXHRcdFx0J2h0dHAqOi8vd3d3LnBpeGl2Lm5ldC9zZWFyY2gqJyxcblx0XHRdLFxuXHRcdGV4Y2x1ZGU6IFtdLFxuXHR9LFxuXG5cdHRlc3QoX3VybF9vYmopXG5cdHtcblx0XHRpZiAoX3VybF9vYmouaG9zdC5tYXRjaCgvcGl4aXZcXC5uZXQvKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cblx0bWFpbihfdXJsX29iaiA9IGdsb2JhbC5fdXJsX29iailcblx0e1xuXHRcdGNvbnN0IGRlYm91bmNlID0gcmVxdWlyZSgndGhyb3R0bGUtZGVib3VuY2UvZGVib3VuY2UnKTtcblx0XHRjb25zdCB0aHJvdHRsZSA9IHJlcXVpcmUoJ3Rocm90dGxlLWRlYm91bmNlL3Rocm90dGxlJyk7XG5cblx0XHRjb25zdCBfdWZfZG9uZSA9IHJlcXVpcmUoJ3Jvb3QvbGliL2V2ZW50L2RvbmUnKTtcblx0XHQvL3JlcXVpcmUoJ3Jvb3QvbGliL2Z1bmMvZGVib3VuY2UnKTtcblxuXHRcdGNvbnN0IF91Zl9kb21fZmlsdGVyX2xpbmsgPSByZXF1aXJlKCdyb290L2xpYi9kb20vZmlsdGVyL2xpbmsnKTtcblxuXHRcdGlmIChkb2N1bWVudC5yZWZlcnJlclxuXHRcdFx0JiYgX3VybF9vYmoucGF0aC5tYXRjaCgvbWVtYmVyXFwucGhwLylcblx0XHRcdCYmIF91cmxfb2JqLnF1ZXJ5Lm1hdGNoKC9eaWQ9XFxkKyQvKVxuXHRcdFx0JiYgIWRvY3VtZW50LnJlZmVycmVyLm1hdGNoKC9waXhpdi8pXG5cdFx0KVxuXHRcdHtcblx0XHRcdGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5ocmVmLnJlcGxhY2UoJ21lbWJlci5waHAnLCAnbWVtYmVyX2lsbHVzdC5waHAnKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdCQod2luZG93KVxuXHRcdFx0Lm9uKCdsb2FkLmxpbmsnLCBkZWJvdW5jZSgxMDAsIGZ1bmN0aW9uICgpXG5cdFx0XHR7XG5cdFx0XHRcdF91Zl9kb21fZmlsdGVyX2xpbmsoW1xuXHRcdFx0XHRcdCcud29ya3NfZGlzcGxheSBhLndvcmssIC50YWdDbG91ZCBhLCAudXNlci1saXN0IGEsIC5pbWFnZS1pdGVtIGEsIC53b3Jrc0xpc3RPdGhlcnNJbWcgYSwgLnJhbmstZGV0YWlsIGEsIC50YWdzIC50YWcgYSwgI2Zhdm9yaXRlLXByZWZlcmVuY2UgZm9ybSwgLnNwb3RsaWdodC13cmFwcGVyIC5zcG90bGlnaHQtYXJ0aWNsZS1ib2R5IC53b3Jrcy1jb2x1bW4gYS53b3JrLCAuc3BvdGxpZ2h0LXdyYXBwZXIgLnNpZGViYXIgYSwgLm1lbWJlcnMgYScsXG5cdFx0XHRcdFx0Jy5wb3N0IGEnLFxuXHRcdFx0XHRcdCcuY29sdW1uLXNlYXJjaC1yZXN1bHQgYScsXG5cdFx0XHRcdFx0JyNqcy1yZWFjdC1zZWFyY2gtbWlkIGEnLFxuXG5cdFx0XHRcdFx0J3VsIGxpIGRpdiBhW2hyZWYqPVwibWVtYmVyXCJdJyxcblx0XHRcdFx0XS5qb2luKCcsJykpXG5cdFx0XHRcdFx0LnByb3AoJ3RhcmdldCcsICdfYmxhbmsnKVxuXHRcdFx0XHQ7XG5cdFx0XHR9KSlcblx0XHRcdC50cmlnZ2VySGFuZGxlcignbG9hZC5saW5rJylcblx0XHQ7XG5cblx0XHQkKCcjanMtcmVhY3Qtc2VhcmNoLW1pZCcpXG5cdFx0XHQub24oJ0RPTU5vZGVJbnNlcnRlZCcsIGRlYm91bmNlKDEwMCwgZnVuY3Rpb24gKClcblx0XHRcdHtcblx0XHRcdFx0JCh3aW5kb3cpLnRyaWdnZXJIYW5kbGVyKCdsb2FkLmxpbmsnKTtcblx0XHRcdH0pKVxuXHRcdDtcblxuXHRcdGNvbnN0IGdyZWFzZW1vbmtleSA9IHJlcXVpcmUoJ3Jvb3QvbGliL2dyZWFzZW1vbmtleS91ZicpO1xuXG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdCQod2luZG93KS5zY3JvbGxUbygkKClcblx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdC5wdXNoKCcubGF5b3V0LWJvZHknKVxuXHRcdFx0LnB1c2goJyNzZWFyY2gtcmVzdWx0Jylcblx0XHRcdC5lcSgwKVxuXHRcdCk7XG5cblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0bGV0IF9waXhpdl91c2VyX2lkID0gKHVuc2FmZVdpbmRvdy5waXhpdiAmJiB1bnNhZmVXaW5kb3cucGl4aXYudXNlciAmJiB1bnNhZmVXaW5kb3cucGl4aXYudXNlci5pZClcblx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdD8gdW5zYWZlV2luZG93LnBpeGl2LnVzZXIuaWRcblx0XHRcdDogbnVsbDtcblxuXHRcdGlmIChfcGl4aXZfdXNlcl9pZClcblx0XHR7XG5cdFx0XHQkKCcubmF2aWdhdGlvbi1saXN0IC5tZW51cyAuYm9va21hcmtzJylcblx0XHRcdFx0LnByb3AoZnVuY3Rpb24gKClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxldCBfYSA9ICQoJzxhLz4nKVxuXHRcdFx0XHRcdFx0LnByb3Aoe1xuXHRcdFx0XHRcdFx0XHQnaHJlZic6ICdodHRwOi8vd3d3LnBpeGl2Lm5ldC9ib29rbWFyay5waHA/dHlwZT11c2VyJyxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuaHRtbCgnPGkgY2xhc3M9XCJfaWNvbiBzcHJpdGVzLWJvb2ttYXJrc1wiPjwvaT7pl5zms6gnKVxuXHRcdFx0XHRcdDtcblxuXHRcdFx0XHRcdHJldHVybiAkKCc8bGkgY2xhc3M9XCJib29rbWFya3NcIi8+JykuYXBwZW5kKF9hKTtcblx0XHRcdFx0fSlcblx0XHRcdDtcblx0XHR9XG5cblx0XHQkKCcjZmF2b3JpdGUtYnV0dG9uJykucHJvcCgnaHJlZicsICdqYXZhc2N0aXB0OnZvaWQoMCk7Jyk7XG5cblx0XHRmb2xsb3dfYnV0dG9uKF91cmxfb2JqLCB3aW5kb3cpO1xuXG5cdFx0aWYgKF91cmxfb2JqLnBhdGgubWF0Y2goL21lbWJlcl9pbGx1c3RcXC5waHAvKSAmJiBfdXJsX29iai5xdWVyeS5tYXRjaCgvbW9kZT1tZWRpdW0vKSlcblx0XHR7XG5cdFx0XHRpZiAoJCgnYm9keScpLmNzcygnYmFja2dyb3VuZC1jb2xvcicpID09ICcjRTRFN0VFJyB8fCAkKCdib2R5Jylcblx0XHRcdFx0LmNzcygnYmFja2dyb3VuZC1jb2xvcicpID09ICdyZ2IoMjI4LCAyMzEsIDIzOCknKVxuXHRcdFx0e1xuXHRcdFx0XHQkKCdib2R5JykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYmEoMCwgMywgMTEsIDAuOSknKTtcblx0XHRcdH1cblxuXHRcdFx0JCgnI3Jvb3QnKS5vbignRE9NTm9kZUluc2VydGVkJywgZnVuY3Rpb24gKGV2ZW50KVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgX2EgPSBfdWZfZG9tX2ZpbHRlcl9saW5rKCdhOm5vdChbZGF0YS1kb25lXSlbaHJlZio9XCJtZW1iZXIucGhwXCJdJywgJChldmVudC50YXJnZXQpKVxuXHRcdFx0XHRcdC5hdHRyKCdkYXRhLWRvbmUnLCB0cnVlKVxuXHRcdFx0XHRcdC5hdHRyKCd0YXJnZXQnLCAnX2JsYW5rJylcblx0XHRcdFx0XHQuYXR0cignaHJlZicsIGZ1bmN0aW9uIChpLCBvbGQpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cmV0dXJuIG9sZC5yZXBsYWNlKCdtZW1iZXIucGhwJywgJ21lbWJlcl9pbGx1c3QucGhwJylcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQ7XG5cblx0XHRcdFx0Ly9jb25zb2xlLmxvZyh0aGlzLCBldmVudC50YXJnZXQsIF9hKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRlbHNlIGlmIChfdXJsX29iai5wYXRoLm1hdGNoKC9zZWFyY2hcXC5waHAvKSlcblx0XHR7XG5cdFx0XHRpZiAoJCgnLmNvbHVtbi1oZWFkZXIsIC5jb2x1bW4tbGFiZWwnKS5maW5kKCcudGFicyBsaTplcSgwKSBhLmN1cnJlbnQnKS5sZW5ndGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBmbiA9IGZ1bmN0aW9uICgpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZiAoJCgnLmNvbHVtbi1zZWFyY2gtcmVzdWx0IC5fbm8taXRlbTp2aXNpYmxlLCAjanMtcmVhY3Qtc2VhcmNoLW1pZDp2aXNpYmxlID4gLl9uby1pdGVtOnZpc2libGUnKS5sZW5ndGgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bG9jYXRpb24uaHJlZiA9ICQoJy5jb2x1bW4taGVhZGVyLCAuY29sdW1uLWxhYmVsJylcblx0XHRcdFx0XHRcdFx0LmZpbmQoJy50YWJzIGFbaHJlZio9XCJzZWFyY2hfdXNlclwiXScpXG5cdFx0XHRcdFx0XHRcdC5wcm9wKCdocmVmJylcblx0XHRcdFx0XHRcdDtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdGlmICghZm4oKSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdCQoJyNqcy1yZWFjdC1zZWFyY2gtbWlkJylcblx0XHRcdFx0XHRcdC5vbignRE9NTm9kZUluc2VydGVkJywgZm4pXG5cdFx0XHRcdFx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdCQuc2Nyb2xsVG8oJCgnI2pzLXJlYWN0LXNlYXJjaC1taWQsICN3cmFwcGVyJykuZXEoLTEpKTtcblxuXHRcdFx0bW9kdWxlLmV4cG9ydHMuYWRibG9jayhfdXJsX29iaik7XG5cblx0XHRcdC8vY29uc3QgZGVib3VuY2UgPSByZXF1aXJlKCd0aHJvdHRsZS1kZWJvdW5jZS9kZWJvdW5jZScpO1xuXHRcdFx0Ly9jb25zdCB0aHJvdHRsZSA9IHJlcXVpcmUoJ3Rocm90dGxlLWRlYm91bmNlL3Rocm90dGxlJyk7XG5cblx0XHRcdCQoJy5jb2x1bW4tc2VhcmNoLXJlc3VsdCcpLm9uKCdET01Ob2RlSW5zZXJ0ZWQnLCB0aHJvdHRsZSgzMDAsIGZ1bmN0aW9uICgpXG5cdFx0XHR7XG5cdFx0XHRcdF91Zl9kb21fZmlsdGVyX2xpbmsoW1xuXHRcdFx0XHRcdCcuY29sdW1uLXNlYXJjaC1yZXN1bHQgYScsXG5cdFx0XHRcdF0uam9pbignLCcpKVxuXHRcdFx0XHRcdC5wcm9wKCd0YXJnZXQnLCAnX2JsYW5rJylcblx0XHRcdFx0O1xuXHRcdFx0fSkpO1xuXG5cdFx0XHQkKGRvY3VtZW50KS5vbignY2xpY2sgbW91c2Vkb3duJywgZnVuY3Rpb24gKGV2ZW50KVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgX3RoaXMgPSAkKGV2ZW50LnRhcmdldCk7XG5cblx0XHRcdFx0Ly9fdWZfbG9nKGV2ZW50LCB0aGlzKTtcblxuXHRcdFx0XHRpZiAoX3RoaXMuaXMoJzpub3QoLmZvbGxvd2luZzIpIC5mb2xsb3ctYnV0dG9uJykpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQvL191Zl9sb2coNzc3LCBldmVudCwgX3RoaXMpO1xuXG5cdFx0XHRcdFx0dmFyIF9hID0gX3RoaXMucGFyZW50cygnLnVzZXItaW5mbzpmaXJzdCcpLmZpbmQoJ2EudXNlci1uYW1lOmZpcnN0Jyk7XG5cblx0XHRcdFx0XHR2YXIgX2hyZWYgPSBfYS5wcm9wKCdocmVmJylcblx0XHRcdFx0XHRcdC5yZXBsYWNlKCdtZW1iZXIucGhwJywgJ21lbWJlcl9pbGx1c3QucGhwJyk7XG5cblx0XHRcdFx0XHQvL191Zl9sb2coZXZlbnQsIF90aGlzLCBfYSwgX2hyZWYpO1xuXG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHdpbmRvdy5vcGVuKF9ocmVmLCAnX2JsYW5rJyk7XG5cdFx0XHRcdFx0fSwgMjAwKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKF91cmxfb2JqLnBhdGgubWF0Y2goL3NlYXJjaF91c2VyXFwucGhwLykpXG5cdFx0e1xuXHRcdFx0JCgnLnVzZXItc2VhcmNoLXJlc3VsdC1jb250YWluZXIgLnVzZXItcmVjb21tZW5kYXRpb24taXRlbSBhLnRpdGxlJylcblx0XHRcdFx0LnByb3AoJ2hyZWYnLCBmdW5jdGlvbiAoaSwgdilcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHJldHVybiB2LnJlcGxhY2UoJ21lbWJlci5waHAnLCAnbWVtYmVyX2lsbHVzdC5waHAnKTtcblx0XHRcdFx0fSlcblx0XHRcdDtcblxuXHRcdFx0aWYgKCQoJy51c2VyLXNlYXJjaC1yZXN1bHQtY29udGFpbmVyIC51c2VyLXJlY29tbWVuZGF0aW9uLWl0ZW0nKS5sZW5ndGggPT0gMSlcblx0XHRcdHtcblx0XHRcdFx0bG9jYXRpb24uaHJlZiA9ICQoJy51c2VyLXNlYXJjaC1yZXN1bHQtY29udGFpbmVyIC51c2VyLXJlY29tbWVuZGF0aW9uLWl0ZW0gYS50aXRsZScpXG5cdFx0XHRcdFx0LnByb3AoJ2hyZWYnKVxuXHRcdFx0XHQvLy5yZXBsYWNlKCdtZW1iZXIucGhwJywgJ21lbWJlcl9pbGx1c3QucGhwJylcblx0XHRcdFx0O1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgX2hyZWY7XG5cblx0XHRcdCQoJy5mb2xsb3c6bm90KC5mb2xsb3dpbmcpJylcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdF9ocmVmID0gJCh0aGlzKVxuXHRcdFx0XHRcdFx0LnBhcmVudHMoJy51c2VyLXJlY29tbWVuZGF0aW9uLWl0ZW0nKS5lcSgwKVxuXHRcdFx0XHRcdFx0LmZpbmQoJ2EudGl0bGUnKVxuXHRcdFx0XHRcdFx0LnByb3AoJ2hyZWYnKVxuXHRcdFx0XHRcdDtcblx0XHRcdFx0fSlcblx0XHRcdDtcblxuXHRcdFx0JCgnYm9keScpXG5cdFx0XHRcdC5vbignY2xpY2snLCAnLmFjdGlvbi1mb2xsb3cgOnN1Ym1pdCwgLmFjdGlvbi1mb2xsb3cgLl9idXR0b24nLCBmdW5jdGlvbiAoKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0d2luZG93Lm9wZW4oX2hyZWYsICdfYmxhbmsnKTtcblx0XHRcdFx0fSlcblx0XHRcdDtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoX3VybF9vYmoucGF0aC5tYXRjaCgvYm9va21hcmtfYWRkXFwucGhwLykpXG5cdFx0e1xuXHRcdFx0JCh3aW5kb3cpXG5cdFx0XHRcdC5vbignbG9hZCcsIGRlYm91bmNlKDMwMDAsIGZ1bmN0aW9uICgpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZiAoISQoJy51c2VyLXJlY29tbWVuZGF0aW9uLWl0ZW1zIC51c2VyLXJlY29tbWVuZGF0aW9uLWl0ZW0nKS5sZW5ndGggJiYgJChcblx0XHRcdFx0XHRcdCcjd3JhcHBlciAudXNlci1yZWNvbW1lbmRhdGlvbi11bml0IC5fbm8taXRlbTp2aXNpYmxlJykubGVuZ3RoKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHdpbmRvdy5jbG9zZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkpXG5cdFx0XHQ7XG5cblx0XHRcdGdsb2JhbC5fZm9sbG93X2FyZWEgPSAkKCcudXNlci1yZWNvbW1lbmRhdGlvbi1pdGVtcy5fbG9hZGluZycpO1xuXHRcdH1cblx0XHRlbHNlIGlmIChfdXJsX29iai5wYXRoLm1hdGNoKC9qdW1wXFwucGhwLykpXG5cdFx0e1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAkKCdiID4gYTpmaXJzdCcpLmF0dHIoJ2hyZWYnKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoX3VybF9vYmoucGF0aC5tYXRjaCgvc3RhY2MvKSAmJiBfdXJsX29iai5xdWVyeS5tYXRjaCgvbW9kZT11bmlmeS8pKVxuXHRcdHtcblx0XHRcdGxldCBfYXJlYV9zZWxlY3RvciA9ICcjc3RhY2NfdGltZWxpbmUgPiAuc3RhY2Nfc3RhdHVzX3N1bW1hcnk6bm90KFtkYXRhLWRvbmVdKSc7XG5cdFx0XHRsZXQgX2FyZWEgPSAkKF9hcmVhX3NlbGVjdG9yKTtcblxuXHRcdFx0Z3JlYXNlbW9ua2V5LkdNX2FkZFN0eWxlKFtcblx0XHRcdFx0Jy5fdWZfc3RhY2NfcmVmX2lsbHVzdCB7IGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCByZ2JhKDAsIDE0OSwgMjIyLCAwLjMpIGluc2V0OyBib3JkZXItcmFkaXVzOiAxMHB4OyB9J1xuXHRcdFx0XS5qb2luKCkpO1xuXG5cdFx0XHRsZXQgX2ZuX3RpbWVsaW5lID0gZnVuY3Rpb24gKGV2ZW50KVxuXHRcdFx0e1xuXHRcdFx0XHRfYXJlYSA9ICQoX2FyZWFfc2VsZWN0b3IpXG5cdFx0XHRcdFx0LmVhY2goZnVuY3Rpb24gKGluZGV4KVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxldCBfdGhpcyA9ICQodGhpcyk7XG5cblx0XHRcdFx0XHRcdF90aGlzXG5cdFx0XHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtZG9uZScsIHRydWUpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLWluZGV4JywgaW5kZXgpXG5cdFx0XHRcdFx0XHQ7XG5cblx0XHRcdFx0XHRcdGxldCBfc3RhY2NfcmVmX2lsbHVzdF91c2VyX25hbWUgPSAkKCcuc3RhY2NfcmVmX2lsbHVzdF91c2VyX25hbWUgPiBhOmZpcnN0JywgX3RoaXMpO1xuXG5cdFx0XHRcdFx0XHRsZXQgX3N0YWNjX3Bvc3RfdXNlcl9uYW1lID0gJCgnLnN0YWNjX3Bvc3RfdXNlcl9uYW1lJywgX3RoaXMpO1xuXG5cdFx0XHRcdFx0XHRsZXQgX2JhZGdlX3Bvc3RlciA9ICQoXG5cdFx0XHRcdFx0XHRcdCcuc3RhY2NfZm9sbG93X3VuaWZ5X2NvbW1lbnRfcHJvZmlsZV9saXN0IGltZ1tzcmMqPVwiYmFkZ2VfYWRkX2NvbnRlbnQucG5nXCJdOmZpcnN0Jyxcblx0XHRcdFx0XHRcdFx0X3RoaXNcblx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coaW5kZXgsIF9zdGFjY19yZWZfaWxsdXN0X3VzZXJfbmFtZS50ZXh0KCksIF9zdGFjY19wb3N0X3VzZXJfbmFtZS50ZXh0KCkpO1xuXG5cdFx0XHRcdFx0XHRpZiAoJCgnLnN0YWNjX3JlZl90aHVtYl9jYXB0aW9uIC5zdGFjY19yZWZfaWxsdXN0X3RpdGxlJyxcblx0XHRcdFx0XHRcdFx0X3RoaXNcblx0XHRcdFx0XHRcdCkubGVuZ3RoICYmICFfYmFkZ2VfcG9zdGVyLmxlbmd0aCAmJiBfc3RhY2NfcmVmX2lsbHVzdF91c2VyX25hbWUudGV4dCgpICE9IF9zdGFjY19wb3N0X3VzZXJfbmFtZS50ZXh0KCkpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdF90aGlzXG5cdFx0XHRcdFx0XHRcdC8vLmNzcygnYm94LXNoYWRvdycsICcwcHggMHB4IDBweCAycHggcmdiYSgwLCAxNDksIDIyMiwgMC4zKSBpbnNldCcpXG5cdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdfdWZfc3RhY2NfcmVmX2lsbHVzdCcpXG5cdFx0XHRcdFx0XHRcdDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0JCgnLnN0YWNjX3JlZl91c2VyX2lsbHVzdF9jYXB0aW9uX2ltZyBhJywgX3RoaXMpLmF0dHIoJ2hyZWYnLCBmdW5jdGlvbiAoaSwgdilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0diA9IHYucmVwbGFjZSgnbWVtYmVyLnBocCcsICdtZW1iZXJfaWxsdXN0LnBocCcpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdDtcblx0XHRcdH07XG5cblx0XHRcdCQod2luZG93KVxuXHRcdFx0XHQub24oJ2xvYWQudGltZWxpbmUnLCBfZm5fdGltZWxpbmUpXG5cdFx0XHRcdC50cmlnZ2VySGFuZGxlcignbG9hZC50aW1lbGluZScpXG5cdFx0XHQ7XG5cblx0XHRcdCQoJyNzdGFjY190aW1lbGluZScpXG5cdFx0XHRcdC5vbignRE9NTm9kZUluc2VydGVkJywgZnVuY3Rpb24gKGV2ZW50KVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCQod2luZG93KS50cmlnZ2VySGFuZGxlcignbG9hZC50aW1lbGluZScpO1xuXHRcdFx0XHRcdH0sIDEwMDApO1xuXHRcdFx0XHR9KVxuXHRcdFx0O1xuXHRcdH1cblxuXHRcdCQod2luZG93KVxuXHRcdFx0Lm9uKCdrZXlkb3duLnBhZ2UnLCByZXF1aXJlKCdyb290L2xpYi9qcXVlcnkvZXZlbnQvaG90a2V5JykucGFja0V2ZW50KGZ1bmN0aW9uIChldmVudClcblx0XHRcdHtcblx0XHRcdFx0c3dpdGNoIChldmVudC53aGljaClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNhc2UgMzM6XG5cdFx0XHRcdFx0Y2FzZSAzNzpcblx0XHRcdFx0XHRcdHZhciBfYSA9ICQoJy5wYWdlci1jb250YWluZXIgYVtyZWw9XCJwcmV2XCJdJylcblxuXHRcdFx0XHRcdFx0aWYgKF9hLmxlbmd0aClcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0X3VmX2RvbmUoZXZlbnQpO1xuXG5cdFx0XHRcdFx0XHRcdGxvY2F0aW9uLmhyZWYgPSBfYS5wcm9wKCdocmVmJyk7XG5cblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDM0OlxuXHRcdFx0XHRcdGNhc2UgMzk6XG5cdFx0XHRcdFx0XHR2YXIgX2EgPSAkKCcucGFnZXItY29udGFpbmVyIGFbcmVsPVwibmV4dFwiXScpO1xuXG5cdFx0XHRcdFx0XHRpZiAoX2EubGVuZ3RoKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRfdWZfZG9uZShldmVudCk7XG5cblx0XHRcdFx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IF9hLnByb3AoJ2hyZWYnKTtcblxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSlcblx0XHRcdC5vbignbG9hZCcsIGZ1bmN0aW9uICgpXG5cdFx0XHR7XG5cblx0XHRcdH0pXG5cdFx0O1xuXG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdCQoJ2FbaHJlZio9XCJqdW1wLnBocFwiXScsICcucHJvZmlsZS13ZWIsIC5jYXB0aW9uLCAuYm9keScpXG5cdFx0XHQuZWFjaChmdW5jdGlvbiAoKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgX3RoaXMgPSAkKHRoaXMpO1xuXG5cdFx0XHRcdHZhciBfdXJsID0gX3RoaXMucHJvcCgnaHJlZicpO1xuXG5cdFx0XHRcdGlmIChfdXJsLm1hdGNoKC9qdW1wXFwucGhwXFw/KC4rKSQvKSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdF91cmwgPSBkZWNvZGVVUklDb21wb25lbnQoUmVnRXhwLiQxKTtcblxuXHRcdFx0XHRcdF90aGlzLnByb3AoJ2hyZWYnLCBfdXJsKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5wcm9wKCd0YXJnZXQnLCAnX2JsYW5rJylcblx0XHQ7XG5cdH0sXG5cblx0YWRibG9jayhfdXJsX29iailcblx0e1xuXHRcdGlmIChfdXJsX29iai5wYXRoLm1hdGNoKC9zZWFyY2hcXC5waHAvKSlcblx0XHR7XG5cdFx0XHQvLyQoJy5wb3B1bGFyLWludHJvZHVjdGlvbjpoYXMoLnJlcXVpcmUtcHJlbWl1bSksIC5hZC1wcmludHNlcnZpY2UnKS5yZW1vdmUoKTtcblx0XHRcdC8vJCgnLmNvbHVtbi1zZWFyY2gtcmVzdWx0IC5pbWFnZS1pdGVtW3N0eWxlXScpLmhlaWdodCgnaW5oZXJpdCcpO1xuXG5cdFx0XHQkKCcucG9wdWxhci1pbnRyb2R1Y3Rpb24tb3ZlcmxheScpLmhpZGUoKTtcblx0XHR9XG5cdH0sXG59O1xuXG5mdW5jdGlvbiBfcGl4aXZfc291cmNlKF9zcmMpXG57XG5cdGxldCBfcmV0O1xuXG5cdGxldCBfcmVnZXggPSAvKHBpeGl2XFwubmV0KVxcLyg/OmNcXC8uK1xcL2ltZy1tYXN0ZXIpXFwvKGltZ1xcL1tcXC9hLXowLTldK1xcLy4rKV9tYXN0ZXIxMjAwKFxcLi4rKS9pO1xuXG5cdGlmIChfc3JjLm1hdGNoKF9yZWdleCkpXG5cdHtcblx0XHRfcmV0ID0gX3NyYy5yZXBsYWNlKF9yZWdleCwgJyQxL2ltZy1vcmlnaW5hbC8kMiQzJyk7XG5cdH1cblx0ZWxzZSBpZiAoKF9yZWdleCA9IC8oXFwvaW1nXFwvLispXFwvbW9iaWxlXFwvKC4rKV8oPzpcXGQrKW13KFxcLig/OmpwZ3xwbmd8Z2lmfGJtcCkpJC8pICYmIF9zcmMubWF0Y2goX3JlZ2V4KSlcblx0e1xuXHRcdF9yZXQgPSBfc3JjLnJlcGxhY2UoX3JlZ2V4LCAnJDEvJDIkMycpO1xuXHR9XG5cdGVsc2UgaWYgKChfcmVnZXggPSAvX20oXFwuKD86anBnfHBuZ3xnaWZ8Ym1wKSkkLykgJiYgX3NyYy5tYXRjaChfcmVnZXgpKVxuXHR7XG5cdFx0X3JldCA9IF9zcmMucmVwbGFjZShfcmVnZXgsICckMScpO1xuXHR9XG5cblx0cmV0dXJuIF9yZXQ7XG59XG5cbmZ1bmN0aW9uIHBpeGl2X2xpbmtfdWlkKHVpZCwgdHlwZSA9ICdtZW1iZXJfaWxsdXN0Jylcbntcblx0cmV0dXJuIGBodHRwOi8vd3d3LnBpeGl2Lm5ldC8ke3R5cGV9LnBocD9pZD0ke3VpZH1gO1xufVxuXG5mdW5jdGlvbiBmb2xsb3dfYnV0dG9uKF91cmxfb2JqLCB3aW5kb3cpXG57XG5cdCQoJ2JvZHknKVxuXHRcdC5vbignY2xpY2suZm9sbG93JywgJzpub3QoLmZvbGxvd2luZzIpIC5mb2xsb3ctYnV0dG9uOm5vdCgub24pLCBhc2lkZSBzZWN0aW9uIGJ1dHRvbltkYXRhLWNsaWNrLWxhYmVsPVwiZm9sbG93XCJdLCBzZWN0aW9uIGJ1dHRvbltkYXRhLWNsaWNrLWxhYmVsPVwiZm9sbG93XCJdLCB1bCBsaSBkaXYgYnV0dG9uW2RhdGEtY2xpY2stbGFiZWw9XCJmb2xsb3dcIl0nLCBmdW5jdGlvbiAoZXZlbnQpXG5cdFx0e1xuXHRcdFx0bGV0IF90aGlzID0gJCh0aGlzKTtcblxuXHRcdFx0Y29uc29sZS5pbmZvKCdjbGljay5mb2xsb3cnLCBfdGhpcyk7XG5cblx0XHRcdGxldCB1aWQgPSBfdGhpcy5hdHRyKCdkYXRhLXVzZXItaWQnKTtcblxuXHRcdFx0aWYgKCF1aWQpXG5cdFx0XHR7XG5cdFx0XHRcdHVpZCA9IF90aGlzLnBhcmVudHMoJ1tkYXRhLWlkXTplcSgwKScpLmVxKDApXG5cdFx0XHRcdFx0LmF0dHIoJ2RhdGEtaWQnKVxuXHRcdFx0XHQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghdWlkKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgcCA9IF90aGlzLnBhcmVudHMoJ2FzaWRlIHNlY3Rpb24sIHVsIGxpIGRpdicpXG5cdFx0XHRcdFx0LmZpbmQoJ2FbaHJlZio9XCIvbWVtYmVyLnBocFwiXSwgYVtocmVmKj1cIi9tZW1iZXJfaWxsdXN0LnBocFwiXScpXG5cdFx0XHRcdFx0LmVxKDApXG5cdFx0XHRcdDtcblxuXHRcdFx0XHRpZiAocC5sZW5ndGgpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR3aW5kb3cub3BlbihocmVmX3JlcGxhY2UocC5wcm9wKCdocmVmJykpLCAnX2JsYW5rJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHVpZClcblx0XHRcdHtcblx0XHRcdFx0aWYgKF91cmxfb2JqLnBhdGgubWF0Y2goL21lbWJlclxcLnBocC8pKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGl4aXZfbGlua191aWQodWlkKTtcblx0XHRcdFx0XHR9LCAyMDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxldCBfc2tpcDtcblxuXHRcdFx0XHRcdGlmICgvbWVtYmVyX2lsbHVzdFxcLnBocC8udGVzdChfdXJsX29iai5wYXRoKSAmJiBfdXJsX29iai5xdWVyeS5tYXRjaCgvKD86XFxifCZ8XilpZD0oXFxkKykvKSlcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFtSZWdFeHAuJDEsIHVpZF0pO1xuXG5cdFx0XHRcdFx0XHRpZiAoUmVnRXhwLiQxID09IHVpZClcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0X3NraXAgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coX3VybF9vYmopO1xuXG5cdFx0XHRcdFx0aWYgKCFfc2tpcClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR3aW5kb3cub3BlbihwaXhpdl9saW5rX3VpZCh1aWQpLCAnX2JsYW5rJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Z2xvYmFsLl9mb2xsb3dfYXJlYSAmJiBnbG9iYWwuX2ZvbGxvd19hcmVhXG5cdFx0XHRcdFx0XHQudHJpZ2dlckhhbmRsZXIoJ0RPTU5vZGVJbnNlcnRlZCcpXG5cdFx0XHRcdFx0O1xuXHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0e1xuXHRcdFx0XHRjb25zb2xlLmRlYnVnKF90aGlzLCB1aWQsIGV2ZW50KTtcblx0XHRcdH1cblx0XHR9KVxuXHQ7XG59XG5cbmZ1bmN0aW9uIGhyZWZfcmVwbGFjZShocmVmOiBzdHJpbmcpXG57XG5cdHJldHVybiBocmVmLnJlcGxhY2UoJ21lbWJlci5waHAnLCAnbWVtYmVyX2lsbHVzdC5waHAnKTtcbn1cblxuZnVuY3Rpb24gaHJlZl91aWQoaHJlZjogc3RyaW5nKTogc3RyaW5nXG57XG5cdGxldCBtID0gaHJlZi5tYXRjaCgvKD86WyZcXD9dKWlkPShcXGQrKSg/OiR8JnwjKS8pO1xuXG5cdGlmIChtICYmIG1bMV0pXG5cdHtcblx0XHRyZXR1cm4gbVsxXTtcblx0fVxufVxuIl19