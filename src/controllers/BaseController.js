const httpStatus = require('http-status');

module.exports = class BaseController {
    getAll = (req, res) => {
        this.service.getAll((req.body || {})).then(response => {
            res.status(httpStatus.OK).send(response);
        }).catch((err) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        });
    };

    getById = (req, res) => {
        this.service.getById(req.body).then(response => {
            res.status(httpStatus.OK).send(response);
        }).catch((err) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        });
    };

    add = (req, res) => {
        this.service.add(req.body).then(response => {
            res.status(httpStatus.OK).send(response);
        }).catch((err) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        });
    };

    update = (req, res) => {
        this.service.update(req.body).then(response => {
            res.status(httpStatus.OK).send(response);
        }).catch((err) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        });
    };

    delete = (req, res) => {
        this.service.delete(req.body).then(response => {
            res.status(httpStatus.OK).send(response);
        }).catch((err) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        });
    };
};