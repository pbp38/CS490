const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("Connected to Mongo")
});

app.use(express.json()); //parser for post request
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);


app.listen(8800,()=>{
    console.log("Backend server running")
});

