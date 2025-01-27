const {User} = require('../models/models');
const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const getCurrentDateTime = () => {
    const now = new Date();
    
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const generateJwt = (id, email) => {
    return jwt.sign(
        {id: id, email},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController{
    async registration(req, res, next){
        const {user_email, user_password, user_name} = req.body;
        if(!user_email || !user_password){
            return next(ApiError.badRequest('Некорректный email или password'));
        }
        const candidate = await User.findOne({where: {user_email}});
        if(candidate){
            return next(ApiError.badRequest('Пользователь с тамим email уже существует'))
        }
        const hashPassword = await bcrypt.hash(user_password, 5);
        const currentDateTime = getCurrentDateTime();
        const user = await User.create({user_email, user_name, user_password: hashPassword, user_last_seen: currentDateTime});
        const token = generateJwt(user.user_id, user.user_email)
        return res.json({token})
    }

    async login(req, res, next){
        const {user_email, user_password} = req.body;
        const user = await User.findOne({where: {user_email}})
        if(!user){
            return next(ApiError.internal('Пользователь не найден'));
        }
        let comparePassword = bcrypt.compareSync(user_password, user.user_password);
        if(!comparePassword){
            return next(ApiError.internal('Неверный пароль'))
        }
        const token = generateJwt(user.user_id, user.user_email)
        return res.json({token})
    }

    async check(req, res, next){
        const token = generateJwt(req.user.user_id, req.user.user_email);
        return res.json({token});
    }
}

module.exports = new UserController()