var rule = {
    // 网站名称，可不填
    title:'Moefun',    
    // 可不填，默认utf-8
    编码:'', 搜索编码:'',
    // 主页地址
    host:'http://www.moefun.net',
    // 分类拼接
    url:'http://www.moefun.net/anime/fyclass.html',
    // 请求头
    headers:{'User-Agent':'MOBILE_UA'},
    // 分类名称
    class_name:'新番&番剧&剧场',
    // 分类地址
    class_url:'uCCCCS&uCCCCS&VCCCCS',
    searchUrl:'/search/-------------.html?wd=**',
    推荐:'body&&.public-list-box;a&&title;img&&data-src;.public-list-subtitle&&Text;a&&href',
    // 类似海阔一级 列表;标题;图片;描述;链接;详情 其中最后一个参数选填
    一级:'div.flex.wrap.border-box&&.public-list-box;a&&title;img&&data-src;span.public-list-prb&&Text;a&&href',
    // 二级可以是*,表示规则无二级,直接拿一级的链接进行嗅探
    // 二级 title: 片名;类型
    // 二级 desc: 主要信息;年代;地区;演员;导演
    // 或者 {title:'',img:'',desc:'',content:'',tabs:'',lists:'',tab_text:'body&&Text',list_text:'body&&Text',list_url:'a&&href'} 同海阔dr二级
    二级:{
        "title":"h3&&Text;span.hl-ma0&&Text",
        "img":"img&&src",
        "desc":";;;;",
        "content":"div.switch-box&&Text",
        "tabs":".anthology-tab&&a",
        "lists":".anthology-list-play&&li"
    },
    搜索:'div.row-right&&.public-list-box;div.thumb-txt&&Text;img&&data-src;span.public-list-prb&&Text;a&&href',
}