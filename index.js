const http = require('http'); // http is built into Node.js, but it must be imported to access it.
const port = 3000;

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.write('Hello JS Universe!');
    res.end();

}).listen(port);