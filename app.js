const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const booksRoute = require('./routes/books.js')
const mongoose = require("mongoose");

//  DATABASE CONNECTION //


app.use(cors());
app.use(bodyParser.json()); // gelen isteklerin json formatına dönüştürülmesi

app.use('/books', booksRoute); //tarayıcıda http://localhost:4000/books urlindeki isteklerin yönetilmesi işlemleri

/* ANASAYFAYA GELEN İSTEKLER */
app.get('/', (req, res) => {
    res.send("Merhaba")
})


mongoose.connect('mongodb://localhost:27017/books', (e)=>{
    console.log("Mongo DB bağlantısı başarılı");
}).catch(err=>{
    console.log(err);
})

app.listen(4000, () => {
    console.log(`http://localhost:4000`);
})