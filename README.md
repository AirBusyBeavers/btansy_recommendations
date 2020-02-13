API guide:

CREATE:
URL based API. Expects a POST request to http://localhost:3002/crud

example: curl -X POST http://localhost:3002/crud

READ:

URL based API. Expects a GET request to http://localhost:3002/crud

example: curl http://localhost:3002/crud

UPDATE:

Expects a PUT request. This requires that data be sent in the form of an object or an array of objects. Requests should be sent to http://localhost:3002/crud.

example using jquery:
$.ajax({
  method: "PUT",
  url: "http://localhost:3002/crud",
  data: { conditions: ({} || [{}]), update: ({} || [{}]) }
})

Please adhere to the data schema:
ListingSchema = new Schema({
    listingId: Number,
    recommendations: [ {
        recommendationId: Number, 
        title: {type: String},
        pricePerNight: {type: String},
        images: {type: [String]},
        typeOfListing: {type: String},
        numOfBeds: {type: Number},
        numOfStars: {type: Number},
        numOfReviews: {type: Number},
        likedStatus: {type: Boolean},
        plusStatus: {type: Boolean}
    } ]

DELETE:

URL based API. Expects a DELETE request to http://localhost:3002/crud with an id parameter that corresponds to the __id value on the listing object

example: curl http://localhost:3002/crud?id=[ID]