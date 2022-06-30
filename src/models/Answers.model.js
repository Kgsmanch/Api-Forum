const Sequelize = require('sequelize');
const connection = require('../config/database');
// const Questions = require('./Questions.model');

const Answers = connection.define("answers", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    id_answer: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
    text: {
        type: Sequelize.STRING,
        allowNull:false,
    },
});

// Answers.sync({force: true});
module.exports = Answers;