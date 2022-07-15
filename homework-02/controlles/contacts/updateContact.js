const updateContactById = require("../../services/updateContactById");

const { addSchema } = require("../../schemas/contacts");

const { createError } = require("../../helpers");

const updateContact = async (req, res) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { contactId } = req.params;
  const result = await updateContactById(contactId, req.body);
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};

module.exports = updateContact;
