/**
 * 入口文件
 */

const express = require('express');
const path = require('path');
//静态资源处理中间件
const serve = require('express-static');
//端口配置
const config = require('./config/config');
//路由配置
const home = require('./routes/home/homeRoute');
const static = require('./routes/static/staticRoute');
// const recommend = require('./controller/recommend');
// const search = require('./controller/search');
// const personal = require('./controller/personal');
//创建app对象
const app = express();

//解决跨域
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

//路由分类加载
app.use(static);
app.use('/home',home);
// app.use('/recommend',recommend);
// app.use('/search',search);
// app.use('/personal',personal);

//托管静态资源
app.use(serve(path.join(path.resolve('./'), "resources")));



//监听服务器端口号
app.listen(config.port, () => {
    console.log('服务启动成功------' + "http://localhost:" + config.port);
})
