const express = require("express");
const app = express();
const path = require("path");
const polku = path.join(__dirname, "./public");
app.use(express.static(polku));
app.listen(3000, () => {
    console.log("Server is up on port 3000.");
});