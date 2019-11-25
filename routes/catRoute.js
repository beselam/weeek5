'use strict';
// catRoute

const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const catController = require('../controllers/catController');

const bodyParser = require('body-parser');

// support parsing of application/json type post data
router.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
router.use(bodyParser.urlencoded({ extended: true }));


router.get('/', catController.cat_list_get);

router.get('/:id', catController.cat_get);

router.post('/', upload.single('cat'),catController.cat_create_post);

router.put('/',catController.cat_create_update);

router.delete('/', (req, res) => {
    res.send('POST request to the homepage');
});

module.exports = router;
