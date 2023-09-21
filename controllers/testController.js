const testController = (req, res) => {
  res.status(200).send({
    message: "API test",
    status: "success",
  });
};

module.exports = { testController };
