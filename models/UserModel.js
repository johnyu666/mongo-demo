const mongoose=require('mongoose')

let UserModel=mongoose.model("User",{name:String,age:Number})

module.exports=UserModel