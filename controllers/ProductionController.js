import Production from "../models/Production.js";

export const createProduction = async (req, res) => {
  const production = await Production.create(req.body);
  res.json(production);
};

export const getProductions = async (req, res) => {
  const productions = await Production.find();
  res.json(productions);
};

export const updateProduction = async (req, res) => {
  const production = await Production.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(production);
};

export const deleteProduction = async (req, res) => {
  await Production.findByIdAndDelete(req.params.id);
  res.json({ message: "Production deleted" });
};