const { Router } = require('express');
const { contactsController } = require('../controllers/comments.controller.js');

const router = Router();

router.get('/comments/:newsId', contactsController.getCommentsByNews);
router.delete('/comments/:id', contactsController.deleteComment)
router.post('/comments/:news', contactsController.addComment)



module.exports = router;