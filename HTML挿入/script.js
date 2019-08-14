// const buttons = document.querySelectorAll("button");

// console.log(buttons);

//各ボタンのイベントハンドラ
document.querySelectorAll("button").forEach(elem => {
  elem.addEventListener(
    "click",
    function() {
      generateOutput(elem.id);
    },
    false
  );
});

//pタグを生成する関数
function generateOutput(id) {
  //   console.log("in function id:" + id);
  let cry = "";
  if (id == "cat") {
    cry = "にゃー";
  } else if (id == "dog") {
    cry = "わん";
  } else if (id == "bird") {
    cry = "ぴよ";
  } else {
    //動物のボタンでないならクリアしてこの関数を抜ける
    clearOutput();
    return;
  }
  console.log(cry);
  let output = "<p class = 'box box-" + id + "'>" + cry + "</p>";
  insertOutput(output);
}

//生成したタグを挿入する関数
function insertOutput(output) {
  //   console.log("inert " + output);
  document.getElementById("output").insertAdjacentHTML("beforeend", output);
}

//output内をリセットする関数
function clearOutput() {
  //   console.log("clear");
  //outputを空文字に置き換え
  document.getElementById("output").innerHTML = "";
}
