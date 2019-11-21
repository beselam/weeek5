'use strict';
// catRoute

const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const catController = require('../controllers/catController');

router.get('/', catController.cat_list_get);

router.get('/:id', catController.cat_get);

router.post('/', upload.single('cat'),catController.cat_create_post);

router.put('/', (req, res) => {
    res.send('POST request to the homepage');
});

router.delete('/', (req, res) => {
    res.send('POST request to the homepage');
});

module.exports = router;
