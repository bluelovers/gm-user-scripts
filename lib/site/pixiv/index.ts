
export function replacePixivUserUrl(href: string)
{
	return href
		.replace('member.php', 'member_illust.php')
		//.replace(/(users\/\d+)\/?$/, '$1/illustrations')
		.replace(/(users\/\d+)\/?$/, '$1/artworks')
	;
}

export function toPixivUserIllust(uid: string)
{
	//return `https://www.pixiv.net/users/${uid}/illustrations`;
	return `https://www.pixiv.net/users/${uid}/artworks`;
}
