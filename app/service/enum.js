'use strict';
const { Service } = require('egg');

class EnumService extends Service {
  async getAppleType() {
    const res = await this.app.mysql.get('aliDatabaseWeb')
      .select('appletype', {
        id: 1,
      });
    return res;
  }
  async insertAppleType(param){
    const res = await this.app.mysql.get('aliDatabaseWeb').insert('appletype',{
      name: param.name,
      code: param.code
    })
    return res
  }
}

module.exports = EnumService;
