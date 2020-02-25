const newrelic = require('newrelic');
const express = require('express');
const path = require('path');
const axios = require('axios');
const bp = require('body-parser');
const app = express();
const port = 3002;
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/listings', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var helper = function() {
    return Math.floor((Math.random() * 9999999) + 1);
  };
  axios.get(`http://localhost:3003/pageload?listid=${helper()}&userid=none`)
  .then(function(response) {
    if (response.data) {
      res.status(200).send(response.data);
    }
  })
  .catch(function(error) {
    if (error !== undefined) {
      res.status(200).send(error);
    }
  });
})

app.listen(port, () => console.log(`App listening on port ${port}`));