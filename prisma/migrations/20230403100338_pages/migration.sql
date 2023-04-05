-- CreateTable
CREATE TABLE "Pages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "permLevelID" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "Pages_permLevelID_fkey" FOREIGN KEY ("permLevelID") REFERENCES "PermLevel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Pages_name_key" ON "Pages"("name");
