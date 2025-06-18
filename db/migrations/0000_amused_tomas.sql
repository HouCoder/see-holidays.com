CREATE TABLE `country` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`flag` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `country_name_unique` ON `country` (`name`);--> statement-breakpoint
CREATE TABLE `date` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`holiday_id` integer NOT NULL,
	`start_date` text NOT NULL,
	`end_date` text,
	`is_working_day` integer,
	FOREIGN KEY (`holiday_id`) REFERENCES `holiday`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `holiday` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`region_id` integer NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`link` text,
	FOREIGN KEY (`region_id`) REFERENCES `region`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `region` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`country_id` integer NOT NULL,
	FOREIGN KEY (`country_id`) REFERENCES `country`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `region_name_unique` ON `region` (`name`);