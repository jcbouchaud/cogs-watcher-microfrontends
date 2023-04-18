module.exports = (req, res) =>
  res.status(200).json({
    id: req.params.id,
    recordId: 1234,
  });