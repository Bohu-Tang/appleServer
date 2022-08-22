'use strict';

const Controller = require('egg').Controller;
const { singal } = require('../utils/index.js')

class EnumController extends Controller {
  async appleType() {
    const { ctx } = this;
    const res = await ctx.service.enum.getAppleType();
    ctx.body = res;
  }
  async insertAppleType(){
    const {ctx} = this
    const body = ctx.request.body
    const res = await ctx.service.enum.insertAppleType(body);
    if(res.affectedRows===1){
      ctx.body = singal(res, 'success', '新增成功')
    }else{
      ctx.body = singal(res, 'error', '操作失败')
    }
  }
  async delEnum(){
    const {ctx} = this
    const body = ctx.request.body
    const res = await ctx.service.enum.delEnum(body.id);
    if(res.affectedRows===1){
      ctx.body = singal(res, 'success', '删除成功')
    }else{
      ctx.body = singal(res, 'error', '操作失败')
    }

  }
}

module.exports = EnumController;
