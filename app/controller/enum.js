'use strict';

const Controller = require('egg').Controller;

class EnumController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.enum.getAppleType();
    ctx.body = res;
  }
}

module.exports = EnumController;
