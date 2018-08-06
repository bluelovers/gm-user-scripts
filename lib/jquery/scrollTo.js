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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsVG8uanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxpYi9qcXVlcnkvc2Nyb2xsVG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQSxTQUFnQixnQkFBZ0IsQ0FBQyxJQUFtQixNQUFNLENBQUMsTUFBTSxFQUFFLFNBQWtCLE1BQU0sQ0FBQyxNQUFNO0lBRWpHLENBQUMsVUFBVSxJQUFJO1FBRWQsSUFBSSxPQUFPLEdBQUcsVUFBVSxHQUFHO1lBRTFCLElBQUksSUFBSSxDQUFDO1lBQ1QsSUFBSSxFQUFFLENBQUM7WUFFUCxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ3BCO2dCQUNDLElBQUksR0FBRyxHQUFHLENBQUM7YUFDWDtpQkFDSSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sRUFDekM7Z0JBQ0MsS0FBSyxJQUFJLElBQUksSUFBSSxHQUFHLEVBQ3BCO29CQUNDLElBQUksRUFBRSxDQUFDO29CQUVQLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQ3ZDO3dCQUNDLElBQUksR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO3dCQUN2QixNQUFNO3FCQUNOO2lCQUNEO2FBQ0Q7aUJBQ0ksSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUNuQztnQkFDQyxJQUFJLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQzthQUN2QjtZQUVELE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQyxDQUFDO1FBR0YsSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXLEVBQy9CO1lBRUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEdBQUcsVUFBVSxHQUFHLEVBQUUsTUFBTSxFQUFFLE9BQVEsRUFBRSxNQUFnQjtnQkFFaEUsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUV4QixJQUFJLE1BQU0sRUFDVjtvQkFDQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUMzQztnQkFFRCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQ3RCO29CQUNDLElBQUksTUFBTSxFQUNWO3dCQUNDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztxQkFDZDtvQkFFRCxJQUFJLENBQUMsSUFBSSxPQUFPLEVBQ2hCO3dCQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDbkIsU0FBUyxFQUFFLElBQUk7eUJBQ2YsRUFBRSxPQUFPLENBQUMsQ0FBQztxQkFDWjtvQkFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzVCO2dCQUVELE9BQU8sSUFBSSxDQUFDO1lBQ2IsQ0FBQyxDQUFDO1NBQ0Y7UUFHRCxJQUFJLE9BQU8sQ0FBQyxDQUFDLFFBQVEsS0FBSyxXQUFXLEVBQ3JDO1lBRUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxVQUFVLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBUSxFQUFFLE1BQWdCO2dCQUc3RCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDekQsQ0FBQyxDQUFDO1NBQ0Y7SUFFRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25CLENBQUM7QUFoRkQsNENBZ0ZDO0FBRUQsa0JBQWUsZ0JBQWdCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE3LzcvMTMvMDEzLlxuICovXG5cbmltcG9ydCB7IElEZW1vLCBJR2xvYmFsLCBJR3JlYXNlbW9ua2V5LCBJV2luZG93LCBJSlF1ZXJ5U3RhdGljLCBJVXJsT2JqZWN0MiB9IGZyb20gJy4uL2NvcmUvZGVtbyc7XG5cbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBmdW5jdGlvbiBtYWtlSlF1ZXJ5UGx1Z2luKCQ6IElKUXVlcnlTdGF0aWMgPSBnbG9iYWwualF1ZXJ5LCB3aW5kb3c6IElXaW5kb3cgPSBnbG9iYWwud2luZG93KVxue1xuXHQoZnVuY3Rpb24gKF9vbGQpXG5cdHtcblx0XHRsZXQgX2ZuX3RvcCA9IGZ1bmN0aW9uICh3aG8pXG5cdFx0e1xuXHRcdFx0bGV0IF90b3A7XG5cdFx0XHRsZXQgX287XG5cblx0XHRcdGlmICgkLmlzTnVtZXJpYyh3aG8pKVxuXHRcdFx0e1xuXHRcdFx0XHRfdG9wID0gd2hvO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh3aG8pICYmIHdoby5sZW5ndGgpXG5cdFx0XHR7XG5cdFx0XHRcdGZvciAobGV0IGVsZW0gb2Ygd2hvKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGV0IF9vO1xuXG5cdFx0XHRcdFx0aWYgKGVsZW0gJiYgKF9vID0gJChlbGVtKSkgJiYgX28ubGVuZ3RoKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdF90b3AgPSBfby5vZmZzZXQoKS50b3A7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKChfbyA9ICQod2hvKSkgJiYgX28ubGVuZ3RoKVxuXHRcdFx0e1xuXHRcdFx0XHRfdG9wID0gX28ub2Zmc2V0KCkudG9wO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gX3RvcDtcblx0XHR9O1xuXG4vL1x0XHRcdGlmICghJC5pc2Z1bmN0aW9uKF9vbGQpKVxuXHRcdGlmICh0eXBlb2YgX29sZCA9PT0gJ3VuZGVmaW5lZCcpXG5cdFx0e1xuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0JC5mbi5zY3JvbGxUbyA9IGZ1bmN0aW9uICh3aG8sIG9mZnNldCwgYW5pbWF0ZT8sIGZpbmlzaD86IGJvb2xlYW4pXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBfdG9wID0gX2ZuX3RvcCh3aG8pO1xuXG5cdFx0XHRcdGlmIChvZmZzZXQpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRfdG9wID0gKF90b3AgPyBfdG9wIDogMCkgKyBfZm5fdG9wKG9mZnNldCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoX3RvcCAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKGZpbmlzaClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLmZpbmlzaCgpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICgwICYmIGFuaW1hdGUpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuYW5pbWF0ZSh7XG5cdFx0XHRcdFx0XHRcdHNjcm9sbFRvcDogX3RvcCxcblx0XHRcdFx0XHRcdH0sIGFuaW1hdGUpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnNjcm9sbFRvcChfdG9wKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fTtcblx0XHR9XG5cbi8vXHRcdFx0aWYgKCEkLmlzZnVuY3Rpb24oJC5zY3JvbGxUbykpXG5cdFx0aWYgKHR5cGVvZiAkLnNjcm9sbFRvID09PSAndW5kZWZpbmVkJylcblx0XHR7XG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHQkLnNjcm9sbFRvID0gZnVuY3Rpb24gKHdobywgb2Zmc2V0LCBhbmltYXRlPywgZmluaXNoPzogYm9vbGVhbilcblx0XHRcdHtcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRyZXR1cm4gJCh3aW5kb3cpLnNjcm9sbFRvKHdobywgb2Zmc2V0LCBhbmltYXRlLCBmaW5pc2gpO1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHR9KSgkLmZuLnNjcm9sbFRvKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZUpRdWVyeVBsdWdpblxuIl19