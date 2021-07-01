// config.js - rename this file to config.js and edit to your needs

'use strict';

// Static config, do not edit
let config = {};

// the hosts to scan
config.hosts = [
    {
        host: 'google.com',
        port: 443 // port will default to 443 so is not necessary to define
    },
    {
        host: 'letsencrypt.org'
    }
];

module.exports = config;