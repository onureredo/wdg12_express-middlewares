export const getOnlyMiddleware = (req, res, next) => {
  if (req.method !== 'GET') {
    return res.status(403).send('only GET request is allowed');
  }
  next();
};
