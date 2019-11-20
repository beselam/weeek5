"use strict";

const userModel = require("../models/userModel");

const users = userModel.users;

const user_list_get = (req, res) => {
  res.json(users);
};

const user_get = (req, res) => {
  const user = {
    id: "1",

    name: "John Doe",

    email: "john@metropolia.fi",

    password: "1234"
  };

  res.json(user);
};

const user_create_post = (req, res) => {
  console.log("name", req.body.name);

  console.log("email", req.body.email);

  console.log("passwd", req.body.passwd);

  res.send("With this endpoint you can add users.");
};

module.exports = {
  user_list_get,

  user_get,

  user_create_post
};
