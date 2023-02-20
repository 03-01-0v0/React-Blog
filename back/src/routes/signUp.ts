import * as express from 'express';
const router = express.Router();
import UserController from '../controllers/UserController';

router.post('/', UserController.register);

export default router;

