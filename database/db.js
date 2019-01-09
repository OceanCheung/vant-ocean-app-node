/**
 * 数据库事务以及其他的操作
 */
const mysql = require('mysql');
const async = require("async");
const pool = require('./jdbc');

/**
 * 事务处理
 */
const execTrans = (sqlparamsEntities, callback) => {
    pool.getConnection((err, connection) => {
        if (err) {
            return callback(err, null);
        }
        connection.beginTransaction((err) => {
            if (err) {
                return callback(err, null);``
            }
            console.log("开始执行transaction，共执行" + sqlparamsEntities.length + "条数据");
            var funcAry = [];
            sqlparamsEntities.forEach((sql_param) => {
                var temp = (cb) => {
                    var sql = sql_param.sql;
                    var param = sql_param.params;
                    connection.query(sql, param, (tErr, rows, fields) => {
                        if (tErr) {
                            connection.rollback(() => {
                                console.log("事务失败，" + sql_param + "，ERROR：" + tErr);
                                throw tErr;
                            });
                        } else {
                            return cb(null, 'ok');
                        }
                    })
                };
                funcAry.push(temp);
            });

            async.series(funcAry, (err, result) => {
                console.log("transaction error: " + err);
                if (err) {
                    connection.rollback((err) => {
                        console.log("transaction error: " + err);
                        connection.release();
                        return callback(err, null);
                    });
                } else {
                    connection.commit((err, info) => {
                        console.log("transaction info: " + JSON.stringify(info));
                        if (err) {
                            console.log("执行事务失败，" + err);
                            connection.rollback((err) => {
                                console.log("transaction error: " + err);
                                connection.release();
                                return callback(err, null);
                            });
                        } else {
                            connection.release();
                            return callback(null, info);
                        }
                    })
                }
            })
        });
    });
}

/**
 * 业务为查询时直接调用
 */
const query = (sql, callback) => {
    pool.getConnection((err, connection) => {
        connection.query(sql, (err, rows) => {
            callback(err, rows);
            connection.release();
        });
    });
}

module.exports = {
    execTrans: execTrans,
    query: query
}
