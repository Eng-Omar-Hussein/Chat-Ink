const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      if (await bcrypt.compare(password, userExists.password)) {
        const token = jwt.sign({ id: userExists._id }, "secretKey", {
          expiresIn: "23h",
        });
        return res
          .status(200)
          .json({ message: "You have logged in successfuly", token });
      } else {
        return res.status(404).json({ message: "Invalid email or password" });
      }
    } else
      return res.status(404).json({ message: "Invalid email or password" });
  } catch (error) {
    return res.status(400).json({ error: "Bad request " });
  }
};

exports.signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (!userExists) {
      if (!firstName || !lastName) {
        return res.status(400).json({ message: "Enter your Name" });
      }
      if (!password) {
        return res.status(400).json({ message: "Enter your Password" });
      }
      const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        profilePic:
          "https://th.bing.com/th?id=OIF.Z4I1kvCrYBKVhUxjBYK%2b%2fQ&rs=1&pid=ImgDetMain",
      });
      await newUser.save();
      return res.status(201).json({ message: "User added" });
    } else {
      return res.status(400).json({ message: "User already exists" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Bad request ", error: error.message });
  }
};

exports.updateUserInfo = async (req, res) => {
  try {
    const { user, firstName, lastName, password, profilePic, email } = req.body;

    const editUser = await User.findByIdAndUpdate(
      user,
      {
        $set: {
          firstName,
          lastName,
          password,
          profilePic,
          email,
        },
      },
      { new: true }
    );
    if (!editUser) {
      return res.status(400).json({ message: "User not exists" });
    }
    await editUser.save();
    return res.status(201).json(editUser);
  } catch (error) {
    return res.status(400).json({
      message: "Bad request , couldn't save the update",
      error,
    });
  }
};

exports.addFriend = async (req, res) => {
  try {
    const { user, sender } = req.body;
    const secondUser = await User.findByIdAndUpdate(
      sender,
      {
        $addToSet: {
          friends: { friendsID: user },
        },
      },
      { new: true }
    ).populate("friends.friendsID");
    console.log("iam second", secondUser);
    const firstUser = await User.findByIdAndUpdate(
      user,
      {
        $addToSet: {
          friends: { friendsID: sender },
        },
      },
      { new: true }
    ).populate("friends.friendsID");
    console.log("iam first", firstUser);

    if (!firstUser || !secondUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "Friend added successfully" });
  } catch (error) {}
};
exports.removeFriend = async (req, res) => {
  try {
    const { user, deleteUser } = req.body;

    const deleted = await User.findByIdAndUpdate(
      user,
      {
        $pull: { friends: { friendsID: deleteUser } },
      },
      { new: true } // Return the updated document
    );
    const secDeleted = await User.findByIdAndUpdate(
      deleteUser,
      {
        $pull: { friends: { friendsID: user } },
      },
      { new: true } // Return the updated document
    );
    if (!deleted || !secDeleted) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "Friend delete successfully" });
  } catch (error) {}
};

exports.userInfo = async (req, res) => {
  try {
    const { user } = req.body;
    userData = await User.findById(user)
      .select("-email -password")
      .populate(
        "friends.friendsID",
        "firstName lastName profilePic status lastSeen"
      );
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(userData);
  } catch (error) {
    return res.status(400).json({
      message: "Bad request , couldn't save the update",
      error,
    });
  }
};
