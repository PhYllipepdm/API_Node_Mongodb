const express = require('express');
const mongoose = require("mongoose")

const app = express();
app.use(express.json()) //PARA CONSEGUIR LER UMA REQUISÃO COM OS DADOS JSON
const port = 3000;


const Product = mongoose.model('Product',{
    name: String,
    description:String,
    price: Number,
    quantity: Number
});

//Rota GET raiz
app.get('/', async (req, res) =>{
  const products = await Product.find()
  res.send(products)
})

app.put("/:id", async(req , res)=>{
  const product = await Product.findByIdAndUpdate(req.params.id,{
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity
  },{
    new: true
  })
  return res.send(product)
})

app.delete("/:id", async(req, res)=>{
  const product = await Product.findByIdAndDelete(req.params.id)
  return res.send(product)
})

//Rota POST para criar um novo produto
app.post("/", async (req,res)=>{
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity
  })

  await product.save()
  res.send(product)
})

app.listen(port, ()=>{
  mongoose.connect("mongodb+srv://felipeemanoeljkk:nE84KbA5rBjwKb7c@cluster0.wlavfsm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  console.log('App running')
})
