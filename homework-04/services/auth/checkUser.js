const { User } = require("../../models");

const checkUser = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (user) return user ?? true;
    return false;
  } catch (error) {
    console.log(error);
  }
};

module.exports = checkUser;
