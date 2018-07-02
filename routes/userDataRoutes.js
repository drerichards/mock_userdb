const userRecords = require('../userRecords')
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
                // console.log(data)
                res.send(data)
            })
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    })

   //edit
   app.post("/user/edit", (req, res) => {
       console.log(req.body)
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
                }, {new: true}, (err, record) => {
                    if (err) {
                        res.status(500).json({
                            message: error
                        })
                    }
                    console.log(record)
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
            User.deleteOne({_id: req.params.id}, (err) => {
                if (err){
                    res.status(500).json({
                        message: err
                    })
                }
                res.sendStatus(200)
            })
        } catch (error) {
            return error
        }
    })

    // reset db
    app.post('/post', (req, res) => {
        try {
            User.insertMany(userRecords)
            .then(response => {
                res.send(response)
            })
            .catch(err => {
                res.send(err)
            })
        } catch (error) {
            console.log(error)
        }
    })
}
