const express=require("express")

const {Category,validateData}=require('../Models/catgeoriesModel')
// const categories = [
//     { id: 1, name: "Web Development" },
//     { id: 2, name: "Mobile" },
//     { id: 3, name: "Machine Learning" },
//   ];
  
const app=express.Router()
  app.get('/', async(req, res) => {
    let categories=await Category.find()  
    res.json({ categories });
  });
  
  app.post('/', async(req, res) => {
    const {error}=validateData(req.body)
    if(error) res.status(400).json(error.details[0].message)
    else{
      const category = new Category({
        name:req.body.name
      })
     await category.save();
      res.send(category);}
  });
  
  app.put('/:id', async(req, res) => {
    const {error}=validateData(req.body)
    if(error) res.status(400).json(error.details[0].message)
    const category = await Category.findByIdAndUpdate(req.params.id,{name:req.body.name},{new:true});
    if (!category) {
      return res.status(404).send('Category was not found');
    }
    category.name = req.body.name;
    res.send(category);
  });
  
  app.delete('/:id',async (req, res) => {
    const category =await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).send('Category was not found');
    }
    res.send(category);
  });
  
  app.get('/:id', async(req, res) => {
      const category = await Category.findById(req.params.id);
      if (!category) {
        return res.status(404).send('Category was not found');
      }
    
      res.send(category);
    });




module.exports=app