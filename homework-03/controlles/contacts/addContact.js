const createContact = require("../../services/addContact");

const addContact = async (req, res) => {
  const result = await createContact(req.body);
  res.status(201).json({ message: "created", code: 201, data: result });
};

module.exports = addContact;
