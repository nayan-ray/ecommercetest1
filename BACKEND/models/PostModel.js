const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    //schema is a document
     title : {
        type : String,
        required : true
     },
     desc :{
        type : String,
        required : true
     },
     photo : {
        type : String,
        default : " "
     },
     username :{
        type : String,
        required : true
     },
     categories : {
        type : Array,
        default : [],
     },     
   },{timestamps : true}

)

module.exports = mongoose.model("Post" , postSchema);
//model is a collection that is an array of documents.