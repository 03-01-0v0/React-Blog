import * as mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true, min: 4, unique: true },
    email: { type: String, required: true, min: 4, unique: true },
    password: { type: String, required: true },
    token: { type: String }
});

const UserModel = model('User', userSchema);

export default UserModel;