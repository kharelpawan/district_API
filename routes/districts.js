const express = require('express');
const router = express.Router();
const districts = require('../data/districts');

// Route to get all districts
router.get('/', (req, res) => {
  res.json(districts);
});

module.exports = router;
