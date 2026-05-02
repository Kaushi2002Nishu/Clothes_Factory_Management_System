const Worker = require("../models/Worker");

exports.createWorker = async (req , res) => {
    const worker = await Worker.create(req.body);
    res.json(worker);
};

exports.getWorkers = async(req,res) => {
    const worker = await Worker.find();
    res.json(workers);
};