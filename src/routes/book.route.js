const express = require('express');
const router = express.Router();
const book_controller = require('../controllers/book.controller');
router.get('/', book_controller.getAll);
router.post('/', book_controller.create);
router.put('/:id', book_controller.update);
router.delete('/:id', book_controller.delete);
module.exports = router;