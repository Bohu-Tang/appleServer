'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/appleType', controller.enum.appleType);
  router.post('/login', controller.login.login);
  router.post('/insertAppleType', controller.enum.insertAppleType)
};
