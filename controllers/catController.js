'use strict';
// catController

const catModel = require('../models/catModel');
const resize  = require('../utils/resize');
const  imageMeta = require('../utils/imageMeta')

const cats = catModel.cats;


const cat_list_get = async (req, res) => {
    const cats =  await catModel.getAllCats();
    res.json(cats);
};

const cat_get = async (req,res)=>{
    const params = [req.params.id];
    const cat = await catModel.getCat(params);
    //res.json(cat);
}


  const cat_create_post = async (req, res) => {
    try{    //create thumbnail
    await resize.makeThumbnail(req.file.path, 'thumbnails/' + req.file.filename,{width:160,height:160},);
    
    const coords = await imageMeta.getCoordinates(req.file.path);
    console.log('coords', coords);

  const params =[
    req.body.name,
    req.body.age,
    req.body.weight,
    req.body.owner,
    req.file.filename,
    coords,
    ];
    
    const filee = await catModel.addCat(params); 
    res.send("With this endpoint you can add users."); 
    await res.json(params);
    }catch(e) {
     console.log(e);
     res.status(400).json({message:'error'});
    }
  };

  
  const cat_update_put = async (req, res) => {
  
      const params = [
        req.body.name,
        req.body.age,
        req.body.weight,
        req.body.owner,
        req.body.id];
      console.log('update', params);
      const user = await catModel.updateCat(params);
      await res.json(user);
    
  };
  const cat_delete = async (req, res) => {
    const params = [req.params.id];
    console.log('delete', params);
    const cat = await catModel.deleteCat(params);
    await res.json(cat);
  };
  
  


  


module.exports = {
    cat_list_get,
    cat_create_post,
    cat_get,
   cat_update_put,
   cat_delete
};
