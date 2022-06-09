require('dotenv').config({path:__dirname+'/.env'})

const { 
    REVENUE_RECIPIENT,
    WHITELIST,
    URI
} = process.env

module.exports = [
    REVENUE_RECIPIENT,
    WHITELIST,
    URI
  ];