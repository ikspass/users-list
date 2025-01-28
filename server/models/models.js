const sequelize = require('../db');
const {DataTypes} = require ('sequelize');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        type: DataTypes.STRING
    },
    last_seen: {
        type: DataTypes.DATE
    },
    is_blocked: {
        type: DataTypes.BOOLEAN,
        default: false
    }
    
})

module.exports = {
    User
}