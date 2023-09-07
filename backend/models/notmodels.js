const mongoose = require("mongoose")

const NoteSchema = new mongoose.Schema({
    baslik: {
        type: String,
        required: true
    },
    aciklama: {
        type: String
    },
    kullanici_id:{
    type:String,
    required:true
  }
}, { timestamps: true })

module.exports = mongoose.model("Not", NoteSchema)