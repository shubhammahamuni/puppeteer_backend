
const express = require('express');
const puppeteer = require('puppeteer');
const getlikes = require('./Test');



const app = express();
const PORT =8085;

const Url="";

// app.get('/likes' ,(req,res)=>{

//     const person ={name:"shubham", age:"24"}

//     res.json(person);
// })

app.use(
    express.urlencoded({
      extended: true
    })
  )
  
  app.use(express.json())




  app.post("/find" ,async (req,res)=>{
    
    res.status =200;
    console.dir(req.body.url);

    const like =await getlikes(req.body.url)
    


    res.json(like);
    
    })  


app.listen(PORT);



