/**
 * 主页业务模块
 */
const fs = require('fs');
const path = require('path');

module.exports.listNavbar = (callback) => {
  const filePath = path.join(path.resolve('./'), 'static', 'home', 'navbarData.json');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw err;
    }
    callback(JSON.parse(data));
  })
}

module.exports.listCarousel = (callback) => {
  const filePath = path.join(path.resolve('./'), 'static', 'home', 'carouselData.json');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw err;
    }
    callback(JSON.parse(data));
  })
}

module.exports.listHot = (callback) => {
  const filePath = path.join(path.resolve('./'), 'static', 'home', 'hotData.json');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw err;
    }
    callback(JSON.parse(data));
  })
}

module.exports.getAdverData = (callback) => {
  const filePath = path.join(path.resolve('./'), 'static', 'home', 'adverData.json');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw err;
    }
    callback(JSON.parse(data));
  })
}

module.exports.listSeckill = (callback) => {
  const filePath = path.join(path.resolve('./'), 'static', 'home', 'seckillData.json');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw err;
    }
    callback(JSON.parse(data));
  })
}



