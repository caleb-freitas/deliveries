/*
  Warnings:

  - You are about to drop the column `end_at` on the `deliveries` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "deliveries" DROP COLUMN "end_at",
ADD COLUMN     "finished_at" TIMESTAMP(3);
