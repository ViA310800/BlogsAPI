const express = require('express')
const cors = require('cors');
const app = express()
const bodyParser = require('body-parser');
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))
const mongoose= require('mongoose');
mongoose.connect('mongodb+srv://nguyenkhoi3100:0903723499KN@nguyenkyra.vrvrgaa.mongodb.net/Blogs?retryWrites=true&w=majority',{useNewUrlParser: true}).catch(err=>console.log(err.reason));


const nguoidungrouter=require("./routers/nguoidungrouter");
app.use('/nguoidung',nguoidungrouter);


app.get('/',(req,res)=>{
    res.send("Home");
})
app.get('/cors',(req,res)=>{
    res.set('Access-Control-Allow-Origin', '*');
    res.send({"msg":"This Cors Enable"});
})
app.listen(3000);