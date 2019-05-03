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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsVG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY3JvbGxUby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLFNBQWdCLGdCQUFnQixDQUFDLElBQW1CLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBa0IsTUFBTSxDQUFDLE1BQU07SUFFakcsQ0FBQyxVQUFVLElBQUk7UUFFZCxJQUFJLE9BQU8sR0FBRyxVQUFVLEdBQUc7WUFFMUIsSUFBSSxJQUFJLENBQUM7WUFDVCxJQUFJLEVBQUUsQ0FBQztZQUVQLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDcEI7Z0JBQ0MsSUFBSSxHQUFHLEdBQUcsQ0FBQzthQUNYO2lCQUNJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUN6QztnQkFDQyxLQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsRUFDcEI7b0JBQ0MsSUFBSSxFQUFFLENBQUM7b0JBRVAsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFDdkM7d0JBQ0MsSUFBSSxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUM7d0JBQ3ZCLE1BQU07cUJBQ047aUJBQ0Q7YUFDRDtpQkFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQ25DO2dCQUNDLElBQUksR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO2FBQ3ZCO1lBRUQsT0FBTyxJQUFJLENBQUM7UUFDYixDQUFDLENBQUM7UUFHRixJQUFJLE9BQU8sSUFBSSxLQUFLLFdBQVcsRUFDL0I7WUFFQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxVQUFVLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBUSxFQUFFLE1BQWdCO2dCQUVoRSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRXhCLElBQUksTUFBTSxFQUNWO29CQUNDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzNDO2dCQUVELElBQUksSUFBSSxLQUFLLFNBQVMsRUFDdEI7b0JBQ0MsSUFBSSxNQUFNLEVBQ1Y7d0JBQ0MsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO3FCQUNkO29CQUVELElBQUksQ0FBQyxJQUFJLE9BQU8sRUFDaEI7d0JBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNuQixTQUFTLEVBQUUsSUFBSTt5QkFDZixFQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUNaO29CQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDNUI7Z0JBRUQsT0FBTyxJQUFJLENBQUM7WUFDYixDQUFDLENBQUM7U0FDRjtRQUdELElBQUksT0FBTyxDQUFDLENBQUMsUUFBUSxLQUFLLFdBQVcsRUFDckM7WUFFQyxDQUFDLENBQUMsUUFBUSxHQUFHLFVBQVUsR0FBRyxFQUFFLE1BQU0sRUFBRSxPQUFRLEVBQUUsTUFBZ0I7Z0JBRzdELE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN6RCxDQUFDLENBQUM7U0FDRjtJQUVGLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQWhGRCw0Q0FnRkM7QUFFRCxrQkFBZSxnQkFBZ0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTcvNy8xMy8wMTMuXG4gKi9cblxuaW1wb3J0IHsgSURlbW8sIElHbG9iYWwsIElHcmVhc2Vtb25rZXksIElXaW5kb3csIElKUXVlcnlTdGF0aWMsIElVcmxPYmplY3QyIH0gZnJvbSAnLi4vY29yZS9kZW1vJztcblxuLy8gQHRzLWlnbm9yZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VKUXVlcnlQbHVnaW4oJDogSUpRdWVyeVN0YXRpYyA9IGdsb2JhbC5qUXVlcnksIHdpbmRvdzogSVdpbmRvdyA9IGdsb2JhbC53aW5kb3cpXG57XG5cdChmdW5jdGlvbiAoX29sZClcblx0e1xuXHRcdGxldCBfZm5fdG9wID0gZnVuY3Rpb24gKHdobylcblx0XHR7XG5cdFx0XHRsZXQgX3RvcDtcblx0XHRcdGxldCBfbztcblxuXHRcdFx0aWYgKCQuaXNOdW1lcmljKHdobykpXG5cdFx0XHR7XG5cdFx0XHRcdF90b3AgPSB3aG87XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChBcnJheS5pc0FycmF5KHdobykgJiYgd2hvLmxlbmd0aClcblx0XHRcdHtcblx0XHRcdFx0Zm9yIChsZXQgZWxlbSBvZiB3aG8pXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsZXQgX287XG5cblx0XHRcdFx0XHRpZiAoZWxlbSAmJiAoX28gPSAkKGVsZW0pKSAmJiBfby5sZW5ndGgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0X3RvcCA9IF9vLm9mZnNldCgpLnRvcDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoKF9vID0gJCh3aG8pKSAmJiBfby5sZW5ndGgpXG5cdFx0XHR7XG5cdFx0XHRcdF90b3AgPSBfby5vZmZzZXQoKS50b3A7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBfdG9wO1xuXHRcdH07XG5cbi8vXHRcdFx0aWYgKCEkLmlzZnVuY3Rpb24oX29sZCkpXG5cdFx0aWYgKHR5cGVvZiBfb2xkID09PSAndW5kZWZpbmVkJylcblx0XHR7XG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHQkLmZuLnNjcm9sbFRvID0gZnVuY3Rpb24gKHdobywgb2Zmc2V0LCBhbmltYXRlPywgZmluaXNoPzogYm9vbGVhbilcblx0XHRcdHtcblx0XHRcdFx0bGV0IF90b3AgPSBfZm5fdG9wKHdobyk7XG5cblx0XHRcdFx0aWYgKG9mZnNldClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdF90b3AgPSAoX3RvcCA/IF90b3AgOiAwKSArIF9mbl90b3Aob2Zmc2V0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChfdG9wICE9PSB1bmRlZmluZWQpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZiAoZmluaXNoKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuZmluaXNoKCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKDAgJiYgYW5pbWF0ZSlcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5hbmltYXRlKHtcblx0XHRcdFx0XHRcdFx0c2Nyb2xsVG9wOiBfdG9wLFxuXHRcdFx0XHRcdFx0fSwgYW5pbWF0ZSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuc2Nyb2xsVG9wKF90b3ApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9O1xuXHRcdH1cblxuLy9cdFx0XHRpZiAoISQuaXNmdW5jdGlvbigkLnNjcm9sbFRvKSlcblx0XHRpZiAodHlwZW9mICQuc2Nyb2xsVG8gPT09ICd1bmRlZmluZWQnKVxuXHRcdHtcblx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdCQuc2Nyb2xsVG8gPSBmdW5jdGlvbiAod2hvLCBvZmZzZXQsIGFuaW1hdGU/LCBmaW5pc2g/OiBib29sZWFuKVxuXHRcdFx0e1xuXHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdHJldHVybiAkKHdpbmRvdykuc2Nyb2xsVG8od2hvLCBvZmZzZXQsIGFuaW1hdGUsIGZpbmlzaCk7XG5cdFx0XHR9O1xuXHRcdH1cblx0XHQvLyBAdHMtaWdub3JlXG5cdH0pKCQuZm4uc2Nyb2xsVG8pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlSlF1ZXJ5UGx1Z2luXG4iXX0=