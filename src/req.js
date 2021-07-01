/***  spider.js ***/

'use strict';

// required modules

// https
const https = require('https');

// config
const config = require('../config/config.js');

// req class wraps instance of https
function makereq

var results = [];

var completed_requests = 0;


for (let i = 0; i < config.hosts.length; i++) {

    var req = https.request(config.hosts[i], (res) => {
        
        results.push(res.connection.getPeerCertificate());
        
        res.on('data', (d) => {    
            if (completed_requests++ == config.hosts.length - 1) {
                console.log(results);
            }      
        });
    });

    req.on('error', (e) => {
      //console.error(e);
    });
    
    req.end();    
}
