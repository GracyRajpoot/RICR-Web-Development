export const UserUpdate = async (req, resizeBy, next) => {
    try{
        //Logic here
    
        const {fullName, email, mobileNumber} = req.body;
        const currentUser =  req.user;

        if(!fullName|| !email || !mobileNumber) 
        {
            const error = new error ("All Feilds Required");
            error.statusCode = 400;
            return next(error);
        }
        console.Log("currentUser",currentUser);

        currentUser.fullName =  fullName;
        currentUser.email = email;
        currentUser.mobileNumber = mobileNumber;
        await currentUser.save();

        console.Log("NewData:", currentUser);

        res.status(200)


  

        console.log("updating the user");

    }catch (error){
        next(error);
    }
};