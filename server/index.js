const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require('./Routes/authRoute')
const PORT = 8998
const app = express();

app.use(cors());
app.use(express.json())

app.use('/api/auth' , authRoute)
app.use('/api/auth' , authRoute)

mongoose.connect("mongodb://localhost:27017/auth")
    .then(() => { console.log("Monogo Connected") })
    .catch((error)=>{console.log(`Unknown error : ${error} occured`)});


app.get('/', (req, res) => {
    res.json({
        message: "user registration in node js"
    });
})  

app.listen(PORT, () => {
    console.log(`server listening on port :${PORT}`);
})