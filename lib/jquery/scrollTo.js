"use strict";
/**
 * Created by user on 2017/7/13/013.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
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
        //			if (!$.isfunction(_old))
        if (typeof _old === 'undefined') {
            // @ts-ignore
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
        //			if (!$.isfunction($.scrollTo))
        if (typeof $.scrollTo === 'undefined') {
            // @ts-ignore
            $.scrollTo = function (who, offset, animate, finish) {
                // @ts-ignore
                return $(window).scrollTo(who, offset, animate, finish);
            };
        }
        // @ts-ignore
    })($.fn.scrollTo);
}
exports.makeJQueryPlugin = makeJQueryPlugin;
exports.default = makeJQueryPlugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsVG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY3JvbGxUby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBSUgsYUFBYTtBQUNiLFNBQWdCLGdCQUFnQixDQUFDLElBQW1CLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBa0IsTUFBTSxDQUFDLE1BQU07SUFFakcsQ0FBQyxVQUFVLElBQUk7UUFFZCxJQUFJLE9BQU8sR0FBRyxVQUFVLEdBQUc7WUFFMUIsSUFBSSxJQUFJLENBQUM7WUFDVCxJQUFJLEVBQUUsQ0FBQztZQUVQLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDcEI7Z0JBQ0MsSUFBSSxHQUFHLEdBQUcsQ0FBQzthQUNYO2lCQUNJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUN6QztnQkFDQyxLQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsRUFDcEI7b0JBQ0MsSUFBSSxFQUFFLENBQUM7b0JBRVAsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFDdkM7d0JBQ0MsSUFBSSxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUM7d0JBQ3ZCLE1BQU07cUJBQ047aUJBQ0Q7YUFDRDtpQkFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQ25DO2dCQUNDLElBQUksR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO2FBQ3ZCO1lBRUQsT0FBTyxJQUFJLENBQUM7UUFDYixDQUFDLENBQUM7UUFFSiw2QkFBNkI7UUFDM0IsSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXLEVBQy9CO1lBQ0MsYUFBYTtZQUNiLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxHQUFHLFVBQVUsR0FBRyxFQUFFLE1BQU0sRUFBRSxPQUFRLEVBQUUsTUFBZ0I7Z0JBRWhFLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFeEIsSUFBSSxNQUFNLEVBQ1Y7b0JBQ0MsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDM0M7Z0JBRUQsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUN0QjtvQkFDQyxJQUFJLE1BQU0sRUFDVjt3QkFDQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7cUJBQ2Q7b0JBRUQsSUFBSSxDQUFDLElBQUksT0FBTyxFQUNoQjt3QkFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ25CLFNBQVMsRUFBRSxJQUFJO3lCQUNmLEVBQUUsT0FBTyxDQUFDLENBQUM7cUJBQ1o7b0JBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM1QjtnQkFFRCxPQUFPLElBQUksQ0FBQztZQUNiLENBQUMsQ0FBQztTQUNGO1FBRUgsbUNBQW1DO1FBQ2pDLElBQUksT0FBTyxDQUFDLENBQUMsUUFBUSxLQUFLLFdBQVcsRUFDckM7WUFDQyxhQUFhO1lBQ2IsQ0FBQyxDQUFDLFFBQVEsR0FBRyxVQUFVLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBUSxFQUFFLE1BQWdCO2dCQUU3RCxhQUFhO2dCQUNiLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN6RCxDQUFDLENBQUM7U0FDRjtRQUNELGFBQWE7SUFDZCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25CLENBQUM7QUFoRkQsNENBZ0ZDO0FBRUQsa0JBQWUsZ0JBQWdCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE3LzcvMTMvMDEzLlxuICovXG5cbmltcG9ydCB7IElEZW1vLCBJR2xvYmFsLCBJR3JlYXNlbW9ua2V5LCBJV2luZG93LCBJSlF1ZXJ5U3RhdGljLCBJVXJsT2JqZWN0MiB9IGZyb20gJy4uL2NvcmUvZGVtbyc7XG5cbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBmdW5jdGlvbiBtYWtlSlF1ZXJ5UGx1Z2luKCQ6IElKUXVlcnlTdGF0aWMgPSBnbG9iYWwualF1ZXJ5LCB3aW5kb3c6IElXaW5kb3cgPSBnbG9iYWwud2luZG93KVxue1xuXHQoZnVuY3Rpb24gKF9vbGQpXG5cdHtcblx0XHRsZXQgX2ZuX3RvcCA9IGZ1bmN0aW9uICh3aG8pXG5cdFx0e1xuXHRcdFx0bGV0IF90b3A7XG5cdFx0XHRsZXQgX287XG5cblx0XHRcdGlmICgkLmlzTnVtZXJpYyh3aG8pKVxuXHRcdFx0e1xuXHRcdFx0XHRfdG9wID0gd2hvO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh3aG8pICYmIHdoby5sZW5ndGgpXG5cdFx0XHR7XG5cdFx0XHRcdGZvciAobGV0IGVsZW0gb2Ygd2hvKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGV0IF9vO1xuXG5cdFx0XHRcdFx0aWYgKGVsZW0gJiYgKF9vID0gJChlbGVtKSkgJiYgX28ubGVuZ3RoKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdF90b3AgPSBfby5vZmZzZXQoKS50b3A7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKChfbyA9ICQod2hvKSkgJiYgX28ubGVuZ3RoKVxuXHRcdFx0e1xuXHRcdFx0XHRfdG9wID0gX28ub2Zmc2V0KCkudG9wO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gX3RvcDtcblx0XHR9O1xuXG4vL1x0XHRcdGlmICghJC5pc2Z1bmN0aW9uKF9vbGQpKVxuXHRcdGlmICh0eXBlb2YgX29sZCA9PT0gJ3VuZGVmaW5lZCcpXG5cdFx0e1xuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0JC5mbi5zY3JvbGxUbyA9IGZ1bmN0aW9uICh3aG8sIG9mZnNldCwgYW5pbWF0ZT8sIGZpbmlzaD86IGJvb2xlYW4pXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBfdG9wID0gX2ZuX3RvcCh3aG8pO1xuXG5cdFx0XHRcdGlmIChvZmZzZXQpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRfdG9wID0gKF90b3AgPyBfdG9wIDogMCkgKyBfZm5fdG9wKG9mZnNldCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoX3RvcCAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKGZpbmlzaClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLmZpbmlzaCgpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICgwICYmIGFuaW1hdGUpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuYW5pbWF0ZSh7XG5cdFx0XHRcdFx0XHRcdHNjcm9sbFRvcDogX3RvcCxcblx0XHRcdFx0XHRcdH0sIGFuaW1hdGUpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnNjcm9sbFRvcChfdG9wKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fTtcblx0XHR9XG5cbi8vXHRcdFx0aWYgKCEkLmlzZnVuY3Rpb24oJC5zY3JvbGxUbykpXG5cdFx0aWYgKHR5cGVvZiAkLnNjcm9sbFRvID09PSAndW5kZWZpbmVkJylcblx0XHR7XG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHQkLnNjcm9sbFRvID0gZnVuY3Rpb24gKHdobywgb2Zmc2V0LCBhbmltYXRlPywgZmluaXNoPzogYm9vbGVhbilcblx0XHRcdHtcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRyZXR1cm4gJCh3aW5kb3cpLnNjcm9sbFRvKHdobywgb2Zmc2V0LCBhbmltYXRlLCBmaW5pc2gpO1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHR9KSgkLmZuLnNjcm9sbFRvKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZUpRdWVyeVBsdWdpblxuIl19