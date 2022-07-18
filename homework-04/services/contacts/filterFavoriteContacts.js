const { Contact } = require("../../models");

const filterFavoriteContacts = async (id, favorite) => {
  try {
    const data = await Contact.find({ owner: id, favorite }, "", {}).populate(
      "owner",
      "_id email"
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = filterFavoriteContacts;
