/**
 * 数据库操作工具
 */
const getNewSqlParamEntity = (sql, params, callback) => {
    if (callback) {
        return callback(null, {
            sql: sql,
            params: params
        });
    }
    return {
        sql: sql,
        params: params
    };
}

const dbUtil = {
    getNewSqlParamEntity
}

module.exports = dbUtil;