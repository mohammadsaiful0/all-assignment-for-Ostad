const express = require('express');
const app = express();


const bodyParser = require('body-parser');

app.use(bodyParser.json());

const books = [];


// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
// Serve the script.js for Fetch the book list
app.get('/script.js', (req, res) => {
  res.set('Content-Type', 'application/javascript');
  res.sendFile(__dirname + '/script.js');
});

// Serve the style.css file
app.get('/style.css', (req, res) => {
  res.set('Content-Type', 'text/css');
  res.sendFile(__dirname + '/style.css');
});

// Get the list of books
app.get('/books', (req, res) => {
  res.json(books);
});


// Add a new book
app.post('/books', (req, res) => {
  const { title, author, publishedDate } = req.body;
  const id = Math.floor(Math.random() * 100000);
  const book = { id, title, author, publishedDate };
  books.push(book);
  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify(book, null, 2));
});


// Delete a book
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(book => book.id === id);
  if (index !== -1) {
    books.splice(index, 1);
    res.json({ message: 'Book deleted successfully.' });
  } else {
    res.status(404).json({ message: 'Book not found.' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
