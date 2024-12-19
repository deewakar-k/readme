ALTER TABLE "experiences" RENAME COLUMN "year" TO "from";--> statement-breakpoint
ALTER TABLE "experiences" ADD COLUMN "to" integer;