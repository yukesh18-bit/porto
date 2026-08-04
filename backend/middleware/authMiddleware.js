const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token;

  // Check token in header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, "acadfolio_secret");

      // Save user id in request
      req.user = decoded;

      next();
    } catch (error) {
      return res.status(401).json({
        message: "Invalid Token",
      });
    }
  }

  if (!token) {
    return res.status(401).json({
      message: "No Token, Authorization Denied",
    });
  }
};

module.exports = protect;