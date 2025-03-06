import { DataSource } from "typeorm";

import { Contact } from "./entities/Contact";
import { Avis } from "./entities/Avis";

export const db = new DataSource({
  type: "sqlite",
  database: "./countries.sqlite",
  synchronize: true,
  entities: [ Contact, Avis],
});
