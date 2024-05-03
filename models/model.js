let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let ProductMOdel= new Schema({
  name:{
    type:String,
    required:true,
    trim:true,
  },
  email:{
    type:String,
    required:true,
    trim:true,
},
password:{
  type:String,
  required:true,
  trim:true,
},
role:{
  type:String,
  enum:["Student","Admin","Vistor"]
}
})

module.exports=mongoose.model('loveYou',ProductMOdel)