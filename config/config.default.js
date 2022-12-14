/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1660542372677_9994';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // mysql 数据库配置
  config.mysql = {
    // 多数据库配置
    clients: {
      // 本地数据库
      // localDatabase: {
      //   // host
      //   host: 'localhost',
      //   // 端口号
      //   port: '3306',
      //   // 用户名
      //   user: 'root',
      //   // 密码
      //   password: 'root',
      //   // 数据库名
      //   database: 'apple',
      // },
      // 阿里云服务器数据库
      aliDatabaseWeb: {
        // host
        host: '106.14.205.132',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: 'root2019',
        // 数据库名
        database: 'apple',
      },
    },
    // 所有数据库配置的默认值
    default: {},
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // 配置指定的前端地址
  config.cors = {
    origin: 'http://127.0.0.1:5173',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    // 下面这条加上才能共享跨域session，同时前端ajax请求也要加上响应的参数
    credentials: true,
  };
  config.security = {
    // 关闭csrf验证
    csrf: {
      enable: false,
    },
    // 白名单
    domainWhiteList: ['*']
  };

  return {
    ...config,
    ...userConfig,
  };
};

