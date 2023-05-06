import jwt from "jsonwebtoken";
const verifyToken = async (req, res, next) => {
  try {
    let token;
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];
      await jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
          if (err) {
            res.status(403);
            throw new Error("invalid access token");
          }
          req.user = decoded.user;
        }
      );
      next();
    } else {
      res.status(401);
      throw new Error("User not permitted...");
    }
  } catch (err) {
    console.log(err);
  }
};

export { verifyToken };
