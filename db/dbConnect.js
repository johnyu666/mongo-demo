const mongoose=require('mongoose')
const {dbUrl}=require('../config')
mongoose.connect(dbUrl)
exports.connection=mongoose.connection
