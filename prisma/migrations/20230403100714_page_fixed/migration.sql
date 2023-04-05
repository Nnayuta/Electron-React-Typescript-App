/*
  Warnings:

  - You are about to drop the column `permLevelID` on the `Pages` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_PagesToPermLevel" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PagesToPermLevel_A_fkey" FOREIGN KEY ("A") REFERENCES "Pages" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PagesToPermLevel_B_fkey" FOREIGN KEY ("B") REFERENCES "PermLevel" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Pages" ("id", "name") SELECT "id", "name" FROM "Pages";
DROP TABLE "Pages";
ALTER TABLE "new_Pages" RENAME TO "Pages";
CREATE UNIQUE INDEX "Pages_name_key" ON "Pages"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_PagesToPermLevel_AB_unique" ON "_PagesToPermLevel"("A", "B");

-- CreateIndex
CREATE INDEX "_PagesToPermLevel_B_index" ON "_PagesToPermLevel"("B");
