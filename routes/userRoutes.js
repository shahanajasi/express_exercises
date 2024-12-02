const user = "shahana";

const userRoutes = (req, res, next) => {
  const { user: name } = req.body;

  console.log(name);

  if (!name) {
    return res.status(400).send("Enter a valid name");
  }

  if (name !== user) {
    return res.status(401).send("Please login");
  }

  next();
};

module.exports = userRoutes;
