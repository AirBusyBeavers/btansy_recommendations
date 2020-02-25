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
    bedCount integer
    avgStars integer
    reviewCount integer
    ownerUserId integer
    plus boolean
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
  Table Opinions {
    id integer [pk, unique, increment]
    userId integer
    listingId integer [ref: < Listings.id]
    liked boolean
  }

CREATE:

Endpoint: POST /psql/listings
request body data: {
  title: string, 
  price: int, 
  type: string, 
  bedCount: int, 
  avgStars: int, 
  reviewCount: int, 
  ownerUserId: int,
  plus: boolean
}
response: response code 200 or 400

Endpoint: POST /psql/images
request body data: {
  url: string, 
  listId: int
}
response: response code 200 or 400

Endpoint: POST /psql/recommendations
request body data: {
  primaryListId: int, 
  secondaryListId: int
}
response: response code 200 or 400

Endpoint: POST /psql/opinions
request body data: {
  userId: int,
  listId: int, 
  liked: boolean
}
response: response code 200 or 400

READ:

Endpoint: GET /psql/pageload
request body data: { listid: 12341234, userid: 12341 || 'none' }
response: {
  id: int
  title: string, 
  price: int, 
  type: string, 
  bedCount: int, 
  avgStars: int, 
  reviewCount: int, 
  ownerUserId: int,
  plus:boolean,
  imgId: int,
  url: string,
  recId: int,
  primaryListId: int, 
  secondaryListId: int,
  userId: int,
  liked: boolean
}

Endpoint: GET /psql/listings?id=123
request body data: none
response: {
  id: int,
  title: string, 
  price: int, 
  type: string, 
  bedCount: int, 
  avgStars: int, 
  reviewCount: int, 
  ownerUserId: int,
  plus: boolean
}

Endpoint: GET /psql/recommendations?primaryListId=123
request body data: none
response: {
  id: int,
  primaryListId: int, 
  secondaryListId: int
}

Endpoint: GET /psql/images?listId=123
request body data: none
response: {
  id: int
  listId: int
  url: string,
}

Endpoint: GET /psql/opinions?listId=123
request body data: none
response: {
  userId: int,
  listId: int, 
  liked: boolean
}

UPDATE:

Endpoint: PUT /psql/listings?id=123
request body data: {
  title: string, 
  price: int, 
  type: string, 
  bedCount: int, 
  avgStars: int, 
  reviewCount: int, 
  ownerUserId: int,
  plus: boolean
}
response: response code 200 or 400

Endpoint: PUT /psql/images?id=123
request body data: {
  listId: int
  url: string,
}
response: response code 200 or 400

Endpoint: PUT /psql/recommendations?id=123
request body data: {
  primaryListId: int, 
  secondaryListId: int
}
response: response code 200 or 400

Endpoint: PUT /psql/optinions?id=123
request body data: {
  userId: int,
  listId: int, 
  liked: boolean
}
response: response code 200 or 400

DELETE:

Endpoint: DELETE /psql/listings?id=123
request body data: none
response: response code 200 or 400

Endpoint: DELETE /psql/recommendations?id=123
request body data: none
response: response code 200 or 400

Endpoint: DELETE /psql/images?id=123
request body data: none
response: response code 200 or 400

Endpoint: DELETE /psql/opinions?id=123
request body data: none
response: response code 200 or 400

*************************

CASSANDRA API

SCHEMA: 
Table RecommendationPageLoad {
  listId: int
  listPrice: int
  listType: string
  plus: boolean
  recListId: int
  recNumOfStars: int
  imgId: int
  imgUrl: string
  userId: int
  like: boolean
}

CREATE:

Endpoint: POST /cassandra/listings
request body data: {
  title: string, 
  price: int, 
  type: string, 
  bedCount: int, 
  avgStars: int, 
  reviewCount: int, 
  ownerUserId: int,
  plus: boolean
}
response: response code 200 or 400

Endpoint: POST /cassandra/images
request body data: {
  url: string, 
  listId: int
}
response: response code 200 or 400

Endpoint: POST /cassandra/recommendations
request body data: {
  primaryListId: int, 
  secondaryListId: int
}
response: response code 200 or 400

Endpoint: POST /cassandra/opinions
request body data: {
  userId: int,
  listId: int, 
  liked: boolean
}
response: response code 200 or 400

READ:

Endpoint: GET /cassandra/pageload?listid=123
request body data: none
response: {
  id: int
  title: string, 
  price: int, 
  type: string, 
  bedCount: int, 
  avgStars: int, 
  reviewCount: int, 
  ownerUserId: int,
  plus:boolean,
  imgId: int,
  url: string,
  recId: int,
  primaryListId: int, 
  secondaryListId: int,
  userId: int,
  liked: boolean
}

Endpoint: GET /cassandra/listings?id=123
request body data: none
response: {
  id: int,
  title: string, 
  price: int, 
  type: string, 
  bedCount: int, 
  avgStars: int, 
  reviewCount: int, 
  ownerUserId: int,
  plus: boolean
}

Endpoint: GET /cassandra/recommendations?primaryListId=123
request body data: none
response: {
  id: int,
  primaryListId: int, 
  secondaryListId: int
}

Endpoint: GET /cassandra/images?listId=123
request body data: none
response: {
  id: int
  listId: int
  url: string,
}

Endpoint: GET /cassandra/opinions?listId=123
request body data: none
response: {
  userId: int,
  listId: int, 
  liked: boolean
}

UPDATE:

Endpoint: PUT /cassandra/listings?id=123
request body data: {
  title: string, 
  price: int, 
  type: string, 
  bedCount: int, 
  avgStars: int, 
  reviewCount: int, 
  ownerUserId: int,
  plus: boolean
}
response: response code 200 or 400

Endpoint: PUT /cassandra/images?id=123
request body data: {
  listId: int
  url: string,
}
response: response code 200 or 400

Endpoint: PUT /cassandra/recommendations?id=123
request body data: {
  primaryListId: int, 
  secondaryListId: int
}
response: response code 200 or 400

Endpoint: PUT /cassandra/optinions?id=123
request body data: {
  userId: int,
  listId: int, 
  liked: boolean
}
response: response code 200 or 400

DELETE:

Endpoint: DELETE /cassandra/listings?id=123
request body data: none
response: response code 200 or 400

Endpoint: DELETE /cassandra/recommendations?id=123
request body data: none
response: response code 200 or 400

Endpoint: DELETE /cassandra/images?id=123
request body data: none
response: response code 200 or 400

Endpoint: DELETE /cassandra/opinions?id=123
request body data: none
response: response code 200 or 400