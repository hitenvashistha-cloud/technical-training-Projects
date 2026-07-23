const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect("mongodb+srv://yt:UMLMCHJ2gPib9mRM@cluster0.crgkwbs.mongodb.net/hally");
    console.log("Connected to Database");
}

module.exports = connectDB