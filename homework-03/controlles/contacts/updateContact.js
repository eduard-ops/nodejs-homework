const updateContactByParams = require("../../services/updateContact");

const { createError } = require("../../helpers");

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await updateContactByParams(contactId, req.body);
  if (!result) {
    throw createError(404);
  }
  res.json({ message: "updated", code: 201, data: result });
};

module.exports = updateContact;
