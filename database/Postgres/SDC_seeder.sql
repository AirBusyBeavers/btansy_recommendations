CREATE TABLE "Listings" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "title" varchar(255),
  "price" integer,
  "type" varchar(255),
  "beds" integer,
  "stars" integer,
  "review" integer,
  "owner" integer
);

CREATE TABLE "Images" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "url" varhar(255),
  "listId" integer
);

CREATE TABLE "Recommendations" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "primaryListId" integer,
  "secondaryListId" integer
);

CREATE TABLE "User" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "listingId" integer,
  "liked" boolean,
  "plus" boolean
);

ALTER TABLE "User" ADD FOREIGN KEY ("id") REFERENCES "Listings" ("owner");

ALTER TABLE "Listings" ADD FOREIGN KEY ("id") REFERENCES "Images" ("listId");

ALTER TABLE "Listings" ADD FOREIGN KEY ("id") REFERENCES "Recommendations" ("primaryListId");

ALTER TABLE "Listings" ADD FOREIGN KEY ("id") REFERENCES "Recommendations" ("secondaryListId");

ALTER TABLE "Listings" ADD FOREIGN KEY ("id") REFERENCES "User" ("listingId");
