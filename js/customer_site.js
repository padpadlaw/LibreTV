const CUSTOMER_SITES = {
    xxibao: {
        api: 'https://www.xxibaozyw.com/api.php/provide/vod',
        name: '细胞资源',
    }
    qiqi: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
