import User from "../models/user.model.js";
import form from "../models/form.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import { configDotenv } from "dotenv";

export const signup = async(req,res) => {
    try {
        const {fullName, email, contactno, password, confirmPassword}= req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({error:"Passwords dont match"})
        }

        //hashing password
        const salt  = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            email,
            contactno,
            password: hashedPassword,
        })

        if(newUser){
            generateTokenAndSetCookie(newUser._id,res);

            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,

        })
        } else {
            res.status(400).json({error: "Invalid user data"})
        }
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error:"Internal server error"});
    }
};

export const login = async(req,res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
                                                                                                                        
        if (!user || !isPasswordCorrect) {
            return res.status(400).json({error: "Invalid email or password"});
        }

        generateTokenAndSetCookie(user._id,res);

        res.status(200).json ({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
        });
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({error:"Internal server error"});
    }
};

export const logout = (req,res) => {
    try {
        res.cookie("jwt", "", {maxAge:0});
        res.status(200).json({message: "Logged out succesfully"})
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({error:"Internal server error"});   
    }
};

export const formstats = async(req,res) => {
    try {
        const {user, que1, que2, que3, que4, que5} = req.body;

        const formdata = new form({
            user,
            que1,
            que2,
            que3,
            que4,
            que5
        })


        if (formdata) {
            await formdata.save();

            res.status(201).json({
                _id: formdata._id,
                user: formdata.user,
                que1: formdata.que1,
                que2: formdata.que2,
                que3: formdata.que3,
                que4: formdata.que4,
                que5: formdata.que5,
            })
        } else {
            res.status(400).json({error: "Invalid form data"})
        }
    } catch (error) {
        console.log("Error in form controller", error.message);
        res.status(500).json({error:"Internal server error"});   
    }
}