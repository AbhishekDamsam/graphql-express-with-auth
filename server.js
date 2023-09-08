import { APP_PORT } from "./config.js";
import { setupServer } from "./src/app.js";
import { initDatabase } from "./src/database.js";

const db = await initDatabase(); // In-memory data store. Ideally db context after successful connection.

const app = await setupServer(db);

app.listen(APP_PORT, () => console.log(`Server running on port ${APP_PORT}`));