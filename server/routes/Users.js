const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

// registration
router.post("/", async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
    });
    res.json("success");
  });
});

router.post('/login', async(req, res) => {
    const {username, password} = req.body;

    // look for given username in User table, put into const user if found and compare given 
    // credentials to those stored in the database with that username. 
    const user = await Users.findOne({where: {username: username} });
    //no user found
    if (!user){ 
        res.json({ error: "Username or password incorrect!"});
        return;
    }
    // comparing login password to hash
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        res.json({ error: "Username or password incorrect!" });
        return;
    };
    //successful log in
    res.json("you logged in");    
    });




module.exports = router;
