const { join } = require('path');

const error404 = (req, res) => {
  res
    .status(404)
    .sendFile(join(__dirname, '..', '..', 'public', 'error', '404.html'));
};
const serverError = (err, req, res, next) => {
  res
    .status(500)
    .sendFile(join(__dirname, '..', '..', 'public', 'error', '500.html'));
};

module.exports = { error404, serverError };
