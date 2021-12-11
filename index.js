const fs = require("fs");
const express = require("express");
// const http = require("http");
// const url = require("url");
// const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
/*
const textIn = fs.readFile("./txt/input.txt", "utf-8", (err, data) =>
  console.log(data)
);

const textOut = `This is what we know about the avocado ${textIn}. \n created on ${Date.now()} `;
fs.writeFile("./txt/output.txt", textIn, (err) => console.log(err));

console.log("reading file");


const textIn = fs.readFile("./txt/start.txt", "utf-8", (err1, data1) =>
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err2, data2) =>
    fs.writeFile("./txt/final.txt", data2, "utf-8", () =>
      console.log("Your file has been written")
    )
  )
);
console.log("Reading file");


const server = http.createServer((req, res) => {
  const pathName = req.url;

  switch (pathName) {
    case "/overview":
      res.end("This is the Overview Page");
      break;
    case "/product":
      res.end("This is the product Page");
      break;
    case "/":
      res.end("This is the home Page");
      break;
    case "/api":
      res.writeHead(200, {
        "Content-type": "application/json",
        headers: {
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
        },
      });
      res.end(data);
      break;
    default:
      res.writeHead(404, {
        "Content-type": "text/html",
      });
      res.end(" <h2>Route doesn't exist</h2> ");
  }
});
server.listen(8098, "127.0.0.1", () =>
  console.log("Server running on port 8098")
);

*/

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");

app.get("/", (req, res) => res.send("hello from the server"));
app.get("/api", (req, res) => res.send(data));
app.get("/farmDetail", (req, res) => {
  console.log(req.query);
  res.send(JSON.parse(data)[req.query.id]);
});

app.listen(5000, () =>
  console.log("Server listening on port 5000, Ctrl+C to stop")
);
