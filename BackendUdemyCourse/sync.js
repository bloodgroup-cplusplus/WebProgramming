const fs =require("fs")

console.log("1")

const res = fs.readFileSync("text.txt")

console.log("file"+res);
console.log("2");


