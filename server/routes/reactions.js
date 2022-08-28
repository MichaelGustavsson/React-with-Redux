const express = require('express');
const router = express.Router();

let data = require('../data/reactions');

router.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    success: true,
    data: data,
  });
});

router.post('/', (req, res) => {
  data = [...data, req.body];
  res
    .status(201)
    .json({ success: true, message: 'Added a new Question!', data: req.body });
});

router.delete('/:id', (req, res) => {
  const filteredData = data.filter(
    (item) => item.id !== parseInt(req.params.id)
  );
  data = filteredData;
  res.status(204).send();
});

module.exports = router;
