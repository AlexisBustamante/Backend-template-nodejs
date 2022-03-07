require('dotenv').config();

const configurations = {
    DB_PORT: process.env.DB_PORT,
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    SERVER_PORT: process.env.SERVER_PORT,
}


module.exports = configurations;