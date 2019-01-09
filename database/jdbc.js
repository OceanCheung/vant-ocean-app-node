/**
 * 数据库连接池配置
 */
const mysql = require('mysql');

//创建数据库连接池
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "php-mysql"
});
module.exports = pool;