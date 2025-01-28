const Router = require('express');
const router = new Router();
const userListController = require('../controllers/userListController');

router.get('/', userListController.getAll);

module.exports = router;