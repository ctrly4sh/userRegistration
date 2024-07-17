const user = require("../Models/userModel");
const bcrypt = require("bcrypt")

/* User Signup */
exports.signup = async (req, res, next) => {
    try {
        const checkIfUserExists = await user.findOne({ email: req.body.email })

        if (checkIfUserExists) {
            return "user already exists! kindly login"
        }

        /*Bcrypt */
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const userRegister  = user.create({
            ...req.body,
            password: hashedPassword
        })
    } catch (exe) {

    }
};

/* User Login */
exports.login = async (req, res, next) => {

};