// const mongoose=require('mongoose')
// const {UserModel}=require("./models/MyModels")

// // let UserSchema=new mongoose.Schema({name:String,age:Number})
// // let UserModel=mongoose.model("User",UserSchema);

// async function findAllUsers(){
//     await mongoose.connect("mongodb://localhost:27017/test3")
//     let user=await  UserModel.find()
//     return user
// }

// async function loadUser(id){
//     await mongoose.connect("mongodb://localhost:27017/test3")
//     let user=await  UserModel.find()
//     return user
// }
// findAllUsers().then(user=>{
//     console.log(user)
//     mongoose.disconnect()
// })

const {connection}=require('./db/dbConnect')
const UserModel=require('./models/UserModel')

connection.on("connected",()=>{
    console.log("数据库连接成成功!")
    UserModel.findOne()
    .then(users=>{
        console.log(users)
        connection.close()
    })
})



