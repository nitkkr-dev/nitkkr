import { populateDepartments } from './server/sample-data/departments';

const populate = async () => {
  await populateDepartments();
};

populate();
