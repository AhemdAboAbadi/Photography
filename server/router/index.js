const express = require('express');
const { getDataQuery, postDataQuery } = require('../database/quires');

const { error404, serverError } = require('../controllers');

const router = express.Router();

router.get('/photographer', (req, res) => {
  getDataQuery()
    .then(result => res.json(result.rows))
    .catch((err) => res.status(500).json({ msg: 'Internal Server Error', err }));
});

router.post('/costumer-info', (req, res) => {
  postDataQuery(req.body)
    .then((result) => res.redirect('/'))
    .catch((err) => res.status(500).json({ msg: 'Internal Server Error', err }));
});

router.use(error404);
router.use(serverError);

module.exports = router;
