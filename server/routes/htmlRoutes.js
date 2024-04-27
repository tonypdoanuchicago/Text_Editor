const express = require('express');
const app = express();
const path = require('path');

module.exports = (app) => {
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../../client/index.html')));
  
  app.get('/logo', (req, res) =>
    res.sendFile(path.join(__dirname, '../../client/src/images/logo.png')));
};


   

