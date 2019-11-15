const Spot = require("../models/Spot");
const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const { tech } = req.query;
    const spots = await Spot.find({ techs: tech });
    return res.json(spots);
  },

  async store(req, res) {
    const { fileName } = req.file;
    const { price, techs, company } = req.body;
    const { user_id } = req.headers;

    const user = User.findById(user_id);

    if (!user) return req.status(400).json({ error: "Usuário não existe" });

    const spot = Spot.create({
      user: user_id,
      thumbanail: fileName,
      price,
      techs: techs.split("-").company(tech => tech.trim()),
      company
    });

    return res.json(spot);
  }
};
