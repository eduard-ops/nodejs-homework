const getContact = require("../../services/getContact");

const { createError } = require("../../helpers");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await getContact(contactId);
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};

module.exports = getContactById;
