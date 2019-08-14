const button = document.getElementById("button");

// const URL = "./data_001.json";

// const URL =
//   "https://github.com/touma415/daybydayCode/blob/master/json_file_read/data_001.json";

button.addEventListener(
  "click",
  function readGitFile() {
    const request = new XMLHttpRequest();

    let requestURL =
      "https://raw.githubusercontent.com/touma415/daybydayCode/master/json_file_read/data_001.json";

    request.open("GET", requestURL);

    request.responseType = "json";
    request.send();

    request.onload = function() {
      const data = request.response;
      console.log(data.id);
      console.log(data.name);
    };
  },
  false
);
// function readGitFile(URL) {
//   const request = new XMLHttpRequest();

//   let requestURL = URL;

//   request.open("GET", requestURL);

//   request.responseType = "json";
//   request.send();

//   request.onload = function() {
//     const data = request.response;
//     console.log(data.id);
//     console.log(data.name);
//   };
// }
