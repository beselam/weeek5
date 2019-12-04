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
      'INSERT INTO wop_cat  (name,age,weight,owner,filename,coords) VALUES (?,?,?,?,?,?);',
      params,
    );
    return result;
  } catch (e) {
    console.log(e);
    throw('db error');
  }

};

const updateCat = async (params) => {
  try {
    const [rows] = await promisePool.execute(
        'UPDATE wop_cat SET name = ?, age = ?, weight = ?, owner = ? WHERE cat_id = ?;',
        params);
    return rows;
  }
  catch (e) {
    console.log('error', e.message);
  }
};

const deleteCat = async (params) => {
  try {
    const [rows] = await promisePool.execute(
        'DELETE FROM wop_cat WHERE cat_id = ?;',
        params);
    return rows;
  }
  catch (e) {
    console.log('error', e.message);
  }
};

module.exports = {
  getAllCats,
  getCat,
  addCat,
  updateCat,
  deleteCat
};