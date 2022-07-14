const createContact = require("../../services/addContact");

const { addSchema } = require("../../schemas/contacts");

const { createError } = require("../../helpers");

const addContact = async (req, res) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const result = await createContact(req.body);
  res.status(201).json(result);
};

module.exports = addContact;
