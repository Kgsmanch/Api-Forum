"use strict"

exports.get = (request, result, next) => {
    result.status(201).send(request.body);
};
exports.post = (request, result, next) => {
    result.status(201).send(request.body);
};

exports.put = (request, result, next) => {
    result.status(201).send(request.body);
};

exports.delete = (request, result, next) => {
    result.status(201).send(request.body);
};
