const express = require("express");
const mongoose=require("mongoose")

const app = express();

mongoose.connect('mongodb://127.0.0.1/LearningPlatform').then(()=>console.log("Connection is SucessFull!"))
.catch(err=>console.log("Error ",err))

const categories=require("./Routes/catgeories")
const students=require("./Routes/students")
app.use(express.json());

const port = 3000;
app.use('/api/categories',categories)
app.use('/api/students',students)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
