const Sequelize = require('sequelize');
const connection = require('../config/database');

const Questions = connection.define('questions', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    id_question: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
    title: {
        type: Sequelize.STRING,
        allowNull:false,
        validate: {
            len: [2, 250]
        },
    },  
    text_question: {
        type: Sequelize.STRING,
        allowNull:false,
    },
});
// Questions.sync({force:true});

module.exports = Questions;
