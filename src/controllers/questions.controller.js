"use strict"
const Questions = require('../models/Questions.model')
const database = require('../config/database')

exports.get = (request, result, next) => {
    Questions.sync()
    .then(function() {
      return Questions.findAll();
    })
    .then(function(questions) {
        result.json(questions);
     })
  };
  
exports.getOne =  (request, result, next) => {
    const findId = request.body.id
    if (findId === undefined) {
        result.send('undefinded request')
    } else {
        Questions.sync({alter:false}).then(() => {
    return Questions.findOne({
            where: {
            id:request.body.id,
            }
    }).then((data) => {
          result.send(data);
    })
  })}
};

exports.post = (request, result, next) => {
    const title = request.body.title;
    const text_question = request.body.text_question;
    try {
        Questions.create({
            title,
            text_question,
        });
    } catch (error) {
        console.log(error);
    } finally {
        result.send('Request Finished')
    };
};

exports.put = (request, result, next) => {
    result.status(201).send(request.body);
};

exports.delete = (request, result, next) => {
    result.status(201).send(request.body);
};
