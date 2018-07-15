const express = require('express')
const app = express()

app.listen(8000)

app.use(express.static(__dirname, { index : false }))

app.get('/go',(req,res,next) => {
  console.log('connect')
  res.sendFile(__dirname+'/index.html')
})

app.all('*',(req,res,next) => {
  console.log('bad')
  res.sendStatus(404)
})
