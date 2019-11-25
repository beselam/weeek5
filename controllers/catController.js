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

  const params =[
    req.body.name,
    req.body.age,
    req.body.weight,
    req.body.owner,
    req.file.filename
    ];
    
    const filee = await catModel.addCat(params); 
  
    res.send("With this endpoint you can add users."); 
  };
  
  const cat_create_update = async (req, res) => {
    console.log('et put request');
    
    const params =[
      req.body.name,
      req.body.age,
      req.body.weight,
      req.body.owner,
      req.body.cat_id
      ];
    const file = await catModel.updateCat(params);
    res.send("With this endpoint you can add users.");  
  };



  


module.exports = {
    cat_list_get,
    cat_create_post,
    cat_get,
    cat_create_update
};
