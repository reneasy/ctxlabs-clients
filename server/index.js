const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const clients = require('../data/clients.json');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

const filterClients = (search) => {
    const clientList = clients.filter(client => {
      return Object.keys(client).some((key) => {
        if (client[key] && key !== 'avatar') {
          return client[key].toLowerCase().search(search) !== -1;
        }
      })      
    })

    return clientList;
};

app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/api/clients', (req, res) => {
  const search = req.query.search || '';

  const clientList = filterClients(search.toLowerCase());

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(clientList));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
