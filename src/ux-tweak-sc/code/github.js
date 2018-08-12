'use strict';
module.exports = {
    metadata: {
        include: [
            'http*://github.com/*',
        ],
        exclude: [],
    },
    test(_url_obj = global._url_obj) {
        if (_url_obj.host.match(/github\.com/)) {
            return true;
        }
        return false;
    },
    main(_url_obj = global._url_obj) {
        if ($('.reponav').length) {
            let nav = $('.reponav');
            let _a = $('a.reponav-item[data-selected-links*="repo_projects"]', nav)
                .clone()
                .removeAttr('data-selected-links')
                .removeAttr('data-selected')
                .attr('data-skip-pjax', '')
                .attr('href', function (i, old) {
                return old.replace(/\/projects$/, '/network');
            })
                .appendTo(nav);
            _a
                .find('.Counter')
                .remove();
            let _t = _a
                .contents()
                .filter(function () {
                return this.nodeType === 3 && this.nodeValue.match(/Projects/);
            })[0]
                .nodeValue = ' Network ';
        }
    },
    adblock(_url_obj = global._url_obj) {
    },
    clearly(_url_obj = global._url_obj, _dom_list = null) {
        let _dom = $(_dom_list);
        _dom = _dom
            .add([].join());
        return _dom;
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJzcmMvdXgtdHdlYWstc2MvY29kZS9naXRodWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsWUFBWSxDQUFDO0FBRWIsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUVoQixRQUFRLEVBQUU7UUFDVCxPQUFPLEVBQUU7WUFDUixzQkFBc0I7U0FDdEI7UUFDRCxPQUFPLEVBQUUsRUFBRTtLQUNYO0lBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUTtRQUU5QixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUN0QztZQUNDLE9BQU8sSUFBSSxDQUFDO1NBQ1o7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRO1FBRTlCLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sRUFDeEI7WUFDQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFeEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLHNEQUFzRCxFQUFFLEdBQUcsQ0FBQztpQkFDckUsS0FBSyxFQUFFO2lCQUNQLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztpQkFDakMsVUFBVSxDQUFDLGVBQWUsQ0FBQztpQkFDM0IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQztpQkFDMUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBRSxHQUFHO2dCQUU3QixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQy9DLENBQUMsQ0FBQztpQkFDRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQ2Q7WUFFRCxFQUFFO2lCQUNBLElBQUksQ0FBQyxVQUFVLENBQUM7aUJBQ2hCLE1BQU0sRUFBRSxDQUNUO1lBRUQsSUFBSSxFQUFFLEdBQUcsRUFBRTtpQkFDVCxRQUFRLEVBQUU7aUJBQ1YsTUFBTSxDQUFDO2dCQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDaEUsQ0FBQyxDQUFDLENBQ0QsQ0FBQyxDQUFDO2lCQUNGLFNBQVMsR0FBRyxXQUFXLENBQ3hCO1NBR0Q7SUFDRixDQUFDO0lBRUQsT0FBTyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUTtJQUdsQyxDQUFDO0lBRUQsT0FBTyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLFNBQVMsR0FBRyxJQUFJO1FBRW5ELElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV4QixJQUFJLEdBQUcsSUFBSTthQUNULEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FDZjtRQUlELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztDQUNELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE3LzcvMjEvMDIxLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cblx0bWV0YWRhdGE6IHtcblx0XHRpbmNsdWRlOiBbXG5cdFx0XHQnaHR0cCo6Ly9naXRodWIuY29tLyonLFxuXHRcdF0sXG5cdFx0ZXhjbHVkZTogW10sXG5cdH0sXG5cblx0dGVzdChfdXJsX29iaiA9IGdsb2JhbC5fdXJsX29iailcblx0e1xuXHRcdGlmIChfdXJsX29iai5ob3N0Lm1hdGNoKC9naXRodWJcXC5jb20vKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cblx0bWFpbihfdXJsX29iaiA9IGdsb2JhbC5fdXJsX29iailcblx0e1xuXHRcdGlmICgkKCcucmVwb25hdicpLmxlbmd0aClcblx0XHR7XG5cdFx0XHRsZXQgbmF2ID0gJCgnLnJlcG9uYXYnKTtcblxuXHRcdFx0bGV0IF9hID0gJCgnYS5yZXBvbmF2LWl0ZW1bZGF0YS1zZWxlY3RlZC1saW5rcyo9XCJyZXBvX3Byb2plY3RzXCJdJywgbmF2KVxuXHRcdFx0XHQuY2xvbmUoKVxuXHRcdFx0XHQucmVtb3ZlQXR0cignZGF0YS1zZWxlY3RlZC1saW5rcycpXG5cdFx0XHRcdC5yZW1vdmVBdHRyKCdkYXRhLXNlbGVjdGVkJylcblx0XHRcdFx0LmF0dHIoJ2RhdGEtc2tpcC1wamF4JywgJycpXG5cdFx0XHRcdC5hdHRyKCdocmVmJywgZnVuY3Rpb24gKGksIG9sZClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHJldHVybiBvbGQucmVwbGFjZSgvXFwvcHJvamVjdHMkLywgJy9uZXR3b3JrJyk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5hcHBlbmRUbyhuYXYpXG5cdFx0XHQ7XG5cblx0XHRcdF9hXG5cdFx0XHRcdC5maW5kKCcuQ291bnRlcicpXG5cdFx0XHRcdC5yZW1vdmUoKVxuXHRcdFx0O1xuXG5cdFx0XHRsZXQgX3QgPSBfYVxuXHRcdFx0XHQuY29udGVudHMoKVxuXHRcdFx0XHQuZmlsdGVyKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLm5vZGVUeXBlID09PSAzICYmIHRoaXMubm9kZVZhbHVlLm1hdGNoKC9Qcm9qZWN0cy8pOyAvL05vZGUuVEVYVF9OT0RFXG5cdFx0XHRcdH0pXG5cdFx0XHRcdFswXVxuXHRcdFx0XHQubm9kZVZhbHVlID0gJyBOZXR3b3JrICdcblx0XHRcdDtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyhfYSwgX3QpO1xuXHRcdH1cblx0fSxcblxuXHRhZGJsb2NrKF91cmxfb2JqID0gZ2xvYmFsLl91cmxfb2JqKVxuXHR7XG5cblx0fSxcblxuXHRjbGVhcmx5KF91cmxfb2JqID0gZ2xvYmFsLl91cmxfb2JqLCBfZG9tX2xpc3QgPSBudWxsKVxuXHR7XG5cdFx0bGV0IF9kb20gPSAkKF9kb21fbGlzdCk7XG5cblx0XHRfZG9tID0gX2RvbVxuXHRcdFx0LmFkZChbXS5qb2luKCkpXG5cdFx0O1xuXG5cdFx0Ly9fZG9tLnJlbW92ZSgpO1xuXG5cdFx0cmV0dXJuIF9kb207XG5cdH0sXG59O1xuIl19