const { type } = require('express/lib/response');
const mongoose  = require('mongoose')
const Schema = mongoose.Schema;



/// categoris > field => ['type 'color ]

const categories_model = new Schema({
 
     type: {type:String, default:"investment"},
     color: {type:String, default:"FCBE44"},


})

 
 

// transaction 

const transtion_model = new Schema({ 
    name:{type:String , default:"Anonymus"},
    type:{type:String , default:"investment"},
    amount:{type:Number},   
    date:{type:Date, default:Date.now}

})



const Category =  mongoose.model('categorys', categories_model)

const Transtion = mongoose.model('transtion', transtion_model)

exports.default = Transtion

module.exports = {
    Category,
    Transtion

}


  



 
