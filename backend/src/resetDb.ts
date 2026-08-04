import { db } from "../src/db";

async function clearDb() {
  const runner = db.createQueryRunner();
  await Promise.all(
    db.entityMetadatas.map(async (entity: { tableName: any }) =>
      runner.query(`DROP TABLE IF EXISTS ${entity.tableName}`)
    )
  );
  await db.synchronize();
}

async function main() {
  await db.initialize();
  await clearDb();

  console.log("Database reset completed without demo reviews.");
}

main();
