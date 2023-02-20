import * as mongoose from 'mongoose';

const { Schema, model } = mongoose;

const postSchema = new Schema({
    title: { type: String, required: true, min: 4 },
    summary: { type: String, required: true, min: 4 },
    createdAt: { type: Date, required: true, default: Date.now() },
    author: { type: String, required: true, min: 4 },
    img: { type: String }
}, {
    timestamps: true
});

const PostModel = model('Post', postSchema);

export default PostModel;