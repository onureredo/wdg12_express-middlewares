export const signUp = (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    res.json({
      message: 'user registered successfully',
      user: { username },
    });
  } else {
    res.status(400).json({ message: 'missing username or password' });
  }
};

export const signIn = (req, res) => {
  const { username, password } = req.body;

  if (username === 'someone' && password === 'something') {
    res.json({
      message: 'user logged in',
      user: { username },
    });
  } else {
    res.status(401).json({ message: 'invalid username or password' });
  }
};
