import mysql2 from 'mysql2'
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'mysql',
        dialectModule: mysql2,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
);

module.exports = sequelize;