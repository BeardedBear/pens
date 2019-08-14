document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelectorAll(".new-mail__toggle");
  toggleBtn.forEach(element => {
    element.addEventListener("click", () => {
      document.querySelector(".new-mail").classList.toggle("active");
      document.querySelector(".new__button").classList.toggle("active");
    });
  });
});
