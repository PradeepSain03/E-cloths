const Auth = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


async function signup(email, password, contact, address) {
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new Auth({
      email: email,
      password: hashedPassword,
      contact,
      address
    });
    const result = await user.save();
    return { message: "User inserted successfully" };
  } catch (err) {
    console.error("Error in signup:", err);
    throw err;
  }
}

async function login(email, password) {
  try {
    console.log(email,password);
    const user = await Auth.findOne({ email:email });

    if (!user) {
      throw new Error("User not found");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Incorrect password");
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, "pradeep", { expiresIn: '1h' });
    return { token, email: user.email };
  } catch (err) {
    console.error("Error in login:", err);
    throw err;
  }
}

module.exports = {
  signup,
  login
};