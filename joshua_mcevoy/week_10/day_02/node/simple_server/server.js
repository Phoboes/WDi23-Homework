const http = require( 'http' );

const PORT = 8888;

const handleRequest = ( request, response)  => {
  console.log(`Request received: ${request.url}`);

  if (request.url === '/hello'){
    response.end('Hello World');
  }else if (request.url === '/goodbye'){
    response.end('Goodbye World');
  }else {
    response.end('Hey this works');
  }
};//handleRequest function

const server = http.createServer( handleRequest );

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
