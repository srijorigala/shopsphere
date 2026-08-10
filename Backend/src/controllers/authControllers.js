const bcrypt= require("bcrypt")
const jwt= require("jsonwebtoken")
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
const loginUser= async (req,res)=>{
try {
  const {email,password}=req.body
  if(!email||!password){
    return res.status(400).json({
      message:"Email and password are required."
    })
   
  }
   const foundUser=await User.findOne({email})
     if(!foundUser){
      return res.status(401).json({
        message:"Invalid email or password"
      })
     }
   const comparePass= await bcrypt.compare(password,foundUser.password)
      if(!comparePass){
        return res.status(401).json({
          message:"Invalid email or password"
        })
      }
      const payload = {
  userId: foundUser._id,
  email: foundUser.email,
  role: foundUser.role,
};
    const token= jwt.sign(
      payload,
      process.env.JWT_SECRET, {
      expiresIn : "7d",
      })
      res.cookie("token", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  maxAge: 7 * 24 * 60 * 60 * 1000,
});
       return res.status(200).json({
      message: "Login successful",
      data: {
        id: foundUser._id,
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role,
      },
    });
} catch (error) {
    res.status(500).json({
      message: "Something went wrong"
    });
  }
};

module.exports = {
  registerUser,loginUser
};