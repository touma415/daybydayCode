// button1
let button1 = document.getElementById("button1");

button1.addEventListener(
  "click", //クリックイベントalert処理
  function() {
    alert("クリックイベントの処理");
  },
  false
);

let button2 = document.getElementById("button2");

button2.addEventListener(
  "mousedown", //押している間に発動
  function() {
    button2.style =
      "background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);";
  },
  false
);

button2.addEventListener(
  "mouseup", //押しているのを離したときに発動
  function() {
    button2.style =
      " background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);";
  },
  false
);

let button3 = document.getElementById("button3");

button3.addEventListener(
  "keypress",
  function() {
    button3.style = "transform: rotate(360deg);transition: 0.5s;";
  },
  false
);

button3.addEventListener(
  "keyup",
  function() {
    button3.style = "transform: rotate(0deg);transition: 0.5s;";
  },
  false
);
