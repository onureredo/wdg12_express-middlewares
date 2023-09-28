export const checkUser = (req, res, next) => {
  const { username, password } = req.body;

  if (username === 'someone' && password === 'something') {
    next();
  } else {
    throw new Error('invalid credentials');
  }
  next();
};
