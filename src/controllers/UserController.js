const httpStatus = require('http-status');
const BaseController = require('./BaseController');
const UserService = require('../services/UserService');

class UserController extends BaseController {
    service = UserService;

    // * User Controller spesific functions can be defined
};

module.exports = new UserController();