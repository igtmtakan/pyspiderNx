-- CreateTable
CREATE TABLE "DebugProject" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "script" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ScriptHistory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "projectId" TEXT NOT NULL,
    CONSTRAINT "ScriptHistory_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "DebugProject" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DebugTask" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "taskId" TEXT NOT NULL,
    "project" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "process" JSONB NOT NULL,
    "sessionId" TEXT NOT NULL,
    CONSTRAINT "DebugTask_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "DebugSession" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DebugSession" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'STOPPED',
    "startedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" DATETIME,
    "data" JSONB,
    "projectId" TEXT,
    CONSTRAINT "DebugSession_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "DebugProject" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_DebugSession" ("data", "endedAt", "id", "startedAt", "status", "type") SELECT "data", "endedAt", "id", "startedAt", "status", "type" FROM "DebugSession";
DROP TABLE "DebugSession";
ALTER TABLE "new_DebugSession" RENAME TO "DebugSession";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "DebugProject_name_key" ON "DebugProject"("name");
