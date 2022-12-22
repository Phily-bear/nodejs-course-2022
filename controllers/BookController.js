const { ObjectId } = require("mongodb");
const connect = require("../database/db");
const Book = require("../models/Book");
exports.index = async (req, res) => {
  // const db = await connect();
  // const books = await db.collection("book").find().toArray();
  const books = await Book.find();
  res.json(books);
};

exports.create = async (req, res) => {
  try {
    await Book.create(req.body);
    res.status(201).json({ data: "Book is stored" });
  } catch (error) {
    res.json(error);
  }
};

exports.getById = async (req, res) => {
  let _id = ObjectId(req.params.id);
  const book = await Book.find({ _id });
  res.json(book);
};

exports.update = async (req, res) => {
  let _id = ObjectId(req.params.id);
  await Book.updateOne({ _id }, { $set: req.body });
  res.json({ data: "book is updated" });
};

exports.delete = async (req, res) => {
  let _id = ObjectId(req.params.id);
  await Book.deleteOne({ _id });
  res.status(204).send(`book is deleted`);
};
