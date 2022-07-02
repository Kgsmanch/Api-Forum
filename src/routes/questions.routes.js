const { json } = require('body-parser');
const { response } = require('express');
const express = require('express')
const app = express()
const router = express.Router();
const controller = require('../controllers/questions.controller')
const Questions = require('../models/Questions.model')

router.get('/outrarota', controller.getOne);
router.get('/', controller.get);
router.post('/', controller.post);
router.put('/', controller.put);
router.delete('/', controller.delete);

module.exports = router;
