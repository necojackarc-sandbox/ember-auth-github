/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  const tokenRouter = express.Router();
  const https = require('https');

  tokenRouter.post('/', function(request, response) {
    const body = request.body;

    const payload = {
      'client_id': process.env.GITHUB_DEV_CLIENT_ID,
      'client_secret': process.env.GITHUB_DEV_CLIENT_SECRET,
      'code': body.authorizationCode,
    };
    if (body.state) {
      payload.state = body.state;
    }

    const data = JSON.stringify(payload);

    const options = {
      'hostname': 'github.com',
      'port': 443,
      'path': '/login/oauth/access_token',
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
        'Accept': 'application/json',
        'User-Agent': process.env.GITHUB_DEV_USER_AGENT,
      },
    };

    const gitHubRequest = https.request(options, (gitHubResponse) => {
      let body = '';
      gitHubResponse.setEncoding('utf8');
      gitHubResponse.on('data', (chunk) => body += chunk);
      gitHubResponse.on('end', () => {
        response.writeHead(200, {
          'Content-Type': 'application/json',
        });
        response.write(JSON.stringify(body));
        response.end();
      });
    });

    gitHubRequest.on('error', (error) => {
      console.error(error);
      response.status(500).end();
    });

    gitHubRequest.write(data);
    gitHubRequest.end();
  });

  app.use('/api/token', require('body-parser').json());
  app.use('/api/token', tokenRouter);
};
