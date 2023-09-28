export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  return res.status(418).json({ error: err.message });
};
