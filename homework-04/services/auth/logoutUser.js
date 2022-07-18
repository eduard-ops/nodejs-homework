const { User } = require("../../models");

const logoutUser = async (id) => {
  try {
    await User.findByIdAndUpdate(id, { token: null });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = logoutUser;
