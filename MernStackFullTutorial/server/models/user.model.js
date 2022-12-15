const mongoose=require('mongoose');


const User= new mongoose.Schema({

    name:{type:String,required:true},
    password:{type:String,required:true,unique:true},
    quote:{type:String}
},

    {collection:'user-data'}

)

const model=moongose.model('UserData',user)

module.exports=model
