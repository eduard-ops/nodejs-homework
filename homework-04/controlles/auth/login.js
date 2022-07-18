const { checkUser, setTokenLogin } = require("../../services/auth");

const { createError } = require("../../helpers");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await checkUser(email);
  const passCompare = bcrypt.compareSync(password, user.password);
  if (!user || !passCompare) {
    throw createError(401, `Email or password is wrong`);
  }

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  await setTokenLogin(user._id, token);
  res.json({ status: "success", code: 200, data: { token } });
};

module.exports = login;
