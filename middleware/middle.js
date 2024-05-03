


let jwt= require('jsonwebtoken')

require('dotenv').config()

exports.auth=async(req,res,next)=>{
try{

let token=req.body.token


if(!token){
  return res.status(400).json({
    success:false,
    message:"token is missing"
  })
}

try{

  let decode=jwt.verify(token,process.env.JWT_SECRET)
  console.log(decode)

  req.Data=decode


}
catch(err){
  return res.status(401).json({
    success:false,
    message:"token is invaild"
  })

}









next()  
}
catch(err){
  return res.status(500).json({
    success:false,
    message:err.message
  })
}
}


exports.isStudent=async(req,res,next)=>{
try{

if(req.Data.role !== "Student"){
  return res.status(400).json({
    success:false,
    message:'this is protected for student'
  })
}






next()  
}

catch(err){
  return res.status(501).json({
    status:false,
    message:err.message
  })
}

}



exports.isAdmin=async(req,res,next)=>{
try{

  if(req.Data.role !== "Admin"){
    return res.status(400).json({
      success:false,
      message:"this is protected for admin portel"
    })
  }





  next()
}


catch(err){
  return res.status(501).json({
    status:false,
    message:err.message
  })
}



}