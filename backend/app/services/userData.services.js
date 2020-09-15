var userModel = require('../model/userData.model')
exports.createUser = async (req, res) => {

    console.log(req.body.email);
    var userExists = await userModel.findOne({
        email: req.body.email
    })

    if (!userExists) {
        console.log(req.body.email);
        let user = new userModel({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        })

        let userRegisteredResponse = await userModel.create(user);
        console.log(userRegisteredResponse);
        res.status(200).send({
            status: userRegisteredResponse.name + 'Registred Sucessfully'
        })
    }

    else {
        res.send({
            msg : 'Email Already Registered'
        })
    }
}