const { User } = require("../../models");

const checkUserById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = checkUserById;
