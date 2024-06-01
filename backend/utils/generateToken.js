import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId,res) =>{ 
    const token = jwt.sign({userId}, `${process.env.JTW_SECRET}`, {
        expiresIn: '15d'
    })

    res.cookie("jwt", token, {
        maxAge: 15*24*60*60*1000, //miliseconds
        httpOnly: true, //prevent xss attacks
        sameSite: "strict",
        secure: process.env.NODE_ENV !=="developement"
    })
}

export default generateTokenAndSetCookie;