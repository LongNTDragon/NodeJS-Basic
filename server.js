const http = require('http');

const server = http.createServer((req, res) => {
    console.log('run request ...')
    res.setHeader('Content-Type', 'text/html');
    res.write('Hello world !!!');
    res.end();
})

server.listen(3000, () => {
    console.log('Node.JS server is running on port : 3000');
})