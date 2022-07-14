const contacts = require("../models/contacts");

const getContact = async (id) => {
  try {
    const data = await contacts.getContactById(id);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getContact;
