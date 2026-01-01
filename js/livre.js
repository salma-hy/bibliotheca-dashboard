let books = JSON.parse(localStorage.getItem("books")) || [];

document.getElementById("bookForm").addEventListener("submit", e => {
  e.preventDefault();

  books.push({
    id: Date.now(),
    title: title.value,
    year: year.value
  });

  saveBooks();
  displayBooks();
  updateDashboard();
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
  if (confirm("Supprimer ce livre ?")) {
    books = books.filter(b => b.id !== id);
    saveBooks();
    displayBooks();
    updateDashboard();
  }
}

function saveBooks() {
  localStorage.setItem("books", JSON.stringify(books));
}

searchBook.addEventListener("input", e => {
  displayBooks(
    books.filter(b => b.title.toLowerCase().includes(e.target.value.toLowerCase()))
  );
});

displayBooks();
