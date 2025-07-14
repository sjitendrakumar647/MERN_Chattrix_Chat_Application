import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from "../jwt/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { name, mobile, email, password, cpassword } = req.body;

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
        return res.status(400).json({ message: "Email already exists" });
        }

        const existingMobile = await User.findOne({ mobile });
        if (existingMobile) {
        return res.status(400).json({ message: "Mobile number already exists" });
        }
        //check password match
        if (password!==cpassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }
        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        

        //create new user
        const newUser = new User({ 
            name, 
            mobile, 
            email, 
            password: hashedPassword,  
            cpassword });

        await newUser.save();

        if(newUser){
            createTokenAndSaveCookie(newUser._id, res);
            res.status(201).json({ message: "User registered successfully", 
                user: {
                    _id: newUser._id,
                    name: newUser.name,
                    email: newUser.email,
                    mobile: newUser.mobile
                },
             });
            console.log("User registered successfully");
        }
        
        // console.log(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
}

//Login route

export const login = async (req, res) => {
    try {
        // const { email, password } = req.body;
        const { identifier, password } = req.body; // identifier can be email or mobile

        //check user exists or not
        const user = await User.findOne({
            $or: [
                { email: identifier },
                { mobile: identifier }
            ]
            // email
        });
        
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        //check password match
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid password" });
        }
        createTokenAndSaveCookie(user._id, res);
        res.status(200).json({message: "User logged in successfully", user:{
            _id: user._id,
            name: user.name,
            email: user.email,
            mobile: user.mobile
        } });
        console.log("User logged in successfully");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};


// Logout route

export const logout = async (req, res) => {
    try {
        res.clearCookie("jwt");
        res.status(200).json({ message: "User logged out successfully" });
        console.log("User logged out successfully");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};

//show all users

export const getAllUsers = async (req, res) => {
    try {
        const loggedInUser = req.user._id;
        const filterusers = await User.find({
            _id: { $ne: loggedInUser }  // Exclude the logged in user from the list
        }).select("-password");
        res.status(201).json(filterusers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};