const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  // after the tokens are created,
  //they will be used in loginUser and signupUser controller functions.
  //_id will be a part of the payload of the token.
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' }); // user stays logged in for 3 days. then the token expires.
};

const loginUser = async (req, res) => {
  // async function bc it will communicate with the db
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    // create a token

    const token = createToken(user._id);
    const role = user.role;
    const userName = user.userName;
    res.status(200).json({ userName, email, token, role });
  } catch (error) {
    if (error.message != 'role is not defined') {
      res.status(400).json({ error: error.message });
    }
  }
};

// signup a user
const signupUser = async (req, res) => {
  const { userName, email, password, role } = req.body; // pull the email and password and role of the user from req. and name them email and password

  try {
    console.log('role:', role);
    const user = await User.signup(userName, email, password, role);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token, userName, role });
  } catch (error) {
    // error is coming from userModel.js. or if it is related to creating db, mongodb can also give an error message.
    if (error.message != 'role is not defined') {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = { signupUser, loginUser };
