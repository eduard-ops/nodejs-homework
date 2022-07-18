const { User } = require("../../models");

const changeSubscription = async (id, subscription) => {
  try {
    const data = await User.findByIdAndUpdate(id, subscription, {
      new: true,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = changeSubscription;
