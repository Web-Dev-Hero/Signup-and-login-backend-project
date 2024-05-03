let express= require('express');
let app=express();
require('dotenv').config();
let router=require('./routes/routes')

let dbconnect=require('./config/database')

let port=process.env.PORT|| 6000

app.use(express.json())
app.use('/api/v1',router)

app.listen(port,()=>{
  console.log(`your server is runing is portno->${port}`)
})

dbconnect()





