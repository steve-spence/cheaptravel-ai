import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const destinations = pgTable("destinations", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
    country: varchar("country", { length: 100 }).notNull(),
    description: text("description").notNull(),
    image: varchar("image", { length: 255 }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});
