var https = require('https');
var options = {
    host: 'pwn9.com',
    port: 443,
    method: 'GET'
};

var req = https.request(options, function(res) {
    //https://nodejs.org/api/tls.html#tls_certificate_object
    console.log(res.connection.getPeerCertificate());
});

req.end();