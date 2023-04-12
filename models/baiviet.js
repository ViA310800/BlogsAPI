const mongoose=require('mongoose');
const NguoiDungSchema=mongoose.Schema(
    {   
        tennguoidung:{
            type:String,
        },
        anhdaidien:{
            type:String,
        },
        ngaydangbai:{
            type:String, 
        },
        noidungbaiviet:String,
        anhbaiviet:String,
        songuoithich:String,
    }

)
module.exports=mongoose.model("nguoidung",NguoiDungSchema)