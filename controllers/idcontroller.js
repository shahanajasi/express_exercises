const users = require("../data/users");

const gettingIDwise = (req,res)=>{
    const userId = parseInt(req.params.id);
      console.log(userId);
  
    const user = users.find((user) => user.id === userId);
  
    if (user) {
      res.status(200).json({ message: `User found `, data: user });
      return;
    }
      res.status(404).json({ message: "User not found" });
  };

module.exports = {gettingIDwise}