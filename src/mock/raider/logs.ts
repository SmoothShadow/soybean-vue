import Mock from 'mockjs'
import { getAssetsFile } from '@/utils/pub-use';

// ↓mock数据
const data = Mock.mock({
  'data': [
    {
      title: '前言',
      content: [
        {
          type: 'text',
          text: '4.4的fflogs已对国服开放，国服选手可直接将数据传入fflogs并在网站上查看自己的国服rank以及ASP点数。但以本人周围的情况来看，仍有相当一部分的玩家对于“fflogs的上传与使用”存在疑问，在此本人会尽力讲解FFLOGS的上传与基础的使用方式。（多图警告）'
        },
      ],
    },
    {
      title: '上传',
      content: [
        {
          type: 'text',
          text: '首先FFLOGS有着专门的网站（即https://www.fflogs.com/），而其上传也有着专用的工具，所以并不是曾经有些选手所想的“act数据会自动上传至logs”。'
        },
        {
          type: 'text',
          text: '让我们进入logs网站主页（请无视掉各类广告），首先网站是自带汉化的，如果各位有阅读困难可在右上角切换。'
        },
        {
          type: 'img',
          url: getAssetsFile('logs/1.png')
        },
        {
          type: 'text',
          text: '上传act数据至logs，需要一个logs账号，初次使用的选手请点击Sign Up，填写基本信息后完成注册。而在我们完成注册并登陆后，logs的主页的上方会变成这样（为确保理解这里切换为了中文）'
        },
        {
          type: 'img',
          url: getAssetsFile('logs/2.png')
        },
        {
          type: 'text',
          text: '其中报告就是你的logs数据，logs公会则是在logs上注册的公会（并非游戏内），若想加入特定公会请点开右上角人头像，点击加入公会后输出公会管理员向你提供的代码。'
        },
        {
          type: 'img',
          url: getAssetsFile('logs/3.png')
        },
        {
          type: 'img',
          url: getAssetsFile('logs/4.png')
        },
        {
          type: 'text',
          text: '当我们拥有了logs账号之后，就需要下载logs上传工具了，点击'
        },
        {
          type: 'img',
          url: getAssetsFile('logs/6.png')
        },
        {
          type: 'text',
          text: '后，我们会看见如下界面。左边需要先下载Adobe AIR（即上面的链接）后再下载fflogs。而右边一类可直接下载，两者在使用上并没有太大差异。在logsuploader下载安装成功后，我们的准备工作就到此结束了'
        },
        {
          type: 'img',
          url: getAssetsFile('logs/7.png')
        },
        {
          type: 'text',
          text: '在登陆界面输入你的logs账号后，会出现如下三个选项，在此只介绍最为常用的，也是众多人关心的上传（Upload a Log），由于4.4更新后国服数据可以直接上传至logs，并不像以往需要在act管理界面勾选logs解析，所以现在的所有战斗数据都会被直接记录下来。'
        },
        {
          type: 'img',
          url: getAssetsFile('logs/8.png')
        },
        {
          type: 'text',
          text: '一般来讲，act文件依旧被保存在如下位置。'
        },
        {
          type: 'img',
          url: getAssetsFile('logs/9.png')
        },
        {
          type: 'text',
          text: '选择你想上传的act文件并确认'
        },
        {
          type: 'img',
          url: getAssetsFile('logs/10.png')
        },
        {
          type: 'text',
          text: '然后在这里选择上传地区（如果不想这份logs文件被公开，可勾选右边的private或者unlist）'
        },
        {
          type: 'img',
          url: getAssetsFile('logs/11.png')
        },
        {
          type: 'text',
          text: '最后勾选'
        },
        {
          type: 'img',
          url: getAssetsFile('logs/12.png')
        },
        {
          type: 'text',
          text: '，可选择你想上传的某个副本，而不是直接将整个act记录过的副本数据上传（也相当于对act数据的分离）。'
        },
        {
          type: 'text',
          text: '加载完毕后，选择你想上传的战斗即可，到此logs的上传已经完成，点击之后的view report即可查看你的logs。'
        },
        {
          type: 'text',
          text: ' （之前有人询问过如何分离战斗日志，非常抱歉，本人基本没有使用过split这一功能，并不是非常清楚，但如果只是单纯地想分段上传logs的话，依旧可以使用上面的方法。在此致歉。）'
        },
      ]
    },
    {
      title: '分析',
      content: [
        {
          type: 'text',
          text: '在上传logs后，我们可以在自己主页report一栏直接看见战斗日志，或者点开右上角头像也可以查看。'
        },
        {
          type: 'text',
          text: '点开某场战斗日志（如果想查看上传的每一场战斗，可点击Show All详细查看，其中会包含所有记录在内的战斗）'
        },
        {
          type: 'img',
          url: getAssetsFile('logs/13.png')
        },
        {
          type: 'text',
          text: '在进入日志后，我们会看见如下页面。'
        },
        {
          type: 'img',
          url: getAssetsFile('logs/14.png')
        },
        {
          type: 'text',
          text: '如果想查看自己的logs百分比，请点击伤害一栏，其中parse即为你输出所占logs百分比，这就是大家常说的“logsxx”，active一栏则是你的gcd使用率。'
        },
        {
          type: 'img',
          url: getAssetsFile('logs/15.png')
        },
        {
          type: 'text',
          text: '点开一人的ID，就可以查看该玩家的输出占比（casts为使用次数）'
        },
        {
          type: 'img',
          url: getAssetsFile('logs/16.png')
        },
        {
          type: 'text',
          text: '而我们如果想要查看buff（如太阳神，龙眼）的覆盖率，请点开buff一栏，再点击某一特定buff后，可查看具体情况'
        },
        {
          type: 'img',
          url: getAssetsFile('logs/17.png')
        },
        {
          type: 'text',
          text: '那么如何查看释放在boss上的buff（背刺，歪风，超荷）呢？\n有两种方法，我们可以点开忍者/召唤/机工的cast（召唤的需要点开他的宝宝查看施法）'
        },
        {
          type: 'img',
          url: getAssetsFile('logs/18.png')
        },
        {
          type: 'text',
          text: '或者\n我们点开all friendles下方的敌对，并选择boss，点开debuff后查看'
        },
        {
          type: 'img',
          url: getAssetsFile('logs/19.png')
        },
        {
          type: 'text',
          text: '另外，关于部分选手询问过的，关于cpm为何物的问题，其全称为cast per minutes请直接点开施法一栏查看。'
        },
        {
          type: 'img',
          url: getAssetsFile('logs/20.png')
        },
      ]
    },
    {
      title: '提升',
      content: [
        {
          type: 'text',
          text: '在帖内我也说过了，logs并非一个只是用来看输出的网站，其对于每个玩家时间轴的记录，可以帮助不少选手改善手法并进一步提升自己的输出。那么，如何“使用logs提高自己”呢？'
        },
        {
          type: 'text',
          text: '并不困难，我们以忍者12S本体举例，点开第二名的logs以及他个人的damage down，并随意点开某一能力技，便可看见他使用的时机（如天地人，但需在buff一栏内查看）'
        },
        {
          type: 'img',
          url: getAssetsFile('logs/21.png')
        },
        {
          type: 'text',
          text: '或者使用更为直白的方法，点开时间轴/事件，可以在精确的时间内看见所使用的技能'
        },
        {
          type: 'img',
          url: getAssetsFile('logs/22.png')
        },
        {
          type: 'text',
          text: '同时，我们可以用相同的方法，查看boss具体在何时使用了什么技能，根据具体时间调整自己的输出循环。'
        },
        {
          type: 'text',
          text: '另外，logs自身也带有录像功能，可以查看具体的跑位，若想了解请点开“回放”一栏。'
        },
        {
          type: 'text',
          text: '“如何使用logs提高自己”是个极大的范围，所以本人也不在此赘述了，各位若是真有提升的想法，除了logs一条路，观看其他人的视频，或者直接询问，都不失为提升的方法。'
        },
        {
          type: 'text',
          text: '以上便是logs的使用和上传的一些基础教程，为了确保理解以及更直观地讲解，使用了许多图片，如果感觉观看不适十分抱歉。本人能力有限，如果讲述里有错误欢迎各位指出！！'
        },
        {
          type: 'text',
          text: '感谢阅读到这里的你。'
        },
      ]
    }
  ]
})
export default [
  // 获取logs日志图文数据
  {
    url: new RegExp('/raider/logs'),
    type: 'get',
    result: () => {
      return {
        code: 200,
        data: data.data,
        message: '请求成功',
      }
    },
  },
]
