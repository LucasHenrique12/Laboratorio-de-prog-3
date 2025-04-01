import { sqliteTable, text } from "drizzle-orm/sqlite-core";
export const DATABASE_NAME = "lab3db";
export const TABLENAME_PRODUCT = "product";

export const productTable = sqliteTable(TABLENAME_PRODUCT, {
  id: text().primaryKey(),
  name: text().notNull(),
  price: text().notNull(),
});
