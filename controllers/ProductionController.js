import Production from "../models/Production.js";

// Create Production
export const createProduction = async (req, res) => {
  try {
    const production = await Production.create(req.body);
    res.status(201).json(production);
  } catch (error) {
    console.error("Create Production Error:", error.message);
    res.status(500).json({ message: "Failed to create production" });
  }
};

// Get All Productions
export const getProductions = async (req, res) => {
  try {
    const productions = await Production.find();
    res.status(200).json(productions);
  } catch (error) {
    console.error("Get Productions Error:", error.message);
    res.status(500).json({ message: "Failed to fetch productions" });
  }
};

// Update Production
export const updateProduction = async (req, res) => {
  try {
    const production = await Production.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!production) {
      return res.status(404).json({ message: "Production not found" });
    }

    res.status(200).json(production);
  } catch (error) {
    console.error("Update Production Error:", error.message);
    res.status(500).json({ message: "Failed to update production" });
  }
};

// Delete Production
export const deleteProduction = async (req, res) => {
  try {
    const production = await Production.findByIdAndDelete(req.params.id);

    if (!production) {
      return res.status(404).json({ message: "Production not found" });
    }

    res.status(200).json({ message: "Production deleted successfully" });
  } catch (error) {
    console.error("Delete Production Error:", error.message);
    res.status(500).json({ message: "Failed to delete production" });
  }
};