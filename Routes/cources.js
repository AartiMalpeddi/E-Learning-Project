const express=require("express")
const {Cource,validateData}=require("../Models/courceModel");
const { Category } = require("../Models/catgeoriesModel");

const app=express.Router()
// const categories = [
//     { id: 1, name: "Web Development" },
//     { id: 2, name: "Mobile" },
//     { id: 3, name: "Machine Learning" },
//   ];
  
app.get('/', async(req, res) => {
    const cources=await Cource.find()  
    res.json({ cources });
  });
  
  app.post('/', async(req, res) => {
    const {error}=validateData(req.body)
    if(error) res.status(400).json(error.details[0].message)

    const category= await Category.findById(req.body.categoryId)
   if(!category) return res.status(400).send('invalid id')

    let cource=new Cource({
      title:req.body.title,
      category:{
        _id:category._id,
        name:category.name
      },
      creator:req.body.creator,
      rating:req.body.creator

    })
    cource=await cource.save()
    res.send(cource)
  });
  
  app.put('/:id', async(req, res) => {
    const {error}=validateData(req.body)
    if(error) res.status(400).json(error.details[0].message)

      const category= await Category.findById(req.body.categoryId)
   if(!category) return res.status(400).send('invalid id')
    let cource=new Cource({
      title:req.body.title,
      category:{
        _id:category._id,
        name:category.name
      },
      creator:req.body.creator,
      rating:req.body.creator

    })
    cource=await cource.save()
    res.send(cource)
   
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