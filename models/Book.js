const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const bookSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4, unique: true },
  volumeInfo: {
    title: { type: String, required: [true,'Please Add field title'] },
    publishedDate: { type: String, required: [true,'Please Add field publish date'] },
    pageCount: { type: Number, required: [true,'Please Add field page count']},
    imageLinks: {
      smallThumbnail: { type: String},
      thumbnail: { type: String, required: [true,'Please Add field image'] },
    },
    language: { type: String, required: [true,'Please Add field language'] },
    description: { type: String , required: [true,'Please Add field description']},
    publisher: { type: String, required: [true,'Please Add field publisher'] },
    authors: [{ type: String, required: [true,'Please Add field authors'] }],
    categories: [{ type: String, required: [true,'Please Add field categories'] }]
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
