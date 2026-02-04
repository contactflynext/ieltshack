let timeLeft = 900;
let timer;

const answers = {
  q1: "carnivorous",
  q2: "scent",
  q3: "pouch",
  q4: "fossil",
  q5: "habitat",
  q6: "TRUE",
  q7: "FALSE",
  q8: "NOT GIVEN",
  q9: "FALSE",
  q10: "NOT GIVEN",
  q11: "FALSE",
  q12: "TRUE",
  q13: "NOT GIVEN"
};

function startExam() {
  const name = document.getElementById("studentName").value.trim();
  if (!name) return alert("Please enter your name");

  localStorage.setItem("currentStudent", name);
  document.getElementById("candidate").innerText = "Candidate: " + name;

  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("examPage").classList.remove("hidden");

  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timeLeft--;
  const m = Math.floor(timeLeft / 60);
  const s = String(timeLeft % 60).padStart(2, "0");
  document.getElementById("timer").innerText = `${m}:${s}`;

  if (timeLeft <= 0) submitExam();
}

function submitExam() {
  clearInterval(timer);

  let score = 0;
  for (let q in answers) {
    const el = document.getElementById(q);
    if (!el) continue;
    const userAns = el.value.trim().toLowerCase();
    if (userAns === answers[q].toLowerCase()) score++;
  }

  const record = {
    name: localStorage.getItem("currentStudent"),
    score: score,
    timeUsed: 900 - timeLeft,
    date: new Date().toLocaleString()
  };

  const all = JSON.parse(localStorage.getItem("results") || "[]");
  all.push(record);
  localStorage.setItem("results", JSON.stringify(all));

  document.getElementById("examPage").classList.add("hidden");
  document.getElementById("resultPage").classList.remove("hidden");
  document.getElementById("scoreText").innerText =
    `Your Score: ${score} / 13`;
}
