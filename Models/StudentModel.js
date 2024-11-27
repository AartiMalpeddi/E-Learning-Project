const joi=require("joi")
// const { required } = require("joi/lib/types/lazy")

const mongoose=require("mongoose")



const studentSchema=new mongoose.Schema({
  name:{type:String,required:true,minlength:3,maxlength:30},
  isEnrolled:{
    type:Boolean,
    default:false,
  },
  PhoneNo:{
    type:String,required:true,minlength:10,maxlength:20
  }
})
const Student=mongoose.model('Student',studentSchema)

function validateData(student)
{
  const schema={
    name:joi.string().min(3).max(30).required(),
    PhoneNo:joi.string().min(3).max(10).required(),
    isEnrolled:joi.boolean()
  }
  return joi.validate(student,schema)
}

module.exports={Student,validateData}