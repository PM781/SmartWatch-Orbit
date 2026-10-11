// 1. Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

function setMenu(open) {
  mobileMenu.classList.toggle("hidden", !open);
  menuBtn.setAttribute("aria-expanded", String(open));
}

menuBtn.addEventListener("click", () => {
  setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
});

// Close the menu after tapping a link
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// Reset the menu when the screen grows to desktop size
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) setMenu(false);
});

// 2. The hero watch shows the visitor's real time
const hourHand = document.getElementById("hand-hour");
const minuteHand = document.getElementById("hand-min");
const secondHand = document.getElementById("hand-sec");
const dateText = document.getElementById("watch-date");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function turn(hand, degrees) {
  hand.setAttribute("transform", `rotate(${degrees} 180 230)`);
}

function updateWatch() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes() + seconds / 60;
  const hours = (now.getHours() % 12) + minutes / 60;

  turn(hourHand, hours * 30); // 360 / 12
  turn(minuteHand, minutes * 6); // 360 / 60
  turn(secondHand, seconds * 6);

  const weekday = now.toLocaleDateString("en-US", { weekday: "short" });
  dateText.textContent = `${weekday} ${now.getDate()}`;
}

if (prefersReducedMotion) {
  secondHand.style.display = "none";
}

updateWatch();
setInterval(updateWatch, prefersReducedMotion ? 15000 : 1000);

document.getElementById("year").textContent = new Date().getFullYear();
