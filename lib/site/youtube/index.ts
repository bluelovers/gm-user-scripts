/**
 * Created by user on 2017/12/1/001.
 *
 * require('root/lib/greasemonkey/web/xhr').ajaxSetup();
 *
 */

const yt_url = 'https://www.youtube.com';

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
				return Promise.reject(data);
			}

			return data;
		})
		;
}

export default exports;
