CREATE TABLE IF NOT EXISTS "departments" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(64) NOT NULL,
	"alias" char(2) NOT NULL,
	"type" varchar NOT NULL,
	"about" text NOT NULL,
	"laboratories" text,
	"photos" text[] DEFAULT '{}' NOT NULL,
	"vision" text NOT NULL,
	"mission" text NOT NULL
);
