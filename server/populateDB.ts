import { populateDepartments } from "./sample-data/departments";
import { migrateDB } from "./migrate";

const populate = async () => {
    await migrateDB();
    await populateDepartments();
}

populate();