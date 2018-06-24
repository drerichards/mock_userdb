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

   //edit
   app.post("/user/edit", (req, res) => {
        try {
            console.log(req.body)
            res.sendStatus(200)
        } catch (error) {
            
        }
    })

    //delete
    app.put("/user/delete", (req, res) => {
        try {
            res.sendStatus(200)
        } catch (error) {
            
        }
    })
}
