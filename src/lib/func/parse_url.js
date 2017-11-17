"use strict";
/**
 * Created by user on 2017/7/13/013.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function parse_url(str, component) {
    // eslint-disable-line camelcase
    //       discuss at: http://locutus.io/php/parse_url/
    //      original by: Steven Levithan (http://blog.stevenlevithan.com)
    // reimplemented by: Brett Zamir (http://brett-zamir.me)
    //         input by: Lorenzo Pisani
    //         input by: Tony
    //      improved by: Brett Zamir (http://brett-zamir.me)
    //           note 1: original by http://stevenlevithan.com/demo/parseuri/js/assets/parseuri.js
    //           note 1: blog post at http://blog.stevenlevithan.com/archives/parseuri
    //           note 1: demo at http://stevenlevithan.com/demo/parseuri/js/assets/parseuri.js
    //           note 1: Does not replace invalid characters with '_' as in PHP,
    //           note 1: nor does it return false with
    //           note 1: a seriously malformed URL.
    //           note 1: Besides function name, is essentially the same as parseUri as
    //           note 1: well as our allowing
    //           note 1: an extra slash after the scheme/protocol (to allow file:/// as in PHP)
    //        example 1: parse_url('http://user:pass@host/path?a=v#a')
    //        returns 1: {scheme: 'http', host: 'host', user: 'user', pass: 'pass', path: '/path', query: 'a=v', fragment: 'a'}
    //        example 2: parse_url('http://en.wikipedia.org/wiki/%22@%22_%28album%29')
    //        returns 2: {scheme: 'http', host: 'en.wikipedia.org', path: '/wiki/%22@%22_%28album%29'}
    //        example 3: parse_url('https://host.domain.tld/a@b.c/folder')
    //        returns 3: {scheme: 'https', host: 'host.domain.tld', path: '/a@b.c/folder'}
    //        example 4: parse_url('https://gooduser:secretpassword@www.example.com/a@b.c/folder?foo=bar')
    //        returns 4: { scheme: 'https', host: 'www.example.com', path: '/a@b.c/folder', query: 'foo=bar', user: 'gooduser', pass: 'secretpassword' }
    var query;
    var mode = 'php';
    var key = [
        'source',
        'scheme',
        'authority',
        'userInfo',
        'user',
        'pass',
        'host',
        'port',
        'relative',
        'path',
        'directory',
        'file',
        'query',
        'fragment'
    ];
    // For loose we added one optional slash to post-scheme to catch file:/// (should restrict this)
    var parser = {
        php: new RegExp([
            '(?:([^:\\/?#]+):)?',
            '(?:\\/\\/()(?:(?:()(?:([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?))?',
            '()',
            '(?:(()(?:(?:[^?#\\/]*\\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)'
        ].join('')),
        strict: new RegExp([
            '(?:([^:\\/?#]+):)?',
            '(?:\\/\\/((?:(([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?))?',
            '((((?:[^?#\\/]*\\/)*)([^?#]*))(?:\\?([^#]*))?(?:#(.*))?)'
        ].join('')),
        loose: new RegExp([
            '(?:(?![^:@]+:[^:@\\/]*@)([^:\\/?#.]+):)?',
            '(?:\\/\\/\\/?)?',
            '((?:(([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?)',
            '(((\\/(?:[^?#](?![^?#\\/]*\\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))',
            '(?:\\?([^#]*))?(?:#(.*))?)'
        ].join(''))
    };
    var m = parser[mode].exec(str);
    var uri = {};
    var i = 14;
    while (i--) {
        if (m[i]) {
            uri[key[i]] = m[i];
        }
    }
    if (component) {
        return uri[component.replace('PHP_URL_', '').toLowerCase()];
    }
    if (mode !== 'php') {
        var name = 'queryKey';
        parser = /(?:^|&)([^&=]*)=?([^&]*)/g;
        uri[name] = {};
        query = uri[key[12]] || '';
        query.replace(parser, function ($0, $1, $2) {
            if ($1) {
                uri[name][$1] = $2;
            }
        });
    }
    delete uri.source;
    return uri;
}
exports.parse_url = parse_url;
exports.default = parse_url;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VfdXJsLmpzIiwic291cmNlUm9vdCI6IkQ6L1VzZXJzL0RvY3VtZW50cy9UaGUgUHJvamVjdC9nbV9zY3JpcHRzX3JlcG8vdXgtdHdlYWstc2MvIiwic291cmNlcyI6WyJzcmMvbGliL2Z1bmMvcGFyc2VfdXJsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7QUFrQkgsbUJBQTBCLEdBQVcsRUFBRSxTQUFTO0lBRS9DLGdDQUFnQztJQUNoQyxxREFBcUQ7SUFDckQscUVBQXFFO0lBQ3JFLHdEQUF3RDtJQUN4RCxtQ0FBbUM7SUFDbkMseUJBQXlCO0lBQ3pCLHdEQUF3RDtJQUN4RCw4RkFBOEY7SUFDOUYsa0ZBQWtGO0lBQ2xGLDBGQUEwRjtJQUMxRiw0RUFBNEU7SUFDNUUsa0RBQWtEO0lBQ2xELCtDQUErQztJQUMvQyxrRkFBa0Y7SUFDbEYseUNBQXlDO0lBQ3pDLDJGQUEyRjtJQUMzRixrRUFBa0U7SUFDbEUsMkhBQTJIO0lBQzNILGtGQUFrRjtJQUNsRixrR0FBa0c7SUFDbEcsc0VBQXNFO0lBQ3RFLHNGQUFzRjtJQUN0RixzR0FBc0c7SUFDdEcsb0pBQW9KO0lBQ3BKLElBQUksS0FBSyxDQUFBO0lBQ1QsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ2pCLElBQUksR0FBRyxHQUFHO1FBQ1QsUUFBUTtRQUNSLFFBQVE7UUFDUixXQUFXO1FBQ1gsVUFBVTtRQUNWLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixVQUFVO1FBQ1YsTUFBTTtRQUNOLFdBQVc7UUFDWCxNQUFNO1FBQ04sT0FBTztRQUNQLFVBQVU7S0FDVixDQUFBO0lBQ0QsZ0dBQWdHO0lBQ2hHLElBQUksTUFBTSxHQUFHO1FBQ1osR0FBRyxFQUFFLElBQUksTUFBTSxDQUFDO1lBQ2Ysb0JBQW9CO1lBQ3BCLGdGQUFnRjtZQUNoRixJQUFJO1lBQ0osb0VBQW9FO1NBQ3BFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1gsTUFBTSxFQUFFLElBQUksTUFBTSxDQUFDO1lBQ2xCLG9CQUFvQjtZQUNwQix3RUFBd0U7WUFDeEUsMERBQTBEO1NBQzFELENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1gsS0FBSyxFQUFFLElBQUksTUFBTSxDQUFDO1lBQ2pCLDBDQUEwQztZQUMxQyxpQkFBaUI7WUFDakIsNkRBQTZEO1lBQzdELHdFQUF3RTtZQUN4RSw0QkFBNEI7U0FDNUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDWCxDQUFBO0lBQ0QsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUM5QixJQUFJLEdBQUcsR0FBRyxFQUFnQixDQUFBO0lBQzFCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUNWLE9BQU8sQ0FBQyxFQUFFLEVBQ1YsQ0FBQztRQUNBLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNULENBQUM7WUFDQSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ25CLENBQUM7SUFDRixDQUFDO0lBQ0QsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQ2QsQ0FBQztRQUNBLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtJQUM1RCxDQUFDO0lBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUNuQixDQUFDO1FBQ0EsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFBO1FBQ3JCLE1BQU0sR0FBRywyQkFBMkIsQ0FBQTtRQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFBO1FBQ2QsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDMUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFFekMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQ1AsQ0FBQztnQkFDQSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFBO1lBQ25CLENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFDRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQztBQUNaLENBQUM7QUEvRkQsOEJBK0ZDO0FBRUQsa0JBQWUsU0FBUyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxNy83LzEzLzAxMy5cbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIElVcmxPYmplY3Rcbntcblx0c291cmNlPzogc3RyaW5nO1xuXHRzY2hlbWU/OiBzdHJpbmc7XG5cdGF1dGhvcml0eT86IHN0cmluZztcblx0dXNlckluZm8/OiBzdHJpbmc7XG5cdGhvc3Q/OiBzdHJpbmc7XG5cdHBvcnQ/OiBzdHJpbmd8bnVtYmVyO1xuXHRyZWxhdGl2ZT86IHN0cmluZztcblx0cGF0aD86IHN0cmluZztcblx0ZGlyZWN0b3J5Pzogc3RyaW5nO1xuXHRmaWxlPzogc3RyaW5nO1xuXHRxdWVyeT86IHN0cmluZztcblx0ZnJhZ21lbnQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZV91cmwoc3RyOiBzdHJpbmcsIGNvbXBvbmVudCk6IElVcmxPYmplY3Rcbntcblx0Ly8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2Vcblx0Ly8gICAgICAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3BhcnNlX3VybC9cblx0Ly8gICAgICBvcmlnaW5hbCBieTogU3RldmVuIExldml0aGFuIChodHRwOi8vYmxvZy5zdGV2ZW5sZXZpdGhhbi5jb20pXG5cdC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG5cdC8vICAgICAgICAgaW5wdXQgYnk6IExvcmVuem8gUGlzYW5pXG5cdC8vICAgICAgICAgaW5wdXQgYnk6IFRvbnlcblx0Ly8gICAgICBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcblx0Ly8gICAgICAgICAgIG5vdGUgMTogb3JpZ2luYWwgYnkgaHR0cDovL3N0ZXZlbmxldml0aGFuLmNvbS9kZW1vL3BhcnNldXJpL2pzL2Fzc2V0cy9wYXJzZXVyaS5qc1xuXHQvLyAgICAgICAgICAgbm90ZSAxOiBibG9nIHBvc3QgYXQgaHR0cDovL2Jsb2cuc3RldmVubGV2aXRoYW4uY29tL2FyY2hpdmVzL3BhcnNldXJpXG5cdC8vICAgICAgICAgICBub3RlIDE6IGRlbW8gYXQgaHR0cDovL3N0ZXZlbmxldml0aGFuLmNvbS9kZW1vL3BhcnNldXJpL2pzL2Fzc2V0cy9wYXJzZXVyaS5qc1xuXHQvLyAgICAgICAgICAgbm90ZSAxOiBEb2VzIG5vdCByZXBsYWNlIGludmFsaWQgY2hhcmFjdGVycyB3aXRoICdfJyBhcyBpbiBQSFAsXG5cdC8vICAgICAgICAgICBub3RlIDE6IG5vciBkb2VzIGl0IHJldHVybiBmYWxzZSB3aXRoXG5cdC8vICAgICAgICAgICBub3RlIDE6IGEgc2VyaW91c2x5IG1hbGZvcm1lZCBVUkwuXG5cdC8vICAgICAgICAgICBub3RlIDE6IEJlc2lkZXMgZnVuY3Rpb24gbmFtZSwgaXMgZXNzZW50aWFsbHkgdGhlIHNhbWUgYXMgcGFyc2VVcmkgYXNcblx0Ly8gICAgICAgICAgIG5vdGUgMTogd2VsbCBhcyBvdXIgYWxsb3dpbmdcblx0Ly8gICAgICAgICAgIG5vdGUgMTogYW4gZXh0cmEgc2xhc2ggYWZ0ZXIgdGhlIHNjaGVtZS9wcm90b2NvbCAodG8gYWxsb3cgZmlsZTovLy8gYXMgaW4gUEhQKVxuXHQvLyAgICAgICAgZXhhbXBsZSAxOiBwYXJzZV91cmwoJ2h0dHA6Ly91c2VyOnBhc3NAaG9zdC9wYXRoP2E9diNhJylcblx0Ly8gICAgICAgIHJldHVybnMgMToge3NjaGVtZTogJ2h0dHAnLCBob3N0OiAnaG9zdCcsIHVzZXI6ICd1c2VyJywgcGFzczogJ3Bhc3MnLCBwYXRoOiAnL3BhdGgnLCBxdWVyeTogJ2E9dicsIGZyYWdtZW50OiAnYSd9XG5cdC8vICAgICAgICBleGFtcGxlIDI6IHBhcnNlX3VybCgnaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS8lMjJAJTIyXyUyOGFsYnVtJTI5Jylcblx0Ly8gICAgICAgIHJldHVybnMgMjoge3NjaGVtZTogJ2h0dHAnLCBob3N0OiAnZW4ud2lraXBlZGlhLm9yZycsIHBhdGg6ICcvd2lraS8lMjJAJTIyXyUyOGFsYnVtJTI5J31cblx0Ly8gICAgICAgIGV4YW1wbGUgMzogcGFyc2VfdXJsKCdodHRwczovL2hvc3QuZG9tYWluLnRsZC9hQGIuYy9mb2xkZXInKVxuXHQvLyAgICAgICAgcmV0dXJucyAzOiB7c2NoZW1lOiAnaHR0cHMnLCBob3N0OiAnaG9zdC5kb21haW4udGxkJywgcGF0aDogJy9hQGIuYy9mb2xkZXInfVxuXHQvLyAgICAgICAgZXhhbXBsZSA0OiBwYXJzZV91cmwoJ2h0dHBzOi8vZ29vZHVzZXI6c2VjcmV0cGFzc3dvcmRAd3d3LmV4YW1wbGUuY29tL2FAYi5jL2ZvbGRlcj9mb289YmFyJylcblx0Ly8gICAgICAgIHJldHVybnMgNDogeyBzY2hlbWU6ICdodHRwcycsIGhvc3Q6ICd3d3cuZXhhbXBsZS5jb20nLCBwYXRoOiAnL2FAYi5jL2ZvbGRlcicsIHF1ZXJ5OiAnZm9vPWJhcicsIHVzZXI6ICdnb29kdXNlcicsIHBhc3M6ICdzZWNyZXRwYXNzd29yZCcgfVxuXHR2YXIgcXVlcnlcblx0dmFyIG1vZGUgPSAncGhwJztcblx0dmFyIGtleSA9IFtcblx0XHQnc291cmNlJyxcblx0XHQnc2NoZW1lJyxcblx0XHQnYXV0aG9yaXR5Jyxcblx0XHQndXNlckluZm8nLFxuXHRcdCd1c2VyJyxcblx0XHQncGFzcycsXG5cdFx0J2hvc3QnLFxuXHRcdCdwb3J0Jyxcblx0XHQncmVsYXRpdmUnLFxuXHRcdCdwYXRoJyxcblx0XHQnZGlyZWN0b3J5Jyxcblx0XHQnZmlsZScsXG5cdFx0J3F1ZXJ5Jyxcblx0XHQnZnJhZ21lbnQnXG5cdF1cblx0Ly8gRm9yIGxvb3NlIHdlIGFkZGVkIG9uZSBvcHRpb25hbCBzbGFzaCB0byBwb3N0LXNjaGVtZSB0byBjYXRjaCBmaWxlOi8vLyAoc2hvdWxkIHJlc3RyaWN0IHRoaXMpXG5cdHZhciBwYXJzZXIgPSB7XG5cdFx0cGhwOiBuZXcgUmVnRXhwKFtcblx0XHRcdCcoPzooW146XFxcXC8/I10rKTopPycsXG5cdFx0XHQnKD86XFxcXC9cXFxcLygpKD86KD86KCkoPzooW146QFxcXFwvXSopOj8oW146QFxcXFwvXSopKT9AKT8oW146XFxcXC8/I10qKSg/OjooXFxcXGQqKSk/KSk/Jyxcblx0XHRcdCcoKScsXG5cdFx0XHQnKD86KCgpKD86KD86W14/I1xcXFwvXSpcXFxcLykqKSgpKD86W14/I10qKSkoPzpcXFxcPyhbXiNdKikpPyg/OiMoLiopKT8pJ1xuXHRcdF0uam9pbignJykpLFxuXHRcdHN0cmljdDogbmV3IFJlZ0V4cChbXG5cdFx0XHQnKD86KFteOlxcXFwvPyNdKyk6KT8nLFxuXHRcdFx0Jyg/OlxcXFwvXFxcXC8oKD86KChbXjpAXFxcXC9dKik6PyhbXjpAXFxcXC9dKikpP0ApPyhbXjpcXFxcLz8jXSopKD86OihcXFxcZCopKT8pKT8nLFxuXHRcdFx0JygoKCg/OltePyNcXFxcL10qXFxcXC8pKikoW14/I10qKSkoPzpcXFxcPyhbXiNdKikpPyg/OiMoLiopKT8pJ1xuXHRcdF0uam9pbignJykpLFxuXHRcdGxvb3NlOiBuZXcgUmVnRXhwKFtcblx0XHRcdCcoPzooPyFbXjpAXSs6W146QFxcXFwvXSpAKShbXjpcXFxcLz8jLl0rKTopPycsXG5cdFx0XHQnKD86XFxcXC9cXFxcL1xcXFwvPyk/Jyxcblx0XHRcdCcoKD86KChbXjpAXFxcXC9dKik6PyhbXjpAXFxcXC9dKikpP0ApPyhbXjpcXFxcLz8jXSopKD86OihcXFxcZCopKT8pJyxcblx0XHRcdCcoKChcXFxcLyg/OltePyNdKD8hW14/I1xcXFwvXSpcXFxcLltePyNcXFxcLy5dKyg/Ols/I118JCkpKSpcXFxcLz8pPyhbXj8jXFxcXC9dKikpJyxcblx0XHRcdCcoPzpcXFxcPyhbXiNdKikpPyg/OiMoLiopKT8pJ1xuXHRcdF0uam9pbignJykpXG5cdH1cblx0dmFyIG0gPSBwYXJzZXJbbW9kZV0uZXhlYyhzdHIpXG5cdHZhciB1cmkgPSB7fSBhcyBJVXJsT2JqZWN0XG5cdHZhciBpID0gMTRcblx0d2hpbGUgKGktLSlcblx0e1xuXHRcdGlmIChtW2ldKVxuXHRcdHtcblx0XHRcdHVyaVtrZXlbaV1dID0gbVtpXVxuXHRcdH1cblx0fVxuXHRpZiAoY29tcG9uZW50KVxuXHR7XG5cdFx0cmV0dXJuIHVyaVtjb21wb25lbnQucmVwbGFjZSgnUEhQX1VSTF8nLCAnJykudG9Mb3dlckNhc2UoKV1cblx0fVxuXHRpZiAobW9kZSAhPT0gJ3BocCcpXG5cdHtcblx0XHR2YXIgbmFtZSA9ICdxdWVyeUtleSdcblx0XHRwYXJzZXIgPSAvKD86XnwmKShbXiY9XSopPT8oW14mXSopL2dcblx0XHR1cmlbbmFtZV0gPSB7fVxuXHRcdHF1ZXJ5ID0gdXJpW2tleVsxMl1dIHx8ICcnXG5cdFx0cXVlcnkucmVwbGFjZShwYXJzZXIsIGZ1bmN0aW9uICgkMCwgJDEsICQyKVxuXHRcdHtcblx0XHRcdGlmICgkMSlcblx0XHRcdHtcblx0XHRcdFx0dXJpW25hbWVdWyQxXSA9ICQyXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXHRkZWxldGUgdXJpLnNvdXJjZTtcblx0cmV0dXJuIHVyaTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VfdXJsO1xuIl19