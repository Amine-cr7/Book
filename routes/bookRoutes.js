const express = require('express')

const router = express.Router()

const {getBooks,setBook,getBook,putBook,deleteBook} = require('../controllers/book')
const {protect} = require("../middlewares/authMiddleware")
router.route('/').get(protect,getBooks).post(protect,setBook)
router.route('/:id').get(protect,getBook).put(protect,putBook).delete(protect,deleteBook)

module.exports = router