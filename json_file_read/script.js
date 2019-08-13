const fs = require("fs");

fs.readFile("data_001.json", "utf-8", (err, data) => {
  console.log(data);
});
