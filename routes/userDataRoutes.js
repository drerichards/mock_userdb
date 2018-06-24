axios = require('axios')
const {DATABASE_URL} = require("../config")
module.exports = app => {
    const { User } = require('../models/models')

    app.get("/users", (req, res) => {
        try {
            User.find({}, (err, data) => {
                if (err){
                    res.status(500).json({
                        message: err
                    })
                }
                console.log(data[0])
                res.send(data[0])
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
            // console.log(User)
            User.update({
                id: '5b2ca731e7179a589286c386'
            }, {
                    $pull: {

                    }
            })
            // axios.put(DATABASE_URL, req.body)
            //     .then(response => {
            //         console.log(response)
            //     }).catch(error => {
            //         console.log(error)
            //     })
            // res.sendStatus(200)
        } catch (error) {
            console.log(error)
        }
    })
}
