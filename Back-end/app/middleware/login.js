const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  /** Se não tiver token, devolve 401-Unauthorized */
  if (token == null) return res.sendStatus(401);

  /** Se o token expirar por exemplo, devolve 403-Forbidden, senão passa o user e o next faz continuar a execução da função onde está é chamada, acho eu */
  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
