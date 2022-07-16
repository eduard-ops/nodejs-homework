const { Contact } = require("../models/contact");

const addContact = async (body) => {
  try {
    const data = await Contact.create(body);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const listContacts = async () => {
  try {
    const data = await Contact.find({});
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const updateFavorite = async (id, { favorite }) => {
  try {
    const data = await Contact.findByIdAndUpdate(id, favorite, { new: true });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const getContact = async (id) => {
  try {
    const data = await Contact.findById(id);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const updateContact = async (id, body) => {
  try {
    const data = await Contact.findByIdAndUpdate(id, body, { new: true });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const deleteContact = async (id) => {
  try {
    const data = Contact.findByIdAndRemove(id);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addContact,
  listContacts,
  updateFavorite,
  getContact,
  updateContact,
  deleteContact,
};
