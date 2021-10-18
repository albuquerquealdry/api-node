const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
const userRoute = require('./routers/userRoute')
userRoute(app)

//METODOS

app.get('/', (req,res)=> res.send('Hello World'))
app.use(bodyParser.urlencoded({extended:false}))

//BACKLOG
app.listen(port,() => console.log('API FUNCIONANDO'))