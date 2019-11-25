'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();


const getAllCats = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM wop_cat');
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};

const getCat = async (params) => {
  try {
    const [rows] = await promisePool.execute(
        'SELECT * FROM wop_cat WHERE cat_id = ?;',
        params,
    );
    return rows;
  } catch (e) {
    console.log('error', e.message);
    return {error: 'error in database query'};
  }
};

const addCat  = async (params) => {
  try {
    const [result] = await promisePool.execute(
      'INSERT INTO wop_cat  (name,age,weight,owner,filename) VALUES (?,?,?,?,?);',
      params,
    );
    return result;
  } catch (e) {
    console.log(e);
    throw('db error');
  }

};
//UPDATE `wop_cat` SET `name` = 'catyyyy', `age` = '7', `weight` = '3', `owner` = '2' WHERE `wop_cat`.`cat_id` = 7;
const updateCat  = async (params) => {
  try {
    const [result] = await promisePool.query(
     `UPDATE wop_cat SET name = ${params.name} , age= ${params.age}, weight =${params.weight} , owner =${params.owner} WHERE wop_cat.cat_id = ${params.cat_id}; `
    );
    return result;
  } catch (e) {
    console.log(e);
    throw('db error');
  } 

};


module.exports = {
  getAllCats,
  getCat,
  addCat,
  updateCat
};