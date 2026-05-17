import Production from "../models/Production.js";

// Create Production
export const createProduction = async (req, res) => {
  try {
    const { orderId, workerId, stage, date } = req.body;

    if (!orderId || !workerId || !stage) {
      return res.status(400).json({
        message: "orderId, workerId and stage are required"
      });
    }

    const production = await Production.create(req.body);

    return res.status(201).json(production);
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Server error"
    });
  }
};

// Get Productions
export const getProductions = async (req, res) => {
  try {
    const productions = await Production.find()
      .populate("orderId")
      .populate("workerId");

    res.status(200).json(productions);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch productions" });
  }
};

// Update
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
    res.status(500).json({ message: "Update failed" });
  }
};

// Delete
export const deleteProduction = async (req, res) => {
  try {
    const production = await Production.findByIdAndDelete(req.params.id);

    if (!production) {
      return res.status(404).json({ message: "Production not found" });
    }

    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
};