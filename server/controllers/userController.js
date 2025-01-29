const { User } = require('../models/models');
const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const getCurrentDateTime = () => {
    const now = new Date();
    
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const generateJwt = (id, email) => {
    return jwt.sign(
        {id, email},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController{
    async registration(req, res, next){
        const {name, email, password} = req.body;
        if(!email || !password){
            return next(ApiError.badRequest('Incorrect email or password'));
        }
        const candidate = await User.findOne({where: {email}});
        if(candidate){
            return next(ApiError.badRequest('A user with this email already exists'))
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const currentDateTime = getCurrentDateTime();
        const user = await User.create({email: email, name: name, password: hashPassword, last_seen: currentDateTime});
        const token = generateJwt(user.id, user.email)
        return res.json({token})
    }

    async login(req, res, next){
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}})
        if(!user){
            return next(ApiError.internal('User not found'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if(!comparePassword){
            return next(ApiError.internal('Incorrect password'))
        }
        const token = generateJwt(user.id, user.email)
        return res.json({token})
    }

    async check(req, res, next){
        const token = generateJwt(req.user.id, req.user.email);
        return res.json({token});
    }
}

module.exports = new UserController()