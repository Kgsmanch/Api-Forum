const { json } = require('body-parser');
const { response } = require('express');
const express = require('express')
const app = express()
const router = express.Router();
const controller = require('../controllers/questions.controller')
const Questions = require('../models/Questions.model')

// router.post('/', (request, result) => {
//     const title = request.body.title;
//     const text_question = request.body.text_question;
//     try {
//         Questions.create({
//             title,
//             text_question,
//         });
//     } catch (error) {
//         console.log(error);
//     } finally {
//         result.send('Request Finished')
//     }
// })

// router.get('/show', (request, result) => {
//     const questions = Questions.findAll()
//     .then(result => {
//         result.send(teste);
//     })
//     .catch(error => {
//         console.log(error)
//     })     
//     result.send(JSON.stringify(questions, null, 2))
// })

router.get('/', controller.get);
router.post('/', controller.post);
router.put('/', controller.put);
router.delete('/', controller.delete);
module.exports = router;
