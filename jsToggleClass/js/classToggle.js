function toggleClass() {
  var e = document.getElementsByClassName("class-default");
  e[0].classList.toggle("class-toggled");
}

function toggleClass2() {
  var e = document.getElementsByClassName("class-default");
  var classdefault = document.querySelector(".class-default");
  var classtoggled = document.querySelector(".class-toggled");

  console.log(e);

  console.log(classdefault);
  console.log(classtoggled);

  var left = parseInt(classdefault.style.left);

  console.log(left);

  classdefault.style.left = left + 20 + "px";

  console.log(classdefault.style.left);

  classtoggled.style.left = left + 20 + "px";

  e[0].classList.toggle("class-toggled");
}
