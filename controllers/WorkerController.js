import Worker from "../models/Worker.js";

export const createWorker = async (req, res) => {
  const worker = await Worker.create(req.body);
  res.json(worker);
};

export const getWorkers = async (req, res) => {
  const workers = await Worker.find();
  res.json(workers);
};

export const updateWorker = async (req, res) => {
  const worker = await Worker.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(worker);
};

export const deleteWorker = async (req, res) => {
  await Worker.findByIdAndDelete(req.params.id);
  res.json({ message: "Worker deleted" });
};