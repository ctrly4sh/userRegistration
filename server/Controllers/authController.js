const user = require("../Models/userModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const { all } = require("../Routes/authRoute");

exports.signup = async (req, res, next) => {
    try {
        const existingUser = await user.findOne({ email: req.body.email })
        if (existingUser) {
            return "user already exists! kindly login"
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newRegisteredUser = user.create({
            ...req.body,
            password: hashedPassword
        })
        const webToken = jwt.sign({ _id: newRegisteredUser._id }, "milkman6969", {
            expiresIn: '90d',
        });
        res.status(201).json({
            status: "succeded",
            message: "New user Signined successfully",
            webToken,
        })
    } catch (exe) {
        console.log("Error occures",exe)
    }
};


exports.getUsers = async (req, res) => {
    const allUsers = await user.find()
    res.send(allUsers)
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body

        const userExists = await user.find({ email })

        if (!userExists) {
            return "No user Found kindly Sign up before Login !!"
        }

        const isPasswordValid = bcrypt.compare(password, userExists.password)

        if (!isPasswordValid) {
            return "Incorrect Password check it once again :P"
        }

        const webToken = jwt.sign({ _id: newRegisteredUser._id }, "milkman6969", {
            expiresIn: '90d',
        });

        res.status(201).json({
            status: "Login Succesffull",
            message: "user Logined successfully",
            webToken,
            user: {
                _id: user._id,
                name: user.name,
                password: user.password,
                email: user.email,
                human : true
            }
        })

    } catch (exe) {
        console.log("")
    }
};


