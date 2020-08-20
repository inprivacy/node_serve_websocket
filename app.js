// var http = require("http");
// http.createServer(function (req, res) {
//     res.write('<head><meta charset="utf-8"/></head>');
//     res.write('hello word');
//     res.end();
// }).listen(3000);


//websocket
const ws = require('nodejs-websocket');

var server = ws.createServer(function (connection) {
    console.log('hello word');
    //接收到字符串str
    connection.on("text", function (str) {
        console.log(str);
    });

    connection.on("close", function () {
        //客户端关闭
        console.log('客户端关闭');

    });

    connection.on("error", function () {
        //error
        console.log('error');

    });

});

//服务端开启监听192.168.31.17:8000
server.listen(8000, "192.168.31.17", () => {
    console.log("server running at 192.168.31.17:8000");
});