const menu_id = document.getElementById("menu");

const content_id = document.getElementById("menu-content");

menu_id.addEventListener("click", function() {
  content_id.classList.toggle("is-open");
});
