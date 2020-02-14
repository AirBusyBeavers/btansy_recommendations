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
  Images: ID(int), url(string), recID(foriegn key)

Create:
Endpoint: POST http://localhost:3002/create/
Data: {create: 'listing', price: int, type: string, numofbeds: int}
Endpoint: POST http://localhost:3002/create/
Data: {create: 'recommendation', title: string, numOfStars: int, likedStatus: boolean, listId: string, numOfReviews: int, numOfReviews(int)}
Endpoint: POST http://localhost:3002/create/
Data: {create: 'image', url: string, recId: string}

Read:
Endpoint: GET http://localhost:3002/read
Data: {listId: string}
Endpoint: GET http://localhost:3002/read
Data: {redId: string}
Endpoint: GET http://localhost:3002/read
Data: {imgId: string}

Update:
Endpoint: PUT http://localhost:3002/update.
Body: {listId: string, price: int, type: string, numofbeds: int} 
Endpoint: PUT http://localhost:3002/update.
Body: {recId: string, title: string, numOfStars: int, likedStatus: boolean, listId: string, numOfReviews(int)}
Endpoint: POST http://localhost:3002/update
Data: {imgId: string, url: string, redId: string}

Delete
Endpoint: GET http://localhost:3002/delete
Data: {listId: string}
Endpoint: GET http://localhost:3002/delete
Data: {redId: string}
Endpoint: GET http://localhost:3002/delete
Data: {imgId: string}

***

Cassandra Schema: listId, listPrice, listType, recId, recType, recNumOfStars, recLikedStatus, recPlusStatus, imgId, imgUrl

Create:
Endpoint: POST http://localhost:3002/create/
Data: {create: 'listing', price: int, type: string, numofbeds: int}
Endpoint: POST http://localhost:3002/create/
Data: {create: 'recommendation', title: string, numOfStars: int, likedStatus: boolean, listId: string, numOfReviews: int, numOfReviews(int)}
Endpoint: POST http://localhost:3002/create/
Data: {create: 'image', url: string, recId: string}

Read:
Endpoint: GET http://localhost:3002/read
Data: {listId: string}
Endpoint: GET http://localhost:3002/read
Data: {redId: string}
Endpoint: GET http://localhost:3002/read
Data: {imgId: string}

Update:
Endpoint: PUT http://localhost:3002/update.
Body: {listId: string, price: int, type: string, numofbeds: int} 
Endpoint: PUT http://localhost:3002/update.
Body: {recId: string, title: string, numOfStars: int, likedStatus: boolean, listId: string, numOfReviews(int)}
Endpoint: POST http://localhost:3002/update
Data: {imgId: string, url: string, redId: string}

Delete
Endpoint: GET http://localhost:3002/delete
Data: {listId: string}
Endpoint: GET http://localhost:3002/delete
Data: {redId: string}
Endpoint: GET http://localhost:3002/delete
Data: {imgId: string}