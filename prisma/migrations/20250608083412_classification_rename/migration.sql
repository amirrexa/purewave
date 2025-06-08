/*
  Warnings:

  - You are about to drop the `ProductClassification` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_classificationId_fkey";

-- DropTable
DROP TABLE "ProductClassification";

-- CreateTable
CREATE TABLE "Classification" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Classification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Classification_name_key" ON "Classification"("name");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_classificationId_fkey" FOREIGN KEY ("classificationId") REFERENCES "Classification"("id") ON DELETE SET NULL ON UPDATE CASCADE;
