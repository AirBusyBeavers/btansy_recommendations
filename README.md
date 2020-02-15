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

Endpoint: POST /listings
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

Endpoint: POST /images
request body data: {
  url: string, 
  listId: int
}
response: response code 200 or 400

Endpoint: POST /recommendations
request body data: {
  primaryListId: int, 
  secondaryListId: int
}
response: response code 200 or 400

Endpoint: POST /opinions
request body data: {
  userId: int,
  listId: int, 
  liked: boolean
}
response: response code 200 or 400

READ:

Endpoint: GET /pageload?listid=123
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

Endpoint: GET /listings?id=123
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

Endpoint: GET /recommendations?primaryListId=123
request body data: none
response: {
  id: int,
  primaryListId: int, 
  secondaryListId: int
}

Endpoint: GET /images?listId=123
request body data: none
response: {
  id: int
  listId: int
  url: string,
}

Endpoint: GET /opinions?listId=123
request body data: none
response: {
  userId: int,
  listId: int, 
  liked: boolean
}

UPDATE:

Endpoint: PUT /listings?id=123
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

Endpoint: PUT /images?id=123
request body data: {
  listId: int
  url: string,
}
response: response code 200 or 400

Endpoint: PUT /recommendations?id=123
request body data: {
  primaryListId: int, 
  secondaryListId: int
}
response: response code 200 or 400

Endpoint: PUT /optinions?id=123
request body data: {
  userId: int,
  listId: int, 
  liked: boolean
}
response: response code 200 or 400

DELETE:

Endpoint: DELETE /listings?id=123
request body data: none
response: response code 200 or 400

Endpoint: DELETE /recommendations?id=123
request body data: none
response: response code 200 or 400

Endpoint: DELETE /images?id=123
request body data: none
response: response code 200 or 400

Endpoint: DELETE /opinions?id=123
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

Endpoint: POST /listings
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

Endpoint: POST /images
request body data: {
  url: string, 
  listId: int
}
response: response code 200 or 400

Endpoint: POST /recommendations
request body data: {
  primaryListId: int, 
  secondaryListId: int
}
response: response code 200 or 400

Endpoint: POST /opinions
request body data: {
  userId: int,
  listId: int, 
  liked: boolean
}
response: response code 200 or 400

READ:

Endpoint: GET /pageload?listid=123
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

Endpoint: GET /listings?id=123
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

Endpoint: GET /recommendations?primaryListId=123
request body data: none
response: {
  id: int,
  primaryListId: int, 
  secondaryListId: int
}

Endpoint: GET /images?listId=123
request body data: none
response: {
  id: int
  listId: int
  url: string,
}

Endpoint: GET /opinions?listId=123
request body data: none
response: {
  userId: int,
  listId: int, 
  liked: boolean
}

UPDATE:

Endpoint: PUT /listings?id=123
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

Endpoint: PUT /images?id=123
request body data: {
  listId: int
  url: string,
}
response: response code 200 or 400

Endpoint: PUT /recommendations?id=123
request body data: {
  primaryListId: int, 
  secondaryListId: int
}
response: response code 200 or 400

Endpoint: PUT /optinions?id=123
request body data: {
  userId: int,
  listId: int, 
  liked: boolean
}
response: response code 200 or 400

DELETE:

Endpoint: DELETE /listings?id=123
request body data: none
response: response code 200 or 400

Endpoint: DELETE /recommendations?id=123
request body data: none
response: response code 200 or 400

Endpoint: DELETE /images?id=123
request body data: none
response: response code 200 or 400

Endpoint: DELETE /opinions?id=123
request body data: none
response: response code 200 or 400