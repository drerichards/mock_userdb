const userRecords = require('../userRecords')
module.exports = app => {
    const { User } = require('../models/models')

    app.get("/users", (req, res) => {
        try {
            User.find({}, (error, data) => {
                if (error){
                    res.status(500).json({
                        message: error
                    })
                }
                res.send(data)
            })
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    })

    //add
   app.post("/user/add", (req, res) => {
       try {
            User.create(req.body)
            .then(response => {
                res.send(response)
            })
            .catch(error => {
                res.send(error)
            })
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    })



   //edit
   app.post("/user/edit", (req, res) => {
       const {first_name, last_name, username, email} = req.body
        try {
            User.findByIdAndUpdate(req.body._id, 
                {
                    $set: {
                        first_name,
                        last_name,
                        username,
                        email
                    }
                }, {new: true}, (error, record) => {
                    if (error) {
                        res.send(error)
                    }
                    res.send(record)
                })
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    })

    //delete
    app.delete("/user/:id/delete", (req, res) => {
        try {
            User.deleteOne({_id: req.params.id}, (error) => {
                if (error){
                    res.status(500).json({
                        message: error
                    })
                }
                res.sendStatus(200)
            })
        } catch (error) {
            return error
        }
    })

    // reset db
    app.post('/reset_database', (req, res) => {
        try {
            User.insertMany(userRecords)
            .then(response => {
                res.send(response)
            })
            .catch(error => {
                res.send(error)
            })
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    })
}
