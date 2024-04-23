ALTER TABLE "orders" ADD COLUMN "product_id" bigint;--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "quantity" numeric DEFAULT '1' NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "total_price" numeric NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "discount_applied" numeric DEFAULT '0' NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "customer_id" bigint;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "orders" ADD CONSTRAINT "orders_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "orders" ADD CONSTRAINT "orders_customer_id_people_id_fk" FOREIGN KEY ("customer_id") REFERENCES "people"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
