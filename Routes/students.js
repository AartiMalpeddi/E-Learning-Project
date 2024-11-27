const express=require("express")
const {Student,validateData}=require("../Models/StudentModel")

const app=express.Router()
// const categories = [
//     { id: 1, name: "Web Development" },
//     { id: 2, name: "Mobile" },
//     { id: 3, name: "Machine Learning" },
//   ];
  
app.get('/', async(req, res) => {
    let students=await Student.find()  
    res.json({ students });
  });
  
  app.post('/', async(req, res) => {
    const {error}=validateData(req.body)
    if(error) res.status(400).json(error.details[0].message)
    else{
      const student = new Student({
        name:req.body.name,
        isEnrolled:req.body.isEnrolled,
        PhoneNo:req.body.PhoneNo
      })
     await student.save();
      res.send(student);}
  });
  
  app.put('/:id', async(req, res) => {
    const {error}=validateData(req.body)
    if(error) res.status(400).json(error.details[0].message)
    const student = await Student.findByIdAndUpdate(req.params.id,{name:req.body.name,isEnrolled:req.body.isEnrolled,PhoneNo:req.body.PhoneNo},{new:true});
    if (!student) {
      return res.status(404).send('student was not found');
    }
    student.name = req.body.name;
    res.send(student);
  });
  
  app.delete('/:id',async (req, res) => {
    const student =await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).send('student was not found');
    }
    res.send(student);
  });
  
  app.get('/:id', async(req, res) => {
      const student = await Student.findById(req.params.id);
      if (!student) {
        return res.status(404).send('Category was not found');
      }
    
      res.send(student);
    });




module.exports=app