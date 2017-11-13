"use strict";
/**
 * Created by user on 2017/11/14/014.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const FileSaver = require("file-saver");
exports.FileSaver = FileSaver;
function saveCanvas(canvas, filename) {
    let timerid;
    let filesaver;
    let p = new Promise(function (resolve, reject) {
        canvas.toBlob(function (blob) {
            p.filesaver = filesaver = FileSaver.saveAs(blob, filename || canvas.download || 'download.png');
            p.timerid = timerid = setInterval(function () {
                if (filesaver.readyState == filesaver.DONE) {
                    resolve(filesaver);
                    clearInterval(timerid);
                }
            }, 500);
        });
    })
        .catch(err => {
        clearInterval(timerid);
        err.filesaver = filesaver;
        return Promise.reject(err);
    });
    return p;
}
exports.saveCanvas = saveCanvas;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9Vc2Vycy9Eb2N1bWVudHMvVGhlIFByb2plY3QvZ21fc2NyaXB0c19yZXBvL3V4LXR3ZWFrLXNjLyIsInNvdXJjZXMiOlsic3JjL2xpYi9zYXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7QUFFSCx3Q0FBd0M7QUFHdkMsOEJBQVM7QUFHVixvQkFBMkIsTUFBeUIsRUFBRSxRQUFpQjtJQUV0RSxJQUFJLE9BQU8sQ0FBQztJQUNaLElBQUksU0FBb0IsQ0FBQztJQUV6QixJQUFJLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRSxNQUFNO1FBRTVDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJO1lBRTNCLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLGNBQWMsQ0FBQyxDQUFDO1lBRWhHLENBQUMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLFdBQVcsQ0FBQztnQkFHakMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQzNDLENBQUM7b0JBQ0EsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNuQixhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7WUFFRixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztTQUNBLEtBQUssQ0FBQyxHQUFHO1FBRVQsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXZCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzNCLENBQUMsQ0FBQyxDQUNEO0lBRUYsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNWLENBQUM7QUFqQ0QsZ0NBaUNDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxNy8xMS8xNC8wMTQuXG4gKi9cblxuaW1wb3J0ICogYXMgRmlsZVNhdmVyIGZyb20gJ2ZpbGUtc2F2ZXInO1xuXG5leHBvcnQge1xuXHRGaWxlU2F2ZXIsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUNhbnZhcyhjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBmaWxlbmFtZT86IHN0cmluZylcbntcblx0bGV0IHRpbWVyaWQ7XG5cdGxldCBmaWxlc2F2ZXI6IEZpbGVTYXZlcjtcblxuXHRsZXQgcCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpXG5cdHtcblx0XHRjYW52YXMudG9CbG9iKGZ1bmN0aW9uIChibG9iKVxuXHRcdHtcblx0XHRcdHAuZmlsZXNhdmVyID0gZmlsZXNhdmVyID0gRmlsZVNhdmVyLnNhdmVBcyhibG9iLCBmaWxlbmFtZSB8fCBjYW52YXMuZG93bmxvYWQgfHwgJ2Rvd25sb2FkLnBuZycpO1xuXG5cdFx0XHRwLnRpbWVyaWQgPSB0aW1lcmlkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKClcblx0XHRcdHtcblxuXHRcdFx0XHRpZiAoZmlsZXNhdmVyLnJlYWR5U3RhdGUgPT0gZmlsZXNhdmVyLkRPTkUpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyZXNvbHZlKGZpbGVzYXZlcik7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcmlkKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9LCA1MDApO1xuXHRcdH0pO1xuXHR9KVxuXHRcdC5jYXRjaChlcnIgPT5cblx0XHR7XG5cdFx0XHRjbGVhckludGVydmFsKHRpbWVyaWQpO1xuXG5cdFx0XHRlcnIuZmlsZXNhdmVyID0gZmlsZXNhdmVyO1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycilcblx0XHR9KVxuXHRcdDtcblxuXHRyZXR1cm4gcDtcbn1cbiJdfQ==