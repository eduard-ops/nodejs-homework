const { Contact } = require("../models");

const updateFavorite = async (id, { favorite }) => {
  try {
    const data = await Contact.findByIdAndUpdate(id, favorite, { new: true });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = updateFavorite;
