const tbody = document.querySelector("#scoreTable tbody");

let results = JSON.parse(localStorage.getItem("results") || "[]");

// sort by score (descending)
results.sort((a, b) => b.score - a.score);

results.forEach((r, index) => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${index + 1}</td>
    <td>${r.name}</td>
    <td>${r.score} / 13</td>
    <td>${formatTime(r.timeUsed)}</td>
    <td>${r.date}</td>
  `;

  tbody.appendChild(row);
});

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = String(sec % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function clearResults() {
  if (confirm("Are you sure you want to delete all results?")) {
    localStorage.removeItem("results");
    location.reload();
  }
}
