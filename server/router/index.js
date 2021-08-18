const express = require('express');
const postDataQuery = require('../database/quires/postData');

const { error404, serverError } = require('../controllers');

const router = express.Router();

router.post('/costumer-info', (req, res) => {
  postDataQuery(req.body)
    .then(result => res.redirect('/'))
    .catch((err) => console.log(err));
});

router.use(error404);
router.use(serverError);

module.exports = router;
