const CUSTOMER_SITES = {
    feifan: { name: "非凡资源", api: "http://ffzy5.tv/api.php/provide/vod" },
    wolong: { name: "卧龙资源", api: "https://wolongzyw.com/api.php/provide/vod" },
    zuida: { name: "最大资源", api: "https://api.zuidapi.com/api.php/provide/vod" },
    baiduyun: { name: "百度云资源", api: "https://api.apibdzy.com/api.php/provide/vod" },
    baofeng: { name: "暴风资源", api: "https://bfzyapi.com/api.php/provide/vod" },
    jisu: { name: "极速资源", api: "https://jszyapi.com/api.php/provide/vod" },
    tianya: { name: "天涯资源", api: "https://tyyszy.com/api.php/provide/vod" },
    wujin: { name: "无尽资源", api: "https://api.wujinapi.com/api.php/provide/vod" },
    modu: { name: "魔都资源", api: "https://www.mdzyapi.com/api.php/provide/vod" },
    sanliuling: { name: "360资源", api: "https://360zy.com/api.php/provide/vod" },
    dytt: { name: "电影天堂", api: "http://caiji.dyttzyapi.com/api.php/provide/vod" },
    ruyi: { name: "如意资源", api: "https://cj.rycjapi.com/api.php/provide/vod" },
    wangwang: { name: "旺旺资源", api: "https://wwzy.tv/api.php/provide/vod" },
    hongniu: { name: "红牛资源", api: "https://www.hongniuzy2.com/api.php/provide/vod" },
    guangsu: { name: "光速资源", api: "https://api.guangsuapi.com/api.php/provide/vod" },
    ikun: { name: "iKun资源", api: "https://ikunzyapi.com/api.php/provide/vod" },
    youku: { name: "优酷资源", api: "https://api.ukuapi.com/api.php/provide/vod" },
    huya: { name: "虎牙资源", api: "https://www.huyaapi.com/api.php/provide/vod" },
    xinlang: { name: "新浪资源", api: "http://api.xinlangapi.com/xinlangapi.php/provide/vod" },
    lezi: { name: "乐子资源", api: "https://cj.lziapi.com/api.php/provide/vod" },
    haihua: { name: "海豚资源", api: "https://hhzyapi.com/api.php/provide/vod" },
    jiangyu: { name: "鲸鱼资源", api: "https://jyzyapi.com/provide/vod" },
    aidan: { name: "爱蛋资源", api: "https://lovedan.net/api.php/provide/vod" },
    moduzy: { name: "魔都影视", api: "https://www.moduzy.com/api.php/provide/vod" },
    feifanapi: { name: "非凡API", api: "https://api.ffzyapi.com/api.php/provide/vod" },
    feifancj: { name: "非凡采集", api: "http://cj.ffzyapi.com/api.php/provide/vod" },
    feifancj2: { name: "非凡采集HTTPS", api: "https://cj.ffzyapi.com/api.php/provide/vod" },
    feifan1: { name: "非凡线路1", api: "http://ffzy1.tv/api.php/provide/vod" },
    wolong2: { name: "卧龙采集", api: "https://collect.wolongzyw.com/api.php/provide/vod" },
    baofeng2: { name: "暴风APP", api: "https://app.bfzyapi.com/api.php/provide/vod" },
    wujin2: { name: "无尽ME", api: "https://api.wujinapi.me/api.php/provide/vod" },
    tianyazy: { name: "天涯海角", api: "https://tyyszyapi.com/api.php/provide/vod" },
    guangsu2: { name: "光速HTTP", api: "http://api.guangsuapi.com/api.php/provide/vod" },
    xinlang2: { name: "新浪HTTPS", api: "https://api.xinlangapi.com/xinlangapi.php/provide/vod" },
    yilingba2: { name: "1080JSON", api: "https://api.1080zyku.com/inc/apijson.php" },
    lezi2: { name: "乐子HTTP", api: "http://cj.lziapi.com/api.php/provide/vod" },
    uku88: { name: "U酷资源88", api: "https://api.ukuapi88.com/api.php/provide/vod" },
    wujincc: { name: "无尽CC", api: "https://api.wujinapi.cc/api.php/provide/vod" },
    yaya: { name: "丫丫点播", api: "https://cj.yayazy.net/api.php/provide/vod" },
    wolongcc: { name: "卧龙CC", api: "https://collect.wolongzy.cc/api.php/provide/vod" },
    wujinnet: { name: "无尽NET", api: "https://api.wujinapi.net/api.php/provide/vod" }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}

