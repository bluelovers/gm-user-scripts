/**
 * Created by user on 2017/12/1/001.
 *
 * require('root/lib/greasemonkey/web/xhr').ajaxSetup();
 *
 */

export const yt_url = 'https://www.youtube.com';

export function ajaxSetTitle(video_id, new_title, session_token)
{
	return $
		.ajax({
				url: `${yt_url}/watch_inlineedit_ajax?action_save_video=1`,
				method: 'POST',
				data: {
					'session_token': session_token,
					'video_id': video_id,
					'field_myvideo_title': new_title.toString().trim(),
				},
				//dataType: 'json',
			}
		)
		.promise()
		.then(function (data)
		{
			if (!data || data.errors && data.errors.length)
			{
				// @ts-ignore
				return Promise.reject(data);
			}

			return data;
		})
		;
}

/**
 * 2017
 *
 * @returns {boolean}
 */
export function isMaterial()
{
	if ($('style[scope="ytd-app"], ytd-app').length)
	{
		return true;
	}
}

export function yt_token(): string
{
	// @ts-ignore
	return (typeof unsafeWindow !== 'undefined' ? unsafeWindow : window).yt.config_.XSRF_TOKEN;
}

export default exports;
