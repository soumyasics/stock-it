const { UserModel } = require("../user/userSchema");
const isEmailUnique = async (req, res, next) => {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });

    if (user) {
        return res.status(400).json({ msg: "Email already exists" });
    }
    next();
};

module.exports = { isEmailUnique }