this.sample = "グローバルなのでwindowsオブジェクト";

console.log(window.sample);

//-----------------------------------------------

function samplemethod() {
  console.log(this);
}

samplemethod();

//-------------ここまで全部グローバル-------------

let sample1 = {
  name: "sample"
};

samplemethod.apply(sample1);
samplemethod.call(sample1);

//----applyとcallで明示的にthis先を指定できる

let testobj = {
  name: "myname",
  myFunc: function() {
    //メソッドの中にthis
    console.log(this);
  }
};

testobj.myFunc();

//----呼び出したtestobjを参照してる　this.○○を指定してないので中身全部----

function user(id, pass) {
  this.id = id;
  this.pass = pass;
}

let myuser = new user(0001, "password");

console.log(myuser);

//----コンストラクタ内のthisはuser自身を指していて、作成されたインスタンスの値になる-------
