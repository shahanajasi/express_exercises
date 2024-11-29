const express = require("express");
const app = express();

app.use(express.json());

let user = "shahana";
app.use((req, res, next) => {
  const username = req.body.name;

  console.log(username);

  if (username === user) {
    res.send("hello world");
  } else {
    res.send("please login");
  }

  next();
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log(`the server is running on http://localhost:3000`);
});
