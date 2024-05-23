const http = require("http");
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

// function myHandler(req, res) {console.log("Request received");
// const log = `Request received for ${req.url} at ${new Date()}\n`;
// const myUrl = url.parse(req.url, true);
// fs.appendFile("log.txt", log, (err, data) => {
//     switch(myUrl.pathname) {
//         case "/":
//             res.end("Home Page");
//             break;
//         case "/about":
//             const username = myUrl.query.username;
//             res.end(`About Page for ${username}`);
//             break;
//         case "/contact":
//             res.end("Contact Page");
//             break;
//         default:
//             res.end("404 Page Not Found");
//             break;
//     }
// })}

const myServer = http.createServer(app);

myServer.listen(8000, () => {
    console.log("Server is running...");
});



