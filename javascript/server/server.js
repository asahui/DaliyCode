var http = require("http");
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
exports.start = function(){
  http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    var ext = pathname.match(/(\.[^.]+|)$/)[0];//取得后缀名
    switch(ext){
      case ".css":
      case ".js":
        fs.readFile("."+request.url, 'utf-8',function (err, data) {//读取内容
        if (err) throw err;
        response.writeHead(200, {
          "Content-Type": {
            ".css":"text/css",
            ".js":"application/javascript",
          }[ext]
        });
        response.write(data);
        response.end();
      });
      break;
      default:
        fs.readFile('./index.html', 'utf-8',function (err, data) {//读取内容
        if (err) throw err;
        response.writeHead(200, {
          "Content-Type": "text/html"
        });
        response.write(data);
        response.end();
      });

    }
    var post = '';
    request.on('data', function(chunk) {
      post += chunk;
      console.log(post);
      post = querystring.parse(post);
      console.log(post);
      console.log(post['3']);
      console.log(post['1[]']);
      console.log(post['2[]']);
    });

  }).listen(8888);
  console.log("server start...");
}
