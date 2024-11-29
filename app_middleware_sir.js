const express = require("express");
const app = express();

app.use(express.json());

let user = "shahana";
app.use((req, res, next) => {
  const name = req.body.user;

  console.log(name);

  if (!name) {
    res.send("enter a valid name");
    return;
  }

  if (name !== user) {
    res.send("please login");
    return;
  }
  
  next();
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log(`the server is running on http://localhost:3000`);
});
