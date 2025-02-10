const express = require('express')

const router = express.Router()

const {getBooks,setBook,getBook,putBook,deleteBook} = require('../controllers/book')

router.route('/').get(getBooks).post(setBook)
router.route('/:id').get(getBook).put(putBook).delete(deleteBook)

module.exports = router