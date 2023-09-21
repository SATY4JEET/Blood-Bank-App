const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User Already Exists!",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    const user = new userModel(req.body);
    await user.save();
    return res.status(201).send({
      success: true,
      message: "User Registered Succesfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in register API",
      error,
      user,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (!existingUser) {
      return res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }

    if (existingUser.role !== req.body.role) {
      return res.status(500).send({
        success: false,
        message: "Role doesnt match",
      });
    }

    const comparePassword = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );
    if (!comparePassword) {
      return res.status(500).send({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const token = jwt.sign(
      { userId: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    return res.status(200).send({
      success: true,
      message: "Login Succesful",
      token,
      existingUser,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Login API",
      error,
    });
  }
};

const currentUserController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    return res.status(200).send({
      success: true,
      message: "User Fetched Succesfully",
      user,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Unable to get Current User",
      error,
    });
  }
};

module.exports = { registerController, loginController, currentUserController };
