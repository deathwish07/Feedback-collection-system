export const signup = async(req,res) => {
    try {
        const {fullName, email, contactno, password, confirmPassword}= req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({error:"Passwords dont match"})
        }

        const user = await User.findOne({email});

        if(email) {
            return res.status(400).json({error:"User already exists with the given email"})
        }

        //hashing password


        const newUser = new User({
            fullName,
            email,
            contactno,
            password,
        })

        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,

        })
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error:"Internal server error"});
    }
};

export const login = (req,res) => {
    console.log("loginadmin")
};

export const logout = (req,res) => {
    console.log("logout")
};