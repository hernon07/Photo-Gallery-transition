const panels = document.querySelectorAll(".panel");

function remove() {
  panels.forEach((panel) => panel.classList.remove("active"));
}

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    remove();
    panel.classList.add("active");
  });
});
