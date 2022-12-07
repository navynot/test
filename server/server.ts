import { config } from "https://deno.land/x/dotenv/mod.ts";

import { Application } from '../deps.ts';
import router from './routes/router.ts';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({port:config().PORT});