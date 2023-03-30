import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//import CryptoJS from "crypto-js";

//DANG KY 
export const registerUser = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            // username: req.body.username,
            // emailCus: req.body.emailCus,
            ...req.body,
            password: hash,
            isAdmin: req.body.isAdmin,
        });
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

//DANG NHAP
// export const loginUser = async (req, res) => {
//     try {
//         const user = await User.findOne({ username: req.body.username });
//         if (!user) res.status(404).json("Username was wrong!");
//         const hashedPassword = bcrypt.compareSync(req.body.password, user.password);
//         if (!hashedPassword) {
//             res.status(404).json("Wrong password!");
//         }
//         // if (user && hashedPassword) {
//         const accessToken = jwt.sign({
//             id: user._id,
//             isAdmin: user.isAdmin,
//         },
//             process.env.JWT_ACCESS_KEY,
//             { expiresIn: "365d" }
//         );
//         const { password, ...others } = user._doc;
//         res.status(200).json({ ...others, accessToken });
//         // }

//     } catch (error) {
//         res.status(500).json({ error: error });
//     }
// }
export const loginUser = async (req, res, next) => {
    try {
        console.log("hello world")
        const user = await User.findOne({ username: req.body.username })
        if (!user) return next(res.status(404).json("Username was wrong!"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return next(res.status(404).json("Wrong password!"))


        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT_ACCESS_KEY
        )

        const { password, isAdmin, ...otherDetails } = user._doc
        return res
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200)
            .json({ details: { ...otherDetails }, isAdmin });
        // .json({ ...otherDetails })

    }
    catch (err) {
        next(err)
    }
};
