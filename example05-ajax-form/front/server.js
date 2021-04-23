const path = require("path");
const express = require("express");
const PORT = 8080;

const app = express();
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, ()=>{
    console.log(`server listening on port : ${PORT}`);
});