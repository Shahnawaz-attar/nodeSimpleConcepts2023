// create simple api on node js
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.body = [{
        name: 'John',   // name: 'John'
        age: 30,        // age: 30

    },
    {
        name: 'Mary',
        age: 28
    }];
    res.end(JSON.stringify(res.body));


}).listen(45000);