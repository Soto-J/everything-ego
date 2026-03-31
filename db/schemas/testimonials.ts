import { sql } from "drizzle-orm";
import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";

export const testimonialSubmission = sqliteTable("testimonials_submission", {
  id: text("id").primaryKey(),

  name: text("name").notNull(),
  email: text("email").notNull(),
  imageUrl: text("image_url").notNull(),
  imageKey: text("image_key").notNull(),
  status: text("status", ["pending", "approved", "rejected"]),

  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .notNull(),
});
