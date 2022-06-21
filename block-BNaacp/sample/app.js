const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/users");

mongoose.connect("mongodb://localhost/sample", (err) => {
  console.log(err ? err : "connected to database");
});

const app = express();

//middleware
app.use(express.json());

//routes
app.post("/users", (req, res, next) => {
  User.create(req.body, (err, user) => {
    if (err) {
      next(err);
    }
    res.json(user);
  });
});

app.get("/users/:id", (req, res, next) => {
  const id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) {
      next(err);
    }
    res.json(user);
  });
  // find method returns an array of documents whereas findOne and findById return one document.
});

app.put("/users/:id", (req, res, next) => {
  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedUser) => {
    if (err) {
      next(err);
    }
    res.json(updatedUser);
  });
});

app.delete("/users/:id", (req, res, next) => {
  const id = req.params.id;
  User.findByIdAndDelete(id, (err, deletedUser) => {
    if (err) {
      next(err);
    }
    res.json(deletedUser);
  });
});

// Error middleware
app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log("server is listening on port 3k");
});
