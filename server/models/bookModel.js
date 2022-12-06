import mongoose from "npm:mongoose@^6.8";

await mongoose.connect('mongodb+srv://navynot:soloproject@cluster0.qc8zsms.mongodb.net/?retryWrites=true&w=majority', {
  dbName: 'OSP-books'
})
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log(err));

  const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true}
  });

  export const bookModel = mongoose.Model('book', bookSchema);

