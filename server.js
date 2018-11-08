const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

mongoose
  .connect(
    "mongodb://imran:imran92@ds155073.mlab.com:55073/loginapptodo",
    { useNewUrlParser: true }
  )
  .then(() => console.log("mongodb connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("hi");
});

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

app.listen(3000, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is Connected");
  }
});
