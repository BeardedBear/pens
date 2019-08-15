document.addEventListener("DOMContentLoaded", () => {
  const cancelBonuses = document.querySelector(".app-cancel-bonuses");
  const app = document.querySelector(".app");

  const toggleBtn = document.querySelectorAll(".new-mail__toggle");
  toggleBtn.forEach(element => {
    element.addEventListener("click", () => {
      document.querySelector(".new-mail").classList.toggle("active");
      document.querySelector(".new__button").classList.toggle("active");
    });
  });

  cancelBonuses.addEventListener("click", () => {
    const classes = ["weird-rotate", "bonus-zoom"];
    app.classList.remove(...classes);
    byeCancelButton();
  });

  function byeCancelButton() {
    cancelBonuses.classList.toggle("app-cancel-bonuses--active");
  }

  function toggleClassToApp(trigger, className) {
    let bonus = document.querySelector(trigger);
    bonus.addEventListener("click", () => {
      app.classList.toggle(className);
      byeCancelButton();
    });
  }

  toggleClassToApp(".bonus-weird-rotate", "weird-rotate");
  toggleClassToApp(".bonus-dark-mode", "dark-mode");
  toggleClassToApp(".bonus-zoom", "bonus-zoom");
});
