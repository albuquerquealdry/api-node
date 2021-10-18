const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./routers/userRoute')

const app = express()
port = 3000
app.use(bodyParser.urlencoded({ extended:false }))


userRoute(app)
app.listen(port,()=>console.log('A API TÁ RODANDO'))
app.get ('/',(res,req)=>(req.send('TESTE API')))
