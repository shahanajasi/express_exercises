let user = "shahana";
const userRoutes = (req, res, next) => {
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
};

module.exports = userRoutes;
