'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = {
    debug: true,

    name: 'eggblog',  //社区名字
    description: 'eggblog: my nodejs blog', //社区描述
    keywords: 'egg,nodejs,im,blog', //关键字

    site_static_host: '', //静态文件存储域名
    host: 'localhost',    //社区域名

    //db
    mongodb: 'mongodb://127.0.0.1/eggblog',
    mysql: {
      host: '127.0.0.1',
      port: '3306',
      db:'egg',
      user: 'root',
      password: 'root'
    },

    //邮箱配置
    mail_opts: {
      host: 'smtp.163.com',
      port: 465,
      auth: {
        user: 'lilinjunwp@163.com',
        password: 'lilinjun123'
      },
      ignoreTLS: true,
    },

    //微博配置
    weibo_key: 1000000,
    weibo_id: 'my_weibo_id',

    //admin 管理员
    admins: { user_login_name: true},

    //oneapm 是一个用来监控网站性能的服务
    oneapm_key: '',

    //七牛云存储
    qn_access: {
      accessKey: 'qqqqqqqqqqqqq',
      secretKey: 'sssssssssssss',
      bucket:'name',
    },

    upload: {
      path: path.join(__dirname, 'public/upload/'),
      url: '/public/upload'
    },

    file_limit: '1MB',

    //板块
    tabs: [
      ['share', '分享'],
      ['ask', '问答'],
      ['job', '招聘']
    ],

    //极光推送
    jpush: {
      appKey: 'kkkkkkkkk',
      masterSecret: 'ssssssssss',
      isDebug: false,
    },
    //视图引擎文件映射
    view: {
      mapping: {
        '.nj': 'nunjucks',
      }
    },

    keys: this.name + '_1491308060962_5324'
  };

  // should change to your own
  // config.keys = appInfo.name + '_1491308060962_5324';

  return config;
};

