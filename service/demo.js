/**
 * 业务模块
 */
const db = require('../database/db');
const dbUtil = require('../utils/dbUtil');

module.exports.listUser = (callback) => {
  let list = {};
  const sql = "SELECT * FROM USER";
  db.query(sql, (error, results) => {
    if (error) throw error;
    let json = JSON.stringify(results);
    list = JSON.parse(json);
    callback(results);
  });
}

module.exports.add = (json, callback) => {
  let result = {}
  let sqlParamsEntity = [];
  const sql = "insert into user(name,age) values('" + json.name + "','" + json.age + "')";
  sqlParamsEntity.push(dbUtil.getNewSqlParamEntity(sql, []));
  db.execTrans(sqlParamsEntity, (err, info) => {
    if (err) {
      console.error("事务执行失败");
      result.msg = "新增失败";
    } else {
      result.msg = "新增成功";
    }
    callback(result);
  })

}