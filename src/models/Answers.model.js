const Sequelize = require('sequelize');
const database = require('../config/database');

const Answers = database.define("answers", {
    bodyAnswer: {
        type: Sequelize.STRING,
        allowNull:false
    },
    questionId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

Answers.sync({force: false}).then(() => {});

module.exports = Answers;