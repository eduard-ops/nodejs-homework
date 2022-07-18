const { registerUser, checkUser } = require("../../services/auth");

const { createError } = require("../../helpers");

const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await checkUser(email);
  if (user) {
    throw createError(409, `User with ${email} already exist`);
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const result = await registerUser(email, hashPassword);
  res.status(201).json({
    message: "Created",
    status: 201,
    data: {
      user: {
        email: result.email,
        subscription: "starter",
      },
    },
  });
};

module.exports = signup;
