const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const answers = require("./src/routes/answers.routes")
const questions = require("./src/routes/questions.routes")

//Config
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//Routes
app.use('/answers', answers);
app.use('/questions', questions);

//server
app.listen(port, (error) => {
  if (error) {
    console.log('Error conection')
  }else {
    console.log(`Example app listening on port ${port}`)}
})

