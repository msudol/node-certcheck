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
    
    self.store = {};
    
    // ignore bad certs
    options.checkServerIdentity = () => undefined;
    
    var req = https.request(options, function(res) {
        
        self.store.raw = res.connection.getPeerCertificate();
        
        // create object with just the data we want
        self.store.cert = {};
        self.store.cert.host = options.host;
        self.store.cert.subjectCN = self.store.raw.subject.CN;
        self.store.cert.issuerO = self.store.raw.issuer.O;
        self.store.cert.issuerCN = self.store.raw.issuer.CN;
        self.store.cert.SAN = self.store.raw.subjectaltname;
        self.store.cert.validFrom = self.store.raw.valid_from;
        self.store.cert.validTo = self.store.raw.valid_to;
        
        // return callback function with the storage results
        callback(self.store.cert); 
    });

    req.on('error', (e) => {
        console.log(e);
    });
    
    req.end(); 
     
}

module.exports = makereq;






