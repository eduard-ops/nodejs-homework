const contacts = require("../models/contacts");

const addContact = async (body) => {
  try {
    const data = await contacts.addContact(body);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = addContact;
