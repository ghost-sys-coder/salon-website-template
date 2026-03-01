import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const clientMessagesTable = pgTable("client_messages", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    phone: text("phone_number"),
    message: text("message").notNull()
});
