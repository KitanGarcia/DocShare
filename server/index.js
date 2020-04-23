import http from 'http';

const port = 1337;
const address = '127.0.0.1';

http.createServer((req, res,) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http//' + address + ':' + port);
