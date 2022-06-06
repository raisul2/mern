const { deleteModel } = require('mongoose')
const model = require('../model/model')





/// get categorys 

//// post :https://localhost:8080/api/categories

async function create_categorys(req, res) { 
     
    const Create = new model.Category({

        type:"Saving",
        color:"#1F3B5C"//drk 
          
    })      

   await  Create.save(function(err) {
        if (!err) return res.json(Create)
        return res.status(400).json({message:`Error While creating categories${err}`})
    })
 
}
 
//// get :https://localhost:8080/api/categories

 async function get_Categories(req, res) {
    
    let data = await model.Category.find({})

   let filter =  await  data.map(v=> Object.assign({}, {type: v.type, color:v.color}))  

         return res.json(filter)  


 } 


//// //// post :https://localhost:8080/api/tranction
 async function  create_Transaction(req, res) {
     
     let { name, type, amount } = req.body
           
       
         if (!req.body) return res.status(4000).json("Post HTTP Data not Provide")

         const create = await new model.Transtion({
             name,
             type, 
             amount,
             data:new Date()
         })


         create.save(function(err) {
             if (!err)  return res.json(create)
              return res.status(400).json({message:`Error While creating transaction ${err}`}) 
         })

 }



 //// ////get :https://localhost:8080/api/tranction


 async function  get_Transaction(req, res) {
     
     let data = await model.Transtion.find({})

       

      return res.json(data)
      
   
} 



// ////get :https://localhost:8080/api/tranction


async function delet_tansation(req, res) {
 

    if(!req.body) res.status(400).json({message:'Reauest body not found'})

     await model.Transtion.deleteOne(req.body, function(err) {

        if(!err) return res.json("Record Deleted..!")

         
     }).clone().catch(function(err) {
         "Error While deleting Transactiin Recode"
     })

}


//get :https://localhost:8080/api/labels

async function get_Lables(req,res) {
    
   model.Transtion.aggregate([
        
    { 
           
        $lookup:{
             from:"categorys",
             localField:'type',
             foreignField:"type",
             as:"cate_info" 
        }
    },
        
    {

           $unwind:"$cate_info"

        }
    

]).then(data => {
     res.json(data)
}).catch(err=>{
    res.status(400).json("Lookup Collection Error")
})
}


module.exports ={
    create_categorys,
    get_Categories,
    create_Transaction,
    get_Transaction,
    delet_tansation,
    get_Lables
}