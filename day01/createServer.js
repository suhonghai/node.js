var http = require("http");
http.createServer(function(request, response) {
    //发送http头部
    //http状态码 : 200 ok
    //内容text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('hello,word')
}).listen(8888)
console.log('Serve runing at http://127.0.0.1:8888/')