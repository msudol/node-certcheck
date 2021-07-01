/**
 * node-webcrawler - A node.js application to scan ssl/tls certificates and compile their information.
 * @license GPLV3
 *
 *  https://github.com/msudol/node-certcheck
 */
 
'use strict';

// get config values
const config = require('./config/config.js');

// get makeReq class
const makeReq = require('./src/makereq.js');

var results = [];

var counts = 0;

// loop through hosts and pull the cert data
for (var i = 0; i < config.hosts.length; i++) {
    
    let certreq = new makeReq(config.hosts[i], (res) => {
         
        // add cert to results array
        results.push(res);
        
        counts++;

        // if all the requests have been made
        if (counts == config.hosts.length) {
            
            console.log(results);
            
        }
        
    });
    

}

