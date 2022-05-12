const express=require("express")
const app=express()
const {connection}=require('./db/dbConnect')
const UserModel=require('./models/UserModel')
const {findAllUsers,addUser,deleteUser,updateUser} =require('./controllers/UserController')

app.use(express.json())
app.get('/users',findAllUsers)
app.post('/users',addUser)
app.delete('/users/:id',deleteUser)
app.put('/users/:id',updateUser)

connection.on('connected',(error)=>{
    if(!error){
        console.log("mongodb 连接成功！")
        app.listen(3000,()=>{
            console.log("express 服务启动！")
        })
    }
})