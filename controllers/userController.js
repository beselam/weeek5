"use strict";

const userModel = require("../models/userModel");



const user_list_get =  async (req, res) => {
  const users = await userModel.getAllUsers();
  res.json(users);
};

const user_get = async (req, res) => {
  const params  = [req.params.id]  
  const user = await userModel.getUser(params);
  res.json(user);
};

const user_create_post = async (req, res) => {
  const name =  req.body.name;
  const email =  req.body.email;
  const passwd = req.body.passwd;
 const newUser = await userModel.addUser(name,email,passwd);
 
  res.send("With this endpoint you can add users."); 
};

const user_delete = async (req, res) => {
  const params  = [req.params.id]  
  const user = await userModel.deletUser(params);
  res.send("user is deleted .");
};

module.exports = {
  user_list_get,

  user_get,

  user_create_post,
  user_delete
};
