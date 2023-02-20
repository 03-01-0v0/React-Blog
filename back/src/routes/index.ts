import postRouter from './post';
import signUpRouter from './signUp';
import signInRouter from './signIn';

const route = (app: any) => {
    app.use('/register', signUpRouter);
    app.use('/post', postRouter);
};

module.exports = route;