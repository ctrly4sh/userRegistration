const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/* MIDDLEWARES */
app.use(cors);
app.use(express.json())

/* MONGO DB */

app.get('/', (req, res) => {
    res.json({
        message: "user registration in node js"
    });
})

app.listen(6900, () => {
    console.log("server listening on port : 69");
})