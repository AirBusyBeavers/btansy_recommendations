CREATE TABLE "Listings" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "title" varchar(255),
  "price" integer,
  "type" varchar(255),
  "beds" integer,
  "stars" integer,
  "review" integer
);

CREATE TABLE "Images" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "url" varchar(255),
  "listId" integer
);

CREATE TABLE "Recommendations" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "primaryListId" integer,
  "secondaryListId" integer
);

CREATE TABLE "UserOpinion" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "listingId" integer,
  "liked" boolean,
  "plus" boolean
);

ALTER TABLE "Listings" ADD FOREIGN KEY ("id") REFERENCES "Images" ("listId");

ALTER TABLE "Listings" ADD FOREIGN KEY ("id") REFERENCES "Recommendations" ("primaryListId");

ALTER TABLE "Listings" ADD FOREIGN KEY ("id") REFERENCES "Recommendations" ("secondaryListId");

ALTER TABLE "Listings" ADD FOREIGN KEY ("id") REFERENCES "UserOpinion" ("listingId");
