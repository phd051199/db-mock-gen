/*
  Warnings:

  - You are about to drop the column `displayName` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `displayName`,
    ADD COLUMN `display_name` MEDIUMTEXT NULL;
