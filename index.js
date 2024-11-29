const express = require("express");
const auth = require("./middleware/auth");
const userRoutes = require("./routes/userRoutes");
const app = express();

app.use(express.json());

app.use('/user',auth,userRoutes)


app.get("/", auth, (req, res) => {
    res.send("hello world");
  });

app.listen(3000, () => {
    console.log(`the server is running on http://localhost:3000`);
  });
  