import { makeToken, decodeToken, checkToken } from "../utils/jwtUtils";
import User from "../models/user";

export const checkUserLoggedIn = async (req: any, res: any, next: any) => {
  try {
    const token = await checkToken(req);

    if (!token) {
      return res.status(401).json({ message: "Please log in" });
    }

    let decoded;

    try {
      decoded = decodeToken(token);
    } catch (error) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }

    req.user = decoded;

    return next();
  } catch (error) {
    return res.status(500).json({
      message: "Unauthorized",
    });
  }
};
