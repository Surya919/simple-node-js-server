import http from 'http'
import nStatic from 'node-static';

var fileServer = new nStatic.Server('./public');

http.createServer((req, res) => {
  fileServer.serve(req, res);
  //res.writeHead(200, {'Content-Type': 'text/plain'})
  //res.end('Welcome Users')
}).listen(1337, '127.0.0.1')

console.log('Sever running at http://127.0.0.1:1337')
