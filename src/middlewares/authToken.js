const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = process.env;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;

const authToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res.status(UNAUTHORIZED).json({ message: "Token not found" });
  }

  try {
    const user = jwt.verify(token, JWT_SECRET_KEY);
    req.user = user;
    next();
  } catch (error) {
    res.status(FORBIDDEN).json({ message: "Invalid token" });
  }
};

module.exports = authToken;
