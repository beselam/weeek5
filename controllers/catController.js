'use strict';
// catController

const catModel = require('../models/catModel');


const cats = catModel.cats;

const cat_list_get = async (req, res) => {
    const cats =  await catModel.getAllCats();
    res.json(cats);
};

const cat_get = async (req,res)=>{
    const params = [req.params.id];
    const cat = await catModel.getCat(params);
    res.json(cat);
}


  const cat_create_post = async (req, res) => {
    const name =  req.body.name;
    const age =  req.body.email;
    const weight = req.body.passwd;
    const owner = req.body.passwd;
    const filename = req.body.passwd;
   const filee = await userModel.addUser(name,age,weight,owner,filename);
   
    res.send("With this endpoint you can add users."); 
  };
  


module.exports = {
    cat_list_get,
    cat_create_post,
    cat_get
};
