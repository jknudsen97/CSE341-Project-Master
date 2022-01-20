//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

const ta03Controller = require('../controllers/ta03-controller');

router.get('/');

router.get('/', ta03Controller.getAllData);

module.exports = router;
