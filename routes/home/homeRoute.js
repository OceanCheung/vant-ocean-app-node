/**
 * 主页路由模块
 */
const express = require('express');
const bodyParser = require('body-parser'); //处理参数的中间件
const path = require('path');
var fs = require('fs');
const service = require('../../service/home/homeService');
const ReturnObject = require('../../entity/returnObject');
const Constant = require('../../config/constant');
const imageUtil = require('../../utils/imageUtil');
const request = require('request'); //请求后台接口的中间件
const router = express.Router();

//查询头部导航信息
router.get('/listNavbar', (req, res, next) => {
    service.listNavbar((results) => {
        res.send(new ReturnObject(Constant.SUCCESS, Constant.SUCCESS_SERACH_MSG, results));
    });
});


//查询轮播图信息
router.get('/listCarousel', (req, res, next) => {
    service.listCarousel((results) => {
        results.forEach(element => {
            element.imageUrl = imageUtil.joinImageUrlUtil(element.imageUrl);
        });
        res.send(new ReturnObject(Constant.SUCCESS, Constant.SUCCESS_SERACH_MSG, results));
    })
});


//查询限时热图信息
router.get('/listHot', (req, res, next) => {
    service.listHot((results) => {
        results.forEach((item, index) => {
            item['page-' + (index + 1)].forEach((item, index) => {
                item.forEach((item, index) => {
                    item.imageUrl = imageUtil.joinImageUrlUtil(item.imageUrl);
                });
            });
        });
        res.send(new ReturnObject(Constant.SUCCESS, Constant.SUCCESS_SERACH_MSG, results));
    })
});

//查询广告信息
router.get('/getAdverData', (req, res, next) => {
    service.getAdverData((results) => {
        res.send(new ReturnObject(Constant.SUCCESS, Constant.SUCCESS_SERACH_MSG, results));
    });
});

//查询秒杀信息
router.get('/listSeckill', (req, res, next) => {
    service.listSeckill((results) => {
        results.forEach(element => {
            element.imageUrl = imageUtil.joinImageUrlUtil(element.imageUrl);
        });
        res.send(new ReturnObject(Constant.SUCCESS, Constant.SUCCESS_SERACH_MSG, results));
    })
});



//3.返回路由对象
module.exports = router;