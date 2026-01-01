function updateDashboard() {
  kpiBooks.textContent = books.length;
  kpiAuthors.textContent = authors.length;

  new Chart(booksChart, {
    type: 'bar',
    data: {
      labels: books.map(b => b.title),
      datasets: [{
        label: 'Année de publication',
        data: books.map(b => b.year)
      }]
    }
  });
}

updateDashboard();
