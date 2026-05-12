const Production = require("../models/Production");


exports.createProduction = async (req, res) => {
  try {
    const production = await Production.create(req.body);
    res.json(production);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getProductions = async (req, res) => {
  try {
    const productions = await Production.find();
    res.json(productions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.updateProduction = async (req, res) => {
  try {
    const production = await Production.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(production);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.deleteProduction = async (req, res) => {
  try {
    await Production.findByIdAndDelete(req.params.id);
    res.json({ message: "Production deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};