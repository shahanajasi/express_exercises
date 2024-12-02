const express = require("express");
const { router } = require("./routes/userRouter");
const { nrouter } = require("./connectio_controller");

const app = express();

app.use(express.json());
// app.use(express.static('public'))
app.use(express.static('html'))

app.use("/user", router);   
app.use("/", nrouter);      

app.listen(3002, () => {
  console.log("Server is running on http://localhost:3002");
});
