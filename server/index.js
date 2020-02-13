const express = require('express');
const path = require('path');
// const {getListing} = require('../database/db.js');
const {getAllListings} = require('../database/db.js');
const {getListingById} = require('../database/db.js');
const {createListing} = require('../database/db.js');

//Body Parser
const bp = require('body-parser');

const app = express();
const port = 3002;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// parse application/x-www-form-urlencoded
app.use(bp.urlencoded({ extended: false }));
// parse application/json
app.use(bp.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

// handler for get requests for all listings
app.get('/listings', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    getAllListings((error, listingsArr) => {
        if (error) {
            console.log(error);
            res.status(500).end();
        } else {
            console.log("get request is successful");
            res.status(200).send(listingsArr);
        }
    })
})

//CRUD FOR SDC
// Create
app.post('/crud', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  createListing((err, data) => {
    if (err) {
      console.log(error);
      res.status(500).send(error);
    } else {
      console.log("post/create request is successful");
      res.status(200).send(data);
    }
  })
})
// Read expects ?id=[num]
app.get('/crud', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  getAllListings((err, data) => {
    if (err) {
      console.log(error);
      res.status(500).end();
    } else {
      console.log("get request is successful");
      res.status(200).send(data);
    }
  })
})
//Update
app.put('/crud', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  updateListing(req.body.data.conditions, req.body.data.update, (err, data) => {
    if (err) {
      console.log(error);
      res.status(500).end();
    } else {
      console.log("get request is successful");
      res.status(200).send(data);
    }
  })
})
// Delete requirs an /?id=[num]
app.delete('/crud', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  deleteListing(req.query.id, (err, data) => {
    if (err) {
      console.log(error);
      res.status(500).end();
    } else {
      console.log("get request is successful");
      res.status(200).send(data);
    }
  })
})

// handler for get requests for specific id
// app.get('/listings/:listingId', (req, res) => {
//     console.log("req.params", req.params);
//     const id = req.params;
//     getListing(id, (error, listingObject) => {
//         if (error) {
//             res.status(500).end();
//             console.log("error")
//         } else {
//             res.status(200).send(listingObject);
//             console.log("recommendations", listingObject.recommendations)
//         }
//     }) 
// })

app.listen(port, () => console.log(`App listening on port ${port}`));