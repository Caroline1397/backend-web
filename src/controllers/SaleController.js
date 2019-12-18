const Sale = require("../models/Sale");

module.exports = {
  async store(req, res) {
    const sale = await Sale.create(req.body);
    return res.json(sale);
  },
  async index(req, res) {
    const SaleId = req.params.id;
    const Sale = await Sale.findOne({
      _id: SaleId
    }).populate(["icecream", "user"]);
    return res.json(sale);
  },
  async list(req, res) {
    const sale = await Sale.find({});
    return res.json(sale);
  }
};
