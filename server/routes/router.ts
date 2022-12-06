import { Router } from '../../deps.ts';
import { bookController } from '../controllers/booksController.js';

const router = new Router();

router.get("/", bookController.getAllBooks, (ctx) => {
    return ctx.response.body;
});

router.post("/create", bookController.addBook, (ctx) => {
    return ctx.response.body;
});

router.get("/:_id", bookController.getBook, (ctx) => {
    return ctx.response.body;
});

router.patch("/:_id", bookController.getBook, (ctx) => {
    return ctx.response.body;
});

router.delete("/:_id", bookController.deleteBook, (ctx) => {
    return ctx.response.body;
});

export default router;