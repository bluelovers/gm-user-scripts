/**
 * Created by user on 2017/11/14/014.
 */

import * as FileSaver from 'file-saver';

export {
	FileSaver,
};

export function saveCanvas(canvas: HTMLCanvasElement, filename?: string)
{
	let timerid;
	let filesaver: FileSaver;

	let p = new Promise(function (resolve, reject)
	{
		canvas.toBlob(function (blob)
		{
			p.filesaver = filesaver = FileSaver.saveAs(blob, filename || canvas.download || 'download.png');

			p.timerid = timerid = setInterval(function ()
			{

				if (filesaver.readyState == filesaver.DONE)
				{
					resolve(filesaver);
					clearInterval(timerid);
				}

			}, 500);
		});
	})
		.catch(err =>
		{
			clearInterval(timerid);

			err.filesaver = filesaver;
			return Promise.reject(err)
		})
		;

	return p;
}
