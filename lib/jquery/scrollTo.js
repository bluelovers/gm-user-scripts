"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeJQueryPlugin($ = global.jQuery, window = global.window) {
    (function (_old) {
        let _fn_top = function (who) {
            let _top;
            let _o;
            if ($.isNumeric(who)) {
                _top = who;
            }
            else if (Array.isArray(who) && who.length) {
                for (let elem of who) {
                    let _o;
                    if (elem && (_o = $(elem)) && _o.length) {
                        _top = _o.offset().top;
                        break;
                    }
                }
            }
            else if ((_o = $(who)) && _o.length) {
                _top = _o.offset().top;
            }
            return _top;
        };
        if (typeof _old === 'undefined') {
            $.fn.scrollTo = function (who, offset, animate, finish) {
                let _top = _fn_top(who);
                if (offset) {
                    _top = (_top ? _top : 0) + _fn_top(offset);
                }
                if (_top !== undefined) {
                    if (finish) {
                        this.finish();
                    }
                    if (0 && animate) {
                        return this.animate({
                            scrollTop: _top,
                        }, animate);
                    }
                    return this.scrollTop(_top);
                }
                return this;
            };
        }
        if (typeof $.scrollTo === 'undefined') {
            $.scrollTo = function (who, offset, animate, finish) {
                return $(window).scrollTo(who, offset, animate, finish);
            };
        }
    })($.fn.scrollTo);
}
exports.makeJQueryPlugin = makeJQueryPlugin;
exports.default = makeJQueryPlugin;
