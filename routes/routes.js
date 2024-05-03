let express=require('express')

let router=express.Router()

let{singup,login}=require('../controller/signup')

let{auth,isStudent,isAdmin}=require('../middleware/middle')

router.post('/sign',singup)
router.post('/login',login)




router.get('/test',auth,(req,res)=>{
  res.status(200).json({
    success:true,
    message:"you are in test portel"
  })
})

router.get('/student',auth,isStudent,(req,res)=>{res.json({

success:true,
message:"welcome to the student portel"
})})



router.get('/admin',auth,isAdmin,(req,res)=>{
  res.json({
  success:true,
  message:"you are in admin portel"




  })
})
module.exports=router