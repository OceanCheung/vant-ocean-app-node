/**
 * 统一返回对象模块
 */
class ReturnObject{
    constructor(code, msg, data){
        this.code = code;
        this.msg = msg;
        this.data = data;
    }
}
module.exports = ReturnObject;
