import * as express from 'express';
const router = express.Router();
import PostController from '../controllers/PostController';

router.get('/', PostController.getAllPost);
router.post('/', PostController.createPost);
router.put('/', PostController.updatePost);
router.delete('/', PostController.deletePost);
router.get('/:id', PostController.getPost);

export default router;
