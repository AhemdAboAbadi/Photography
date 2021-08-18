const express = require('express');
const postDataQuery = require('../database/quires/postData');

const { error404, serverError } = require('../controllers');

const router = express.Router();

router.post('/costumer-info', (req, res) => {
  postDataQuery()
    .then((result) => res.json(result.rows))
    .catch(() => res.status(500).json({ msg: 'sth wrong !' }));
});

router.use(error404);
router.use(serverError);

module.exports = router;
