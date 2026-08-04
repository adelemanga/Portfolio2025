import { db } from "./db";
import { Avis } from "./entities/Avis";

const advices: Partial<Avis>[] = [];

const seedDatabase = async () => {
  await db.initialize();
  if (advices.length > 0) {
    await db.getRepository(Avis).save(advices);
  }

  console.log("No demo reviews were inserted.");
  await db.destroy();
};

seedDatabase().catch(console.error);
