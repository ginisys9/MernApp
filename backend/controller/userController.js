const User = require('../model/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRegister = async function (req, res) {
    try {
        const { name, email, password } = req.body;
        const newUser = await User.findOne({ email });
        if (newUser) {
            return res.status(400).json({ message: "User already exist" });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({ name, email, password: hashedPassword });
        res.status(200).json({ user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}
const loginUser = async function (req, res) {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.status(200).json({
            success: true,
            token,
            user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    userRegister,
    loginUser
}