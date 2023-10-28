// server.js

const path = require('path');
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openaiRoutes'));

// // Set up home route
// app.get("/", (req, res) => {
//     res.send("This is the homepage");
// });
// // Set up second page
// app.get("/seconds", (req, res) => {
//     res.send("This is the second page");
// });

app.listen(port, () => {
    console.log(`Success! Your application is running on port ${port}.`);
});