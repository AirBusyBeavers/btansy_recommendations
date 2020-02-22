CREATE TABLE "listings" (
  "id" serial PRIMARY KEY,
  "title" varchar(255),
  "price" integer,
  "type" varchar(255),
  "bed_count" integer,
  "avg_stars" integer,
  "review_count" integer,
  "owner_user_id" integer,
  "plus" boolean
);

CREATE TABLE "images" (
  "id" serial PRIMARY KEY,
  "url" varchar(255),
  "list_id" integer
);

CREATE TABLE "recommendations" (
  "id" serial PRIMARY KEY,
  "primary_list_id" integer,
  "secondary_list_id" integer
);

CREATE TABLE "opinions" (
  "id" serial PRIMARY KEY,
  "user_id" integer,
  "listing_id" integer,
  "liked" boolean
);

ALTER TABLE "images" ADD FOREIGN KEY ("list_id") REFERENCES "listings" ("id");

ALTER TABLE "recommendations" ADD FOREIGN KEY ("primary_list_id") REFERENCES "listings" ("id");

ALTER TABLE "recommendations" ADD FOREIGN KEY ("secondary_list_id") REFERENCES "listings" ("id");

ALTER TABLE "opinions" ADD FOREIGN KEY ("listing_id") REFERENCES "listings" ("id");