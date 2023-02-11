const http = require('http');
http.createServer((req,resp)=>{

    resp.write("Hello ");

    resp.end();

}).listen(45000);


