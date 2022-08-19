'use strict';

const Controller = require('egg').Controller;
const md5 = require('md5')
const { singal } = require('../utils/index.js')


class LoginController extends Controller {
    async login() {
        const { ctx } = this;
        const param = ctx.request.body;
        const res = await ctx.service.login.login(param);
        if (res.length === 1) {
            if (param.password === md5(res[0].password)) {
                ctx.body = singal('Hu ' + md5(res[0].password), 'success', '登录成功')
            } else {
                ctx.body = singal("账号或密码错误", 'error', '账号或密码错误')
            }
        } else {
            ctx.body = singal('用户不存在', 'error', '用户不存在')
        }

    }
}

module.exports = LoginController;