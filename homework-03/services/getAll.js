const { Contact } = require("../models");

const getAll = async () => {
  try {
    const data = await Contact.find({});
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAll;
