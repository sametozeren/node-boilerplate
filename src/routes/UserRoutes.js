const express = require('express');
const router = express.Router();
const {
    getAll,
    add
} = require('../controllers/UserController');

router.get('/getAll', getAll);
router.post('/add', add);

module.exports = router;