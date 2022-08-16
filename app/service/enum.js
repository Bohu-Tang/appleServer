'use strict';
const { Service } = require('egg');

class EnumService extends Service {
  async getAppleType() {
    console.log(this.app.mysql);
    const res = await this.app.mysql.get('aliDatabaseWeb')
      .select('appletype', {
        id: 1,
      });
    return res;
  }
}

module.exports = EnumService;
