const authService = require('../Services/authServices');
const User=require('../model/user')

exports.postSignup = async (req, res, next) => {
  const { email, password, contact, address } = req.body;

  try {
    const result = await authService.signup(email, password, contact, address);
    res.json(result);
  } catch (err) {
    console.error("Error in signup controller:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email,password);

  try {
    const result = await authService.login(email, password);
    res.json(result);
  } catch (err) {
    console.error("Error in login controller:", err);
    let statusCode = 500;
    if (err.message === "User not found") {
      statusCode = 404;
    } else if (err.message === "Incorrect password") {
      statusCode = 401;
    }
    res.status(statusCode).json({ message: err.message });
  }
};

exports.getProfile = async (req, res) => {
  const userEmail = req.params.id;

  try {
      const ProfileData = await User.findOne({ email: userEmail });
      console.log(ProfileData)
      if (!ProfileData) {
          return res.status(404).json({ message: 'ProfileData not found' });
      }

      res.json(ProfileData);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
  }
};