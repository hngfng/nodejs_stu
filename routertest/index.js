var server = require("./service");
var router = require("./router");
server.start(router.route);