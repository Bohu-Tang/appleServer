'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };
// mysql插件
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};


exports.cors = {
  enable: true,
  package: 'egg-cors',
};
