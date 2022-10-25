const express = require("express");

const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.PORT || 5000;
const data = require("./data/data.json");

app.listen(Port, () => {
  console.log("server is running", Port);
});

app.get("/data", (req, res) => {
  res.send(data);
});
app.get("/data/:id", (req, res) => {
  const id = req.params.id;
  const singledata = data.filter((n) => n.id == id);
  res.send(singledata);
});


module.exports = app;