import Worker from "../models/Worker.js";

// Create Worker
export const createWorker = async (req, res) => {
  try {
    const { name, position, salary, shift } = req.body;

    if (!name || !position || !salary) {
      return res.status(400).json({
        message: "Name, position and salary are required"
      });
    }

    const worker = await Worker.create(req.body);

    return res.status(201).json(worker);
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Server error"
    });
  }
};

// Get Workers
export const getWorkers = async (req, res) => {
  try {
    const workers = await Worker.find();
    res.status(200).json(workers);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch workers" });
  }
};

// Update Worker
export const updateWorker = async (req, res) => {
  try {
    const worker = await Worker.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!worker) {
      return res.status(404).json({ message: "Worker not found" });
    }

    res.status(200).json(worker);
  } catch (error) {
    res.status(500).json({ message: "Update failed" });
  }
};

// Delete Worker
export const deleteWorker = async (req, res) => {
  try {
    const worker = await Worker.findByIdAndDelete(req.params.id);

    if (!worker) {
      return res.status(404).json({ message: "Worker not found" });
    }

    res.status(200).json({ message: "Worker deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
};