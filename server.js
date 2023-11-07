
const http = require("http");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

// importo la libreria dotenv
const dotenv = require("dotenv").config();

const arrayString = [ 
    "non dire gatto se non lo hai nel sacco", 
    "il mattino ha l'oro in bocca", 
    "Non c'e' peggior sordo di chi, in effetti, non sente", 
    "Chi va con lo zoppo va piano piano", 
    "Il lupo perde il pelo e diventa calvo",
    "Chi lascia la strada vecchia per la nuova, arriva prima perche' e' asfaltata",
];
let choiceString = [];
let string;
// funzione per un numero casuale con la quale estrarre una frase casuale in poszione randomNum 
function randomString(){
   
    do{ if(choiceString.length === arrayString.length){
        choiceString = [];
    }
    
    string = arrayString[Math.floor( Math.random() * arrayString.length )];
    } while(choiceString.includes(string))

    choiceString.push(string); 
    console.log(choiceString)
    return string;
}

// let port= process.env.PORT || 3000;
const header={}
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 
        "Content-Type": "text/html"
        });
    res.end(`<h1>${process.env.TITLE}</h1>
    <h2 style="text-align: center;"> ${randomString()} </h2>`)
    // console.log("http\\localhost:" + process.env.PORT)
  }).listen(port, host, () => {
    const serverUrl = `http://${host}:${port}`
    console.log(`Server avviato su ${serverUrl}`);
    });
   