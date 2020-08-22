//websocket
const ws = require('nodejs-websocket');
require('./data/seda');

const server = ws.createServer(function (connection) {
    console.log('有客户端连接');
    var id = 1;

    var sendEndpoint = setInterval(() => {
        if (id <= 7) {
            // console.log(id);
            connection.send(JSON.stringify(endpoint_status(id)));
        } else {
            id = 0;
        }
        id++;

    }, 10000);

    var sendProject = setInterval(() => {
        connection.send(JSON.stringify(project_status()));
    }, 15000);

    //接收到字符串str
    connection.on("text", function (str) {
        console.log(str);
        if (str === 'hear_beat') {
            connection.send(JSON.stringify({ msg_type: 'hear_beat', content: 'hear_beat' }));
        }
    });

    connection.on("close", function () {
        //客户端关闭
        console.log('客户端关闭');
        clearInterval(sendEndpoint);
        clearInterval(sendProject);
    });

    connection.on("error", function () {
        //error
        console.log('error');
        clearInterval(sendEndpoint);
        clearInterval(sendProject);
    });

});

//服务端开启监听192.168.31.17:8000
server.listen(8000, "192.168.31.17", () => {
    console.log("server running at 192.168.31.17:8000");
});