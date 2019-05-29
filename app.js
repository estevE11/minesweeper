const express = require("express");
const app = express();

const port = 8080;

app.get("/", function(req, res, next) {
    console.log("GET got.");
    res.sendFile(__dirname + "/index.html")
});

app.listen(port, function() {
    console.log("Listening to " + port);
});