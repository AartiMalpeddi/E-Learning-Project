const joi=require("joi")
const mongoose=require("mongoose")
const {categorySchema}=require("./catgeoriesModel")
const { required } = require("joi/lib/types/lazy")


const courceSchema=new mongoose.Schema({
  title:{type:String,required:true,trim:true,minlength:3,maxlength:30},
  category:{
    type:categorySchema,
    required:true
  },
  creator:{
    type:String,required:true,minlength:10,maxlength:20
  },
  rating:{
    type:Number,
    required:true
  }
})
const Cource=mongoose.model('Cource',courceSchema)

function validateData(cource)
{
  const schema={
    name:joi.string().min(3).max(30).required(),
    categoryId:joi.string().required(),
    creator:joi.string().required(),
    rating:joi.number().min(0).max(9).required()
  }
  return joi.validate(cource,schema)
}

module.exports={Cource,validateData}