const { Contact } = require("../../models");

const listContacts = async (id, skip, limit) => {
  try {
    const data = await Contact.find({ owner: id }, "", {
      skip,
      limit: Number(limit),
    }).populate("owner", "_id email");
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = listContacts;
