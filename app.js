/**
 * node-webcrawler - A node.js application to scan ssl/tls certificates and compile their information.
 * @license GPLV3
 *
 *  https://github.com/msudol/node-certcheck
 */
 
'use strict';

// jsonexport
const jsonexport = require('jsonexport');

// fs to write
const fs = require('fs');

// get config values
const config = require('./config/config.js');

// get makeReq class
const makeReq = require('./src/makereq.js');

// array of results
var results = [];

// count iterations
var counts = 0;

// loop through hosts and pull the cert data
for (var i = 0; i < config.hosts.length; i++) {
    
    let certreq = new makeReq(config.hosts[i], (res) => {
         
        // add cert to results array
        results.push(res);
        
        counts++;

        // if all the requests have been made
        if (counts == config.hosts.length) {
            
            // If we want to log results to the console
            //console.log(results);
            
            jsonexport(results, function(err, csv){
                if (err) return console.error(err);
                
                // write the csv data to file
                fs.writeFile(config.outfile, csv, e => {
                    if (e) return console.error(e);  
                    //file written successfully
                    console.log('Done...');
                })
            });
        }
        
    });

}

