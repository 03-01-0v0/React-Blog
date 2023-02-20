import { Response, Request, NextFunction } from 'express';
import { createError } from '../utils/createError';
import UserModel from '../models/User';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

const SALT = 10;
const API_KEY = process.env.API_KEY;

class UserController {
    public async register(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;
            console.log(body);
            const { username, email, password } = body.params;
            const findUser = await UserModel.findOne({ email });
            if (findUser) {
                return next(createError(419, 'Email exits'));
            }
            const hashPassword = bcrypt.hashSync(password, SALT);
            const userDoc = await UserModel.create({ username, email, password: hashPassword });
            if (!userDoc) {
                return next(createError(500, 'Cant create user'));
            }
            res.status(201).json({
                success: true,
                message: 'CREATED',
                data: userDoc,
            });
        } catch (err) {
            next(err);
        }
    }

    public async login(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;
            const { email, password } = body.params;
            const user = await UserModel.findOne({ email });
            if (!user) {
                return next(createError(401, 'Email does not exits'));
            }
            const verifyPassword = bcrypt.compareSync(password, user.password);
            if (verifyPassword) {
                const payload = {
                    username: user.username,
                    password: password,
                    email: user.email,
                    type: 'access'
                };
                const token = jwt.sign(payload, API_KEY, {
                    algorithm: 'HS256',
                    expiresIn: '2 hours',
                });
                user.token = token;
                await user.save();
                res.status(200).json({
                    success: true,
                    message: 'Authorization success',
                    token: token
                })
            }
        } catch (err) {
            next(err);
        }
    }
}

export default new UserController();
