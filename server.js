'use strict';

const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');
const config = require('./config');

const app = express();
const port = 3001;

app.use(cors());
Object.keys(config.urls || {}).forEach((key) =>
  app.use(
    `/${key}`,
    proxy(config.urls[key], {
      https: config.urls[key].startsWith('https://'),
    })
  )
);

app.listen(port, () => console.log(`http://localhost:${port}`));
