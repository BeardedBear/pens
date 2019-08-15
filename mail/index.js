document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelectorAll(".new-mail__toggle");
  toggleBtn.forEach(element => {
    element.addEventListener("click", () => {
      document.querySelector(".new-mail").classList.toggle("active");
      document.querySelector(".new__button").classList.toggle("active");
    });
  });

  const bonusWeirdRotate = document.querySelector(".bonus-weird-rotate");
  bonusWeirdRotate.addEventListener("click", () => {
    document.querySelector(".app").classList.toggle("weird-rotate");
  });
  const bonusDarkMode = document.querySelector(".bonus-dark-mode");
  bonusDarkMode.addEventListener("click", () => {
    document.querySelector(".app").classList.toggle("dark-mode");
  });
});
