const { Contact } = require("../models");

const deleteContact = async (id) => {
  try {
    const data = Contact.findByIdAndRemove(id);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = deleteContact;
