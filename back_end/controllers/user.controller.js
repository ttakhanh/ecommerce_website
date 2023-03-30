import { User } from "../models/user.model.js";


//UPDATE
export const putUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

//DELETE
export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

//GET USER
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

//GET ALL USER
export const getAllUser = async (req, res, next) => {
    try {
        const users = await User.find();
        console.log(users);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}