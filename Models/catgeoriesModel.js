const joi=require("joi")
// const { required } = require("joi/lib/types/lazy")

const mongoose=require("mongoose")


const categorySchema=new mongoose.Schema({
  name:{type:String,required:true,minlength:3,maxlength:30}
})
const Category=mongoose.model('Category',categorySchema)

function validateData(category)
{
  const schema={
    name:joi.string().min(3).required()

  }
  return joi.validate(category,schema)
}

module.exports={Category,validateData,categorySchema}