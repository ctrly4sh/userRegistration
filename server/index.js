const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/* MIDDLEWARES */
app.use(cors);
app.use(express.json())

/* MONGO DB */
mongoose.connect("mongodb://localhost:27017/auth")
    .then(() => { console.log("Monogo Connected") })
    .catch((error)=>{console.log(`Unknown error : ${error} occured`)});


app.get('/', (req, res) => {
    res.json({
        message: "user registration in node js"
    });
})

/* Global error handler */


/* SERVER*/
app.listen(6900, () => {
    console.log("server listening on port : 69");
})