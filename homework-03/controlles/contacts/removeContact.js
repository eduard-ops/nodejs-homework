const deleteContact = require("../../services/deleteContact");

const { createError } = require("../../helpers");

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await deleteContact(contactId);
  if (!result) {
    throw createError(404);
  }
  res.json({ message: "Contact deleted" });
};

module.exports = removeContact;
