# fuck-u-fb-share

> 此腳本試圖解決智障 FB 新分享機制導致的困擾 並且恢復為舊版分享 (2017-11)

分享用網址 [http://lnk.pics/4D3CJ](http://lnk.pics/4D3CJ) (會得到比較友善一點的連結預覽)

## install

### 腳本管理器

請先安裝此瀏覽器附加元件

- Chrome: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- Firefox: [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/)
- Firefox mobile: [usi (User|Unified Script Injector)](https://addons.mozilla.org/firefox/addon/userunified-script-injector/)

### 腳本

#### fuck-u-fb-share

然後點擊此處安裝腳本 [fuck-u-fb-share.user.js](https://github.com/bluelovers/gm-user-scripts/raw/master/dist/fuck-u-fb-share.user.js)

![fuck-u-fb-share](fuck-u-fb-share.png)

## issues

可以在此回報 BUG [issues](https://github.com/bluelovers/gm-user-scripts/issues)

> 回報時請盡量附上貼文網址 以及 截圖<br/>
> 不定期更新 請記得安裝新版

### FAQ

1. 很抱歉，這則貼文的**隱私設定**表示你無法分享它。

> 這問題並非此腳本所造成而是目前 FB 本身自己的 BUG<br/>
> 點擊貼文時間可以取得該篇貼文的網址<br/>
> 透過另外開啟貼文之後 再進行分享

![fb bug](images/2017-11-24-16-11-30-2.jpg)

2. 分享連結時無法同時分享原始貼文訊息

> 目前暫時無法解決這個問題<br/>
> 因為最重要的貼文文字ID 是被隱藏在物件 `TimeSlice` 內<br/>
> 暫時不知道如何取出物件內的資料<br/>

> 目前的解決方式是遇到貼文類型為連結並且有原始文字的貼文<br/>
> 會使用新版分享方式<br/>

## 其他腳本

* [ux-tweak-sc.user.js](https://github.com/bluelovers/gm-user-scripts/raw/master/dist/ux-tweak-sc.user.js)
* [facebook-sc](https://userstyles.org/styles/113811/facebook-sc)
* [stylish-adblock-for-mobile](http://pics.ee/hcbu)
* [dmm-plus-sc.user.js](https://github.com/bluelovers/gm-user-scripts/raw/master/dist/dmm-plus-sc.user.js)

