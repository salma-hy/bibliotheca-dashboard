const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");
const title = document.getElementById("title");
const year = document.getElementById("year");
const searchBook = document.getElementById("searchBook");

let books = JSON.parse(localStorage.getItem("books")) || [];

bookForm.addEventListener("submit", e => {
  e.preventDefault();

  books.push({
    id: Date.now(),
    title: title.value,
    year: year.value
  });

  saveBooks();
  displayBooks();
  updateDashboard();
  bookForm.reset();
});

function displayBooks(list = books) {
  bookList.innerHTML = "";
  list.forEach(book => {
    bookList.innerHTML += `
      <li>
        ${book.title} (${book.year})
        <button onclick="deleteBook(${book.id})">❌</button>
      </li>`;
  });
}

function deleteBook(id) {
  books = books.filter(b => b.id !== id);
  saveBooks();
  displayBooks();
  updateDashboard();
}

function saveBooks() {
  localStorage.setItem("books", JSON.stringify(books));
}

searchBook.addEventListener("input", e => {
  displayBooks(
    books.filter(b =>
      b.title.toLowerCase().includes(e.target.value.toLowerCase())
    )
  );
});

displayBooks();
