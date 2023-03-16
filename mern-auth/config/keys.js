require('dotenv').config()

module.exports = {
  mongoURI:
    process.env.MONGOURI,
    secretOrKey: "secret",
};
