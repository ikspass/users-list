const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const userListRouter = require('./userListRouter');

router.use('/user', userRouter)
router.use('/userlist', userListRouter)

module.exports = router;