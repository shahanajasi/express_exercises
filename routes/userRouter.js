const express = require("express");

const router = express.Router();

const users = [
  { id: 1, name: "Avinash", city: "Kozhikode" },
  { id: 2, name: "Shahana", city: "Valanchery" },
  { id: 3, name: "Surya", city: "Malappuram" },
  { id: 4, name: "Shifla", city: "Kozhikode" },
];

router.get("/:id", (req, res) => {
  //if the : not put before it consider as path
  // we have to consider the id as params so put : before id
  const userId = parseInt(req.params.id);
  //   console.log(userId);

  const user = users.find((user) => user.id === userId);

  if (user) {
    res.status(200).json({ message: `User found `, data: user });
    return;
  }
    res.status(404).json({ message: "User not found" });
});

router.get("/",(req,res)=>{
    const name = req.query.name

    // console.log(name)

    const user = users.find((user)=>user.name===name)
    if (user) {
        res.status(200).json({ message: `User found `, data: user });
        return;
      }
        res.status(404).json({ message: "User not found" });
    });


module.exports = { router };
