var http = require("http");
var url = require("url");

function start(route){
    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        if(pathname!== "/favicon.ico"){
            console.log("Request recieved for "+ pathname);
            route(pathname);
            response.writeHead(200, {"Content-Type":"text/plain"});
            response.write("Hello World!");
            response.end();
        }
    }

    //httpServer = http.createServer(onRequest);
    //httpServer.listen(8888);
    http.createServer(onRequest).listen(8888);
    console.log("Http server has started.");
}

exports.start = start;
