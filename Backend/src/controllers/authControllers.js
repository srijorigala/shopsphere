const bcrypt= require("bcrypt")
const User= require("../models/user.js")
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if(!name||!email||!password)
    {
    return res.status(400).json({
       message: "All fields are required"
        })
    }
    const existingUser=await User.findOne({email})
    if(existingUser){
     return res.status(400).json({
      message: "User already exists"
     })
    }
   const hashedPassword=await bcrypt.hash(password,10)  
   const newUser= await User.create({
    name,
    email,
    password:hashedPassword
   })
    res.status(201).json({
      message: "new user registered",
      data: {
       
        name,
        email,  
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong"
    });
  }
};

module.exports = {
  registerUser
};