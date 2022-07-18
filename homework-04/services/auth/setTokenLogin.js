const { User } = require("../../models");

const setTokenLogin = async (id, token) => {
  try {
    await User.findByIdAndUpdate(id, { token });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = setTokenLogin;
