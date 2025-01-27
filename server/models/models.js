const sequelize = require('../db');
const {DataTypes} = require ('sequelize');

const User = sequelize.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_name: {
        type: DataTypes.STRING,
    },
    user_email: {
        type: DataTypes.STRING,
        unique: true,
    },
    user_password: {
        type: DataTypes.STRING
    },
    user_last_seen: {
        type: DataTypes.DATE
    },
    user_is_blocked: {
        type: DataTypes.BOOLEAN,
        default: false
    }
    
})

module.exports = {
    User
}