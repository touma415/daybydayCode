/**
 * ギャラリーを初期化する
 *
 * @param {HTMLElement} root ギャラリー全体のルート要素
 */
function initGallery(root) {
  // サムネイル画像
  const thumbnails = root.querySelectorAll("[data-gallery-image]");
  //   console.log(thumbnails);

  // メイン画像のIDをサムネイルから取得
  const targetIds = Array.prototype.map.call(thumbnails, tn => {
    return "#" + tn.getAttribute("data-gallery-image");
  });

  // メイン画像
  const mainImages = root.querySelectorAll(targetIds.join(","));
  //   console.log(mainImages);

  // サムネイルのクリックイベントハンドラ
  function onClickThumbnail() {
    // console.log("in function");
    // まずメイン画像をすべて隠す
    mainImages.forEach(image => {
      image.classList.remove("active");
    });
    // 表示するメイン画像のIDを取得する
    const id = this.getAttribute("data-gallery-image");
    // console.log(id);
    // 表示するメイン画像を取得する
    const target = document.getElementById(id);
    // console.log(target);
    // 要素があったら表示する
    target.classList.add("active");
  }

  thumbnails.forEach(tn => {
    tn.addEventListener("click", onClickThumbnail, false);
    // console.log(tn);
  });
}

const elem = document.getElementById("myGallery");

initGallery(elem);
