const { join } = require('path');

const error404 = (req, res) => {
  res.status(404).sendFile(join(__dirname, '..', '..', 'public', 'error'));
};

module.exports = { error404 };
