/**
 * Created by user on 2017/11/14/014.
 */

import * as FileSaver from 'file-saver';

export {
	FileSaver,
};

export function saveBlob(blob: Blob, filename?: string): Promise<FileSaver>
{
	let timerid;
	let filesaver: FileSaver;

	let p = new Promise(function (resolve, reject)
		{
			// @ts-ignore
			filesaver = FileSaver.saveAs(blob, filename || blob.name);

			timerid = setInterval(function ()
			{

				if (filesaver.readyState == filesaver.DONE)
				{
					resolve(filesaver);
					clearInterval(timerid);
				}

			}, 500);
		})
		.catch(err =>
		{
			clearInterval(timerid);

			err.filesaver = filesaver;
			return Promise.reject(err)
		})
	;

	// @ts-ignore
	p.filesaver = filesaver;
	// @ts-ignore
	p.timerid = timerid;

	return p;
}

export function saveCanvas(canvas: HTMLCanvasElement, filename?: string): Promise<FileSaver>
{
	return new Promise(function (resolve, reject)
	{
		canvas.toBlob(function (blob)
		{
			// @ts-ignore
			resolve(saveBlob(blob, filename || canvas.download || blob.name || 'download.png'));
		});
	});
}

export function saveText(data: string, filename?: string, options?): Promise<FileSaver>
{
	let blob = new Blob([data.toString()], Object.assign({
		type: 'text/plain;charset=utf-8',
	}, options));

	// @ts-ignore
	return saveBlob(blob, filename || blob.name || 'download.txt');
}

export default exports;
