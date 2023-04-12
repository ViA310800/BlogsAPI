const express = require('express');
const router=express.Router();



const baiviet = require('../models/baiviet');
router.get("/", async(req,res)=>{
    try{
        const baiviets=await baiviet.find();
        res.json(baiviets);
    }
    catch(err){
        res.json({message:err})
    }
});