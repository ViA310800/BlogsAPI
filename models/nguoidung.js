const mongoose=require('mongoose');
const NguoiDungSchema=mongoose.Schema(
    {
        tennguoidung:{
            type:String,
            require:true
        },
        tendangnhap:{
            type:String,
            require:true
        },
        matkhau:{
            type:String,
            require:true    
        },
        email:String,
    }

)
module.exports=mongoose.model("nguoidung",NguoiDungSchema)