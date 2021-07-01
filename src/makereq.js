/***  spider.js ***/

'use strict';

//process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// required modules

// https
const https = require('https');

// config
const config = require('../config/config.js');

// req class wraps instance of https
function makereq(options, callback) {
    
    var self = this;
    
    self.store = null;
    
    // ignore bad certs
    options.checkServerIdentity = () => undefined;
    
    var req = https.request(options, function(res) {
        
        self.store = res.connection.getPeerCertificate();
        
        // do some storage with the results here.
        
        //results.push(res.connection.getPeerCertificate());
        
        //res.on('data', function(){    
        //    if (completed_requests++ == config.hosts.length - 1) {
        //        console.log(results);
        //    }      
        //});
        
        callback(self.store); 
    });

    req.on('error', (e) => {
        console.log(e);
    });
    
    req.end(); 
     
}

module.exports = makereq;






