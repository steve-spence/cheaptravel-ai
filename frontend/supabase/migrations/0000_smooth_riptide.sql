CREATE TABLE "destinations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"country" varchar(100) NOT NULL,
	"description" text NOT NULL,
	"image" varchar(255),
	"created_at" timestamp DEFAULT now() NOT NULL
);
