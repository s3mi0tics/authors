const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "name is required"],
        minlength: [3, "name must be at least 3 caracters"]
    }

    //other validations here

}, {timestamps: true})

const Author = mongoose.model("Author", AuthorSchema)

module.exports = Author 