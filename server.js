"use strict"
require("dotenv").config()
const express = require("express"),
    app = express(),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    {PORT, MLAB_DATA_URL} = require("./config")

app.use(cors())
app.use(bodyParser.json())
mongoose.Promise = global.Promise
mongoose.connect(MLAB_DATA_URL)
mongoose.connection.once('open', () => {
    console.log('Mongo Connection Opened!')
}).on('error', (error) => console.warn('Warning ', error))

require('./routes/userDataRoutes')(app)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
module.exports = { app }
