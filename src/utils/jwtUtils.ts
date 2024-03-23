import jwt from "jsonwebtoken";

const expiresIn = "1d";
const secret = "badhjba7eeg7";

export const makeToken = (payload: any) => {
  const token = jwt.sign({ ...payload }, secret, { expiresIn: expiresIn });

  return token;
};

export const decodeToken = (token: string) => {
  return jwt.verify(token, secret);
};

export const checkToken = async (req: any) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  return token;
};
