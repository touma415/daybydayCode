const moreButton = document.getElementById("more");
const output = document.getElementById("output");

const API_URL = "https://ruddy-mail.glitch.me/api/list";

let page = 1;

moreButton.addEventListener("click", function() {
  axios.get(API_URL + "?page=" + page).then(response => {
    // HTMLを追加する
    // console.log(response.data.items)
    let row = buildHTML(response.data.items);
    // 最後のページであれば「もっと見る」ボタンは隠す
    if ((response.data.last = true)) {
      moreButton.classList.add("hidden");
    }
  });
  page += 1;
});

// Insert code here...

/**
 * 一行分の要素を生成する
 *
 * @param {Array} items
 */
function buildHTML(items) {
  const row = document.createElement("div");
  row.className = "columns";
  let html = "";
  console.log(items);
  items.forEach(url => {
    console.log(url);
    let addImg = document.createElement("img");
    addImg.className = "column is-one-third";
    addImg.src = url.url;

    //    }

    row.innerHTML = html;
    return row;
  });
}
