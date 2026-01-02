const authorForm = document.getElementById("authorForm");
const authorName = document.getElementById("authorName");
const authorList = document.getElementById("authorList");

let authors = JSON.parse(localStorage.getItem("authors")) || [];

authorForm.addEventListener("submit", e => {
  e.preventDefault();
  authors.push(authorName.value);
  localStorage.setItem("authors", JSON.stringify(authors));
  displayAuthors();
  updateDashboard();
  authorForm.reset();
});

function displayAuthors() {
  authorList.innerHTML = "";
  authors.forEach((a, i) => {
    authorList.innerHTML += `
      <li>${a}
        <button onclick="removeAuthor(${i})">❌</button>
      </li>`;
  });
}

function removeAuthor(i) {
  authors.splice(i, 1);
  localStorage.setItem("authors", JSON.stringify(authors));
  displayAuthors();
  updateDashboard();
}

displayAuthors();
