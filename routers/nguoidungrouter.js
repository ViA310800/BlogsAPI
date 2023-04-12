const express = require('express');
const router=express.Router();



const nguoidung=require('../models/nguoidung');
router.get("/", async(req,res)=>{
    try{
        const nguoidungs=await nguoidung.find();
        res.json(nguoidungs);
    }
    catch(err){
        res.json({message:err})
    }
});
router.post("/login", async(req,res)=>{
    try{
        
        const nguoidungs=await nguoidung.find().where('tendangnhap').equals(req.body.tendangnhap).where('matkhau').equals(req.body.matkhau);
        console.log(nguoidungs);
        res.json(nguoidungs);
    }
    catch(err){
        res.json({message:err})
    }
}); 
router.post("/",async(req,res)=>{
    const nguoidungs= new nguoidung({
        tennguoidung:req.body.tennguoidung,
        tendangnhap:req.body.tendangnhap,
        matkhau:req.body.matkhau,
        sodienthoai:req.body.sodienthoai,
        email:req.body.email
    });
    console.log(nguoidungs);
    try
    {
        const nguoidungssave=await nguoidungs.save();
        res.json(nguoidungssave);
    }
    catch(err)
    {
        res.json({message:err})
    }
})
module.exports=router;