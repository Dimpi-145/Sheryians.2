const express = require("express");

const app = express() //server instace create karna

app.get('/', (req, res)=>{
    res.send("hello world")
})

app.get('/about', (req, res)=>{
    res.send("this is about page")
})
app.get('/home', (req, res)=>{
    res.send("this is home page")
})


app.listen(3000,  ()=>{
    console.log("server is running on port 3000")
})
