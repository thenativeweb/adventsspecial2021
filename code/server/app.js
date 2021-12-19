'use strict';

const { configuration } = require('./lib/configuration');
const express = require('express');
const http = require('http');
const { initialize, render } = require('./lib/routes');

const api = express();

api.use(express.json());

api.post('/initialize', initialize({ configuration }));
api.post('/render', render({ configuration }));

const server = http.createServer(api);

server.listen(3_000);
