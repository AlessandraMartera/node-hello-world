
const http = require("http");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";



function randomString(){
const arrayString = [ 
    "non dire gatto se non lo hai nel sacco", 
    "il mattino a l'oro in bocca", 
    "Non c/’è peggior sordo di chi, in effetti, non sente", 
    "Chi va con lo zoppo va piano piano", 
    "Il lupo perde il pelo e diventa calvo"
]
const randomNum = Math.floor( Math.random() * ( arrayString.length - 0) ) + 0;    
let bob = arrayString[randomNum];
    return bob;
}

// let port= process.env.PORT || 3000;
const header={}
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 
        "Content-Type": "text/html"
        });
    res.end(`<h1> ${randomString()} </h1>`)
    // console.log("http\\localhost:" + process.env.PORT)
  }).listen(port, host, () => {
    const serverUrl = `http://${host}:${port}`
    console.log(`Server avviato su ${serverUrl}`);
    });;