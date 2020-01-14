## Basic proxy server

This is a basic proxy server that lets you forward requests to an externally exposed dev machine port to another server running on a non-externally exposed port.

### Usage

Forward requests from an externally accessible port (default 8888) to another source port (default 3000).

```
node proxy.js [sourcePort] [externalPort]
```
