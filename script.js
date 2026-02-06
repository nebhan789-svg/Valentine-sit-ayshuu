const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const loveMessage = document.getElementById("loveMessage");
const warning = document.getElementById("warning");

yesBtn.addEventListener("click", () => {
  loveMessage.classList.remove("hidden");
});

noBtn.addEventListener("click", () => {
  warning.textContent = "please stop clicking this button as it's harmful for Nibu's health";
  noBtn.style.left = Math.random() * 200 - 100 + "px";
  noBtn.style.top = Math.random() * 200 - 100 + "px";
});
