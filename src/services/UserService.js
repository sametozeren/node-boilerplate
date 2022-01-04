const BaseService = require('./BaseService');
const UserModel = require('../models/UserModel');

class UserService extends BaseService {
    model = UserModel;

    // * Users Service specific functions can be defined
};

module.exports = new UserService();