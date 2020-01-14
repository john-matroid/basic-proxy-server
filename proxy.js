const httpProxy = require('http-proxy');

const [source, external] = process.argv.slice(2);

const sourcePort = source || 3000;
const externalPort = external || 8888;

httpProxy
  .createProxyServer({
    target: `http://localhost:${sourcePort}`
  })
  .listen(externalPort);
