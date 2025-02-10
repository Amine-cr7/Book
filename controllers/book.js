const asynchandler = require('express-async-handler')
const Book = require('../models/Book')

const getBooks = asynchandler(async (req,res) => {
    const books = await Book.find()
    res.status(200).json({message:"success",books})
})

const setBook = asynchandler(async (req,res) => {
    if(!req.body){
        res.status(400)
        throw new Error("Something error");
    }
    const book = await Book.create(req.body)
    res.status(201).json(book)
})
const getBook = asynchandler(async(req,res) => {
    const book = await Book.findById(req.params.id)
    if(!book){
        res.status(404)
        throw new Error("Book not found");
        
    }
    res.status(200).json(book)
})
const putBook = asynchandler(async(req,res) => {
    const book = await Book.findById(req.params.id)
    if(!book){
        res.status(404)
        throw new Error("Book not found") 
    }
    const updateBook = await Book.updateOne({_id:req.params.id},req.body)
    res.status(200).json(updateBook)
})
const deleteBook = asynchandler(async(req,res) => {
    const book = await Book.findById(req.params.id)
    if(!book){
        res.status(404)
        throw new Error("Book not found") 
    }
    const deletedBook = await Book.deleteOne({_id:req.params.id})
    res.status(200).json({message:'success'})
})
module.exports = {
    getBooks,
    setBook,
    getBook,
    putBook,
    deleteBook
}