import { Router } from '../../deps.ts';

const router = new Router();

router.get("/", (ctx) => {
    ctx.response.body = "Get RESPONSE";
    // consoe.log('hello')
    // console.log(ctx.response.body);
});

router.post("/", async (ctx) => {
    const resp =  await ctx.request.body().value
    ctx.response.body = "Post RESPONSE: " + JSON.stringify(resp);
    // console.log(ctx.response.body);
});

router.get("/books", (ctx) => {
    ctx.response.body = "Get RESPONSE to /books";
    // console.log(ctx.response.body);
});

router.patch("/books/:id", (ctx) => {
    ctx.response.body = `Patch RESPONSE to /books/${ctx.params.id}`;
    // console.log(ctx.response.body);
});

router.delete("/books/:id", (ctx) => {
    ctx.response.body = `Delete RESPONSE to /books/${ctx.params.id}`;
    // console.log(ctx.response.body);
});

export default router;