'use strict';
// catRoute
const express = require('express');
const router = express.Router();

const catController = require('../controllers/catController');

router.get('/', catController.cat_list_get);

router.get('/:id', (req, res) => {
    res.send('you requested a cat whose id is' + req.params.id);
});

router.post('/', (req, res) => {
    res.send('POST request to the homepage');
});

router.put('/', (req, res) => {
    res.send('POST request to the homepage');
});

router.delete('/', (req, res) => {
    res.send('POST request to the homepage');
});

module.exports = router;
