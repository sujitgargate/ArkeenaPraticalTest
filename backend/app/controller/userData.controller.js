var userService = require('../services/userData.services');
exports.createUser = (req, res) => {

    var errors = req.validationErrors();

    if(errors) { 
        return res.status(400).send(errors);
    } else {
        userService.createUser(req, res);
    }
}