const express = require("express");
const { ServicesSubModel } = require("../Model/ServicesSub");
const ServicesSub = express.Router();



ServicesSub.get("/", async (req, res) => {
  try {
    const data = await ServicesSubModel.find();
    res.send(data);
  } catch {
    res.send("Error"); 
  }
});
  
ServicesSub.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await ServicesSubModel.find({ _id: id });
    res.send(data);
  } catch {
    res.send("Error");
  }
});

ServicesSub.post("/", async (req, res) => {
  const payload = req.body;
  try {
   
    const data = new ServicesSubModel({ ...payload });
    await data.save();
    res.send(data);
  } catch {
    res.send("Post ERRoR");
  }
});

ServicesSub.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await ServicesSubModel.findByIdAndDelete({ _id: id });
    res.send("Delete Success");
  } catch {
    res.send("error delete");
  }
});

ServicesSub.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const payload=req.body
  try {
    await ServicesSubModel.findByIdAndUpdate({ _id: id },payload);
    res.send("Update Success");
  } catch {
    res.send("error Update");
  }
});

module.exports = {
  ServicesSub,
};
