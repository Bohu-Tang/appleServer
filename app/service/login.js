'use strict';
const {Service} = require('egg');

class LoginService extends Service{
    async login(param){
        const res = await this.app.mysql.get('aliDatabaseWeb')
        .select('user',{
            where: {username:param.username}
        })
        return res
    }
}

module.exports = LoginService