const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    console.log(`Registering user: ${username}, email: ${email}`);
    
    if (!username || !email || !password) {
      return res.status(400).json({ msg: "All fields are required", status: false });
    }

    const usernameCheck = await User.findOne({ username });
    if (usernameCheck) {
      return res.json({ msg: "Username already used", status: false });
    }

    const emailCheck = await User.findOne({ email });
    if (emailCheck) {
      return res.json({ msg: "Email already used", status: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    console.log(`User ${username} registered successfully`);

    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    console.error(`Error in user registration: ${ex}`);
    next(ex);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.json({ msg: "Incorrect Username or Password", status: false });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.json({ msg: "Incorrect Username or Password", status: false });
    }

    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    console.error(`Error in user login: ${ex}`);
    next(ex);
  }
};

// Other methods remain the same

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ _id: { $ne: req.params.id } }).select([
      "email",
      "username",
      "avatarImage",
      "_id",
    ]);
    return res.json(users);
  } catch (ex) {
    console.error(`Error in getAllUsers: ${ex}`);
    next(ex);
  }
};

exports.setAvatar = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const avatarImage = req.body.image;
    const userData = await User.findByIdAndUpdate(
      userId,
      {
        isAvatarImageSet: true,
        avatarImage,
      },
      { new: true }
    );
    return res.json({
      isSet: userData.isAvatarImageSet,
      image: userData.avatarImage,
    });
  } catch (ex) {
    console.error(`Error in setAvatar: ${ex}`);
    next(ex);
  }
};

exports.logOut = (req, res, next) => {
  try {
    if (!req.params.id) {
      return res.json({ msg: "User id is required " });
    }
    onlineUsers.delete(req.params.id);
    return res.status(200).send();
  } catch (ex) {
    console.error(`Error in logOut: ${ex}`);
    next(ex);
  }
};
