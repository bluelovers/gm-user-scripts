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
            $.fn.scrollTo = function (who, offset) {
                let _top = _fn_top(who);
                if (offset) {
                    _top = (_top ? _top : 0) + _fn_top(offset);
                }
                if (_top !== undefined) {
                    this.finish().scrollTop(_top);
                }
                return this;
            };
        }
        if (typeof $.scrollTo === 'undefined') {
            $.scrollTo = function (who, offset) {
                return $(window).scrollTo(who, offset);
            };
        }
    })($.fn.scrollTo);
}
exports.makeJQueryPlugin = makeJQueryPlugin;
exports.default = makeJQueryPlugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsVG8uanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxpYi9qcXVlcnkvc2Nyb2xsVG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQSxTQUFnQixnQkFBZ0IsQ0FBQyxJQUFtQixNQUFNLENBQUMsTUFBTSxFQUFFLFNBQWtCLE1BQU0sQ0FBQyxNQUFNO0lBRWpHLENBQUMsVUFBVSxJQUFJO1FBRWQsSUFBSSxPQUFPLEdBQUcsVUFBVSxHQUFHO1lBRTFCLElBQUksSUFBSSxDQUFDO1lBQ1QsSUFBSSxFQUFFLENBQUM7WUFFUCxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ3BCO2dCQUNDLElBQUksR0FBRyxHQUFHLENBQUM7YUFDWDtpQkFDSSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sRUFDekM7Z0JBQ0MsS0FBSyxJQUFJLElBQUksSUFBSSxHQUFHLEVBQ3BCO29CQUNDLElBQUksRUFBRSxDQUFDO29CQUVQLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQ3ZDO3dCQUNDLElBQUksR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO3dCQUN2QixNQUFNO3FCQUNOO2lCQUNEO2FBQ0Q7aUJBQ0ksSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUNuQztnQkFDQyxJQUFJLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQzthQUN2QjtZQUVELE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQyxDQUFDO1FBR0YsSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXLEVBQy9CO1lBRUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEdBQUcsVUFBVSxHQUFHLEVBQUUsTUFBTTtnQkFFcEMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUV4QixJQUFJLE1BQU0sRUFDVjtvQkFDQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUMzQztnQkFFRCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQ3RCO29CQUNDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzlCO2dCQUVELE9BQU8sSUFBSSxDQUFDO1lBQ2IsQ0FBQyxDQUFDO1NBQ0Y7UUFHRCxJQUFJLE9BQU8sQ0FBQyxDQUFDLFFBQVEsS0FBSyxXQUFXLEVBQ3JDO1lBRUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxVQUFVLEdBQUcsRUFBRSxNQUFNO2dCQUdqQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLENBQUMsQ0FBQztTQUNGO0lBRUYsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNuQixDQUFDO0FBcEVELDRDQW9FQztBQUVELGtCQUFlLGdCQUFnQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxNy83LzEzLzAxMy5cbiAqL1xuXG5pbXBvcnQgeyBJRGVtbywgSUdsb2JhbCwgSUdyZWFzZW1vbmtleSwgSVdpbmRvdywgSUpRdWVyeVN0YXRpYywgSVVybE9iamVjdDIgfSBmcm9tICdyb290L2xpYi9jb3JlL2RlbW8nO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUpRdWVyeVBsdWdpbigkOiBJSlF1ZXJ5U3RhdGljID0gZ2xvYmFsLmpRdWVyeSwgd2luZG93OiBJV2luZG93ID0gZ2xvYmFsLndpbmRvdylcbntcblx0KGZ1bmN0aW9uIChfb2xkKVxuXHR7XG5cdFx0bGV0IF9mbl90b3AgPSBmdW5jdGlvbiAod2hvKVxuXHRcdHtcblx0XHRcdGxldCBfdG9wO1xuXHRcdFx0bGV0IF9vO1xuXG5cdFx0XHRpZiAoJC5pc051bWVyaWMod2hvKSlcblx0XHRcdHtcblx0XHRcdFx0X3RvcCA9IHdobztcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkod2hvKSAmJiB3aG8ubGVuZ3RoKVxuXHRcdFx0e1xuXHRcdFx0XHRmb3IgKGxldCBlbGVtIG9mIHdobylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxldCBfbztcblxuXHRcdFx0XHRcdGlmIChlbGVtICYmIChfbyA9ICQoZWxlbSkpICYmIF9vLmxlbmd0aClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRfdG9wID0gX28ub2Zmc2V0KCkudG9wO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICgoX28gPSAkKHdobykpICYmIF9vLmxlbmd0aClcblx0XHRcdHtcblx0XHRcdFx0X3RvcCA9IF9vLm9mZnNldCgpLnRvcDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIF90b3A7XG5cdFx0fTtcblxuLy9cdFx0XHRpZiAoISQuaXNmdW5jdGlvbihfb2xkKSlcblx0XHRpZiAodHlwZW9mIF9vbGQgPT09ICd1bmRlZmluZWQnKVxuXHRcdHtcblx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdCQuZm4uc2Nyb2xsVG8gPSBmdW5jdGlvbiAod2hvLCBvZmZzZXQpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBfdG9wID0gX2ZuX3RvcCh3aG8pO1xuXG5cdFx0XHRcdGlmIChvZmZzZXQpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRfdG9wID0gKF90b3AgPyBfdG9wIDogMCkgKyBfZm5fdG9wKG9mZnNldCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoX3RvcCAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5maW5pc2goKS5zY3JvbGxUb3AoX3RvcCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH07XG5cdFx0fVxuXG4vL1x0XHRcdGlmICghJC5pc2Z1bmN0aW9uKCQuc2Nyb2xsVG8pKVxuXHRcdGlmICh0eXBlb2YgJC5zY3JvbGxUbyA9PT0gJ3VuZGVmaW5lZCcpXG5cdFx0e1xuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0JC5zY3JvbGxUbyA9IGZ1bmN0aW9uICh3aG8sIG9mZnNldClcblx0XHRcdHtcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRyZXR1cm4gJCh3aW5kb3cpLnNjcm9sbFRvKHdobywgb2Zmc2V0KTtcblx0XHRcdH07XG5cdFx0fVxuXHRcdC8vIEB0cy1pZ25vcmVcblx0fSkoJC5mbi5zY3JvbGxUbyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VKUXVlcnlQbHVnaW5cbiJdfQ==