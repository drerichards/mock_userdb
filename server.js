"use strict"
require("dotenv").config()
const express = require("express"),
    app = express(),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    axios = require('axios'),
    {
        DATABASE_URL,
        PORT
    } = require("./config")

app.use(cors())
app.use(bodyParser.json())

app.get("/users", (req, res) => {
    try {
        axios.get(DATABASE_URL)
            .then(response => {
                res.send(response.data[0].users)
            }).catch(error => {
                res.status(500).json({
                    message: error
                })
            })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))