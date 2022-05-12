

const UserModel=require('../models/UserModel')

exports.findAllUsers=function(req,res){
    UserModel.find()
    .then(users=>res.json(users))
}

exports.addUser=function(req,res){
    let user=req.body
    UserModel.create(user,function(err,u){
        console.log(u)
        res.json(u)
    })
}

exports.deleteUser=function(request,response){
    let _id=request.params.id;
    UserModel.deleteOne({_id},function(err){
        if(!err){
            response.json({code:200,info:"删除成功",body:{}})
        }
        
    })
}

exports.updateUser=function(req,res){
    let id=req.params.id;
    UserModel.findByIdAndUpdate(id,req.body,{new:true},function(err,user){
        if(!err){
            res.json({code:200,info:"更新成功",body:user})
        }
    })
}