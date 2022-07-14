const contacts = require("../models/contacts");

const getAll = async () => {
  try {
    const data = await contacts.listContacts();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAll;
