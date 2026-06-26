const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    }
    qiqi: {
        api: 'https://www.xxibaozyw.com/api.php/provide/vod',
        name: '细胞采集',
    }
};
{
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
