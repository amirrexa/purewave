-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "classificationId" TEXT;

-- CreateTable
CREATE TABLE "ProductClassification" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductClassification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductClassification_name_key" ON "ProductClassification"("name");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_classificationId_fkey" FOREIGN KEY ("classificationId") REFERENCES "ProductClassification"("id") ON DELETE SET NULL ON UPDATE CASCADE;
