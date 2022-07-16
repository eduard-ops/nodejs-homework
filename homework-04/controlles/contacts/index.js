const { createError } = require("../../helpers");

const services = require("../../services/contacts");

const listContacts = async (req, res) => {
  const result = await services.listContacts();
  res.json({ message: "success", code: 200, data: result });
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await services.getContact(contactId);
  if (!result) {
    throw createError(404);
  }
  res.json({ message: "success", code: 200, data: result });
};

const addContact = async (req, res) => {
  const result = await services.addContact(req.body);
  res.status(201).json({ message: "created", code: 201, data: result });
};

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await services.updateContact(contactId, req.body);
  if (!result) {
    throw createError(404);
  }
  res.json({ message: "updated", code: 201, data: result });
};

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const result = await services.updateFavorite(contactId, favorite);
  if (!result) {
    throw createError(404);
  }
  res.json({ message: "updated", code: 200, data: { result } });
};

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await services.deleteContact(contactId);
  if (!result) {
    throw createError(404);
  }
  res.json({ message: "Contact deleted" });
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
  updateFavorite,
};
