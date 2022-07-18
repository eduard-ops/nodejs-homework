const { User } = require("../../models");

const registerUser = async (email, password) => {
  try {
    const result = await User.create({ email, password });
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = registerUser;
