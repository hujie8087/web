const Controller = require("egg").Controller;

class UserController extends Controller {
  async index() {
    const { ctx, service } = this;
    const users = await service.user.list();
    ctx.body = {
      data: users,
      code: 200,
      success: "success",
    };
  }
  async create() {
    const { ctx, service } = this;
    const user = ctx.request.body;
    await service.user.create(user);
    ctx.body = {
      code: 200,
      success: "创建成功",
    };
  }
  async update() {
    const { ctx, service } = this;
    let id = ctx.params.id;
    let user = ctx.request.body;
    user.id = id;
    await service.user.update(user);
    ctx.body = {
      code: 200,
      success: "修改成功",
    };
  }
  async destroy() {
    const { ctx, service } = this;
    let id = ctx.params.id;
    await service.user.destroy(id);
    ctx.body = {
      code: 200,
      success: "删除成功",
    };
  }
}

module.exports = UserController;
