import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

//create hash str
export const hashString = async (useValue) => {
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(useValue, salt);
  return hashedpassword;
};

//compare hash str with nohash str
export const compareString = async (userPassword, password) => {
  const isMatch = await bcrypt.compare(userPassword, password);
  return isMatch;
};

//JSON WEBTOKEN

export function createJWT(id) {
  return JWT.sign({ userId: id }, process.env.JWT_SECRET_KEY);
  // return JWT.sign({ userId: id }, process.env.JWT_SECRET_KEY, {
  //   expiresIn: "7d",
  // });
}
