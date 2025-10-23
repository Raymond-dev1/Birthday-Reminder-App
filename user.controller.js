const UserService = require("./user.service");

const RegisterUserController = async (req, res) => {
  try {
    console.log("Request body:", req.body); // Debugging line

    const { email, username, dob } = req.body;

    if (!email.includes("@", "gmail", ".com")) {
      return { status: 400, success: false, message: "Invalid email format" };
    }

    const newUser = await UserService.RegisterUser({email, username, dob});
    if (!newUser.success) {
      return res.status(newUser.status).json(newUser);
    }

    return res.status(newUser.status).json(newUser);
  } catch (error) {
    console.error("Error in register controller", error);
    return { status: 500, success: false, message: "Internal server error" };
  }
};

const getUserByEmailC = async (req, res) => {
  try {
    const email = req.body;
    const user = await UserService.getUserByEmail({ email });
    if (!user.success) {
      return res.status(user.status).json(user);
    } else {
      return res.status(user.status).json(user);
    }
  } catch (error) {
    console.error("Error in getUserByEmail controller", error);
    return { status: 500, success: false, message: "Internal server error" };
  }
};

const deleteUserByEmailC = async (req, res) => {
  try {
    const  { email }  = req.body;
    const deletedUser = await UserService.deleteUserByEmail({ email });
    if (!deletedUser.success) {
      return res.status(deletedUser.status).json(deletedUser);
    } else {
      return res.status(deletedUser.status).json(deletedUser);
    }
  } catch (error) {
    console.error("Error in deleteUserByEmail controller", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAllUsersC = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    return res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error("Error in getAllUsers controller", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  RegisterUserController,
  getUserByEmailC,
  deleteUserByEmailC,
  getAllUsersC,
};
