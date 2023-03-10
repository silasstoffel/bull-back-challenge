import dotenv from "dotenv";
dotenv.config();

import { AppDataSource } from "./data-source";

export default AppDataSource;

// npx typeorm migration:generate ./src/shared/infra/database/migrations/CreateAccountTable -d dist/shared/infra/database/typeorm/migration.config.js
// npx typeorm migration:generate ./src/shared/infra/database/migrations/ChangeHashFromAccountTable -d dist/shared/infra/database/typeorm/migration.config.js
