const fs = require("fs");
// const book = {
//   title: "Harry Potter",
//   author: "J.K. Rowling",
// };

// const bookJson = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJson);

// what comes back is a buffer
// const buffer_data = fs.readFileSync("1-json.json").toString();

// const data = JSON.parse(buffer_data);
// console.log(typeof data);

// to get data and update it
const buffer_data = fs.readFileSync("1-json.json").toString();
const data = JSON.parse(buffer_data);
console.log(data);
data.name = "Sid";
data.age = 20;
console.log(data);

// write data
dataJson = JSON.stringify(data);
fs.writeFileSync("1-json.json", dataJson);
