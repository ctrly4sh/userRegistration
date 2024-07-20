const user = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
    try {
        const existingUser = await user.findOne({ email: req.body.email });

        if (existingUser) {
            return res.status(400).json({
                status: "failed",
                message: "User already exists! Kindly login."
            });
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newRegisteredUser = await user.create({
            ...req.body,
            password: hashedPassword
        });

        const webToken = jwt.sign({ _id: newRegisteredUser._id }, "milkman6969", {
            expiresIn: '90d',
        });

        res.status(201).json({
            status: "succeeded",
            message: "New user signed up successfully",
            webToken,
        });
        
    } catch (exe) {
        console.log("Error occurred", exe);
        res.status(500).json({
            status: "failed",
            message: "An error occurred during signup"
        });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const allUsers = await user.find();
        res.status(200).json(allUsers);
    } catch (exe) {
        console.log("Error occurred", exe);
        res.status(500).json({
            status: "failed",
            message: "An error occurred while fetching users"
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExists = await user.findOne({ email });

        if (!userExists) {
            return res.status(400).json({
                status: "failed",
                message: "No user found. Kindly sign up before login!"
            });
        }

        const isPasswordValid = await bcrypt.compare(password, userExists.password);

        if (!isPasswordValid) {
            return res.status(400).json({
                status: "failed",
                message: "Incorrect password. Check it once again :P"
            });
        }

        const webToken = jwt.sign({ _id: userExists._id }, "milkman6969", {
            expiresIn: '90d',
        });

        res.status(200).json({
            status: "Login successful",
            message: "User logged in successfully",
            webToken,
            user: {
                _id: userExists._id,
                name: userExists.name,
                email: userExists.email,
                human: true
            }
        });

    } catch (exe) {
        console.log(`Error occurred: ${exe}`);
        res.status(500).json({
            status: "failed",
            message: "An error occurred during login"
        });
    }
};
