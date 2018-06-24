"use strict"
require("dotenv").config()
const express = require("express"),
    app = express(),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    {PORT} = require("./config")

app.use(cors())
app.use(bodyParser.json())

require('./routes/userDataRoutes')(app)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
module.exports = { app }
