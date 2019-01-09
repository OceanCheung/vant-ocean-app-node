/**
 * 路由模块
 */
const express = require('express');
const path = require('path');
const router = express.Router();


//实现对静态资源文件的托管
router.use('/static', express.static(path.join(path.resolve('./'), 'static')));

//3.返回路由对象
module.exports = router;