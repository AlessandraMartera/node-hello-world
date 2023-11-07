
const http = require("http");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

// importo la libreria dotenv
const dotenv = require("dotenv");

// la avvio
dotenv.config();

// funzione per un numero casuale con la quale estrarre una frase casuale in poszione randomNum 
function randomString(){
const arrayString = [ 
    "non dire gatto se non lo hai nel sacco", 
    "il mattino ha l'oro in bocca", 
    "Non c'e' peggior sordo di chi, in effetti, non sente", 
    "Chi va con lo zoppo va piano piano", 
    "Il lupo perde il pelo e diventa calvo",
    "Chi lascia la strada vecchia per la nuova arriva prima perchè è asfaltata",
]


const randomNum = Math.floor( Math.random() * ( arrayString.length - 0) ) + 0; 

if()
let bob = arrayString[randomNum];
    return bob;
}

// let port= process.env.PORT || 3000;
const header={}
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 
        "Content-Type": "text/html"
        });
    res.end(`<h1 style="text-aling:center"> ${randomString()} </h1>`)
    // console.log("http\\localhost:" + process.env.PORT)
  }).listen(port, host, () => {
    const serverUrl = `http://${host}:${port}`
    console.log(`Server avviato su ${serverUrl}`);
    });;