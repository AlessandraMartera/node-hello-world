
const http = require("http");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

// let port= process.env.PORT || 3000;
const header={}
const server = http.createServer(function (req, res) {
    res.end("hello world okay ci siamo")
    // console.log("http\\localhost:" + process.env.PORT)
  }).listen(port, host, () => {
    const serverUrl = `http://${host}:${port}`
    console.log(`Server avviato su ${serverUrl}`);
    });;