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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9Vc2Vycy9Eb2N1bWVudHMvVGhlIFByb2plY3QvZ21fc2NyaXB0c19yZXBvL3V4LXR3ZWFrLXNjLyIsInNvdXJjZXMiOlsic3JjL2xpYi9zYXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7QUFFSCx3Q0FBd0M7QUFHdkMsOEJBQVM7QUFHVixrQkFBeUIsSUFBVSxFQUFFLFFBQWlCO0lBRXJELElBQUksT0FBTyxDQUFDO0lBQ1osSUFBSSxTQUFvQixDQUFDO0lBRXpCLElBQUksQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07UUFFM0MsYUFBYTtRQUNiLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTFELE9BQU8sR0FBRyxXQUFXLENBQUM7WUFHckIsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQzNDLENBQUM7Z0JBQ0EsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNuQixhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEIsQ0FBQztRQUVGLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxHQUFHO1FBRVQsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXZCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzNCLENBQUMsQ0FBQyxDQUNGO0lBRUQsQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDeEIsQ0FBQyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFFcEIsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNWLENBQUM7QUFsQ0QsNEJBa0NDO0FBRUQsb0JBQTJCLE1BQXlCLEVBQUUsUUFBaUI7SUFFdEUsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07UUFFM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUk7WUFFM0IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBVEQsZ0NBU0M7QUFFRCxrQkFBeUIsSUFBWSxFQUFFLFFBQWlCLEVBQUUsT0FBUTtJQUVqRSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDcEQsSUFBSSxFQUFFLDBCQUEwQjtLQUNoQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFYixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxjQUFjLENBQUMsQ0FBQztBQUNoRSxDQUFDO0FBUEQsNEJBT0M7QUFFRCxrQkFBZSxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTcvMTEvMTQvMDE0LlxyXG4gKi9cclxuXHJcbmltcG9ydCAqIGFzIEZpbGVTYXZlciBmcm9tICdmaWxlLXNhdmVyJztcclxuXHJcbmV4cG9ydCB7XHJcblx0RmlsZVNhdmVyLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVCbG9iKGJsb2I6IEJsb2IsIGZpbGVuYW1lPzogc3RyaW5nKTogUHJvbWlzZTxGaWxlU2F2ZXI+XHJcbntcclxuXHRsZXQgdGltZXJpZDtcclxuXHRsZXQgZmlsZXNhdmVyOiBGaWxlU2F2ZXI7XHJcblxyXG5cdGxldCBwID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdClcclxuXHRcdHtcclxuXHRcdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0XHRmaWxlc2F2ZXIgPSBGaWxlU2F2ZXIuc2F2ZUFzKGJsb2IsIGZpbGVuYW1lIHx8IGJsb2IubmFtZSk7XHJcblxyXG5cdFx0XHR0aW1lcmlkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKClcclxuXHRcdFx0e1xyXG5cclxuXHRcdFx0XHRpZiAoZmlsZXNhdmVyLnJlYWR5U3RhdGUgPT0gZmlsZXNhdmVyLkRPTkUpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cmVzb2x2ZShmaWxlc2F2ZXIpO1xyXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcmlkKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9LCA1MDApO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaChlcnIgPT5cclxuXHRcdHtcclxuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcmlkKTtcclxuXHJcblx0XHRcdGVyci5maWxlc2F2ZXIgPSBmaWxlc2F2ZXI7XHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpXHJcblx0XHR9KVxyXG5cdDtcclxuXHJcblx0cC5maWxlc2F2ZXIgPSBmaWxlc2F2ZXI7XHJcblx0cC50aW1lcmlkID0gdGltZXJpZDtcclxuXHJcblx0cmV0dXJuIHA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlQ2FudmFzKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGZpbGVuYW1lPzogc3RyaW5nKTogUHJvbWlzZTxGaWxlU2F2ZXI+XHJcbntcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdClcclxuXHR7XHJcblx0XHRjYW52YXMudG9CbG9iKGZ1bmN0aW9uIChibG9iKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXNvbHZlKHNhdmVCbG9iKGJsb2IsIGZpbGVuYW1lIHx8IGNhbnZhcy5kb3dubG9hZCB8fCBibG9iLm5hbWUgfHwgJ2Rvd25sb2FkLnBuZycpKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRleHQoZGF0YTogc3RyaW5nLCBmaWxlbmFtZT86IHN0cmluZywgb3B0aW9ucz8pOiBQcm9taXNlPEZpbGVTYXZlcj5cclxue1xyXG5cdGxldCBibG9iID0gbmV3IEJsb2IoW2RhdGEudG9TdHJpbmcoKV0sIE9iamVjdC5hc3NpZ24oe1xyXG5cdFx0dHlwZTogJ3RleHQvcGxhaW47Y2hhcnNldD11dGYtOCcsXHJcblx0fSwgb3B0aW9ucykpO1xyXG5cclxuXHRyZXR1cm4gc2F2ZUJsb2IoYmxvYiwgZmlsZW5hbWUgfHwgYmxvYi5uYW1lIHx8ICdkb3dubG9hZC50eHQnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0cztcclxuIl19