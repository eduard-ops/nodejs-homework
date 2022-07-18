const { Contact } = require("../../models");

const getContact = async (id) => {
  try {
    const data = await Contact.findById(id);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getContact;
