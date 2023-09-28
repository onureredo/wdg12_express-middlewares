import express from 'express';
import {
  addNewBook,
  deleteBook,
  getAllbooks,
  getBookById,
  updateBook,
} from '../controllers/books.js';
import { booksLogger } from '../middlewares/booksLogger.js';

const booksRouter = express.Router();
// booksRouter.use(booksLogger);

booksRouter.route('/').get(getAllbooks).post(addNewBook);
booksRouter
  .route('/:id')
  .get(booksLogger, getBookById)
  .put(updateBook)
  .delete(deleteBook);

export default booksRouter;
