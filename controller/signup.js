let User=require('../models/model')
let bycrpt=require('bcrypt')
require('dotenv').config()
let jwt=require('jsonwebtoken')

exports.singup=async(req,res)=>{

try{
  let{name,email,password,role}=req.body

  let Data= await User.findOne({email})
  if(Data){
    return res.status(400).json({
      success:false,
      message:"this email allready is resgister in database"
  
    })
  }

  if(!password){
    return res.status(400).json({
      success:false,
      message:"you are not create on password on fields"
  
    })
  }
  
let hashPass=await bycrpt.hash(password,10)

let result= await User.create({name,email,password:hashPass,role})

return res.status(200).json({
  success:true,
  data:result,
  message:"your data is successfully created"

})

  
}




catch(err){
  console.log(err)
  res.status(500).json({
    success:false,
    message:err.message
  })
}
}



//// login 


exports.login=async(req,res)=>{

  try{

    let{email,password}=req.body;

    let Data=await User.findOne({email})
    
    if(!Data){
      return res.status(400).json({
        success:false,
        message:"this email not register in site please first you signup"
      })
    }

    if(!email || !password){
      return res.status(400).json({
        success:false,
        message:"please fill the email and passworld field"
      })
    }
    
   let data={
 
     email:Data.email,
     id:Data._id,
     role:Data.role

  }



    if(await bycrpt.compare(password,Data.password))
    {

     let token= jwt.sign(data,process.env.JWT_SECRET,{expiresIn:'2h'})

     Data=Data.toObject();
     Data.token=token;
     Data.password=undefined

     let option={
      expires:new Date(Date.now()+3*24*3600*1000),
     httpOnly:true



     }

     res.cookie('cookie',token,option).status(200).json({
      success:true,
      token,
      Data,
      message:"your create data is create is sucessfully"
     })





    }
    else{
      return res.status(400).json({
        success:false,
        message:"your password is incorrect"
      })
    }
    
}



catch(err){
  res.status(500).json({
    success:false,
    message:"sone internal server problem"
  })
}




}