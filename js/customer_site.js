const CUSTOMER_SITES = {
 feifan: { name: "非凡資源", api: "http://ffzy5.tv/api.php/provide/vod" },
 wolong: { name: "臥龍資源", api: "https://wolongzyw.com/api.php/provide/vod" },
 zuida: { name: "最大資源", api: "https://api.zuidapi.com/api.php/provide/vod" },
 baiduyun: { name: "百度雲資源", api: "https://api.apibdzy.com/api.php/provide/vod" },
 baofeng: { name: "暴風資源", api: "https://bfzyapi.com/api.php/provide/vod" },
 jisu: { name: "極速資源", api: "https://jszyapi.com/api.php/provide/vod" },
 tianya: { name: "天涯資源", api: "https://tyyszy.com/api.php/provide/vod" },
 wujin: { name: "無盡資源", api: "https://api.wujinapi.com/api.php/provide/vod" },
 modu: { name: "魔都資源", api: "https://www.mdzyapi.com/api.php/provide/vod" },
 sanliuling: { name: "360資源", api: "https://360zy.com/api.php/provide/vod" },
 dytt: { name: "電影天堂", api: "http://caiji.dyttzyapi.com/api.php/provide/vod" },
 ruyi: { name: "如意資源", api: "https://cj.rycjapi.com/api.php/provide/vod" },
 wangwang: { name: "旺旺資源", api: "https://wwzy.tv/api.php/provide/vod" },
 hongniu: { name: "紅牛資源", api: "https://www.hongniuzy2.com/api.php/provide/vod" },
 guangsu: { name: "光速資源", api: "https://api.guangsuapi.com/api.php/provide/vod" },
 ikun: { name: "iKun資源", api: "https://ikunzyapi.com/api.php/provide/vod" },
 youku: { name: "優酷資源", api: "https://api.ukuapi.com/api.php/provide/vod" },
 huya: { name: "虎牙資源", api: "https://www.huyaapi.com/api.php/provide/vod" },
 xinlang: { name: "新浪資源", api: "http://api.xinlangapi.com/xinlangapi.php/provide/vod" },
 lezi: { name: "樂子資源", api: "https://cj.lziapi.com/api.php/provide/vod" },
 haihua: { name: "海豚資源", api: "https://hhzyapi.com/api.php/provide/vod" },
 jiangyu: { name: "鯨魚資源", api: "https://jyzyapi.com/provide/vod" },
 aidan: { name: "愛蛋資源", api: "https://lovedan.net/api.php/provide/vod" },
 moduzy: { name: "魔都影視", api: "https://www.moduzy.com/api.php/provide/vod" },
 feifanapi: { name: "非凡API", api: "https://api.ffzyapi.com/api.php/provide/vod" },
 feifancj: { name: "非凡採集", api: "http://cj.ffzyapi.com/api.php/provide/vod" },
 feifancj2: { name: "非凡採集HTTPS", api: "https://cj.ffzyapi.com/api.php/provide/vod" },
 feifan1: { name: "非凡線路1", api: "http://ffzy1.tv/api.php/provide/vod" },
 wolong2: { name: "臥龍採集", api: "https://collect.wolongzyw.com/api.php/provide/vod" },
 baofeng2: { name: "暴風APP", api: "https://app.bfzyapi.com/api.php/provide/vod" },
 wujin2: { name: "無盡ME", api: "https://api.wujinapi.me/api.php/provide/vod" },
 tianyazy: { name: "天涯海角", api: "https://tyyszyapi.com/api.php/provide/vod" },
 guangsu2: { name: "光速HTTP", api: "http://api.guangsuapi.com/api.php/provide/vod" },
 xinlang2: { name: "新浪HTTPS", api: "https://api.xinlangapi.com/xinlangapi.php/provide/vod" },
 yilingba2: { name: "1080JSON", api: "https://api.1080zyku.com/inc/apijson.php" },
 lezi2: { name: "樂子HTTP", api: "http://cj.lziapi.com/api.php/provide/vod" },
 uku88: { name: "U酷資源88", api: "https://api.ukuapi88.com/api.php/provide/vod" },
 wujincc: { name: "無盡CC", api: "https://api.wujinapi.cc/api.php/provide/vod" },
 yaya: { name: "丫丫點播", api: "https://cj.yayazy.net/api.php/provide/vod" },
 wolongcc: { name: "臥龍CC", api: "https://collect.wolongzy.cc/api.php/provide/vod" },
 wujinnet: { name: "無盡NET", api: "https://api.wujinapi.net/api.php/provide/vod" }
};

// 呼叫全域方法合併
if (window.extendAPISites) {
 window.extendAPISites(CUSTOMER_SITES);
} else {
 console.error("錯誤：請先載入 config.js！");
}
