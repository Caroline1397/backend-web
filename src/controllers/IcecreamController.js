const Icecream = require("../models/Icecream");

module.exports = {
  async store(req, res) {
    const {flavor} = req.body;
    if (await Icecream.findOne({flavor})) {
      return res.status(400).json({ error: "Esse sorvete já existe" });
    }
    const icecream = await Icecream.create(req.body);
    return res.json(icecream);
  },
  async index(req, res) {
    const icecream = await Icecream.findOne({ flavor: req.params.flavor });
    if (!icecream) {
      return res.status(400).json({ error: "Sorvete não encontrado" });
    }
    return res.json(icecream);
  },
  async destroy(req, res) {
    await Icecream.deleteOne({ _id: req.params.id });
    return res.json({ message: "Excluído" });
  },
  async update(req, res) {
    const icecream = await Icecream.findByAndUpdate(
      req.params.id,
      req.body,
      { new: true}
    )
    return res.json(icecream);
  },
  async list(req, res) {
    const icecream = await Icecream.find({});
    return res.json(icecream);
  }
};
