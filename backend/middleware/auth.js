import jwt from 'jsonwebtoken';

export const auth=(req, res, next)=>{
    try{
        const token=req.headers?.authorization?.split(" ")[1];
        if(token){
            const isCustomToken=token?.length <500;
            let decodeData;
            if(isCustomToken){
                decodeData=jwt.verify(token, process.env.SECRET);
                req.userId=decodeData._id;
            }
            else{
                decodeData=jwt.verify(token);
                req.userId=decodeData.sub;
            }
        }
        next();
    }catch(error){
        console.log(error);
    }
}