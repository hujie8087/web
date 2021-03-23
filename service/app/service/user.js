const { Service } = require("egg");

class UserService extends Service {
  async list() {
    return await this.app.mysql.select("user");
  }
  async create(user) {
    return await this.app.mysql.insert("user", user);
  }
  async update(user) {
    return await this.app.mysql.update("user", user);
  }
  async destroy(id) {
    return await this.app.mysql.delete("user", { id });
  }
}

module.exports = UserService;
