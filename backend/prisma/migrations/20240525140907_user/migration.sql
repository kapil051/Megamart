/*
  Warnings:

  - You are about to drop the column `firstName` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Product` table. All the data in the column will be lost.
  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageURL` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Product_username_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "password",
DROP COLUMN "username",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "imageURL" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;
