var cors_proxy = require('cors-anywhere');
var fs = require('fs');

var host = process.env.HOST || 'sepezho.com';
var port = process.env.PORT || 5555;

const privateKey = fs.readFileSync(
    "/home/admin/conf/web/ssl.sepezho.com.key",
    "utf8"
  );
const certificate = fs.readFileSync(
    "/home/admin/conf/web/ssl.sepezho.com.crt",
    "utf8"
  );
const credentials = { key: privateKey, cert: certificate };

cors_proxy.createServer({
    httpsOptions: credentials,
    originWhitelist: [],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
