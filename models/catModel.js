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

const addCat  = async (name,age,weight,owner,filename) => {
  try {
    const [result] = await promisePool.execute(
      'INSERT INTO wop_user  (name,age,weight,owner,filename) VALUES (?,?,?,?,?)',
      [name,age,weight,owner,filename]
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
  addCat
};