const User = require("../models/user.model");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const {
  userNotRegistered,
  userRegistered,
  loginSuccess,
  invalidPass,
  loginFailed,
  invalidUser,
  userFound,
  userNotFound,
} = require("../constants/error-message");

exports.registerUser = async (req, res) => {
  const newUser = User.build({
    ...req.body,
    userpass: CryptoJS.AES.encrypt(
      req.body.userpass,
      process.env.PASS_SECRET_KEY
    ).toString(),
  });
  try {
    const user = await newUser.save();
    return res.status(201).json({
      message: userRegistered,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: userNotRegistered,
      error: error,
    });
  }
};

exports.login = async (req, res) => {
  const { email, userpass } = req.body;
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (user) {
      const bytes = CryptoJS.AES.decrypt(
        user.userpass,
        process.env.PASS_SECRET_KEY
      );
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" }
      );
      if (originalText === userpass) {
        return res.status(200).json({
          message: loginSuccess,
          user: { ...user, accessToken },
        });
      }
      return res.status(404).json({
        message: invalidPass,
      });
    }
    return res.status(404).json({
      message: invalidUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: loginFailed,
      error: error,
    });
  }
};

exports.users = async (req, res) => {
  try {
    const users = await User.findAll({});
    res.status(200).json({
      message: userFound,
      records: users.length,
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: userNotFound,
      error: error,
    });
  }
};
