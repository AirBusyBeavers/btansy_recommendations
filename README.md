LEGACY API:

SCHEMA:
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

**************************

POSTGRES API:

SCHEMA:
  Table Listings {
    id integer [pk, unique, increment]
    title varchar(255)
    price integer
    type varchar(255)
    beds integer
    stars integer
    review integer
    owner integer [ref: < User.id]
  }
  Table Images {
    id integer [pk, unique, increment]
    url varhar(255)
    listId integer [ref: < Listings.id]
  }
  Table Recommendations {
    id integer [pk, unique, increment]
    primaryListId integer [ref: < Listings.id]
    secondaryListId integer [ref: < Listings.id]
  }
  Table User {
    id integer [pk, unique, increment]
    listingId integer [ref: < Listings.id]
    liked boolean
    plus boolean
  }

CREATE:

Endpoint: POST /listing
request body data: {title: string, price: int, type: string, beds: int, stars: int, reviews: int, owner: int}
response: response code 200 or 400

Endpoint: POST /image
request body data: {url: string, listId: int}
response: response code 200 or 400

Endpoint: POST /recommendation
request body data: {primaryListId: int, secondaryListId: int}
response: response code 200 or 400

Endpoint: POST /user
request body data: {listId: string, liked: boolean, plus: boolean}
response: response code 200 or 400

READ:

Endpoint: GET /pageload?listid=123
request body data: none
response: all data relevant to the given list id

Endpoint: GET /listing?id=123
request body data: none
response: listing data

Endpoint: GET /recommendation?id=123
request body data: none
response: recommendation data

Endpoint: GET /image?id=123
request body data: none
response: image data

Endpoint: GET /user?id=123
request body data: none
response: user data

UPDATE:

Endpoint: PUT /listing?id=123
request body data: {title: string, price: int, type: string, beds: int, stars: int, reviews: int, owner: int}
response: response code 200 or 400

Endpoint: PUT /image?id=123
request body data: {url: string, listId: int}
response: response code 200 or 400

Endpoint: PUT /recommendation?id=123
request body data: {primaryListId: int, secondaryListId: int}
response: response code 200 or 400

Endpoint: PUT /user?id=123
request body data: {listId: string, liked: boolean, plus: boolean}
response: response code 200 or 400

DELETE:

Endpoint: DELETE /listing?id=123
request body data: none
response: response code 200 or 400

Endpoint: DELETE /recommendation?id=123
request body data: none
response: response code 200 or 400

Endpoint: DELETE /image?id=123
request body data: none
response: response code 200 or 400

Endpoint: DELETE /user?id=123
request body data: none
response: response code 200 or 400

*************************

CASSANDRA API

SCHEMA: 
Table Monolith {
  listId: int
  listPrise: int
  listType: string
  recListId: int
  recNumOfStars: int
  imgId: int
  imgUrl: string
  userId: int
  like: boolean
  plus: boolean
}

CREATE:

Endpoint: POST /listing
request body data: {title: string, price: int, type: string, beds: int, stars: int, reviews: int, owner: int}
response: response code 200 or 400

Endpoint: POST /image
request body data: {url: string, listId: int}
response: response code 200 or 400

Endpoint: POST /recommendation
request body data: {primaryListId: int, secondaryListId: int}
response: response code 200 or 400

Endpoint: POST /user
request body data: {listId: string, liked: boolean, plus: boolean}
response: response code 200 or 400

READ:

Endpoint: GET /pageload?listid=123
request body data: none
response: all data relevant to the given list id

Endpoint: GET /listing?id=123
request body data: none
response: listing data

Endpoint: GET /recommendation?id=123
request body data: none
response: recommendation data

Endpoint: GET /image?id=123
request body data: none
response: image data

Endpoint: GET /user?id=123
request body data: none
response: user data

UPDATE:

Endpoint: PUT /listing?id=123
request body data: {title: string, price: int, type: string, beds: int, stars: int, reviews: int, owner: int}
response: response code 200 or 400

Endpoint: PUT /image?id=123
request body data: {url: string, listId: int}
response: response code 200 or 400

Endpoint: PUT /recommendation?id=123
request body data: {primaryListId: int, secondaryListId: int}
response: response code 200 or 400

Endpoint: PUT /user?id=123
request body data: {listId: string, liked: boolean, plus: boolean}
response: response code 200 or 400

DELETE:

Endpoint: DELETE /listing?id=123
request body data: none
response: response code 200 or 400

Endpoint: DELETE /recommendation?id=123
request body data: none
response: response code 200 or 400

Endpoint: DELETE /image?id=123
request body data: none
response: response code 200 or 400

Endpoint: DELETE /user?id=123
request body data: none
response: response code 200 or 400