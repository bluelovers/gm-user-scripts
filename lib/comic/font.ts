/**
 * Created by user on 2017/12/5/005.
 */

export const font = {

	NotoSansSC: {
		name: 'Noto Sans SC',
		webfont: '//fonts.googleapis.com/earlyaccess/notosanssc.css',
	},

	NotoSansTC: {
		name: 'Noto Sans TC',
		webfont: '//fonts.googleapis.com/earlyaccess/notosanstc.css',
	},

	NotoSansJP: {
		name: 'Noto Sans JP',
		webfont: '//fonts.googleapis.com/earlyaccess/notosansjp.css',
	},

	cwtexyen: {
		name: 'cwtexyen',
		webfont: '//fonts.googleapis.com/earlyaccess/cwtexyen.css',
	},

};

export const webfont = {
	NotoSansCJKSC: ['Noto Sans CJK SC', font.NotoSansSC, font.NotoSansTC, font.NotoSansJP],
	NotoSansCJKTC: ['Noto Sans CJK TC', font.NotoSansTC, font.NotoSansSC, font.NotoSansJP],
	NotoSansCJKJP: ['Noto Sans CJK JP', font.NotoSansJP, font.NotoSansSC, font.NotoSansTC],
};

export function getFontName(name): string
{
	if (webfont[name])
	{
		return webfont[name].reduce(function (a, b)
		{
			a.push(typeof b == 'string' ? b : b.name);

			return a;
		}, []).join('');
	}

	return _(name);

	function _(name)
	{
		return font[name].name;
	}
}

export default font;
