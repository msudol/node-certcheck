# node-certcheck
A node.js application to scan ssl/tls certificates and compile their information.

## Usage

To run, and accept older certs from TLS1.0 and TLS1.1, use the following:

node --tls-min-v1.0 app

## SSLv3 and older

This app will only work for TLS1.0 and greater and requires the above command line. SSLv3 and older is not supported.