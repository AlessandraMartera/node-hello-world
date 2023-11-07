console.log("Hello World!");

// dotenv;
const dotenv = require("dotenv").config();

console.log(process.argv);
// console.log(process.env.CODICE);
console.log("Stai pagando la lista della spesa con la carta di credito");
console.log(`Il CVV è: ${process.env.CVV} mentre il PIN è: ${process.env.PIN}`);