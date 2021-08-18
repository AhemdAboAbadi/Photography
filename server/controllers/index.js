const express = require('express');
const postDataQuery = require('../database/quires/postData');

const router = express.Router();

router.post('/costumer-info', (req, res) => {
  postDataQuery()
    .then((result) => res.json(result.rows))
    .catch(() => res.status(500).json({ msg: 'sth wrong !' }));
});

module.exports = router;
