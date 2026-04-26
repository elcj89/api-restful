module.exports = (req, res, next) => {
  const key = req.headers['x-api-key'];
  if (key === '123456') next();
  else res.status(403).json({ error: 'API KEY inválida' });
};
