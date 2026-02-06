const resultText = document.getElementById("resultText");

function wrongAnswer(btn) {
  resultText.textContent = "❌ WRONG ANSWER";
  resultText.style.color = "#ff1744";
  resultText.classList.remove("correct");
  resultText.classList.add("wrong");

  btn.classList.add("shake");
  setTimeout(() => btn.classList.remove("shake"), 400);
}

function correctAnswer() {
  resultText.textContent = "✅ CORRECT ANSWER";
  resultText.style.color = "#00e676";
  resultText.classList.remove("wrong");
  resultText.classList.add("correct");

  setTimeout(() => {
    window.location.href = "final.html";
  }, 1200);
}
