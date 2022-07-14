const getAll = require("../../services/getAll");

const listContacts = async (req, res) => {
  const result = await getAll();
  res.json(result);
};

module.exports = listContacts;
