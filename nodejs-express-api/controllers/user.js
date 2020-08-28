const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function create(req, res) {
  const { email, password } = req.body;

  const user = await User.create({
    email,
    password
  });

  res.json({
    user,
    message: "create user successfully"
  });
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({
    email
  });

  if (!user) {
    throw Error("User not found");
  }
  if (bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ user }, "yourSecretKey", {
      expiresIn: "24h"
    });

    res.json({
      user,
      token,
      message: "Login successfully"
    });
  } else {
    res.status(401).json({
      message: "Unauthenticated"
    });
  }
}

async function getAll(req, res) {
  const user = await User.find({});
  res.json({
    user,
    message: "create user successfully"
  });
}

async function get(req, res) {
  const user = await User.findOne({
    _id: req.params.id
  });
  res.json({
    user,
    message: "create user successfully"
  });
}

module.exports = {
  create,
  login,
  get,
  getAll,
}