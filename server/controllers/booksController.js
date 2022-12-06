import { bookModel } from "../models/bookModel.js";

export const bookController = {

  getAllBooks: async (ctx, next) => {
    const books = await bookModel.find({});
    const parsedBooks = JSON.parse(books);

    ctx.response.body = parsedBooks;
    return next();
},

getBook: async (ctx, next) => {
    const {_id} = req.params;
    const book = await bookModel.findOne({_id});
    const parsedBook = JSON.parse(book);

    ctx.response.body = parsedBook;
    return next();
},

addBook: async (ctx, next) => {
    const {title, author} = req.body;
    const book = await bookModel.create({title, author});

    ctx.response.body = book;
    return next();
},

updateBook: async (ctx, next) => {
    const {title, author} = req.body;
    const {_id} = req.params;

    const book = await bookModel.findOneAndUpdate({_id}, {title, author}, {new:true});
    const parsedBook = JSON.parse(book);

    ctx.response.body = parsedBook;
    return next();
},

deleteBook: async (ctx, next) => {
    const {_id} = req.params;

    const book = await bookModel.findOneAndDelete({_id});
    const parsedBook = JSON.parse(book);

    ctx.response.body = parsedBook;
    return next();
}
}