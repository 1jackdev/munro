const sendDataToSheet = require("../handlers/order.js");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("home");
});

router.get("/about", (req, res) => {
  res.send("about page");
});

router.get("/contact", (req, res) => {
  res.send("contact");
});

router.get("/roasts", (req, res) => {
  res.send("roasts");
});

router.get("/roasts/:id", (req, res) => {
  const roast = req.params.id;
  res.send(`roast ${roast}`);
});

router.get("/order", (req, res) => {
  res.send("order page");
});

router.post("/order", async (req, res) => {
  const data = req.body;
  const resp = await sendDataToSheet(data);
  res.send(resp.data);
});

module.exports = router;
