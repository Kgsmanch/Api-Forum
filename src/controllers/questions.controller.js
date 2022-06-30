"use strict"
const Questions = require('../models/Questions.model')

exports.get = (request, result, next) => {
    result.status(201).send(request.body);
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
    }
}

exports.put = (request, result, next) => {
    result.status(201).send(request.body);
};

exports.delete = (request, result, next) => {
    result.status(201).send(request.body);
};
