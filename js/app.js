// Tableau qui va contenir les livres
let books = [];
const bookForm = document.getElementById("book-form");
const bookList = document.getElementById("book-list");
bookForm.addEventListener("submit", function (e) {
    e.preventDefault(); // empêche le rechargement de la page

    addBook();
});
function addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const type = document.getElementById("type").value;
    const pages = document.getElementById("pages").value;

    const book = {
        title: title,
        author: author,
        type: type,
        pages: pages,
        favorite: false
    };

    books.push(book);
    displayBooks();
    bookForm.reset();
}
function displayBooks() {
    bookList.innerHTML = "";

    books.forEach((book, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>♡</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
            <td>${book.pages}</td>
            <td>
                <button onclick="deleteBook(${index})">Supprimer</button>
            </td>
        `;

        bookList.appendChild(row);
    });
}
function deleteBook(index) {
    books.splice(index, 1);
    displayBooks();
}
