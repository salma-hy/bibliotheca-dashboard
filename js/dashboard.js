const kpiBooks = document.getElementById("kpiBooks");
const kpiAuthors = document.getElementById("kpiAuthors");
const ctx = document.getElementById("booksChart").getContext("2d");

let chart;

function updateDashboard() {
  kpiBooks.textContent = books.length;
  kpiAuthors.textContent = authors.length;

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: books.map(b => b.title),
      datasets: [{
        label: 'Année de publication',
        data: books.map(b => b.year),
        backgroundColor: '#2563eb'
      }]
    }
  });
}

updateDashboard();
