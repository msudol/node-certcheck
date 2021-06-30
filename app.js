/**
 * node-webcrawler - A node.js application to scan ssl/tls certificates and compile their information.
 * @license GPLV3
 *
 *  https://github.com/msudol/node-certcheck
 */
 
'use strict';

// get config values
const config = require('./config/config.js');

var https = require('https');
var results = [];
var completed_requests = 0;


for (let i = 0; i < config.hosts.length; i++) {

    var req = https.request(config.hosts[i], function(res) {
        
        results.push(res.connection.getPeerCertificate());
        
        res.on('data', function(){    
            if (completed_requests++ == config.hosts.length - 1) {
                console.log(results);
            }      
        });
    });

    req.on('error', (e) => {
      console.error(e);
    });
    
    req.end();    
}


