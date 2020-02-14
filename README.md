Legacy API guide:

Schema:
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
});

CREATE:
Endpoint: POST http://localhost:3002/crud
Data: none

READ:
Endpoint: GET http://localhost:3002/crud
Data: none

UPDATE:
Endpoint: PUT http://localhost:3002/crud.
Body: {
  conditions: {
    key: value
  }
  update: {
    key: value
  }
}

DELETE:
Endpoint: DELETE http://localhost:3002/crud?id=[ID]
Data: none. Send ID on the id parameter.

***

Postgres API:
Schema:
  Listings: ID(int), price(int), type(string), numOfBeds(int)
  Recommendations: ID(int), title(string), numOfStars(int), likedSatus(boolean), listID(foriegn key), numOfReviews(int)
  Images: ID(int), url(string), recId(foriegn key)

Create:
Endpoint: POST http://localhost:3002/listing/
Data: {price: int, type: string, numofbeds: int}
Endpoint: POST http://localhost:3002/recommendation/
Data: {title: string, numOfStars: int, likedStatus: boolean, listId: string, numOfReviews: int, numOfReviews(int)}
Endpoint: POST http://localhost:3002/image/
Data: {url: string, recId: string}

Read:
Send without id parameter to get all.
Endpoint: GET http://localhost:3002/listing?id=123
Data: none
Endpoint: GET http://localhost:3002/recommendation?id=123
Data: none
Endpoint: GET http://localhost:3002/image?id=123
Data: none

Update:
ID parameter is required.
Endpoint: PUT http://localhost:3002/listing?id=123.
Body: {price: int, type: string, numofbeds: int} 
Endpoint: PUT http://localhost:3002/recommendation?id=123.
Body: {title: string, numOfStars: int, likedStatus: boolean, listId: string, numOfReviews(int)}
Endpoint: POST http://localhost:3002/image?id=123
Data: {url: string, redId: string}

Delete
Endpoint: GET http://localhost:3002/listing?id=123
Data: none
Endpoint: GET http://localhost:3002/recommendation?id=123
Data: none
Endpoint: GET http://localhost:3002/image?id=123
Data: none

***

Cassandra Schema: listId, listPrice, listType, recId, recType, recNumOfStars, recLikedStatus, recPlusStatus, imgId, imgUrl

Create:
Endpoint: POST http://localhost:3002/listing/
Data: {price: int, type: string, numofbeds: int}
Endpoint: POST http://localhost:3002/recommendation/
Data: {title: string, numOfStars: int, likedStatus: boolean, listId: string, numOfReviews: int, numOfReviews(int)}
Endpoint: POST http://localhost:3002/image/
Data: {url: string, recId: string}

Read:
Send without id parameter to get all.
Endpoint: GET http://localhost:3002/listing?id=123
Data: none
Endpoint: GET http://localhost:3002/recommendation?id=123
Data: none
Endpoint: GET http://localhost:3002/image?id=123
Data: none

Update:
ID parameter is required.
Endpoint: PUT http://localhost:3002/listing?id=123.
Body: {price: int, type: string, numofbeds: int} 
Endpoint: PUT http://localhost:3002/recommendation?id=123.
Body: {title: string, numOfStars: int, likedStatus: boolean, listId: string, numOfReviews(int)}
Endpoint: POST http://localhost:3002/image?id=123
Data: {url: string, redId: string}

Delete
Endpoint: GET http://localhost:3002/listing?id=123
Data: none
Endpoint: GET http://localhost:3002/recommendation?id=123
Data: none
Endpoint: GET http://localhost:3002/image?id=123
Data: none