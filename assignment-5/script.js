const bookList = document.getElementById('book-list');
const addBookForm = document.getElementById('add-book-form');



function addBook(book) {
    const li = document.createElement('li');
    
 /*    // Create image element
    const img = document.createElement('img');
    img.src = book.image;
    img.alt = book.title;
    li.appendChild(img);
     */

    
    // Create title and author elements
    const title = document.createElement('h3');
    title.innerText = book.title;
    const author = document.createElement('p');
    author.innerText = `by ${book.author}`;
    const publishedDate=document.createElement('p');
    publishedDate.innerHTML=`${book.publishedDate}`;
    li.appendChild(title);
    li.appendChild(author);
    li.appendChild(publishedDate);
    
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', () => {
      fetch(`/books/${book.id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => {
          alert(data.message);
          li.remove();
        })
        .catch(error => {
          console.error(error);
          alert('An error occurred while deleting the book.');
        });
    });
    li.appendChild(deleteButton);
    
    bookList.appendChild(li);
  }
// Fetch the list of books and add them to the page
fetch('/books')
  .then(response => response.json())
  .then(data => {
    data.forEach(book => {
      addBook(book);
    });
  })
  .catch(error => {
    console.error(error);
    alert('An error occurred while fetching the book list.');
  });

// Handle the form submission to add a new book
addBookForm.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(addBookForm);
  const book = {
    title: formData.get('title'),
    author: formData.get('author'),
    publishedDate: formData.get('publishedDate')
  };
  fetch('/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  })
    .then(response => response.json())
    .then(data => {
      addBook(data);
      addBookForm.reset();
    })
    .catch(error => {
      console.error(error);
      alert('An error occurred while adding the book.');
    });
}); 