const Worker = require("../models/Worker");

exports.createWorker = async (req , res) => {
    const worker = await Worker.create(req.body);
    res.json(worker);
};

exports.getWorkers = async(req,res) => {
    const worker = await Worker.find();
    res.json(workers);
};

exports.updateWorkers = async(req, res) => {
    const workers = await Worker.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new : true }
    );
    res.json(workers);
};

exports.deleteWorker = async (req , res) => {
    await Worker.findByIdAndDelete(req.params.id);
    res.json({ message : "Worker deleted" });
};

