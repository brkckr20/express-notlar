const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({ // BOOK ILE ILGILI MODELIN OLUSTURULMASI ISLEMI
    title: { //FIELD ALANI
        type: String,
        required: true
    },
    description: { //FIELD ALANI
        type: String
    },
    created: { type: Date, default: Date.now },
    addedUser : {
        type : String
    }
})

module.exports = mongoose.model('Books', BookSchema)