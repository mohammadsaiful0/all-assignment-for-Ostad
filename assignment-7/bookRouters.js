const express = require('express');
const router = express.Router();
const Book = require('./Book');

// Create a new book
router.post('/books', async (req, res) => {
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Retrieve all books
router.get('/books', async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Retrieve a specific book by ID
router.get('/books/:id', getBook, (req, res) => {
  res.json(res.book);
});

// Create a new book
router.post('/books', async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    publishedYear: req.body.publishedYear,
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a book by ID
router.put('/books/:id', getBook, async (req, res) => {
  if (req.body.title != null) {
    res.book.title = req.body.title;
  }
  if (req.body.author != null) {
    res.book.author = req.body.author;
  }
  if (req.body.description != null) {
    res.book.description = req.body.description;
  }
  if (req.body.publishedYear != null) {
    res.book.publishedYear = req.body.publishedYear;
  }

  try {
    const updatedBook = await res.book.save();
    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a book by ID
router.delete('/books/:id', getBook, async (req, res) => {
  try {
    await res.book.remove();
    res.json({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getBook(req, res, next) {
  try {
    const book = await Book.findById(req.params.id);
    if (book == null) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.book = book;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = router;
