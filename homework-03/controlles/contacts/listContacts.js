const getAll = require("../../services/getAll");

const listContacts = async (req, res) => {
  const result = await getAll();
  res.json({ message: "success", code: 200, data: result });
};

module.exports = listContacts;
