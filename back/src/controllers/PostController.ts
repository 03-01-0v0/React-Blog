import { Response, Request, NextFunction } from 'express';
import PostModel from '../models/Post';


class PostController {
    public async getAllPost(req: Request, res: Response, next: NextFunction) {
        try {
            const posts = await PostModel.find({}).sort({ createdAt: 1 });
            res.status(200).json({
                success: true,
                messages: 'OK',
                data: posts,
            });
        } catch (err) {
            next(err);
        }
    }

    public async getPost(req: Request, res: Response, next: NextFunction) {
        try {
            const query = req.query;
            const { id } = query;
            const post = await PostModel.findById(id);
            res.status(200).json({
                success: true,
                messages: 'OK',
                data: post,
            });
        } catch (err) {
            next(err);
        }
    }

    public async createPost(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;
            console.log(body);
            const { title, summary, img, author } = body.params;
            const post = new PostModel(title, summary, author);
            await post.save();
            res.status(201).json({
                success: true,
                message: 'CREATED',
                data: post,
            });
        } catch (err) {
            next(err);
        }
    }

    public async updatePost(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;
            console.log(body);
            const { _id, title, summary, img, author } = body.params;
            const post = await PostModel.findByIdAndUpdate(_id, { title, summary, img, author });
            res.status(200).json({
                success: true,
                message: 'UPDATED',
                data: post,
            });
        } catch (err) {
            next(err);
        }
    }

    public async deletePost(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;
            const { _id } = body.params;
            const post = await PostModel.findByIdAndRemove(_id);
            res.status(200).json({
                success: true,
                message: 'DELETED',
                data: post,
            });
        } catch (err) {
            next(err);
        }
    }
}

export default new PostController();
