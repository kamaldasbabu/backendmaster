const router = require('express').Router();
const userSchema = require('../models/userRegister');
const bcrypt = require('bcrypt');

router.post("/register", async (req, res) => {
    // checking user email id in database
    //const emailExit = await userSchema.findOne({
    //  email: req.body.email
    //});
  
    //if (emailExit) return res.status(400).send("Email already exists");
  
    // hash password
    //const salt = await bcrypt.genSalt(10);
    //const hashedPassword = await bcrypt.hash(req.body.password, salt);
  
    // create new user
    const user = new userSchema({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
  
    try {
      const savedUser = await user.save();
      res.send(savedUser);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  

module.exports = router;