const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Crud = require("./model/Schema");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 8080;

//connection check
main().then((res) => {
  console.log("connection successfull=>", res);
});
main().catch((err) => console.log(err));
//connection  establish
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/CrudApp");
}

//send all user data api
app.get("/api/data", async (req, res) => {
  const data = await Crud.find();
  console.log("data=>", data);
  res.json(data);
});

//add new user data
app.post("/add", (req, res) => {
  const newData = new Crud(req.body.data);
  newData.save().then((res) => {
    console.log(" data saved in database");
  });
  console.log("data is recieved");
  res.json({message:'data added'})
});

//delete one user data
app.delete("/api/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  await Crud.findByIdAndDelete(id)
    .then((res) => {console.log(res);})
    .catch((err) => console.log("err=>", err));
  res.json({ message: "success" });
});

//update one user data
app.put("/api/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id)
  const data = req.body.data;
  let updateData=await Crud.findByIdAndUpdate(id, { ...data });
  console.log('update Data',data)
  res.json({message:'update Success'});
});


// port listing
app.listen(8080, () => {
  console.log("app is listing");
});
