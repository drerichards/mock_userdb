axios = require('axios')
const {DATABASE_URL} = require("../config")
module.exports = app => {
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
}
