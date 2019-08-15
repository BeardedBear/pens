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
    const classes = ["weird-rotate", "bonus-zoom", "bonus-exit"];
    app.classList.remove(...classes);
    byeCancelButton();
  });

  function byeCancelButton() {
    cancelBonuses.classList.toggle("app-cancel-bonuses--active");
  }

  function toggleClassToApp(trigger, className, cancellable) {
    let bonus = document.querySelector(trigger);
    bonus.addEventListener("click", () => {
      app.classList.toggle(className);
      if (cancellable) byeCancelButton();
    });
  }

  toggleClassToApp(".bonus-weird-rotate", "weird-rotate", true);
  toggleClassToApp(".bonus-dark-mode", "dark-mode", false);
  toggleClassToApp(".bonus-zoom", "bonus-zoom", true);
  toggleClassToApp(".bonus-exit", "bonus-exit", true);
  toggleClassToApp(".bonus-why-so-serious", "why-so-serious", false);
});
