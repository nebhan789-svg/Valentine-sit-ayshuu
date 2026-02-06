const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const loveMessage = document.getElementById("loveMessage");
const warning = document.getElementById("warning");

yesBtn.addEventListener("click", () => {
  loveMessage.classList.remove("hidden");
  explodeHearts();
});

noBtn.addEventListener("click", () => {
  warning.textContent = "🚨 PLEASE STOP CLICKING 😭 This is harmful for Nibu's health 🚨";
  noBtn.style.left = Math.random() * 200 - 100 + "px";
  noBtn.style.top = Math.random() * 200 - 100 + "px";
});

function explodeHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💖";

    const x = (Math.random() - 0.5) * 200 + "px";
    const y = (Math.random() - 0.5) * 200 + "px";

    heart.style.setProperty("--x", x);
    heart.style.setProperty("--y", y);

    heart.style.left = yesBtn.getBoundingClientRect().left + yesBtn.offsetWidth / 2 + "px";
    heart.style.top = yesBtn.getBoundingClientRect().top + yesBtn.offsetHeight / 2 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1000);
  }
}
