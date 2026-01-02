const apiBooks = document.getElementById("apiBooks");

function fetchBooks() {
  fetch("https://openlibrary.org/search.json?q=javascript")
    .then(res => res.json())
    .then(data => {
      apiBooks.innerHTML = "";
      data.docs.slice(0,5).forEach(b => {
        apiBooks.innerHTML += `<li>${b.title}</li>`;
      });
    })
    .catch(err => console.error(err));
}
