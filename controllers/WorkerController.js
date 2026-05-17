import Worker from "../models/Worker.js";

// Create Worker
export const createWorker = async (req, res) => {
  try {
    const worker = await Worker.create(req.body);
    res.status(201).json(worker);
  } catch (error) {
    console.error("Create Worker Error:", error.message);
    res.status(500).json({ message: "Failed to create worker" });
  }
};

// Get All Workers
export const getWorkers = async (req, res) => {
  try {
    const workers = await Worker.find();
    res.status(200).json(workers);
  } catch (error) {
    console.error("Get Workers Error:", error.message);
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
    console.error("Update Worker Error:", error.message);
    res.status(500).json({ message: "Failed to update worker" });
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
    console.error("Delete Worker Error:", error.message);
    res.status(500).json({ message: "Failed to delete worker" });
  }
};