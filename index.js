const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

//Config
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const Sequelize = require('sequelize');

//Routes
const answers = require("./src/routes/answers.routes")
const questions = require("./src/routes/questions.routes")
app.use('/answers', answers);
app.use('/questions', questions);

//test


//server
app.listen(port, (error) => {
  if (error) {
    console.log('Error conection')
  }else {
    console.log(`Example app listening on port ${port}`)}
})





