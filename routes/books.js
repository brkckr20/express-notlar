const express = require("express");
const router = express.Router();
const Book = require("../models/Books")

//http://localhost:4000/books URL'INE GELEN ISTEKLERIN BU ROUTE DA KARSILANMASI

router.get('/', (req, res) => { //   http://localhost:4000/books
    Book.find().then(data => {
        res.json(data)
    }).catch(err => {
        res.json({
            message: err
        })
    })
})

router.post('/', (req, res) => { //POST İŞLEMİ
    const book = new Book({
        title: req.body.title,
        description: req.body.description
    })

    book.save()
        .then(data => { res.json({ data }) })
        .catch(err => { res.json({ message: err }) });
})

router.delete('/:id', (req, res) => {
    Book.deleteOne({
        _id: req.params.id
    })
        .then(data => {
            res.json({ data })
        }).catch(err => {
            res.json({ message: err })
        })
})

router.patch('/:id', (req, res) => {
    Book.updateOne({ _id: req.params.id }, {
        $set: {
            description: req.body.description
        }
    }).then(data => {
        res.json({ data })
    })
        .catch(err => {
            res.json({
                message: err
            })
        })
})

module.exports = router;