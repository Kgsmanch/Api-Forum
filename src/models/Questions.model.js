const Sequelize = require('sequelize');
const database = require('../config/database');

const Questions = database.define('questions', {
    title: {
        type: Sequelize.STRING,
        allowNull:false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull:false
    }
});

Questions.sync({force:false}).then(() => {});

module.exports = Questions;
