const chapter = Number(localStorage.getItem("selectedChapter") || 1);
const difficultyRank = { easy: 0, medium: 1, hard: 2 };
const difficultyNames = ["easy", "medium", "hard"];
const secondsPerQuestion = 20;

let availableQuestions = questionBank
  .filter(question => question.chapter === chapter)
  .sort((a, b) => difficultyRank[a.difficulty] - difficultyRank[b.difficulty]);

const maxQuestions = Math.min(30, availableQuestions.length);

let currentQuestion = null;
let currentNumber = 0;
let targetDifficulty = "easy";
let score = 0;
let timeLeft = secondsPerQuestion;
let timerId = null;
let locked = false;
let records = [];
let usedIds = new Set();

const examTitle = document.getElementById("examTitle");
const questionCounter = document.getElementById("questionCounter");
const timer = document.getElementById("timer");
const progressFill = document.getElementById("progressFill");
const questionMap = document.getElementById("questionMap");
const quizCard = document.getElementById("quizPanel");
const questionText = document.getElementById("questionText");
const options = document.getElementById("options");
const difficultyBadge = document.getElementById("difficultyBadge");
const topicBadge = document.getElementById("topicBadge");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const skipBtn = document.getElementById("skipBtn");

examTitle.textContent = `Chapter ${chapter} Quiz`;
questionCounter.textContent = `Question 1/${maxQuestions}`;

function formatTime(value) {
  return `00:${String(value).padStart(2, "0")}`;
}

function pickQuestion() {
  const unused = availableQuestions.filter(question => !usedIds.has(question.id));
  if (!unused.length) return null;

  const exactDifficulty = unused.find(question => question.difficulty === targetDifficulty);
  if (exactDifficulty) return exactDifficulty;

  return unused.sort((a, b) => {
    const aDistance = Math.abs(difficultyRank[a.difficulty] - difficultyRank[targetDifficulty]);
    const bDistance = Math.abs(difficultyRank[b.difficulty] - difficultyRank[targetDifficulty]);
    return aDistance - bDistance;
  })[0];
}

function updateTargetDifficulty(wasCorrect) {
  const currentRank = difficultyRank[targetDifficulty];
  const nextRank = wasCorrect
    ? Math.min(currentRank + 1, difficultyNames.length - 1)
    : Math.max(currentRank - 1, 0);

  targetDifficulty = difficultyNames[nextRank];
}

function startTimer() {
  clearInterval(timerId);
  timeLeft = secondsPerQuestion;
  timer.textContent = formatTime(timeLeft);
  timer.classList.remove("warning");
  console.log("Timer started");

  timerId = setInterval(() => {
    timeLeft -= 1;
    timer.textContent = formatTime(timeLeft);
    timer.classList.toggle("warning", timeLeft <= 5);
    console.log(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(timerId);
      submitAnswer(null, true);
    }
  }, 1000);
}

function renderMap() {
  questionMap.innerHTML = "";

  for (let i = 0; i < maxQuestions; i++) {
    const button = document.createElement("button");
    const record = records[i];

    button.className = "map-btn";
    button.textContent = i + 1;
    button.disabled = true;

    if (i === currentNumber - 1 && !record) button.classList.add("current");
    if (record?.status === "answered") button.classList.add("answered");
    if (record?.status === "skipped") button.classList.add("skipped");

    questionMap.appendChild(button);
  }
}

function renderQuestion() {
  if (currentNumber >= maxQuestions) {
    showResults();
    return;
  }

  currentQuestion = pickQuestion();

  if (!currentQuestion) {
    showResults();
    return;
  }

  usedIds.add(currentQuestion.id);
  currentNumber += 1;
  locked = false;
if (currentNumber === maxQuestions) {
  nextBtn.textContent = "Submit";
} else {
  nextBtn.textContent = "Next Question";
}
  questionCounter.textContent = `Question ${currentNumber}/${maxQuestions}`;
  progressFill.style.width = `${((currentNumber - 1) / maxQuestions) * 100}%`;
  questionText.textContent = currentQuestion.question;
  difficultyBadge.textContent = currentQuestion.difficulty.toUpperCase();
  topicBadge.textContent = currentQuestion.topic;
  feedback.textContent = "";
  nextBtn.disabled = true;
  function enableNextButton() {
  nextBtn.disabled = false;
}
  skipBtn.disabled = false;

  options.innerHTML = "";
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.textContent = option;
    button.addEventListener("click", () => submitAnswer(option, false));
    options.appendChild(button);
  });

  renderMap();
  startTimer();
}

function submitAnswer(selected, timedOut) {
  if (locked) return;

  locked = true;
  clearInterval(timerId);

  const wasCorrect = selected === currentQuestion.answer;
  if (wasCorrect) score += 1;

  records.push({
    question: currentQuestion.question,
    topic: currentQuestion.topic,
    difficulty: currentQuestion.difficulty,
    selected: selected || "No answer",
    answer: currentQuestion.answer,
    correct: wasCorrect,
    status: timedOut || !selected ? "skipped" : "answered"
  });

  [...options.children].forEach(button => {
    button.disabled = true;
    if (button.textContent === currentQuestion.answer) button.classList.add("correct");
    if (button.textContent === selected && !wasCorrect) button.classList.add("wrong");
  });

  if (timedOut) {
    feedback.textContent = `Time up. Correct answer: ${currentQuestion.answer}`;
  } else if (wasCorrect) {
    feedback.textContent = "Correct. The next question may become harder.";
  } else {
    feedback.textContent = `Wrong. Correct answer: ${currentQuestion.answer}`;
  }

  updateTargetDifficulty(wasCorrect);
  nextBtn.disabled = false;
  skipBtn.disabled = true;
  progressFill.style.width = `${(currentNumber / maxQuestions) * 100}%`;
  renderMap();
}

function buildTopicBreakdown() {
  const topicStats = {};

  records.forEach(record => {
    if (!topicStats[record.topic]) {
      topicStats[record.topic] = { correct: 0, total: 0 };
    }

    topicStats[record.topic].total += 1;
    if (record.correct) topicStats[record.topic].correct += 1;
  });

  return Object.entries(topicStats).map(([topic, stat]) => {
    const percent = Math.round((stat.correct / stat.total) * 100);
    const label = percent >= 70 ? "Strong" : percent >= 40 ? "Fair" : "Weak";

    return `
      <div class="topic-row">
        <div>
          <strong>${topic}</strong>
          <p class="muted">${stat.correct}/${stat.total} correct</p>
        </div>
        <b>${label} - ${percent}%</b>
      </div>
    `;
  }).join("");
}

function saveAttempt(percent) {
  const attempts = JSON.parse(localStorage.getItem("quizAttempts") || "[]");
  attempts.push({
    chapter,
    score,
    total: records.length,
    percent,
    date: new Date().toLocaleString()
  });
  localStorage.setItem("quizAttempts", JSON.stringify(attempts));
}

function showResults() {
  clearInterval(timerId);

  const total = records.length || 1;
  const percent = Math.round((score / total) * 100);
  const skipped = records.filter(record => record.status === "skipped").length;
  saveAttempt(percent);

  quizCard.innerHTML = `
    <div class="badges">
      <span class="result-pill">Chapter ${chapter}</span>
      <span class="result-pill">${percent >= 70 ? "Strong Result" : percent >= 40 ? "Needs Practice" : "Revise Again"}</span>
    </div>
    <h1>Quiz Completed</h1>
    <p class="lead">Your attempt has been saved on this browser. Check your topic breakdown below.</p>

    <div class="result-grid">
      <div class="stats"><div><span>Score</span><strong>${score}/${total}</strong></div></div>
      <div class="stats"><div><span>Percentage</span><strong>${percent}%</strong></div></div>
      <div class="stats"><div><span>Skipped</span><strong>${skipped}</strong></div></div>
    </div>

    <h2>Topic Breakdown</h2>
    <div class="topic-list">${buildTopicBreakdown()}</div>

    <div class="actions">
      <a class="light-btn" href="index.html">Back to Dashboard</a>
      <button onclick="window.location.reload()">Retry Chapter</button>
    </div>
  `;

  progressFill.style.width = "100%";
  questionCounter.textContent = "Completed";
  timer.textContent = "Done";
  timer.classList.remove("warning");
}

nextBtn.addEventListener("click", renderQuestion);
skipBtn.addEventListener("click", () => submitAnswer(null, false));

if (maxQuestions === 0) {
  quizCard.innerHTML = `
    <h1>No Questions Found</h1>
    <p class="lead">No questions have been added for Chapter ${chapter}.</p>
    <a class="light-btn" href="index.html">Back to Dashboard</a>
  `;
} else {
  renderQuestion();
}