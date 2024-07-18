const mongoose=require('mongoose');


const Schema=new mongoose.Schema({
    name:{
        type:String,
        Required:true,
    },
    desc:{
        type:String,
        Required:true,
    }
})

const Crud=mongoose.model('Crud',Schema);

module.exports=Crud;