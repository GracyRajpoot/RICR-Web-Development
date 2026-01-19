import jwt from 'jsonwebtoken'

 export const Token = (user, res) =>{
    try{
        const payload = {
           id:User._id,
           role:User.role || 'admin',     
        }

        const token =  jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'1d'}) //for day = d, for hours = h, for second = nothing

        console.log(token);

        res.cookie("parleG", token, {
           maxAge : 1000*60*60*24,
           httpOnly:true,
           secure:false,
           sameSite:"lax", 
        })

    }catch (error){
        throw error;
    }
};