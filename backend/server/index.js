const express = require("express");
const app = express();
const cors = require("cors");
const { Technology } = require("../models");

app.use(express.json());
app.use(express.static(__dirname + "/../public"));
app.use(cors());

app.get("/api/tecnologia", async (req, res) => {
  let technologies = await Technology.find();
  technologies = technologies.map(tecnologia => {
    tecnologia.logo = `${req.protocol}://${req.headers.host}/img/${tecnologia.logo}`;
    return tecnologia;
  });
  return res.send({ err: false, data: technologies });
});

app.get("/api/tecnologia/:id", async (req, res) => {
  const { id } = req.params;
  let technologia = await Technology.findById(id);
  technologia.logo = `${req.protocol}://${req.headers.host}/img/${technologia.logo}`;
  return res.send({ err: false, data: technologia });
});

app.get("/api/tecnologia/search/:name", async (req, res) => {
  const { name } = req.params;

  let technologies = await Technology.find({
    name: { $regex: new RegExp(name, "i") }
  });

  technologies = technologies.map(tecnologia => {
    tecnologia.logo = `${req.protocol}://${req.headers.host}/img/${tecnologia.logo}`;
    return tecnologia;
  });
  
  return res.send({ err: false, data: technologies });
});

module.exports = app;
