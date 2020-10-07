//add Book
const Book = require("../models/book");
exports.addBook = async (req, res) => {
  try {
    const newBook = new Book({ ...req.body });
    const book = await newBook.save();
    return res.status(201).send(book);
  } catch (error) {
    return res.status(500).send({ error });
  }
};
//edit Book
exports.editBook = async (req, res) => {
  try {
    const { _id } = req.params;
    await Book.updateOne({ _id }, { $set: { ...req.body } });
    return res.status(200).send({ msg: "Book Updated" });
  } catch (error) {}
};

//delete Book
exports.deleteBook = async (req, res) => {
  try {
    const { _id } = req.params;
    await Book.deleteOne({ _id });
    return res.status(200).send({ msg: "Book Deleted" });
  } catch (error) {
    return res.status(500).send({ error });
  }
};
//get Books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).send(books);
  } catch (error) {
    return res.status(400).send({ error });
  }
};
//get OneBook
exports.getOneBook = async (req, res) => {
  try {
    const { _id } = req.params;
    const book = await Book.findOne({ _id });
    return res.status(200).send(book);
  } catch (error) {
    return res.status(400).send({ error });
  }
};
