const users = require("../data/users.js");


const gettingQuerywise = (req,res)=>{
    const name = req.query.name

    // console.log(name)

    const user = users.find((user)=>user.name===name)
    if (user) {
        res.status(200).json({ message: `User found `, data: user });
        return;
      }
        res.status(404).json({ message: "User not found" });
    }

module.exports = {gettingQuerywise}