import User from "../models/userModel.js";

export const UserRegister = async (req, res,next) => {
  try {
    const { fullName, email, phone, password } = req.body;

    if (!fullName || !email || !phone || !password) {
     const error = new Error("All Fields Required");
     error.statusCode =400;
     return next(error);
      return;
    }

    const newUser = await User.create({
      fullName,
      email,
      phone,
      password,
    });

    console.log(newUser);

    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const UserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "All Fields Required" });
      return;
    }

    const existingUser = await User.find({ email });
    if (!existingUser) {
      const error = new Error("User Not Found");
     error.statusCode =404;
     return next(error);
      
    }

    const isVerified = password === existingUser.password;
    if (!isVerified) {
       const error = new Error("User Not Authorized");
     error.statusCode =402;
     return next(error);
    }

    console.log(existingUser);

    res.status(200).json({ message: "Welcome Back", data: existingUser });
  }
   catch (error) {
    console.log(error);
   next(error);
  }
};

export const UserLogout = async (req, res) => {
  try {
    res.status(200).json({ message: "Logout successfull" });
  } catch (error) {
    console.log(error);
   next(error);
  }
};