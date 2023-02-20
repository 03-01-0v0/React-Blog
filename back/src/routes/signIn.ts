import * as express from 'express';
import UserController from '../controllers/UserController';
const router = express.Router();
router.use('/', UserController.login);

export default router;