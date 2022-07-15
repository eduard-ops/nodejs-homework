const contacts = require("../models/contacts");

const updateContactById = async (id, body) => {
  try {
    const data = await contacts.updateContact(id, body);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = updateContactById;
