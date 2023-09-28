export const booksLogger = (req, res, next) => {
  console.log(`Book route accessed: ${req.method} ${req.path}`);
  next();
};
