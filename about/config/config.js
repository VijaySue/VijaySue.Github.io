var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "Vijay",
    sex: "男",
    age: "20",
    phone: "16630122213",
    email: "vijaysue@yeah.net",
    address: "现居河北省石家庄市",
    qq: "1220515942",
    log: "Vijay",
    excpect_work: "全栈开发",


    /*在这里配置首页的座右铭集合*/
    motto: [
	"人望山，鱼窥荷",
	"它山之石，可以攻玉",
	"千里之行，始于足下",
	"穷且益坚，不坠青云之志",
	"登山须正路，饮水须直流",
	"千功名尘与土，八千里云和月",
	"勉之期不止，多获由力耘",
	"先发制人，后发制于人",
	"丈夫志四海，万里犹比邻",
	"我自是年少，韶华倾负",
	"莫等闲、白了少年头，空悲切",
	"虚负凌云万丈才，一生襟抱未曾开"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "青青子衿，悠悠我心<br>" +
             "但为君故，沉吟至今<br>" +
             "Hello,I'm Vijay<br>" +
             "Nice to meet you!",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>您好！我是一名大二在读生，我期望的工作岗位是全栈开发。</p>" +
        "<p>我有着较多的C++编程经验以及Web前端开发经验，计算机基础知识掌握扎实，能够在工作中很好的完成自己的任务。此外，我有着充满激情的工作态度，团队协同作战能力强，同时我也具备独立开发的能力，擅于发现并解决问题。我的执行力强、责任感高、集体荣誉感强、敢于担当，能够接受加班或出差等安排</p>" +
        "<p>十分期待与您的联系!</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["C++", 80, "red"],
        ["Java", 76, "blue"],
        ["SQL", 72, "#1abc9c"],
        ["HTML5", 68, "rgba(0,0,0)"],
        ["Go", 65, "yellow"],
        ["JavaScript", 60, "pink"]
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>熟练使用C/C++编程语言。</li>" +
        "     <li>熟练掌握Java基础。</li>" +
        "     <li>熟悉JavaIO、多线程、集合等基础框架。</li>" +
        "     <li>操作系统、计算机网络等编程基础知识良好。</li>" +
        "     <li>熟悉Go语言开发基本知识。</li>" +
        "     <li>熟悉SQL语句编写以及调优。</li>" +
        "     <li>熟悉基本Linux命令操作。</li>" +
        "     <li>熟悉Spring、ibatis、struts等框架的使用，了解其原理与机制。</li>" +
        "     <li>熟悉缓存、消息等机制。</li>" +
        "     <li>了解分布式系统的设计与应用。</li>" +
        "     <li>熟悉HTML、CSS、JavaScript以及相应前端知识。</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
       ["./images/show-1.png","https://vijaysue.github.io/","个人首页","利用JS，CSS，HTML技术开发的一站式个人博客"],
       ["./images/show-2.png","https://github.com/VijaySue/Snake","贪吃蛇","一款基于C++面向对象特性开发的命令行贪吃蛇游戏"],
       ["./images/show-3.png","https://github.com/VijaySue/YuanShen","原神","一款基于QT&C++开发的消消乐游戏"]
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您没有工作经历，您可以采取下列写法
        ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

    /**
        ["2020/7/1 — 2021/8/10", "<br>阎王殿实习生",
                 "<p><strong>阎王殿研发部</strong></p>" +
                 "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>" +
                 "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>"
        ],
     */
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2022-10-22","第六届河北省大学生程序设计竞赛优胜奖","大二上学期，我参与河北省大学生程序设计竞赛并取得优胜奖"]
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["./svg/LeetCode.svg", "https://leetcode.cn/u/vijaysue/", "我的力扣主页"],
        ["./svg/github.svg", "https://github.com/VijaySue", "我的GitHub主页"],
        ["./svg/博客.svg", "../blog", "我的个人博客"],
        ["./svg/codeforces.svg", "https://codeforces.com/profile/VijaySue", "我的CodeForces主页"],
        ["./svg/csdn.svg", "https://blog.csdn.net/weixin_67559204?spm=1000.2115.3001.5343", "我的CSDN主页"]
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/intro-bg.jpg",
        "./images/2.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]

}