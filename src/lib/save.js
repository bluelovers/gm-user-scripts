"use strict";
/**
 * Created by user on 2017/11/14/014.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const FileSaver = require("file-saver");
exports.FileSaver = FileSaver;
function saveBlob(blob, filename) {
    let timerid;
    let filesaver;
    let p = new Promise(function (resolve, reject) {
        // @ts-ignore
        filesaver = FileSaver.saveAs(blob, filename || blob.name);
        timerid = setInterval(function () {
            if (filesaver.readyState == filesaver.DONE) {
                resolve(filesaver);
                clearInterval(timerid);
            }
        }, 500);
    })
        .catch(err => {
        clearInterval(timerid);
        err.filesaver = filesaver;
        return Promise.reject(err);
    });
    p.filesaver = filesaver;
    p.timerid = timerid;
    return p;
}
exports.saveBlob = saveBlob;
function saveCanvas(canvas, filename) {
    return new Promise(function (resolve, reject) {
        canvas.toBlob(function (blob) {
            resolve(saveBlob(blob, filename || canvas.download || blob.name || 'download.png'));
        });
    });
}
exports.saveCanvas = saveCanvas;
function saveText(data, filename, options) {
    let blob = new Blob([data.toString()], Object.assign({
        type: 'text/plain;charset=utf-8',
    }, options));
    return saveBlob(blob, filename || blob.name || 'download.txt');
}
exports.saveText = saveText;
exports.default = exports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9Vc2Vycy9Eb2N1bWVudHMvVGhlIFByb2plY3QvZ21fc2NyaXB0c19yZXBvL3V4LXR3ZWFrLXNjLyIsInNvdXJjZXMiOlsic3JjL2xpYi9zYXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7QUFFSCx3Q0FBd0M7QUFHdkMsOEJBQVM7QUFHVixrQkFBeUIsSUFBVSxFQUFFLFFBQWlCO0lBRXJELElBQUksT0FBTyxDQUFDO0lBQ1osSUFBSSxTQUFvQixDQUFDO0lBRXpCLElBQUksQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07UUFFM0MsYUFBYTtRQUNiLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTFELE9BQU8sR0FBRyxXQUFXLENBQUM7WUFHckIsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQzNDLENBQUM7Z0JBQ0EsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNuQixhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEIsQ0FBQztRQUVGLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxHQUFHO1FBRVQsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXZCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzNCLENBQUMsQ0FBQyxDQUNGO0lBRUQsQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDeEIsQ0FBQyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFFcEIsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNWLENBQUM7QUFsQ0QsNEJBa0NDO0FBRUQsb0JBQTJCLE1BQXlCLEVBQUUsUUFBaUI7SUFFdEUsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07UUFFM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUk7WUFFM0IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBVEQsZ0NBU0M7QUFFRCxrQkFBeUIsSUFBWSxFQUFFLFFBQWlCLEVBQUUsT0FBUTtJQUVqRSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDcEQsSUFBSSxFQUFFLDBCQUEwQjtLQUNoQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFYixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxjQUFjLENBQUMsQ0FBQztBQUNoRSxDQUFDO0FBUEQsNEJBT0M7QUFFRCxrQkFBZSxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE3LzExLzE0LzAxNC5cbiAqL1xuXG5pbXBvcnQgKiBhcyBGaWxlU2F2ZXIgZnJvbSAnZmlsZS1zYXZlcic7XG5cbmV4cG9ydCB7XG5cdEZpbGVTYXZlcixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlQmxvYihibG9iOiBCbG9iLCBmaWxlbmFtZT86IHN0cmluZyk6IFByb21pc2U8RmlsZVNhdmVyPlxue1xuXHRsZXQgdGltZXJpZDtcblx0bGV0IGZpbGVzYXZlcjogRmlsZVNhdmVyO1xuXG5cdGxldCBwID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdClcblx0XHR7XG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRmaWxlc2F2ZXIgPSBGaWxlU2F2ZXIuc2F2ZUFzKGJsb2IsIGZpbGVuYW1lIHx8IGJsb2IubmFtZSk7XG5cblx0XHRcdHRpbWVyaWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKVxuXHRcdFx0e1xuXG5cdFx0XHRcdGlmIChmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9PSBmaWxlc2F2ZXIuRE9ORSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHJlc29sdmUoZmlsZXNhdmVyKTtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHRpbWVyaWQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0sIDUwMCk7XG5cdFx0fSlcblx0XHQuY2F0Y2goZXJyID0+XG5cdFx0e1xuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcmlkKTtcblxuXHRcdFx0ZXJyLmZpbGVzYXZlciA9IGZpbGVzYXZlcjtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpXG5cdFx0fSlcblx0O1xuXG5cdHAuZmlsZXNhdmVyID0gZmlsZXNhdmVyO1xuXHRwLnRpbWVyaWQgPSB0aW1lcmlkO1xuXG5cdHJldHVybiBwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUNhbnZhcyhjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBmaWxlbmFtZT86IHN0cmluZyk6IFByb21pc2U8RmlsZVNhdmVyPlxue1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdClcblx0e1xuXHRcdGNhbnZhcy50b0Jsb2IoZnVuY3Rpb24gKGJsb2IpXG5cdFx0e1xuXHRcdFx0cmVzb2x2ZShzYXZlQmxvYihibG9iLCBmaWxlbmFtZSB8fCBjYW52YXMuZG93bmxvYWQgfHwgYmxvYi5uYW1lIHx8ICdkb3dubG9hZC5wbmcnKSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRleHQoZGF0YTogc3RyaW5nLCBmaWxlbmFtZT86IHN0cmluZywgb3B0aW9ucz8pOiBQcm9taXNlPEZpbGVTYXZlcj5cbntcblx0bGV0IGJsb2IgPSBuZXcgQmxvYihbZGF0YS50b1N0cmluZygpXSwgT2JqZWN0LmFzc2lnbih7XG5cdFx0dHlwZTogJ3RleHQvcGxhaW47Y2hhcnNldD11dGYtOCcsXG5cdH0sIG9wdGlvbnMpKTtcblxuXHRyZXR1cm4gc2F2ZUJsb2IoYmxvYiwgZmlsZW5hbWUgfHwgYmxvYi5uYW1lIHx8ICdkb3dubG9hZC50eHQnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0cztcbiJdfQ==