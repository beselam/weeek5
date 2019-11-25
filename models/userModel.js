'use strict'
const pool = require('../database/db');
const promisePool = pool.promise();


const getAllUsers = async () => {
  try {
    const [rows] = await promisePool.query('SELECT user_id, name, email FROM wop_user');
    return rows;
  } catch (e) {
    console.log('error', e.message);  
  }
};

const getUser = async (params) => {
  try {
    const [rows] = await promisePool.execute(
        'SELECT user_id, name, email FROM wop_user WHERE user_id = ?;',
        params,
    );
    return rows;
  } catch (e) {
    console.log('error', e.message);
    return {error: 'error in database query'};
  }
};

const addUser  = async (params) => {
  try {
    const [result] = await promisePool.execute(
      'INSERT INTO wop_user  (name,email,password) VALUES (?,?,?);',
      params, );
  
    return result;
  } catch (e) {
    console.log(e);
    throw('db error');
  }

};

const deletUser = async (params) => {
  try {
    const [rows] = await promisePool.execute(
        'DELETE FROM wop_user WHERE user_id = ?;',
        params,
    );
    return rows;
  } catch (e) {
    console.log('error', e.message);
    return {error: 'error in database query'};
  }
};


module.exports = {
  getAllUsers,
  getUser,
  addUser,
  deletUser
};