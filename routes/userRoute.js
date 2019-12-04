'use strict';

const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

const bodyParser = require('body-parser');

// support parsing of application/json type post data
router.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', userController.user_list_get);



router.get('/:id', userController.user_get);

router.delete('/:id', userController.user_delete);



router.post('/', userController.user_create_post);



router.put('/', (req, res) => {

    res.send('With this endpoint you can modify users.');

});



router.delete('/', (req, res) => {

    res.send('With this endpoint you can delete users.');

});



module.exports = router;