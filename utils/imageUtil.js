const config = require("../config/config");

const joinImageUrlUtil = (str) => {
    return "http://" + config.ip + ":" + config.port + "/" + str;
}

const imageUtil = {
    joinImageUrlUtil
}
module.exports = imageUtil;


