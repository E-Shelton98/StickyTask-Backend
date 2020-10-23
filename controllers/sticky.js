const express = require("express");
const router = express.Router();
const mongoose = require("../db/connection");
const Sticky = require("../models/sticky");
const db = mongoose.connection;

// route to list all stickies
router.get("/", async (req, res) => {
  const sticky = await Sticky.find({});
  res.json({
    status: 200,
    data: sticky,
  });
});

// create route
router.post("/", async (req, res) => {
  const sticky = await Sticky.create(req.body);
  res.json({
    status: 200,
    data: sticky,
  });
});

// update route
router.put("/:id", async (req, res) => {
  const sticky = await Sticky.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({
    status: 200,
    message: "item updated",
    data: sticky,
  });
});

// delete one route
router.delete("/:id", async (req, res) => {
  const sticky = await Sticky.findByIdAndDelete(req.params.id);
  res.json({ status: 200, message: "item deleted", data: sticky });
});

// delete by done property
router.delete("/:true", async (req, res) => {
  const sticky = await Sticky.deleteMany(req.params.done);
  res.json({
    status: 200,
    message: "Deleted Sticky Task",
    data: sticky,
    default: false,
  });
});

module.exports = router;
