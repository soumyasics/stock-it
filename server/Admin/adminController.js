const admin = require("./adminSchema");

const resetPwd = async (req, res) => {
  try {
    const { newPassword } = req.body;
    const data = await admin.findOne({ email: "admin@gmail.com" });
    if (!data) {
      return res.json({
        status: 405,
        msg: "Invalid credentials",
      });
    }
    data.password = newPassword
    await data.save();
    return res.json({
      status: 200,
      msg: "Password reset successfully",
    });
  }catch(e) {
    return res.json({ error: e.message });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await admin.findOne({ email: email });
    if (data) {
      if (data.password == password) {
        return res.json({
          status: 200,
          msg: "Login successfull",
          data: data,
        });
      }
      return res.json({
        status: 405,
        msg: "Invalid credentials",
      });
    }
    if (email == "admin@gmail.com" && password == "admin@123") {
      return res.json({
        status: 200,
        msg: "Login successfull",
      });
    }

    return res.json({
      status: 405,
      msg: "Invalid credentials",
    });
  } catch (e) {
    return res.json({ error: e.message });
  }
};
module.exports = {
  loginAdmin,
  resetPwd,
};
