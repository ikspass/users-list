const { User } = require('../models/models');
const ApiError = require('../error/ApiError')


class UserListController{
    async getAll(req, res){
        const users = await User.findAll();
        return res.json(users);
    }
}

module.exports = new UserListController();
