"use strict"

exports.post = (request, result, next) => {
    const text = request.body.text;
    try {
        Answers.create({
            text:text,
        });
    } catch(error) {
        console.log(error);
    } finally {
        result.send('Request Answer finished');
    }
};

exports.get = (request, result, next) => {
    result.status(201).send(request.body)
}
exports.put = (request, result, next) => {
    result.status(201).send(request.body)
}
exports.delete = (request, result, next) => {
    result.status(201).send(request.body)
}