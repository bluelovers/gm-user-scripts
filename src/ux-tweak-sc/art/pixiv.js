'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    metadata: {
        include: [
            'http*://*.pixiv.net/*',
            'http*://www.pixiv.net/search*',
        ],
        exclude: [
            'http*://*.pixiv.net/novel/*',
        ],
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
            && _url_obj.path.match(/^\/?member\.php/)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl4aXYuanMiLCJzb3VyY2VSb290IjoiRDovVXNlcnMvRG9jdW1lbnRzL1RoZSBQcm9qZWN0L2dtX3NjcmlwdHNfcmVwby93cy11c2Vyc2NyaXB0L3BhY2thZ2VzL3V4LXR3ZWFrLXNjLyIsInNvdXJjZXMiOlsic3JjL3V4LXR3ZWFrLXNjL2FydC9waXhpdi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxZQUFZLENBQUM7O0FBb0JiLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFFaEIsUUFBUSxFQUFFO1FBQ1QsT0FBTyxFQUFFO1lBQ1IsdUJBQXVCO1lBQ3ZCLCtCQUErQjtTQUMvQjtRQUNELE9BQU8sRUFBRTtZQUNSLDZCQUE2QjtTQUM3QjtLQUNEO0lBRUQsSUFBSSxDQUFDLFFBQVE7UUFFWixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUNyQztZQUNDLE9BQU8sSUFBSSxDQUFDO1NBQ1o7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRO1FBRTlCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBRXZELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBR2hELE1BQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFFaEUsSUFBSSxRQUFRLENBQUMsUUFBUTtlQUNqQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztlQUN0QyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7ZUFDaEMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFFckM7WUFDQyxRQUFRLENBQUMsSUFBSSxH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QUcsQ0FBQyxDQUFDO1NBQ1I7YUFFRDtZQUNDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNqQztJQUNGLENBQUMsQ0FBQyxDQUNGO0FBQ0YsQ0FBQztBQUVELHNCQUFzQixJQUFZO0lBRWpDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBRUQsa0JBQWtCLElBQVk7SUFFN0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBRWpELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDYjtRQUNDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ1o7QUFDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxNy83LzE0LzAxNC5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IElEZW1vLCBJR2xvYmFsLCBJR3JlYXNlbW9ua2V5LCBJV2luZG93LCBJSlF1ZXJ5U3RhdGljLCBJVXJsT2JqZWN0MiB9IGZyb20gJ3Jvb3QvbGliL2NvcmUvZGVtbyc7XG5cbmRlY2xhcmUgY29uc3QgZ2xvYmFsOiBJR2xvYmFsO1xuZGVjbGFyZSBjb25zdCBncmVhc2Vtb25rZXk6IElHcmVhc2Vtb25rZXk7XG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogSVdpbmRvdztcbmRlY2xhcmUgY29uc3QgdW5zYWZlV2luZG93OiBJV2luZG93O1xuZGVjbGFyZSBjb25zdCAkOiBJSlF1ZXJ5U3RhdGljO1xuZGVjbGFyZSBjb25zdCBqUXVlcnk6IElKUXVlcnlTdGF0aWM7XG5cbmRlY2xhcmUgbW9kdWxlICdyb290L2xpYi9jb3JlL2RlbW8nXG57XG5cdGludGVyZmFjZSBJR2xvYmFsXG5cdHtcblx0XHRfZm9sbG93X2FyZWEsXG5cdFx0X3VybF9vYmo/OiBJVXJsT2JqZWN0Mjtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuXHRtZXRhZGF0YToge1xuXHRcdGluY2x1ZGU6IFtcblx0XHRcdCdodHRwKjovLyoucGl4aXYubmV0LyonLFxuXHRcdFx0J2h0dHAqOi8vd3d3LnBpeGl2Lm5ldC9zZWFyY2gqJyxcblx0XHRdLFxuXHRcdGV4Y2x1ZGU6IFtcblx0XHRcdCdodHRwKjovLyoucGl4aXYubmV0L25vdmVsLyonLFxuXHRcdF0sXG5cdH0sXG5cblx0dGVzdChfdXJsX29iailcblx0e1xuXHRcdGlmIChfdXJsX29iai5ob3N0Lm1hdGNoKC9waXhpdlxcLm5ldC8pKVxuXHRcdHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblxuXHRtYWluKF91cmxfb2JqID0gZ2xvYmFsLl91cmxfb2JqKVxuXHR7XG5cdFx0Y29uc3QgZGVib3VuY2UgPSByZXF1aXJlKCd0aHJvdHRsZS1kZWJvdW5jZS9kZWJvdW5jZScpO1xuXHRcdGNvbnN0IHRocm90dGxlID0gcmVxdWlyZSgndGhyb3R0bGUtZGVib3VuY2UvdGhyb3R0bGUnKTtcblxuXHRcdGNvbnN0IF91Zl9kb25lID0gcmVxdWlyZSgncm9vdC9saWIvZXZlbnQvZG9uZScpO1xuXHRcdC8vcmVxdWlyZSgncm9vdC9saWIvZnVuYy9kZWJvdW5jZScpO1xuXG5cdFx0Y29uc3QgX3VmX2RvbV9maWx0ZXJfbGluayA9IHJlcXVpcmUoJ3Jvb3QvbGliL2RvbS9maWx0ZXIvbGluaycpO1xuXG5cdFx0aWYgKGRvY3VtZW50LnJlZmVycmVyXG5cdFx0XHQmJiBfdXJsX29iai5wYXRoLm1hdGNoKC9eXFwvP21lbWJlclxcLnBocC8pXG5cdFx0XHQmJiBfdXJsX29iai5xdWVyeS5tYXRjaCgvXmlkPVxcZCskLylcblx0XHRcdCYmICFkb2N1bWVudC5yZWZlcnJlci5tYXRjaCgvcGl4aXYvKVxuXHRcdClcblx0XHR7XG5cdFx0XHRsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24uaHJlZi5yZXBsYWNlKCdtZW1iZXIucGhwJywgJ21lbWJlcl9pbGx1c3QucGhwJyk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQkKHdpbmRvdylcblx0XHRcdC5vbignbG9hZC5saW5rJywgZGVib3VuY2UoMTAwLCBmdW5jdGlvbiAoKVxuXHRcdFx0e1xuXHRcdFx0XHRfdWZfZG9tX2ZpbHRlcl9saW5rKFtcblx0XHRcdFx0XHQnLndvcmtzX2Rpc3BsYXkgYS53b3JrLCAudGFnQ2xvdWQgYSwgLnVzZXItbGlzdCBhLCAuaW1hZ2UtaXRlbSBhLCAud29ya3NMaXN0T3RoZXJzSW1nIGEsIC5yYW5rLWRldGFpbCBhLCAudGFncyAudGFnIGEsICNmYXZvcml0ZS1wcmVmZXJlbmNlIGZvcm0sIC5zcG90bGlnaHQtd3JhcHBlciAuc3BvdGxpZ2h0LWFydGljbGUtYm9keSAud29ya3MtY29sdW1uIGEud29yaywgLnNwb3RsaWdodC13cmFwcGVyIC5zaWRlYmFyIGEsIC5tZW1iZXJzIGEnLFxuXHRcdFx0XHRcdCcucG9zdCBhJyxcblx0XHRcdFx0XHQnLmNvbHVtbi1zZWFyY2gtcmVzdWx0IGEnLFxuXHRcdFx0XHRcdCcjanMtcmVhY3Qtc2VhcmNoLW1pZCBhJyxcblxuXHRcdFx0XHRcdCd1bCBsaSBkaXYgYVtocmVmKj1cIm1lbWJlclwiXScsXG5cdFx0XHRcdF0uam9pbignLCcpKVxuXHRcdFx0XHRcdC5wcm9wKCd0YXJnZXQnLCAnX2JsYW5rJylcblx0XHRcdFx0O1xuXHRcdFx0fSkpXG5cdFx0XHQudHJpZ2dlckhhbmRsZXIoJ2xvYWQubGluaycpXG5cdFx0O1xuXG5cdFx0JCgnI2pzLXJlYWN0LXNlYXJjaC1taWQnKVxuXHRcdFx0Lm9uKCdET01Ob2RlSW5zZXJ0ZWQnLCBkZWJvdW5jZSgxMDAsIGZ1bmN0aW9uICgpXG5cdFx0XHR7XG5cdFx0XHRcdCQod2luZG93KS50cmlnZ2VySGFuZGxlcignbG9hZC5saW5rJyk7XG5cdFx0XHR9KSlcblx0XHQ7XG5cblx0XHRjb25zdCBncmVhc2Vtb25rZXkgPSByZXF1aXJlKCdyb290L2xpYi9ncmVhc2Vtb25rZXkvdWYnKTtcblxuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHQkKHdpbmRvdykuc2Nyb2xsVG8oJCgpXG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHQucHVzaCgnLmxheW91dC1ib2R5Jylcblx0XHRcdC5wdXNoKCcjc2VhcmNoLXJlc3VsdCcpXG5cdFx0XHQuZXEoMClcblx0XHQpO1xuXG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdGxldCBfcGl4aXZfdXNlcl9pZCA9ICh1bnNhZmVXaW5kb3cucGl4aXYgJiYgdW5zYWZlV2luZG93LnBpeGl2LnVzZXIgJiYgdW5zYWZlV2luZG93LnBpeGl2LnVzZXIuaWQpXG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHQ/IHVuc2FmZVdpbmRvdy5waXhpdi51c2VyLmlkXG5cdFx0XHQ6IG51bGw7XG5cblx0XHRpZiAoX3BpeGl2X3VzZXJfaWQpXG5cdFx0e1xuXHRcdFx0JCgnLm5hdmlnYXRpb24tbGlzdCAubWVudXMgLmJvb2ttYXJrcycpXG5cdFx0XHRcdC5wcm9wKGZ1bmN0aW9uICgpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsZXQgX2EgPSAkKCc8YS8+Jylcblx0XHRcdFx0XHRcdC5wcm9wKHtcblx0XHRcdFx0XHRcdFx0J2hyZWYnOiAnaHR0cDovL3d3dy5waXhpdi5uZXQvYm9va21hcmsucGhwP3R5cGU9dXNlcicsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0Lmh0bWwoJzxpIGNsYXNzPVwiX2ljb24gc3ByaXRlcy1ib29rbWFya3NcIj48L2k+6Zec5rOoJylcblx0XHRcdFx0XHQ7XG5cblx0XHRcdFx0XHRyZXR1cm4gJCgnPGxpIGNsYXNzPVwiYm9va21hcmtzXCIvPicpLmFwcGVuZChfYSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQ7XG5cdFx0fVxuXG5cdFx0JCgnI2Zhdm9yaXRlLWJ1dHRvbicpLnByb3AoJ2hyZWYnLCAnamF2YXNjdGlwdDp2b2lkKDApOycpO1xuXG5cdFx0Zm9sbG93X2J1dHRvbihfdXJsX29iaiwgd2luZG93KTtcblxuXHRcdGlmIChfdXJsX29iai5wYXRoLm1hdGNoKC9tZW1iZXJfaWxsdXN0XFwucGhwLykgJiYgX3VybF9vYmoucXVlcnkubWF0Y2goL21vZGU9bWVkaXVtLykpXG5cdFx0e1xuXHRcdFx0aWYgKCQoJ2JvZHknKS5jc3MoJ2JhY2tncm91bmQtY29sb3InKSA9PSAnI0U0RTdFRScgfHwgJCgnYm9keScpXG5cdFx0XHRcdC5jc3MoJ2JhY2tncm91bmQtY29sb3InKSA9PSAncmdiKDIyOCwgMjMxLCAyMzgpJylcblx0XHRcdHtcblx0XHRcdFx0JCgnYm9keScpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICdyZ2JhKDAsIDMsIDExLCAwLjkpJyk7XG5cdFx0XHR9XG5cblx0XHRcdCQoJyNyb290Jykub24oJ0RPTU5vZGVJbnNlcnRlZCcsIGZ1bmN0aW9uIChldmVudClcblx0XHRcdHtcblx0XHRcdFx0bGV0IF9hID0gX3VmX2RvbV9maWx0ZXJfbGluaygnYTpub3QoW2RhdGEtZG9uZV0pW2hyZWYqPVwibWVtYmVyLnBocFwiXScsICQoZXZlbnQudGFyZ2V0KSlcblx0XHRcdFx0XHQuYXR0cignZGF0YS1kb25lJywgdHJ1ZSlcblx0XHRcdFx0XHQuYXR0cigndGFyZ2V0JywgJ19ibGFuaycpXG5cdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCBmdW5jdGlvbiAoaSwgb2xkKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHJldHVybiBvbGQucmVwbGFjZSgnbWVtYmVyLnBocCcsICdtZW1iZXJfaWxsdXN0LnBocCcpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0O1xuXG5cdFx0XHRcdC8vY29uc29sZS5sb2codGhpcywgZXZlbnQudGFyZ2V0LCBfYSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoX3VybF9vYmoucGF0aC5tYXRjaCgvc2VhcmNoXFwucGhwLykpXG5cdFx0e1xuXHRcdFx0aWYgKCQoJy5jb2x1bW4taGVhZGVyLCAuY29sdW1uLWxhYmVsJykuZmluZCgnLnRhYnMgbGk6ZXEoMCkgYS5jdXJyZW50JykubGVuZ3RoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgZm4gPSBmdW5jdGlvbiAoKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKCQoJy5jb2x1bW4tc2VhcmNoLXJlc3VsdCAuX25vLWl0ZW06dmlzaWJsZSwgI2pzLXJlYWN0LXNlYXJjaC1taWQ6dmlzaWJsZSA+IC5fbm8taXRlbTp2aXNpYmxlJykubGVuZ3RoKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxvY2F0aW9uLmhyZWYgPSAkKCcuY29sdW1uLWhlYWRlciwgLmNvbHVtbi1sYWJlbCcpXG5cdFx0XHRcdFx0XHRcdC5maW5kKCcudGFicyBhW2hyZWYqPVwic2VhcmNoX3VzZXJcIl0nKVxuXHRcdFx0XHRcdFx0XHQucHJvcCgnaHJlZicpXG5cdFx0XHRcdFx0XHQ7XG5cblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblxuXHRcdFx0XHRpZiAoIWZuKCkpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQkKCcjanMtcmVhY3Qtc2VhcmNoLW1pZCcpXG5cdFx0XHRcdFx0XHQub24oJ0RPTU5vZGVJbnNlcnRlZCcsIGZuKVxuXHRcdFx0XHRcdDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHQkLnNjcm9sbFRvKCQoJyNqcy1yZWFjdC1zZWFyY2gtbWlkLCAjd3JhcHBlcicpLmVxKC0xKSk7XG5cblx0XHRcdG1vZHVsZS5leHBvcnRzLmFkYmxvY2soX3VybF9vYmopO1xuXG5cdFx0XHQvL2NvbnN0IGRlYm91bmNlID0gcmVxdWlyZSgndGhyb3R0bGUtZGVib3VuY2UvZGVib3VuY2UnKTtcblx0XHRcdC8vY29uc3QgdGhyb3R0bGUgPSByZXF1aXJlKCd0aHJvdHRsZS1kZWJvdW5jZS90aHJvdHRsZScpO1xuXG5cdFx0XHQkKCcuY29sdW1uLXNlYXJjaC1yZXN1bHQnKS5vbignRE9NTm9kZUluc2VydGVkJywgdGhyb3R0bGUoMzAwLCBmdW5jdGlvbiAoKVxuXHRcdFx0e1xuXHRcdFx0XHRfdWZfZG9tX2ZpbHRlcl9saW5rKFtcblx0XHRcdFx0XHQnLmNvbHVtbi1zZWFyY2gtcmVzdWx0IGEnLFxuXHRcdFx0XHRdLmpvaW4oJywnKSlcblx0XHRcdFx0XHQucHJvcCgndGFyZ2V0JywgJ19ibGFuaycpXG5cdFx0XHRcdDtcblx0XHRcdH0pKTtcblxuXHRcdFx0JChkb2N1bWVudCkub24oJ2NsaWNrIG1vdXNlZG93bicsIGZ1bmN0aW9uIChldmVudClcblx0XHRcdHtcblx0XHRcdFx0dmFyIF90aGlzID0gJChldmVudC50YXJnZXQpO1xuXG5cdFx0XHRcdC8vX3VmX2xvZyhldmVudCwgdGhpcyk7XG5cblx0XHRcdFx0aWYgKF90aGlzLmlzKCc6bm90KC5mb2xsb3dpbmcyKSAuZm9sbG93LWJ1dHRvbicpKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ly9fdWZfbG9nKDc3NywgZXZlbnQsIF90aGlzKTtcblxuXHRcdFx0XHRcdHZhciBfYSA9IF90aGlzLnBhcmVudHMoJy51c2VyLWluZm86Zmlyc3QnKS5maW5kKCdhLnVzZXItbmFtZTpmaXJzdCcpO1xuXG5cdFx0XHRcdFx0dmFyIF9ocmVmID0gX2EucHJvcCgnaHJlZicpXG5cdFx0XHRcdFx0XHQucmVwbGFjZSgnbWVtYmVyLnBocCcsICdtZW1iZXJfaWxsdXN0LnBocCcpO1xuXG5cdFx0XHRcdFx0Ly9fdWZfbG9nKGV2ZW50LCBfdGhpcywgX2EsIF9ocmVmKTtcblxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR3aW5kb3cub3BlbihfaHJlZiwgJ19ibGFuaycpO1xuXHRcdFx0XHRcdH0sIDIwMCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0XHRlbHNlIGlmIChfdXJsX29iai5wYXRoLm1hdGNoKC9zZWFyY2hfdXNlclxcLnBocC8pKVxuXHRcdHtcblx0XHRcdCQoJy51c2VyLXNlYXJjaC1yZXN1bHQtY29udGFpbmVyIC51c2VyLXJlY29tbWVuZGF0aW9uLWl0ZW0gYS50aXRsZScpXG5cdFx0XHRcdC5wcm9wKCdocmVmJywgZnVuY3Rpb24gKGksIHYpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyZXR1cm4gdi5yZXBsYWNlKCdtZW1iZXIucGhwJywgJ21lbWJlcl9pbGx1c3QucGhwJyk7XG5cdFx0XHRcdH0pXG5cdFx0XHQ7XG5cblx0XHRcdGlmICgkKCcudXNlci1zZWFyY2gtcmVzdWx0LWNvbnRhaW5lciAudXNlci1yZWNvbW1lbmRhdGlvbi1pdGVtJykubGVuZ3RoID09IDEpXG5cdFx0XHR7XG5cdFx0XHRcdGxvY2F0aW9uLmhyZWYgPSAkKCcudXNlci1zZWFyY2gtcmVzdWx0LWNvbnRhaW5lciAudXNlci1yZWNvbW1lbmRhdGlvbi1pdGVtIGEudGl0bGUnKVxuXHRcdFx0XHRcdC5wcm9wKCdocmVmJylcblx0XHRcdFx0Ly8ucmVwbGFjZSgnbWVtYmVyLnBocCcsICdtZW1iZXJfaWxsdXN0LnBocCcpXG5cdFx0XHRcdDtcblx0XHRcdH1cblxuXHRcdFx0bGV0IF9ocmVmO1xuXG5cdFx0XHQkKCcuZm9sbG93Om5vdCguZm9sbG93aW5nKScpXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRfaHJlZiA9ICQodGhpcylcblx0XHRcdFx0XHRcdC5wYXJlbnRzKCcudXNlci1yZWNvbW1lbmRhdGlvbi1pdGVtJykuZXEoMClcblx0XHRcdFx0XHRcdC5maW5kKCdhLnRpdGxlJylcblx0XHRcdFx0XHRcdC5wcm9wKCdocmVmJylcblx0XHRcdFx0XHQ7XG5cdFx0XHRcdH0pXG5cdFx0XHQ7XG5cblx0XHRcdCQoJ2JvZHknKVxuXHRcdFx0XHQub24oJ2NsaWNrJywgJy5hY3Rpb24tZm9sbG93IDpzdWJtaXQsIC5hY3Rpb24tZm9sbG93IC5fYnV0dG9uJywgZnVuY3Rpb24gKClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHdpbmRvdy5vcGVuKF9ocmVmLCAnX2JsYW5rJyk7XG5cdFx0XHRcdH0pXG5cdFx0XHQ7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKF91cmxfb2JqLnBhdGgubWF0Y2goL2Jvb2ttYXJrX2FkZFxcLnBocC8pKVxuXHRcdHtcblx0XHRcdCQod2luZG93KVxuXHRcdFx0XHQub24oJ2xvYWQnLCBkZWJvdW5jZSgzMDAwLCBmdW5jdGlvbiAoKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKCEkKCcudXNlci1yZWNvbW1lbmRhdGlvbi1pdGVtcyAudXNlci1yZWNvbW1lbmRhdGlvbi1pdGVtJykubGVuZ3RoICYmICQoXG5cdFx0XHRcdFx0XHQnI3dyYXBwZXIgLnVzZXItcmVjb21tZW5kYXRpb24tdW5pdCAuX25vLWl0ZW06dmlzaWJsZScpLmxlbmd0aClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR3aW5kb3cuY2xvc2UoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pKVxuXHRcdFx0O1xuXG5cdFx0XHRnbG9iYWwuX2ZvbGxvd19hcmVhID0gJCgnLnVzZXItcmVjb21tZW5kYXRpb24taXRlbXMuX2xvYWRpbmcnKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoX3VybF9vYmoucGF0aC5tYXRjaCgvanVtcFxcLnBocC8pKVxuXHRcdHtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJCgnYiA+IGE6Zmlyc3QnKS5hdHRyKCdocmVmJyk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKF91cmxfb2JqLnBhdGgubWF0Y2goL3N0YWNjLykgJiYgX3VybF9vYmoucXVlcnkubWF0Y2goL21vZGU9dW5pZnkvKSlcblx0XHR7XG5cdFx0XHRsZXQgX2FyZWFfc2VsZWN0b3IgPSAnI3N0YWNjX3RpbWVsaW5lID4gLnN0YWNjX3N0YXR1c19zdW1tYXJ5Om5vdChbZGF0YS1kb25lXSknO1xuXHRcdFx0bGV0IF9hcmVhID0gJChfYXJlYV9zZWxlY3Rvcik7XG5cblx0XHRcdGdyZWFzZW1vbmtleS5HTV9hZGRTdHlsZShbXG5cdFx0XHRcdCcuX3VmX3N0YWNjX3JlZl9pbGx1c3QgeyBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggcmdiYSgwLCAxNDksIDIyMiwgMC4zKSBpbnNldDsgYm9yZGVyLXJhZGl1czogMTBweDsgfSdcblx0XHRcdF0uam9pbigpKTtcblxuXHRcdFx0bGV0IF9mbl90aW1lbGluZSA9IGZ1bmN0aW9uIChldmVudClcblx0XHRcdHtcblx0XHRcdFx0X2FyZWEgPSAkKF9hcmVhX3NlbGVjdG9yKVxuXHRcdFx0XHRcdC5lYWNoKGZ1bmN0aW9uIChpbmRleClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsZXQgX3RoaXMgPSAkKHRoaXMpO1xuXG5cdFx0XHRcdFx0XHRfdGhpc1xuXHRcdFx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLWRvbmUnLCB0cnVlKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS1pbmRleCcsIGluZGV4KVxuXHRcdFx0XHRcdFx0O1xuXG5cdFx0XHRcdFx0XHRsZXQgX3N0YWNjX3JlZl9pbGx1c3RfdXNlcl9uYW1lID0gJCgnLnN0YWNjX3JlZl9pbGx1c3RfdXNlcl9uYW1lID4gYTpmaXJzdCcsIF90aGlzKTtcblxuXHRcdFx0XHRcdFx0bGV0IF9zdGFjY19wb3N0X3VzZXJfbmFtZSA9ICQoJy5zdGFjY19wb3N0X3VzZXJfbmFtZScsIF90aGlzKTtcblxuXHRcdFx0XHRcdFx0bGV0IF9iYWRnZV9wb3N0ZXIgPSAkKFxuXHRcdFx0XHRcdFx0XHQnLnN0YWNjX2ZvbGxvd191bmlmeV9jb21tZW50X3Byb2ZpbGVfbGlzdCBpbWdbc3JjKj1cImJhZGdlX2FkZF9jb250ZW50LnBuZ1wiXTpmaXJzdCcsXG5cdFx0XHRcdFx0XHRcdF90aGlzXG5cdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKGluZGV4LCBfc3RhY2NfcmVmX2lsbHVzdF91c2VyX25hbWUudGV4dCgpLCBfc3RhY2NfcG9zdF91c2VyX25hbWUudGV4dCgpKTtcblxuXHRcdFx0XHRcdFx0aWYgKCQoJy5zdGFjY19yZWZfdGh1bWJfY2FwdGlvbiAuc3RhY2NfcmVmX2lsbHVzdF90aXRsZScsXG5cdFx0XHRcdFx0XHRcdF90aGlzXG5cdFx0XHRcdFx0XHQpLmxlbmd0aCAmJiAhX2JhZGdlX3Bvc3Rlci5sZW5ndGggJiYgX3N0YWNjX3JlZl9pbGx1c3RfdXNlcl9uYW1lLnRleHQoKSAhPSBfc3RhY2NfcG9zdF91c2VyX25hbWUudGV4dCgpKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRfdGhpc1xuXHRcdFx0XHRcdFx0XHQvLy5jc3MoJ2JveC1zaGFkb3cnLCAnMHB4IDBweCAwcHggMnB4IHJnYmEoMCwgMTQ5LCAyMjIsIDAuMykgaW5zZXQnKVxuXHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnX3VmX3N0YWNjX3JlZl9pbGx1c3QnKVxuXHRcdFx0XHRcdFx0XHQ7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCQoJy5zdGFjY19yZWZfdXNlcl9pbGx1c3RfY2FwdGlvbl9pbWcgYScsIF90aGlzKS5hdHRyKCdocmVmJywgZnVuY3Rpb24gKGksIHYpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHYgPSB2LnJlcGxhY2UoJ21lbWJlci5waHAnLCAnbWVtYmVyX2lsbHVzdC5waHAnKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHY7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQ7XG5cdFx0XHR9O1xuXG5cdFx0XHQkKHdpbmRvdylcblx0XHRcdFx0Lm9uKCdsb2FkLnRpbWVsaW5lJywgX2ZuX3RpbWVsaW5lKVxuXHRcdFx0XHQudHJpZ2dlckhhbmRsZXIoJ2xvYWQudGltZWxpbmUnKVxuXHRcdFx0O1xuXG5cdFx0XHQkKCcjc3RhY2NfdGltZWxpbmUnKVxuXHRcdFx0XHQub24oJ0RPTU5vZGVJbnNlcnRlZCcsIGZ1bmN0aW9uIChldmVudClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQkKHdpbmRvdykudHJpZ2dlckhhbmRsZXIoJ2xvYWQudGltZWxpbmUnKTtcblx0XHRcdFx0XHR9LCAxMDAwKTtcblx0XHRcdFx0fSlcblx0XHRcdDtcblx0XHR9XG5cblx0XHQkKHdpbmRvdylcblx0XHRcdC5vbigna2V5ZG93bi5wYWdlJywgcmVxdWlyZSgncm9vdC9saWIvanF1ZXJ5L2V2ZW50L2hvdGtleScpLnBhY2tFdmVudChmdW5jdGlvbiAoZXZlbnQpXG5cdFx0XHR7XG5cdFx0XHRcdHN3aXRjaCAoZXZlbnQud2hpY2gpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjYXNlIDMzOlxuXHRcdFx0XHRcdGNhc2UgMzc6XG5cdFx0XHRcdFx0XHR2YXIgX2EgPSAkKCcucGFnZXItY29udGFpbmVyIGFbcmVsPVwicHJldlwiXScpXG5cblx0XHRcdFx0XHRcdGlmIChfYS5sZW5ndGgpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdF91Zl9kb25lKGV2ZW50KTtcblxuXHRcdFx0XHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gX2EucHJvcCgnaHJlZicpO1xuXG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAzNDpcblx0XHRcdFx0XHRjYXNlIDM5OlxuXHRcdFx0XHRcdFx0dmFyIF9hID0gJCgnLnBhZ2VyLWNvbnRhaW5lciBhW3JlbD1cIm5leHRcIl0nKTtcblxuXHRcdFx0XHRcdFx0aWYgKF9hLmxlbmd0aClcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0X3VmX2RvbmUoZXZlbnQpO1xuXG5cdFx0XHRcdFx0XHRcdGxvY2F0aW9uLmhyZWYgPSBfYS5wcm9wKCdocmVmJyk7XG5cblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSkpXG5cdFx0XHQub24oJ2xvYWQnLCBmdW5jdGlvbiAoKVxuXHRcdFx0e1xuXG5cdFx0XHR9KVxuXHRcdDtcblxuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHQkKCdhW2hyZWYqPVwianVtcC5waHBcIl0nLCAnLnByb2ZpbGUtd2ViLCAuY2FwdGlvbiwgLmJvZHknKVxuXHRcdFx0LmVhY2goZnVuY3Rpb24gKClcblx0XHRcdHtcblx0XHRcdFx0dmFyIF90aGlzID0gJCh0aGlzKTtcblxuXHRcdFx0XHR2YXIgX3VybCA9IF90aGlzLnByb3AoJ2hyZWYnKTtcblxuXHRcdFx0XHRpZiAoX3VybC5tYXRjaCgvanVtcFxcLnBocFxcPyguKykkLykpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRfdXJsID0gZGVjb2RlVVJJQ29tcG9uZW50KFJlZ0V4cC4kMSk7XG5cblx0XHRcdFx0XHRfdGhpcy5wcm9wKCdocmVmJywgX3VybCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQucHJvcCgndGFyZ2V0JywgJ19ibGFuaycpXG5cdFx0O1xuXHR9LFxuXG5cdGFkYmxvY2soX3VybF9vYmopXG5cdHtcblx0XHRpZiAoX3VybF9vYmoucGF0aC5tYXRjaCgvc2VhcmNoXFwucGhwLykpXG5cdFx0e1xuXHRcdFx0Ly8kKCcucG9wdWxhci1pbnRyb2R1Y3Rpb246aGFzKC5yZXF1aXJlLXByZW1pdW0pLCAuYWQtcHJpbnRzZXJ2aWNlJykucmVtb3ZlKCk7XG5cdFx0XHQvLyQoJy5jb2x1bW4tc2VhcmNoLXJlc3VsdCAuaW1hZ2UtaXRlbVtzdHlsZV0nKS5oZWlnaHQoJ2luaGVyaXQnKTtcblxuXHRcdFx0JCgnLnBvcHVsYXItaW50cm9kdWN0aW9uLW92ZXJsYXknKS5oaWRlKCk7XG5cdFx0fVxuXHR9LFxufTtcblxuZnVuY3Rpb24gX3BpeGl2X3NvdXJjZShfc3JjKVxue1xuXHRsZXQgX3JldDtcblxuXHRsZXQgX3JlZ2V4ID0gLyhwaXhpdlxcLm5ldClcXC8oPzpjXFwvLitcXC9pbWctbWFzdGVyKVxcLyhpbWdcXC9bXFwvYS16MC05XStcXC8uKylfbWFzdGVyMTIwMChcXC4uKykvaTtcblxuXHRpZiAoX3NyYy5tYXRjaChfcmVnZXgpKVxuXHR7XG5cdFx0X3JldCA9IF9zcmMucmVwbGFjZShfcmVnZXgsICckMS9pbWctb3JpZ2luYWwvJDIkMycpO1xuXHR9XG5cdGVsc2UgaWYgKChfcmVnZXggPSAvKFxcL2ltZ1xcLy4rKVxcL21vYmlsZVxcLyguKylfKD86XFxkKyltdyhcXC4oPzpqcGd8cG5nfGdpZnxibXApKSQvKSAmJiBfc3JjLm1hdGNoKF9yZWdleCkpXG5cdHtcblx0XHRfcmV0ID0gX3NyYy5yZXBsYWNlKF9yZWdleCwgJyQxLyQyJDMnKTtcblx0fVxuXHRlbHNlIGlmICgoX3JlZ2V4ID0gL19tKFxcLig/OmpwZ3xwbmd8Z2lmfGJtcCkpJC8pICYmIF9zcmMubWF0Y2goX3JlZ2V4KSlcblx0e1xuXHRcdF9yZXQgPSBfc3JjLnJlcGxhY2UoX3JlZ2V4LCAnJDEnKTtcblx0fVxuXG5cdHJldHVybiBfcmV0O1xufVxuXG5mdW5jdGlvbiBwaXhpdl9saW5rX3VpZCh1aWQsIHR5cGUgPSAnbWVtYmVyX2lsbHVzdCcpXG57XG5cdHJldHVybiBgaHR0cDovL3d3dy5waXhpdi5uZXQvJHt0eXBlfS5waHA/aWQ9JHt1aWR9YDtcbn1cblxuZnVuY3Rpb24gZm9sbG93X2J1dHRvbihfdXJsX29iaiwgd2luZG93KVxue1xuXHQkKCdib2R5Jylcblx0XHQub24oJ2NsaWNrLmZvbGxvdycsICc6bm90KC5mb2xsb3dpbmcyKSAuZm9sbG93LWJ1dHRvbjpub3QoLm9uKSwgYXNpZGUgc2VjdGlvbiBidXR0b25bZGF0YS1jbGljay1sYWJlbD1cImZvbGxvd1wiXSwgc2VjdGlvbiBidXR0b25bZGF0YS1jbGljay1sYWJlbD1cImZvbGxvd1wiXSwgdWwgbGkgZGl2IGJ1dHRvbltkYXRhLWNsaWNrLWxhYmVsPVwiZm9sbG93XCJdJywgZnVuY3Rpb24gKGV2ZW50KVxuXHRcdHtcblx0XHRcdGxldCBfdGhpcyA9ICQodGhpcyk7XG5cblx0XHRcdGNvbnNvbGUuaW5mbygnY2xpY2suZm9sbG93JywgX3RoaXMpO1xuXG5cdFx0XHRsZXQgdWlkID0gX3RoaXMuYXR0cignZGF0YS11c2VyLWlkJyk7XG5cblx0XHRcdGlmICghdWlkKVxuXHRcdFx0e1xuXHRcdFx0XHR1aWQgPSBfdGhpcy5wYXJlbnRzKCdbZGF0YS1pZF06ZXEoMCknKS5lcSgwKVxuXHRcdFx0XHRcdC5hdHRyKCdkYXRhLWlkJylcblx0XHRcdFx0O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXVpZClcblx0XHRcdHtcblx0XHRcdFx0bGV0IHAgPSBfdGhpcy5wYXJlbnRzKCdhc2lkZSBzZWN0aW9uLCB1bCBsaSBkaXYnKVxuXHRcdFx0XHRcdC5maW5kKCdhW2hyZWYqPVwiL21lbWJlci5waHBcIl0sIGFbaHJlZio9XCIvbWVtYmVyX2lsbHVzdC5waHBcIl0nKVxuXHRcdFx0XHRcdC5lcSgwKVxuXHRcdFx0XHQ7XG5cblx0XHRcdFx0aWYgKHAubGVuZ3RoKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0d2luZG93Lm9wZW4oaHJlZl9yZXBsYWNlKHAucHJvcCgnaHJlZicpKSwgJ19ibGFuaycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh1aWQpXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChfdXJsX29iai5wYXRoLm1hdGNoKC9tZW1iZXJcXC5waHAvKSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBpeGl2X2xpbmtfdWlkKHVpZCk7XG5cdFx0XHRcdFx0fSwgMjAwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsZXQgX3NraXA7XG5cblx0XHRcdFx0XHRpZiAoL21lbWJlcl9pbGx1c3RcXC5waHAvLnRlc3QoX3VybF9vYmoucGF0aCkgJiYgX3VybF9vYmoucXVlcnkubWF0Y2goLyg/OlxcYnwmfF4paWQ9KFxcZCspLykpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhbUmVnRXhwLiQxLCB1aWRdKTtcblxuXHRcdFx0XHRcdFx0aWYgKFJlZ0V4cC4kMSA9PSB1aWQpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdF9za2lwID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKF91cmxfb2JqKTtcblxuXHRcdFx0XHRcdGlmICghX3NraXApXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0d2luZG93Lm9wZW4ocGl4aXZfbGlua191aWQodWlkKSwgJ19ibGFuaycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGdsb2JhbC5fZm9sbG93X2FyZWEgJiYgZ2xvYmFsLl9mb2xsb3dfYXJlYVxuXHRcdFx0XHRcdFx0LnRyaWdnZXJIYW5kbGVyKCdET01Ob2RlSW5zZXJ0ZWQnKVxuXHRcdFx0XHRcdDtcblx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0Y29uc29sZS5kZWJ1ZyhfdGhpcywgdWlkLCBldmVudCk7XG5cdFx0XHR9XG5cdFx0fSlcblx0O1xufVxuXG5mdW5jdGlvbiBocmVmX3JlcGxhY2UoaHJlZjogc3RyaW5nKVxue1xuXHRyZXR1cm4gaHJlZi5yZXBsYWNlKCdtZW1iZXIucGhwJywgJ21lbWJlcl9pbGx1c3QucGhwJyk7XG59XG5cbmZ1bmN0aW9uIGhyZWZfdWlkKGhyZWY6IHN0cmluZyk6IHN0cmluZ1xue1xuXHRsZXQgbSA9IGhyZWYubWF0Y2goLyg/OlsmXFw/XSlpZD0oXFxkKykoPzokfCZ8IykvKTtcblxuXHRpZiAobSAmJiBtWzFdKVxuXHR7XG5cdFx0cmV0dXJuIG1bMV07XG5cdH1cbn1cbiJdfQ==