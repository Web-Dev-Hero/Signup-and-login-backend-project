let mongoose=require('mongoose')
require('dotenv').config()
let dbconnect=()=>{
  mongoose.connect(process.env.DATABASE_URL)

  .then(()=>console.log('your connection is successfully connect in database'))

  .catch((err)=>{
    console.log(err)
    process.exit(1)
  })
}

module.exports=dbconnect;