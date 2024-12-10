CREATE TABLE IF NOT EXISTS "contacts" (
	"id" text PRIMARY KEY NOT NULL,
	"institution" text NOT NULL,
	"degree" text NOT NULL,
	"user_id" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "education" (
	"id" text PRIMARY KEY NOT NULL,
	"institution" text NOT NULL,
	"year" integer,
	"degree" text NOT NULL,
	"description" text NOT NULL,
	"user_id" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "contacts" ADD CONSTRAINT "contacts_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "education" ADD CONSTRAINT "education_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
