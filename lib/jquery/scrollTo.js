"use strict";
/**
 * Created by user on 2017/7/13/013.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeJQueryPlugin = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsVG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY3JvbGxUby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7OztBQUlILGFBQWE7QUFDYixTQUFnQixnQkFBZ0IsQ0FBQyxJQUFtQixNQUFNLENBQUMsTUFBTSxFQUFFLFNBQWtCLE1BQU0sQ0FBQyxNQUFNO0lBRWpHLENBQUMsVUFBVSxJQUFJO1FBRWQsSUFBSSxPQUFPLEdBQUcsVUFBVSxHQUFHO1lBRTFCLElBQUksSUFBSSxDQUFDO1lBQ1QsSUFBSSxFQUFFLENBQUM7WUFFUCxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ3BCO2dCQUNDLElBQUksR0FBRyxHQUFHLENBQUM7YUFDWDtpQkFDSSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sRUFDekM7Z0JBQ0MsS0FBSyxJQUFJLElBQUksSUFBSSxHQUFHLEVBQ3BCO29CQUNDLElBQUksRUFBRSxDQUFDO29CQUVQLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQ3ZDO3dCQUNDLElBQUksR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO3dCQUN2QixNQUFNO3FCQUNOO2lCQUNEO2FBQ0Q7aUJBQ0ksSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUNuQztnQkFDQyxJQUFJLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQzthQUN2QjtZQUVELE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQyxDQUFDO1FBRUosNkJBQTZCO1FBQzNCLElBQUksT0FBTyxJQUFJLEtBQUssV0FBVyxFQUMvQjtZQUNDLGFBQWE7WUFDYixDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxVQUFVLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBUSxFQUFFLE1BQWdCO2dCQUVoRSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRXhCLElBQUksTUFBTSxFQUNWO29CQUNDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzNDO2dCQUVELElBQUksSUFBSSxLQUFLLFNBQVMsRUFDdEI7b0JBQ0MsSUFBSSxNQUFNLEVBQ1Y7d0JBQ0MsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO3FCQUNkO29CQUVELElBQUksQ0FBQyxJQUFJLE9BQU8sRUFDaEI7d0JBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNuQixTQUFTLEVBQUUsSUFBSTt5QkFDZixFQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUNaO29CQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDNUI7Z0JBRUQsT0FBTyxJQUFJLENBQUM7WUFDYixDQUFDLENBQUM7U0FDRjtRQUVILG1DQUFtQztRQUNqQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLFFBQVEsS0FBSyxXQUFXLEVBQ3JDO1lBQ0MsYUFBYTtZQUNiLENBQUMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxHQUFHLEVBQUUsTUFBTSxFQUFFLE9BQVEsRUFBRSxNQUFnQjtnQkFFN0QsYUFBYTtnQkFDYixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDekQsQ0FBQyxDQUFDO1NBQ0Y7UUFDRCxhQUFhO0lBQ2QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNuQixDQUFDO0FBaEZELDRDQWdGQztBQUVELGtCQUFlLGdCQUFnQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxNy83LzEzLzAxMy5cbiAqL1xuXG5pbXBvcnQgeyBJRGVtbywgSUdsb2JhbCwgSUdyZWFzZW1vbmtleSwgSVdpbmRvdywgSUpRdWVyeVN0YXRpYywgSVVybE9iamVjdDIgfSBmcm9tICcuLi9jb3JlL2RlbW8nO1xuXG4vLyBAdHMtaWdub3JlXG5leHBvcnQgZnVuY3Rpb24gbWFrZUpRdWVyeVBsdWdpbigkOiBJSlF1ZXJ5U3RhdGljID0gZ2xvYmFsLmpRdWVyeSwgd2luZG93OiBJV2luZG93ID0gZ2xvYmFsLndpbmRvdylcbntcblx0KGZ1bmN0aW9uIChfb2xkKVxuXHR7XG5cdFx0bGV0IF9mbl90b3AgPSBmdW5jdGlvbiAod2hvKVxuXHRcdHtcblx0XHRcdGxldCBfdG9wO1xuXHRcdFx0bGV0IF9vO1xuXG5cdFx0XHRpZiAoJC5pc051bWVyaWMod2hvKSlcblx0XHRcdHtcblx0XHRcdFx0X3RvcCA9IHdobztcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkod2hvKSAmJiB3aG8ubGVuZ3RoKVxuXHRcdFx0e1xuXHRcdFx0XHRmb3IgKGxldCBlbGVtIG9mIHdobylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxldCBfbztcblxuXHRcdFx0XHRcdGlmIChlbGVtICYmIChfbyA9ICQoZWxlbSkpICYmIF9vLmxlbmd0aClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRfdG9wID0gX28ub2Zmc2V0KCkudG9wO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICgoX28gPSAkKHdobykpICYmIF9vLmxlbmd0aClcblx0XHRcdHtcblx0XHRcdFx0X3RvcCA9IF9vLm9mZnNldCgpLnRvcDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIF90b3A7XG5cdFx0fTtcblxuLy9cdFx0XHRpZiAoISQuaXNmdW5jdGlvbihfb2xkKSlcblx0XHRpZiAodHlwZW9mIF9vbGQgPT09ICd1bmRlZmluZWQnKVxuXHRcdHtcblx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdCQuZm4uc2Nyb2xsVG8gPSBmdW5jdGlvbiAod2hvLCBvZmZzZXQsIGFuaW1hdGU/LCBmaW5pc2g/OiBib29sZWFuKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgX3RvcCA9IF9mbl90b3Aod2hvKTtcblxuXHRcdFx0XHRpZiAob2Zmc2V0KVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0X3RvcCA9IChfdG9wID8gX3RvcCA6IDApICsgX2ZuX3RvcChvZmZzZXQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKF90b3AgIT09IHVuZGVmaW5lZClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmIChmaW5pc2gpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5maW5pc2goKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoMCAmJiBhbmltYXRlKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmFuaW1hdGUoe1xuXHRcdFx0XHRcdFx0XHRzY3JvbGxUb3A6IF90b3AsXG5cdFx0XHRcdFx0XHR9LCBhbmltYXRlKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5zY3JvbGxUb3AoX3RvcCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH07XG5cdFx0fVxuXG4vL1x0XHRcdGlmICghJC5pc2Z1bmN0aW9uKCQuc2Nyb2xsVG8pKVxuXHRcdGlmICh0eXBlb2YgJC5zY3JvbGxUbyA9PT0gJ3VuZGVmaW5lZCcpXG5cdFx0e1xuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0JC5zY3JvbGxUbyA9IGZ1bmN0aW9uICh3aG8sIG9mZnNldCwgYW5pbWF0ZT8sIGZpbmlzaD86IGJvb2xlYW4pXG5cdFx0XHR7XG5cdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0cmV0dXJuICQod2luZG93KS5zY3JvbGxUbyh3aG8sIG9mZnNldCwgYW5pbWF0ZSwgZmluaXNoKTtcblx0XHRcdH07XG5cdFx0fVxuXHRcdC8vIEB0cy1pZ25vcmVcblx0fSkoJC5mbi5zY3JvbGxUbyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VKUXVlcnlQbHVnaW5cbiJdfQ==