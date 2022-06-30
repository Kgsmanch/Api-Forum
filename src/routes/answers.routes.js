const express = require('express')
const app = express()
const router = express.Router();
const Answers = require('../models/Answers.model');
const controller = require('../controllers/answers.controller')



// router.get('/findAll', (request, result) => {
    
// })

router.get('/', controller.get);
router.post('/', controller.post);
router.put('/', controller.put);
router.delete('/', controller.delete);


module.exports = router;
