let button = document.getElementById("button");

//ターゲットにかかっているブラウザが解釈した結果のスタイルを取得
let buttonstyle = window.getComputedStyle(button, "::after");

//ボタンイベント

button.addEventListener(
  "click",
  function() {
    //フォント色を取得
    let btncontent = buttonstyle.content;
    console.log(btncontent);

    let sum = parseInt(btncontent, 10) + 1;

    console.log(sum);

    button.setAttribute("data-name", sum);
  },
  false
);
