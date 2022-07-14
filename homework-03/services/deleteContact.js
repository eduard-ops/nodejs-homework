const contacts = require("../models/contacts");

const deleteContact = async (id) => {
  try {
    const data = contacts.removeContact(id);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = deleteContact;
