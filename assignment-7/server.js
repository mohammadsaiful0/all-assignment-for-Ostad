const express = require('express');
const mongoose = require('mongoose');

// Connect to the MongoDB Atlas cluster
mongoose.connect('mongodb+srv://mohammadsaiful0:mohammadsaiful06251@saifulbooks.fhyarby.mongodb.net/BoosStore?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

// Other app configurations and middleware

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
