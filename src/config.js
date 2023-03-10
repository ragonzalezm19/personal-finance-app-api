require('dotenv').config()

const config = {
  PORT: process.env.PORT || 3000,
  SECRET: process.env.SECRET || 'secret-text'
}

module.exports = {
  config
}
