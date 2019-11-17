const Spot = require("../models/Spot");
const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const { tech } = req.query;
    const spots = await Spot.find({ techs: tech });
    return res.json(spots);
    /*const spots = await Spot.find();
    return res.json(spots)*/
  },

  async store(req, res) {
    const { filename } = req.file;
    const { price, techs, company } = req.body;
    const { user_id } = req.headers;
    const user = await User.findById(user_id);
    if (!user) return req.status(400).json({ error: "Usuário não existe" });

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      price,
      techs: techs.split("-"),
      company
    });

    console.log("spot criado", spot)

    return res.json(spot);
  },
  async delete(req, res) {
    await Spot.findByIdAndRemove(req.params.id);
    return res.json({ ok: "removido com sucesso" })
  }
};
