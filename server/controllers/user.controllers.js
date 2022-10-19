 //import bcrypt from "bcryptjs";
 //import jwt from "jsonwebtoken";
 import User from "../models/user.js";
//
// const secret = "test";
// export const signIn = async (req, res) => {
//     const {email, password} = req.body;
//
//     try {
//         const oldUser = await UserModal.findOne({email});
//
//         if (!oldUser) return res.status(404).json({message: "User doesn't exist"});
//
//         const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
//
//         if (!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials"});
//
//         const token = jwt.sign({email: oldUser.email, id: oldUser._id}, secret, {expiresIn: "30d"});
//
//         res.status(200).json({result: oldUser, token});
//     } catch (err) {
//         res.status(500).json({message: "Something went wrong"});
//     }
// };
// export const signUp = async (req, res) => {
//     const {email, password, firstName, lastName} = req.body;
//
//     try {
//         const oldUser = await User.findOne({email});
//
//         if (oldUser) return res.status(400).json({message: "User already exists"});
//
//         const hashedPassword = await bcrypt.hash(password, 12);
//
//         const result = await User.create({
//             email,
//             password: hashedPassword,
//             name: `${firstName} ${lastName}`
//         });
//
//         const token = jwt.sign({email: result.email, id: result._id}, secret, {expiresIn: "30d"});
//
//         res.status(201).json({result, token});
//     } catch (error) {
//         res.status(500).json({message: "Something went wrong"});
//
//         console.log(error);
//     }
// };
//


 export const signUp = async (req, res) => {
     const newUser = new User({
         username: req.body.username,
         email: req.body.username,
         password: req.body.password
     });
     try {
         const savedUser = await newUser.save();
         res.status(201).json(savedUser)
     } catch (err) {
         res.status(500).json(err)
     }

 }
