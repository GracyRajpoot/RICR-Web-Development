import User from "../models/userModel.js";
import bcrypt from 'bcrypt';

export const UserRegister = async (req, res, next) => {
  try {
    //accept datat feom frontend
    const { fullName, email, mobileNumber, password } = req.body;
    if (!fullName || !email || !mobileNumber || !password) {
      const error = new Error("All feilds required");
      error.statusCode = 400;
      return next(error);
    }
    // const existingUser = await UserLogin.
 
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already registered");
      error.statusCode = 409;
      return next(error);
    }
 const salt = await bcrypt.genSalt(10)
 const hashPassword = await bcrypt.hash(password,salt);

   // save data to database 
   const newUser = await  User.create ({
    fullName,
    email,
    mobileNumber,
    password: hashPassword,
   });

   //send response to frontend 
   console.log(newUser);

   res.status(201).json({message : "Registration Successfull"});
  //end.
  } catch (error) {
    next(error);
  }
};
export const UserLogin = async (req, res, next) => {
  try {
    //fatch data from 
  const {email,password} = req.body;
   if (  !email  || !password) {
      const error = new Error("All feilds required");
      error.statusCode = 400;
      return next(error);
    }

    // check if user is rejistertrd or not
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email already registered");
      error.statusCode = 409;
      return next(error);
    }
   

    //verify the password 
    const isVerified = await bcrypt.compare(password,existingUser.password);
     if(!isVerified){
         const error = new Error("password did not match");
      error.statusCode = 402;
      return next(error);
    }

    //send message to fronted
    res.status(200).json({message:'Login Successfull',data:existingUser});
    //end

  } catch (error) {
    next(error);
  }
};

export const UserLogout = async (req, res, next) => {
  try {
 res.status(200).json({message:'Logout Successfull',data:existingUser});
  } catch (error) {
    next(error)
  }
}