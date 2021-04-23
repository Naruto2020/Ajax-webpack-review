const express = require("express");
const cors = require('cors');
require("dotenv").config({path: "./config/.env"});
const formRoute  = require("./routes/formRoute");

const app = express();


// Cors
const corsOptions ={
    origin : process.env.CLIENT_URL,
    Credential:true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}
app.use(cors(corsOptions));

// routes 
app.use("/api", formRoute);

app.listen(process.env.PORT, ()=>{
    console.log(`app listening on port : ${process.env.PORT}`);
});